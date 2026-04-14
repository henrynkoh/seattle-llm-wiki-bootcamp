# 운영 매뉴얼 (Operations Manual)

## 목적

이 저장소는 두 가지 콘텐츠 축을 제공합니다.

1. **홈 치트시트** (`/`): Claude Code 입문 + 실전 워크플로우 요약 (한국어)
2. **주간 커리큘럼** (`/days/...`): 시애틀 스타트업 코호트용 7일 일정

운영자·강사·콘텐츠 편집자는 아래 절차로 수정·배포합니다.

## 대상 독자

- 프로그램 운영 담당
- 강사 및 코치
- 문서·랜딩 콘텐츠를 수정하는 편집자

## 환경 요구 사항

- Node.js 20.9 이상
- npm 10 이상

## 아키텍처 요약

- **App Router**: `src/app/`
- **치트시트 데이터**: `src/lib/cheatsheet.ts` → `page.tsx`에서 렌더
- **커리큘럼 데이터**: `src/lib/curriculum.ts` → `/days/[daySlug]`에서 렌더
- **정적 생성**: 일별 페이지는 `generateStaticParams`로 빌드 시 경로 생성

## 운영 절차

### A. 로컬 서버 기동

```bash
npm install
npm run dev
```

### B. 홈 치트시트만 수정할 때

1. `src/lib/cheatsheet.ts`에서 섹션·불릿·Quick Reference 문구 수정
2. 필요 시 `src/app/page.tsx`에서 레이아웃·섹션 ID·사이드바 항목 조정 (섹션 `id`는 앵커 링크와 일치해야 함)
3. `npm run lint` → `npm run build`
4. 배포

### C. 7일 커리큘럼만 수정할 때

1. `src/lib/curriculum.ts`에서 `weekCurriculum` 항목 수정 (`slug`는 URL과 1:1)
2. `npm run lint` → `npm run build`
3. `/days/<slug>` 가 모두 열리는지 확인
4. 배포

### D. 일별 페이지 템플릿 변경

- `src/app/days/[daySlug]/page.tsx` 수정 후 빌드로 타입·라우트 오류 확인

## 품질 게이트 체크리스트

- TypeScript 오류 없음
- ESLint 오류 없음
- `npm run build` 성공
- `/` 에서 사이드바 앵커가 각 섹션으로 스크롤되는지 확인
- 모든 `/days/*` 정적 경로 생성 확인 (빌드 로그)

## 장애 복구

- **일별 404**: `curriculum.ts`의 `slug`와 파일명 불일치 여부 확인
- **홈 앵커 깨짐**: `cheatsheet.ts`의 `id`와 `page.tsx`의 `sections` 배열 불일치 여부 확인

## 유지보수 주기 (권장)

- 월 1회: 치트시트·커리큘럼 문구와 도구 명령 최신화
- 분기 1회: 코호트 시나리오·마케팅 카피 검토
