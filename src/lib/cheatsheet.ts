export interface CheatSheetSection {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
}

export const quickShortcuts = [
  "Shift + Tab: Plan Mode ↔ Accept Mode",
  "Escape: 즉시 중단",
  "Escape x2: 입력 삭제 / 복원",
  "!명령어: 대화 중 bash 명령 실행",
];

export const quickCommands = [
  "/init: claude.md 자동 생성",
  "/clear: 컨텍스트 완전 초기화",
  "/compact: 맥락 유지 압축",
  "/context: 토큰 사용량 점검",
  "/models: 모델 전환 (Opus / Sonnet / Haiku)",
  "/resume: 이전 세션 복구",
  "/mcp: MCP 연결 관리",
  "/export: 대화 내보내기",
];

export const introSections: CheatSheetSection[] = [
  {
    id: "setup",
    title: "1) 초기 설정 & claude.md",
    subtitle: "루트 실행, /init, 계층 구조, 핵심 규칙",
    points: [
      "프로젝트 루트 디렉토리에서 Claude Code를 실행해야 전체 구조를 정확히 파악합니다.",
      "/init 명령으로 claude.md를 자동 생성하고 프로젝트 규칙의 출발점으로 사용하세요.",
      "글로벌(~/.claude/claude.md)에는 공통 규칙, 프로젝트 claude.md에는 아키텍처/컨벤션을 둡니다.",
      "절대 규칙, 아키텍처, 빌드/테스트, 도메인 컨텍스트, 코딩 컨벤션 순서로 구성하세요.",
      "토큰 효율을 위해 claude.md는 300줄 이하로 유지하고 우선순위 높은 규칙을 상단에 배치하세요.",
    ],
  },
  {
    id: "shortcuts",
    title: "2) 단축키 & 네비게이션",
    subtitle: "Plan Mode 중심 운영, 즉시 중단, 이미지 맥락 전달",
    points: [
      "새 작업은 Plan Mode(Shift + Tab)에서 시작하고 계획 승인 후 Accept Mode로 실행하세요.",
      "잘못된 방향이면 Escape로 즉시 중단해 불필요한 대량 수정을 막으세요.",
      "스크린샷을 붙일 때는 '무엇인지 + 무엇을 바꿀지'를 함께 설명해야 정확도가 높아집니다.",
      "iTerm 패널 단축키(Cmd + D, Cmd + Shift + D, Cmd + [ / ])로 병렬 작업 효율을 높이세요.",
      "! 접두사로 npm run build, git status 같은 명령을 대화 흐름 안에서 바로 실행할 수 있습니다.",
    ],
  },
  {
    id: "slash-commands",
    title: "3) 필수 슬래시 명령어",
    subtitle: "컨텍스트, 모델, 세션, MCP 관리",
    points: [
      "/clear는 새 작업 시작 시 필수: 오래된 대화 맥락을 초기화합니다.",
      "/compact는 맥락은 유지하면서 토큰만 줄입니다. clear와 compact를 상황에 맞게 구분하세요.",
      "/context로 사용량을 수시 점검하고 80% 이상이면 압축/초기화를 진행하세요.",
      "/models로 난이도에 맞는 모델을 선택하고, /resume으로 세션 복구를 수행하세요.",
      "/mcp에서 사용하지 않는 MCP를 비활성화해 토큰 낭비를 줄이세요.",
    ],
  },
];

export const practicalSections: CheatSheetSection[] = [
  {
    id: "memory",
    title: "4) 컨텍스트 관리 실전",
    subtitle: "Second Brain, Lazy Loading, 한 세션 한 피처",
    points: [
      "/memory와 로컬 마크다운 기록으로 기관 기억을 축적하세요.",
      "CLAUDE.md에는 상세를 직접 넣지 말고 docs 파일 참조(@docs/...)만 남기는 Lazy Loading을 사용하세요.",
      "폴더별 CLAUDE.md를 두면 해당 작업 범위에서만 로드되어 컨텍스트 비대화를 방지합니다.",
      "핵심 원칙은 '한 세션 = 한 피처': 단계별로 구현 후 /clear로 경계를 분리하세요.",
      "무거운 데이터 처리는 스크립트로 오프로드하고 결과 요약만 대화에 가져오세요.",
    ],
  },
  {
    id: "workflow",
    title: "5) 워크플로우 & 코딩 철학",
    subtitle: "Plan → Review → Execute, TDD 루프, 로그 기반 수정",
    points: [
      "복잡한 변경은 반드시 Plan Mode에서 수정 파일/접근 방식을 먼저 합의하세요.",
      "작은 변경 → 테스트 → 린트 → 커밋 반복 루프로 실패 반경을 최소화하세요.",
      "thinking 로그에서 잘못된 가정이 보이면 즉시 중단하고 방향을 재정렬하세요.",
      "막힐 때는 /export로 다른 모델에게 비평을 받아 접근 오류를 조기에 교정하세요.",
      "에러는 요약하지 말고 원문 로그 전체를 전달해야 정확한 원인 분석이 가능합니다.",
    ],
  },
  {
    id: "wat-framework",
    title: "6) WAT 프레임워크",
    subtitle: "Workflow + Agents + Tools로 복잡한 작업 분해",
    points: [
      "Workflow: 코딩 전에 plain English로 단계를 명확히 정의하면 시행착오를 크게 줄입니다.",
      "Agents: 역할 분리된 서브에이전트로 테스트/문서/검증을 병렬 처리하세요.",
      "Tools: 거대한 스크립트 하나보다 build/test/migrate/deploy처럼 원자적 도구 조합이 안정적입니다.",
      "Self-healing 흐름을 활용해 에러 감지 → 수정 → 재실행 루프를 자동화하세요.",
      "핵심은 추론과 실행 분리: Claude는 사고, 도구는 실행을 담당하도록 설계합니다.",
    ],
  },
];
