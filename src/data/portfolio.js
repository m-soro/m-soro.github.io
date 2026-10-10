export const navLinks = [
  { href: "#work", label: "Skills" },
  { href: "#prototypes", label: "AI experiments" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const scopeStrip = [
  "PRODUCTION DEVELOPMENT",
  "APEX · LWC · AURA",
  "INTEGRATIONS & DATA FLOWS",
  "TESTING & DOCUMENTATION",
];

export const skills = [
  {
    title: "Production troubleshooting",
    summary:
      "Trace symptoms through browser behavior, Apex execution, and upstream data to find the cause.",
    exampleTitle: "A browser overwhelmed by 3,700 rows",
    example:
      "I identified excessive DOM creation in a large company table and introduced progressive rendering in increments of 500 rows. The full dataset remains available for filtering.",
  },
  {
    title: "Integration support",
    summary:
      "Maintain data flows, investigate failed syncs, and update mappings and authentication.",
    exampleTitle: "Restoring an order-location sync",
    example:
      "I traced missing records to heap failures in a scheduled Apex job, coordinated a scoped external view, and made view selection configurable. The next scheduled run succeeded and created missing locations.",
  },
  {
    title: "Salesforce development",
    summary:
      "Build and improve components, automation, and Apex with maintainability in mind.",
    exampleTitle: "Configuration-driven portal content",
    example:
      "I moved Daily Pulse row settings into custom metadata. Existing rows can be reordered, relabeled, hidden, and audience-restricted through configuration. New metrics still require Apex development.",
  },
  {
    title: "Investigation & documentation",
    summary:
      "Test possible improvements, explain tradeoffs, and make system dependencies easier to follow.",
    exampleTitle: "Evaluating a performance rollout",
    example:
      "Dashboard experiments showed modest backend improvements while external latency remained the dominant bottleneck. The team decided not to deploy. My documentation work also maps API responses to consuming processes and components.",
  },
];

export const prototypes = [
  {
    tag: "Customer community assistant",
    title: "Coral Cloud Assistant",
    architecture: "Custom Apex orchestrator + tools",
    sketch: ["LWC chat", "Apex orchestrator + tools", "Azure OpenAI"],
    question:
      "Can an AI model answer booking questions while only showing customers their own data?",
    built:
      "A custom LWC chat interface and Apex orchestration connected to Azure OpenAI, with user-context lookups, confirmed support-case creation, turn logging, and charts in the conversation.",
    learned:
      "Stricter tool inputs helped more than prompt changes alone. Vector search suited vague questions; direct queries were better for exact numbers.",
  },
  {
    tag: "Internal team assistant",
    title: "Internal Operations Assistant",
    architecture: "Foundry orchestrator + Salesforce MCP",
    sketch: ["Foundry orchestrator", "Salesforce MCP", "Salesforce"],
    question: "Can an agent outside Salesforce work with org data through MCP?",
    built:
      "An Azure AI Foundry agent connected to Salesforce through MCP, with custom instructions and workflows for checking record identity, requesting approval before changes, linking answers to records, and logging actions.",
    learned:
      "The prototype exposed an overnight authentication failure associated with refresh-token handling. I investigated three connection approaches and documented their tradeoffs.",
  },
];

export const experience = [
  {
    date: "Current role",
    title: "Salesforce Developer · Bridgepointe Technologies",
    bullets: [
      "Support and extend a production Salesforce environment used by internal teams and partner agencies.",
      "Maintain integrations for orders, marketing, quoting, and external reporting data while documenting dependencies for the technical transition.",
      "Build in LWC and Apex while maintaining existing Aura components.",
      "Maintain and troubleshoot the company’s in-house AI assistant.",
      "Deploy through Gearset with validation and test coverage, using configuration-based rollback controls where implemented.",
    ],
  },
  {
    date: "2024–2025 contributions",
    title: "Salesforce Developer · Accenture Federal Services",
    bullets: [
      "Built a REST integration supporting customer inquiries through an interactive voice response system.",
      "Developed connected Flows for inquiry routing and service workflows.",
      "Added form validation based on tracking status and improved customer-facing Lightning components.",
    ],
  },
  {
    date: "2023–2024",
    title: "Training · SkillStorm & Per Scholas",
    text: "Completed Salesforce development training and a full-stack software engineering program. Team projects included a Salesforce utility management application.",
  },
  {
    date: "Before 2023",
    title: "Hospitality",
    text: "Worked in luxury hotels while teaching myself to code. An early practical project was a scraper for finding employee discount rooms.",
  },
];

export const certificationsUrl =
  "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=DjtwiSaYBq56hmr3fJufgKdWX8UWZaBISxxvm6N4YDL+OTDuFupo0kuMUKILA/TE";

export const certifications = [
  "Platform Developer I",
  "Salesforce Administrator",
  "Agentforce Specialist",
];

export const contactLinks = [
  { href: "mailto:napoleon_soro@rocketmail.com", label: "Email me ↗" },
  { href: "https://www.linkedin.com/in/marksoro", label: "LinkedIn ↗", external: true },
  { href: "https://github.com/m-soro", label: "GitHub ↗", external: true },
];

export const earlierProjects = [
  {
    title: "Watt Wise",
    text: "A Salesforce utility app with dashboards, billing automation, and self-service tools.",
  },
  {
    title: "Open Peaks V2",
    text: "A MERN ski-trip planner with authentication, CRUD, and API integrations.",
  },
  {
    title: "Hotel Availability Scraper",
    text: "A Python and Flask app for exploring employee discount availability.",
  },
  {
    title: "Pong!",
    text: "A JavaScript arcade game with difficulty levels and interactive controls.",
  },
];

export const portfolioVersions = [
  {
    number: "01",
    title: "The first version",
    text: "Where it started.",
    href: "https://m-soro.github.io/m-soro.github.io.v1/",
  },
  {
    number: "02",
    title: "The first dev job version",
    text: "Projects and professional contributions.",
    href: "https://m-soro.github.io/m-soro.github.io.v2/",
  },
  {
    number: "03",
    title: "This next chapter",
    text: "Systems, skills, and the work behind them.",
  },
];
