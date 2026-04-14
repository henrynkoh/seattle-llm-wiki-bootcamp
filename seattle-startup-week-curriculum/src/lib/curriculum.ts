export type SessionType = "lecture" | "workshop" | "lab" | "review";

export interface Session {
  time: string;
  title: string;
  type: SessionType;
  objective: string;
  output: string;
}

export interface DayPlan {
  day: number;
  slug: string;
  focus: string;
  startupScenario: string;
  keyOutcomes: string[];
  sessions: Session[];
  homework: string[];
}

export interface CohortProfile {
  name: string;
  location: string;
  duration: string;
  participantCount: string;
  targetSegments: string[];
}

export const cohortProfile: CohortProfile = {
  name: "AI-Assisted Product Engineering Sprint",
  location: "Greater Seattle Area",
  duration: "1 week (Mon-Sun)",
  participantCount: "8 startups, 2-3 participants each",
  targetSegments: [
    "B2B SaaS (workflow automation)",
    "Climate and energy software",
    "Health and biotech tooling",
    "Fintech and compliance products",
  ],
};

export const deliveryPrinciples = [
  "Keep every step practical: each block ends with a real artifact.",
  "Use plan-first execution before code changes to reduce rework.",
  "Split work into small tasks and clear context between major tasks.",
  "Automate repetitive steps with skills and hooks before scaling the team.",
  "Run parallel execution only after success criteria are defined.",
];

