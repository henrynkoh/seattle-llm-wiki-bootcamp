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

### Vercel에서 이 서브앱만 배포할 때 (중요)

이 저장소 루트에는 **별도의 Next.js 앱**이 있고, 이 폴더(`seattle-startup-week-curriculum`)도 **또 하나의 Next.js 앱**입니다.

Vercel 프로젝트 설정에서 **Root Directory**를 반드시 다음으로 지정하세요.

`seattle-startup-week-curriculum`

그렇지 않으면 루트의 `tsconfig`가 하위 앱 파일까지 검사하면서 `@/lib/curriculum` 경로가 어긋나 빌드가 실패할 수 있습니다. (루트 저장소 쪽에서는 해당 폴더를 타입체크에서 제외하도록 맞춰 두었습니다.)
