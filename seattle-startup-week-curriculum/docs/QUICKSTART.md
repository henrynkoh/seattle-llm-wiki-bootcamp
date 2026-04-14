# Quickstarter (빠른 시작)

## 1) 설치 및 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 을 엽니다.

## 2) 빌드 검증

```bash
npm run lint
npm run build
```

## 3) 콘텐츠 수정 위치

| 수정 대상 | 파일 |
| --- | --- |
| 홈 **치트시트** 본문 | `src/lib/cheatsheet.ts` |
| 홈 **레이아웃·사이드바** | `src/app/page.tsx` |
| **7일 커리큘럼** | `src/lib/curriculum.ts` |

## 4) 페이지 확인

- 랜딩(치트시트): `/`
- 일별 일정: `/days/foundation-and-setup` 등 `curriculum.ts`의 `slug`와 동일한 경로

## 5) 배포

Vercel 등 Next.js 호환 호스트에 배포합니다.

## 6) 홍보 카피

`marketing/` 폴더의 플랫폼별 템플릿을 복사해 사용합니다.