export const weekCurriculum: DayPlan[] = [
  {
    day: 1,
    slug: "foundation-and-setup",
    focus: "Foundation: environment, root execution, and agent rules",
    startupScenario:
      "Each startup onboards an existing repository and defines operating rules.",
    keyOutcomes: [
      "Run tools from the repository root reliably.",
      "Author lean project guidance files.",
      "Define coding conventions and quality gates.",
    ],
    sessions: [
      {
        time: "09:00-10:30",
        title: "Kickoff and baseline assessment",
        type: "lecture",
        objective: "Assess current development workflow bottlenecks.",
        output: "Team baseline scorecard and tool access checklist",
      },
      {
        time: "10:45-12:30",
        title: "Root directory and project context setup",
        type: "workshop",
        objective: "Configure repositories so the agent sees full architecture.",
        output: "Validated root-level startup projects",
      },
      {
        time: "13:30-15:30",
        title: "Write concise agent guidance files",
        type: "lab",
        objective: "Create minimal, high-signal rules for each startup.",
        output: "Production-ready AGENTS.md and CLAUDE.md",
      },
      {
        time: "16:00-17:00",
        title: "Team review and risk log",
        type: "review",
        objective: "Confirm setup quality and identify blockers for day 2.",
        output: "Risk register with owners",
      },
    ],
    homework: [
      "Refine onboarding docs to below 300 characters per high-priority rule.",
      "List 3 repetitive development tasks to automate later in the week.",
    ],
  },
  {
    day: 2,
    slug: "plan-mode-and-context-control",
    focus: "Practical workflow: plan mode and controlled implementation",
    startupScenario:
      "Each startup builds a small feature while enforcing plan-first approval.",
    keyOutcomes: [
      "Create implementation plans before coding.",
      "Break feature work into independently testable units.",
      "Reduce token waste with context discipline.",
    ],
    sessions: [
      {
        time: "09:00-10:00",
        title: "Plan mode deep dive",
        type: "lecture",
        objective: "Learn when and how to switch to planning effectively.",
        output: "Plan mode decision checklist",
      },
      {
        time: "10:15-12:30",
        title: "Feature planning drill",
        type: "workshop",
        objective: "Translate product requests into executable plans.",
        output: "Approved implementation plans for each startup",
      },
      {
        time: "13:30-15:45",
        title: "Guided build with checkpoints",
        type: "lab",
        objective: "Implement features in small verified increments.",
        output: "Merged feature branch and test evidence",
      },
      {
        time: "16:00-17:00",
        title: "Retro: context management mistakes",
        type: "review",
        objective: "Document anti-patterns and fixes.",
        output: "Team context hygiene playbook",
      },
    ],
    homework: [
      "Capture one reusable plan template for your startup.",
      "Practice splitting tomorrow's feature into three small commits.",
    ],
  },
  {
    day: 3,
    slug: "memory-and-stepwise-delivery",
    focus: "Operational consistency: memory usage and unit-sized execution",
    startupScenario:
      "Teams maintain consistency across long sessions while shipping safely.",
    keyOutcomes: [
      "Preserve decisions with lightweight memory entries.",
      "Execute one feature goal per focused session.",
      "Reset context at natural boundaries without losing direction.",
    ],
    sessions: [
      {
        time: "09:00-10:15",
        title: "Memory strategy for startup velocity",
        type: "lecture",
        objective: "Store only high-value decisions and patterns.",
        output: "Memory taxonomy for architecture, policy, and style",
      },
      {
        time: "10:30-12:30",
        title: "Task slicing and context reset drills",
        type: "workshop",
        objective: "Practice single-purpose sessions with clean handoffs.",
        output: "Stepwise execution board",
      },
      {
        time: "13:30-16:00",
        title: "Real repo implementation sprint",
        type: "lab",
        objective: "Apply memory plus task slicing to live product work.",
        output: "Two production-ready pull requests per startup",
      },
      {
        time: "16:15-17:00",
        title: "Cross-team debrief",
        type: "review",
        objective: "Share repeatable patterns that cut iteration time.",
        output: "Shared best-practice catalogue",
      },
    ],
    homework: [
      "Document top 5 recurring decisions your team should remember.",
      "Prepare one bug-fix workflow to automate on day 4.",
    ],
  },
  {
    day: 4,
    slug: "skills-and-hooks-automation",
    focus: "Advanced automation: custom skills and hooks",
    startupScenario:
      "Teams codify repetitive work like release notes, QA checks, and reports.",
    keyOutcomes: [
      "Design slash-command style skills for repeated workflows.",
      "Attach hooks to lifecycle events such as save and response completion.",
      "Improve consistency in QA and delivery outputs.",
    ],
    sessions: [
      {
        time: "09:00-10:30",
        title: "Automation architecture",
        type: "lecture",
        objective: "Map manual tasks to automatable triggers.",
        output: "Automation opportunity map",
      },
      {
        time: "10:45-12:30",
        title: "Build custom team skills",
        type: "workshop",
        objective: "Implement high-impact slash command workflows.",
        output: "At least 2 reusable skills per startup",
      },
      {
        time: "13:30-15:30",
        title: "Hook implementation lab",
        type: "lab",
        objective: "Run lint/test/report actions automatically at key events.",
        output: "Working hooks with observable logs",
      },
      {
        time: "16:00-17:00",
        title: "Automation ROI review",
        type: "review",
        objective: "Estimate time saved and quality improvements.",
        output: "Automation impact dashboard",
      },
    ],
    homework: [
      "Refine one skill into a documented standard operating procedure.",
      "Collect hook failure cases to troubleshoot in day 5.",
    ],
  },
  {
    day: 5,
    slug: "subagents-and-parallel-execution",
    focus: "Parallel delivery: subagents for frontend, backend, and QA",
    startupScenario:
      "Startups execute a coordinated release using concurrent specialized agents.",
    keyOutcomes: [
      "Launch parallel workstreams safely with clear boundaries.",
      "Avoid duplicate effort using explicit ownership.",
      "Aggregate results into a coherent release narrative.",
    ],
    sessions: [
      {
        time: "09:00-10:15",
        title: "Subagent strategy and guardrails",
        type: "lecture",
        objective: "Select tasks suitable for parallel execution.",
        output: "Parallelization decision framework",
      },
      {
        time: "10:30-12:30",
        title: "Role-based subagent setup",
        type: "workshop",
        objective: "Configure frontend, backend, and test runners.",
        output: "Multi-agent runbook per startup",
      },
      {
        time: "13:30-16:00",
        title: "Parallel delivery simulation",
        type: "lab",
        objective:
          "Ship one feature with parallel implementation and validation.",
        output: "Integrated release candidate",
      },
      {
        time: "16:15-17:00",
        title: "Coordination retro",
        type: "review",
        objective: "Analyze conflicts, delays, and handoff quality.",
        output: "Parallel execution checklist v1",
      },
    ],
    homework: [
      "Prepare final capstone scope and acceptance criteria.",
      "Assign clear owners for capstone demo segments.",
    ],
  },
  {
    day: 6,
    slug: "full-workflow-capstone",
    focus: "Integrated capstone: voice feedback to final delivery loop",
    startupScenario:
      "Each team runs the full workflow from idea intake to validated delivery.",
    keyOutcomes: [
      "Run intake, planning, implementation, and reporting as one pipeline.",
      "Use external model validation before merge.",
      "Produce an executive-ready implementation report.",
    ],
    sessions: [
      {
        time: "09:00-10:00",
        title: "Capstone kickoff and constraints",
        type: "lecture",
        objective: "Align teams on scope and measurable success metrics.",
        output: "Approved capstone brief",
      },
      {
        time: "10:15-12:30",
        title: "Planning and cross-model validation",
        type: "workshop",
        objective: "Validate plan quality before coding begins.",
        output: "Validated final implementation plan",
      },
      {
        time: "13:30-16:30",
        title: "Build and verification run",
        type: "lab",
        objective: "Execute full agentic workflow with evidence capture.",
        output: "Capstone build, tests, and report packet",
      },
      {
        time: "16:30-17:00",
        title: "Demo rehearsal",
        type: "review",
        objective: "Polish narrative for investor and founder audience.",
        output: "Timed demo script",
      },
    ],
    homework: [
      "Finalize demo assets and supporting metrics.",
      "Collect one strategic improvement for post-program adoption.",
    ],
  },
  {
    day: 7,
    slug: "demo-day-and-adoption-plan",
    focus: "Adoption and scale: demo day plus 30-day execution roadmap",
    startupScenario:
      "Founders and engineering leads evaluate adoption readiness and ROI.",
    keyOutcomes: [
      "Present measurable productivity and quality gains.",
      "Define a 30-day rollout plan per startup.",
      "Set governance for continuous improvement.",
    ],
    sessions: [
      {
        time: "09:30-11:30",
        title: "Startup demo presentations",
        type: "review",
        objective:
          "Show before/after delivery capability with real project evidence.",
        output: "Demo recordings and review notes",
      },
      {
        time: "12:30-14:00",
        title: "ROI and risk review with leadership",
        type: "workshop",
        objective: "Prioritize adoption opportunities and risk controls.",
        output: "Leadership decision memo",
      },
      {
        time: "14:15-16:00",
        title: "30-day adoption planning",
        type: "lab",
        objective:
          "Turn training outcomes into enforceable team operating standards.",
        output: "30-day roadmap with milestones",
      },
      {
        time: "16:00-17:00",
        title: "Program closing and commitments",
        type: "review",
        objective: "Confirm owners, cadence, and tracking metrics.",
        output: "Signed adoption charter",
      },
    ],
    homework: [
      "Start weekly KPI tracking from next sprint.",
      "Schedule a follow-up architecture clinic in 2 weeks.",
    ],
  },
];

export function getDayPlan(slug: string): DayPlan | undefined {
  return weekCurriculum.find((plan) => plan.slug === slug);
}
