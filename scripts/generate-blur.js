// 각 사진을 sharp로 16px 초소형 JPEG로 축소 → base64 blurDataURL 생성 (blur-up용).
// Wikimedia는 16px 썸네일을 안 주므로, 120px 썸네일을 받아 로컬에서 축소한다.
// 증분: blurDataURL 이미 있으면 스킵. 사용: node scripts/generate-blur.js
const fs = require("fs");
const sharp = require("sharp");

const TS = "src/data/photos.generated.ts";
const UA = "travel-worldcup-dev/1.0 (blur gen)";
const HEADER =
  "// 자동 생성 (scripts/collect_photos.py + generate-blur.js) — Wikimedia Commons 실제 여행지 사진.\n" +
  "// 각 사진은 CC 라이선스; credit(저작자·라이선스)은 결과 화면/상세시트에 표기.\n" +
  "// blurDataURL: 16px 초소형 base64 (placeholder blur-up용). 원본 직접 URL 금지(429) — thumb만.\n\n" +
  "export interface DestPhoto { url: string; credit: string; descUrl: string; blurDataURL?: string }\n\n" +
  "export const destinationPhotos: Record<string, DestPhoto[]> = ";

const raw = fs.readFileSync(TS, "utf8");
const data = JSON.parse(raw.match(/=\s*(\{[\s\S]*\});/)[1]);

function save() {
  fs.writeFileSync(TS, HEADER + JSON.stringify(data, null, 2) + ";\n");
}

async function tiny(url) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) return null;
  const buf = Buffer.from(await r.arrayBuffer());
  const out = await sharp(buf)
    .resize(16, null, { fit: "inside" })
    .jpeg({ quality: 45 })
    .toBuffer();
  return `data:image/jpeg;base64,${out.toString("base64")}`;
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

(async () => {
  let bytes = 0;
  for (const [did, photos] of Object.entries(data)) {
    let changed = false;
    for (const p of photos) {
      if (p.blurDataURL) {
        bytes += p.blurDataURL.length;
        continue;
      }
      try {
        const b = await tiny(p.url);
        if (b) {
          p.blurDataURL = b;
          bytes += b.length;
          changed = true;
        }
      } catch (e) {
        console.error("  !", did, (e.message || "").slice(0, 40));
      }
      await sleep(150);
    }
    if (changed) save();
    const n = photos.filter((p) => p.blurDataURL).length;
    console.log(`${did}: ${n}/${photos.length}`);
  }
  save();
  const total = Object.values(data).reduce((s, v) => s + v.length, 0);
  const have = Object.values(data).reduce((s, v) => s + v.filter((p) => p.blurDataURL).length, 0);
  console.log(`\nblur ${have}/${total}장, base64 총 ${(bytes / 1024).toFixed(0)}KB`);
})();
