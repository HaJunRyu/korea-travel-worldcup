#!/usr/bin/env python3
"""Wikimedia Commons 여행지 사진 수집 (썸네일 URL만 채택 버전).
원본(upload.wikimedia.org 직접) URL은 Wikimedia가 429로 막으므로 next/image에서 깨진다.
그래서 thumb 경로(/thumb/) URL이 나오는 결과만 채택한다.
사용: python3 scripts/collect_photos.py [id1 id2 ...]   (id 없으면 전체)
증분: 인자로 준 여행지만 재수집해 photos.generated.ts에 덮어씀.
"""
import json, time, re, sys, urllib.parse, urllib.request, urllib.error

# 썸네일이 잘 나오도록, 원본이 작은 사진(Nami Island 등)은 뒤로 두고 큰 랜드마크를 앞에.
QUERIES = {
    "chuncheon": ["Soyanggang Skywalk", "Gongjicheon Chuncheon", "Samaksan Cable Car", "Uiamho Chuncheon"],
    "yeosu": ["Dolsan Bridge Yeosu", "Yeosu Expo", "Odongdo Camellia", "Hyangiram"],
    "seosan": ["Ganwolam", "Haemieupseong", "Gaesimsa Seosan", "Cheonjangho Seosan"],
    "heuksando-hongdo": ["Hongdo Island Korea", "Heuksando", "Hongdo Sinan", "Dadohaehaesang"],
    # 필요시 다른 여행지 검색어도 여기에 추가
}

TS = "src/data/photos.generated.ts"
UA = "travel-worldcup-dev/1.0 (photo collect; dev)"
HEADER = (
    "// 자동 생성 (scripts/collect_photos.py) — Wikimedia Commons 실제 여행지 사진.\n"
    "// 각 사진은 CC 라이선스; credit(저작자·라이선스)은 결과 화면/상세시트에 표기.\n"
    "// 원본 직접 URL은 429로 깨지므로 thumb 경로 URL만 채택. 부정확한 사진은 직접 교체.\n\n"
    "export interface DestPhoto { url: string; credit: string; descUrl: string }\n\n"
    "export const destinationPhotos: Record<string, DestPhoto[]> = "
)


def strip_html(s):
    s = re.sub(r"<[^>]*>", "", s)
    s = s.replace("&amp;", "&").replace("&#039;", "'").replace("&#39;", "'").replace("&quot;", '"')
    return re.sub(r"\s+", " ", s).strip()


def load():
    return json.loads(re.search(r"=\s*(\{.*\});", open(TS, encoding="utf-8").read(), re.S).group(1))


def save(data, order):
    ordered = {k: data.get(k, []) for k in order}
    open(TS, "w", encoding="utf-8").write(HEADER + json.dumps(ordered, ensure_ascii=False, indent=2) + ";\n")


def fetch(q, attempt=0):
    """검색 결과 중 thumb 경로 URL이 나오는 첫 사진만 반환(원본 URL은 버림)."""
    api = (
        "https://commons.wikimedia.org/w/api.php?action=query&generator=search"
        "&gsrsearch=" + urllib.parse.quote("filetype:bitmap " + q)
        + "&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|extmetadata|mime"
        + "&iiurlwidth=1200&format=json&maxlag=5"
    )
    try:
        with urllib.request.urlopen(urllib.request.Request(api, headers={"User-Agent": UA}), timeout=25) as r:
            d = json.load(r)
    except urllib.error.HTTPError as e:
        if e.code in (429, 503) and attempt < 3:
            time.sleep(3 * (attempt + 1)); return fetch(q, attempt + 1)
        return None
    except Exception:
        if attempt < 2:
            time.sleep(2); return fetch(q, attempt + 1)
        return None
    pages = sorted(d.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99))
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        tu = ii.get("thumburl", "")
        if "/thumb/" not in tu:  # 원본 URL이면 버림 (429로 깨짐)
            continue
        if ii.get("mime") and ii["mime"] not in ("image/jpeg", "image/png"):
            continue
        meta = ii.get("extmetadata", {})
        artist = strip_html(meta.get("Artist", {}).get("value", "")) or "Wikimedia Commons"
        if len(artist) > 60:
            artist = artist[:57] + "…"
        lic = meta.get("LicenseShortName", {}).get("value", "").strip()
        credit = f"{artist} · {lic}" if lic else artist
        return {"url": tu, "credit": credit, "descUrl": ii.get("descriptionshorturl") or ii.get("descriptionurl", "")}
    return None


def main():
    data = load()
    targets = sys.argv[1:] or list(QUERIES.keys())
    for did in targets:
        if did not in QUERIES:
            print(f"{did}: 검색어 없음, 스킵"); continue
        photos, seen = [], set()
        for q in QUERIES[did]:
            if len(photos) >= 3:
                break
            ph = fetch(q)
            if ph and ph["url"] not in seen:
                seen.add(ph["url"]); photos.append(ph)
            time.sleep(0.8)
        if photos:
            data[did] = photos
            print(f"{did}: {len(photos)}장 (전부 thumb)")
        else:
            print(f"{did}: 실패 — 기존 유지")
    save(data, list(data.keys()))
    print("저장 완료")


if __name__ == "__main__":
    main()
