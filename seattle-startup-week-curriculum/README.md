# Claude Code 치트시트 · 시애틀 스타트업 커리큘럼 사이트

Next.js 기반 **랜딩 페이지 + 7일 커리큘럼** 웹앱입니다. 첫 화면(`/`)은 **Claude Code 입문 + 실전 워크플로우**를 한 페이지에 통합한 **한국어 치트시트**이며, `/days/...` 경로에서는 **주간 실습 일정**을 볼 수 있습니다.

## 무엇이 포함되어 있나

- **통합 치트시트 랜딩** (`/`): 초기 설정·단축키·슬래시 명령·컨텍스트 실전·WAT 등
- **7일 커리큘럼** (`/days/[daySlug]`): 일별 세션·산출물·과제
- **문서**: Quickstart, Manual, Tutorial (`docs/`)
- **마케팅 카피 팩**: SNS·블로그·뉴스레터·이메일 (`marketing/`)

## 콘텐츠 소스 (수정할 파일)

| 목적 | 파일 |
| --- | --- |
| 홈 치트시트 본문 | `src/lib/cheatsheet.ts` |
| 홈 UI 레이아웃 | `src/app/page.tsx` |
| 주간 일정 데이터 | `src/lib/curriculum.ts` |
| 일별 페이지 | `src/app/days/[daySlug]/page.tsx` |

## 참고 영상

- [실밸개발자 - 클로드 코드 2시간 안에 마스터하기](https://www.youtube.com/watch?v=vxEvo2BLM6A)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 품질 검사

```bash
npm run lint
npm run build
```

## 문서

- 빠른 시작: [`docs/QUICKSTART.md`](docs/QUICKSTART.md)
- 운영 매뉴얼: [`docs/MANUAL.md`](docs/MANUAL.md)
- 튜토리얼: [`docs/TUTORIAL.md`](docs/TUTORIAL.md)

## 배포

Vercel 등 Next.js 호환 호스에 배포하면 됩니다.
