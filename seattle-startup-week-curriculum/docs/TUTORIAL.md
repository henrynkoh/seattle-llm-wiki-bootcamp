# 단계별 튜토리얼 (Step-by-Step Tutorial)

## 목표

이 프로젝트를 클론한 뒤 **치트시트 랜딩**과 **7일 커리큘럼**을 원하는 대로 고치고, 로컬에서 검증한 다음 배포합니다.

## 1단계: 의존성 설치

```bash
npm install
```

## 2단계: 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 다음을 확인합니다.

- 왼쪽 **스크롤 가능한 사이드바**로 섹션 이동
- 본문 **앵커 스크롤** (부드러운 스크롤은 `globals.css`의 `html { scroll-behavior: smooth; }`)
- 우하단 **GitHub** 링크 (저장소 URL은 `page.tsx`에서 변경 가능)

## 3단계: 프로젝트 구조 파악

| 파일 | 역할 |
| --- | --- |
| `src/lib/cheatsheet.ts` | 홈 치트시트 텍스트 (입문 + 실전 통합) |
| `src/app/page.tsx` | 홈 UI: 히어로, 섹션 카드, Quick Reference, 사이드바 |
| `src/lib/curriculum.ts` | 7일 커리큘럼 데이터 |
| `src/app/days/[daySlug]/page.tsx` | 일별 상세 페이지 |

## 4단계: 치트시트 내용 편집

1. `src/lib/cheatsheet.ts` 를 연다.
2. `introSections` / `practicalSections` 의 `points` 배열에 문장을 추가·수정한다.
3. `quickShortcuts`, `quickCommands` 를 필요에 맞게 조정한다.
4. **새 섹션을 추가할 경우**:
   - `cheatsheet.ts`에 `id`, `title`, `subtitle`, `points` 를 넣고
   - `page.tsx`의 `sections` 배열이 `introSections`·`practicalSections` 와 동기화되는지 확인한다 (사이드바는 해당 배열에서 생성).

## 5단계: 주간 커리큘럼 편집

1. `src/lib/curriculum.ts` 에서 `cohortProfile`, `weekCurriculum` 수정
2. 각 `DayPlan`의 `slug` 가 고유한지 확인 (예: `foundation-and-setup`)
3. 브라우저에서 `/days/<slug>` 로 직접 열어 본다.

## 6단계: 검증

```bash
npm run lint
npm run build
```

빌드 출력에 `/days/...` 경로가 모두 생성되는지 확인합니다.

## 7단계: 배포

Vercel 등에 연결 후 `main` 브랜치 푸시 또는 CI로 배포합니다.

## 8단계: 홍보 자료 (선택)

`marketing/` 폴더의 플랫폼별 마크다운을 복사해 SNS·블로그·뉴스레터에 붙여 넣습니다.

## 치트시트 핵심 요약 (편집 시 참고)

- **루트에서 실행**, `/init` 으로 `claude.md` 시작, **300줄 이하** 권장
- **Shift+Tab**: Plan ↔ Accept, **Escape**: 중단, **`!`**: 셸 명령
- **`/clear`**, **`/compact`**, **`/context`**, **`/models`**, **`/resume`**, **`/mcp`**
- 실전: **`/memory`**, **CLAUDE.md Lazy Loading**, **한 세션 = 한 피처**, **WAT (Workflow / Agents / Tools)**
