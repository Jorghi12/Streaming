import { Fragment, useEffect, useState } from "react";

type IconName =
  | "trend"
  | "gear"
  | "bolt"
  | "video"
  | "pulse"
  | "check"
  | "globe"
  | "cart"
  | "shield"
  | "robot"
  | "spark"
  | "wave"
  | "bell"
  | "stack"
  | "mic"
  | "frame"
  | "scan"
  | "arrow"
  | "link"
  | "document"
  | "person";

const founderCallMailto =
  "mailto:jorg@liveplane.cloud?subject=Liveplane%20Founder%20Call";
const designPartnerMailto =
  "mailto:jorg@liveplane.cloud?subject=Liveplane%20Design%20Partner%20Pilot";

const teamHeadshotsImage = "/design-context/team-headshots-reference.png";
const heroLiveFeedImage = "/design-context/live-soccer-match-broadcast-scene-reference.png";
const heroDetectionImage = "/design-context/detection-layer-reference.png";
const heroOutputsImage = "/design-context/outputs-reference.png";

const heroBenefits = [
  "Start with one measurable workflow",
  "Founder-led support from day one",
  "Fits into your existing systems and tools"
];

const heroWorkflowColumns = [
  {
    key: "input",
    title: "Live feed",
    eyebrow: "Input",
    type: "input",
    items: [
      { label: "RTMP / SRT", icon: "link" },
      { label: "WebRTC", icon: "wave" },
      { label: "Camera feeds", icon: "video" },
      { label: "Existing streams", icon: "frame" }
    ]
  },
  {
    key: "detect",
    title: "Event detection",
    eyebrow: "Liveplane AI",
    type: "detect",
    items: [
      { label: "Object detection", icon: "shield" },
      { label: "Audio events", icon: "mic" },
      { label: "Scene changes", icon: "frame" },
      { label: "OCR & metadata", icon: "scan" },
      { label: "Custom rules", icon: "gear" }
    ]
  },
  {
    key: "output",
    title: "Outputs",
    eyebrow: "Outputs",
    type: "output",
    items: [
      { title: "Instant clips", detail: "00:18 · Goal", icon: "video", thumbnail: true },
      { title: "Alerts", detail: "Goal detected", icon: "bell" },
      { title: "Metadata", detail: "Player: 9 · Event: Goal · Time: 45:12", icon: "stack" },
      { title: "Webhooks / APIs", detail: "POST / events", icon: "arrow" }
    ]
  }
] as const;

const founderSignals = ["Meta AI", "Google Brain", "Cruise", "RunPod"];

const deliveryCards = [
  {
    title: "Revenue",
    detail:
      "Create more reusable content and better live experiences that drive measurable business value.",
    icon: "trend"
  },
  {
    title: "Automation",
    detail:
      "Reduce manual review, operator overhead, and post-stream cleanup with real-time automation.",
    icon: "gear"
  },
  {
    title: "Action",
    detail:
      "Trigger clips, alerts, transcripts, metadata, and downstream actions while the stream is live.",
    icon: "bolt"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const proofSteps = [
  {
    number: "1",
    title: "Connect one live feed",
    detail: "Bring in camera feeds, production streams, or existing infrastructure.",
    icon: "video"
  },
  {
    number: "2",
    title: "Run one high-value workflow",
    detail:
      "Detect events, answer questions, create metadata, or trigger actions while the stream is live.",
    icon: "pulse"
  },
  {
    number: "3",
    title: "Deliver measurable output",
    detail:
      "Ship clips, alerts, transcripts, metadata, and workflow actions tied to business value.",
    icon: "check"
  }
] satisfies Array<{ number: string; title: string; detail: string; icon: IconName }>;

const useCases = [
  {
    title: "Sports and media",
    detail: "More clips, faster production, richer metadata, better fan experiences.",
    icon: "globe"
  },
  {
    title: "Live commerce",
    detail: "Smarter selling, more reusable moments, and better real-time host assistance.",
    icon: "cart"
  },
  {
    title: "Security and operations",
    detail: "Faster detection, lower monitoring burden, better incident visibility.",
    icon: "shield"
  },
  {
    title: "Industrial and robotics",
    detail: "Real-time visibility, guidance, summarization, and decision support.",
    icon: "robot"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const exampleWorkflows = [
  {
    title: "Live sports clipping and metadata",
    detail:
      "Detect key moments, generate clips and structured metadata in real time, and reduce manual post-production overhead.",
    icon: "video"
  },
  {
    title: "Live commerce operator copilot",
    detail:
      "Assist hosts in real time, surface product-relevant moments, and create reusable outputs from the same session.",
    icon: "cart"
  },
  {
    title: "Camera-event detection and alerts",
    detail:
      "Turn passive video into operational awareness with event detection, alerts, and searchable output.",
    icon: "bell"
  },
  {
    title: "Summarization and guidance for live operations",
    detail:
      "Robotics or industrial workflows with low-latency visibility, summaries, and decision support.",
    icon: "document"
  },
  {
    title: "Live QA and compliance",
    detail:
      "Automate quality checks, policy detection, and compliance reporting while the stream is live.",
    icon: "shield"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const programBullets = [
  "Founder-led deployment and direct access",
  "One measurable workflow to start",
  "Rapid iteration with clear success metrics",
  "Limited partner cohort for focused support"
];

const timelineWeeks = [
  {
    label: "Week 1",
    title: "Discover & connect",
    detail: "Connect a feed, align on the workflow, and define success metrics."
  },
  {
    label: "Week 2",
    title: "Deploy & validate",
    detail: "Deploy the first workflow, validate outputs, and measure impact."
  },
  {
    label: "Week 3+",
    title: "Iterate & expand",
    detail: "Refine, expand to additional use cases, and unlock more value."
  }
];

const partnerNeeds = [
  {
    title: "One live workflow worth improving",
    icon: "bolt"
  },
  {
    title: "Access to a stream or environment",
    icon: "video"
  },
  {
    title: "One technical or business owner",
    icon: "person"
  },
  {
    title: "Willingness to iterate weekly",
    icon: "pulse"
  }
] satisfies Array<{ title: string; icon: IconName }>;

const environmentChips = [
  { label: "Camera feeds", icon: "video" },
  { label: "WebRTC", icon: "wave" },
  { label: "RTMP / SRT", icon: "link" },
  { label: "Production video", icon: "frame" },
  { label: "Downstream APIs", icon: "arrow" },
  { label: "Webhooks", icon: "stack" },
  { label: "Metadata systems", icon: "scan" },
  { label: "Alerts", icon: "bell" }
] satisfies Array<{ label: string; icon: IconName }>;

const environmentNotes = [
  "Operator workflows",
  "Cloud or edge deployment",
  "Secure by design",
  "SDKs and APIs available"
];

function Icon({ name }: { name: IconName }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "trend":
      return (
        <svg {...commonProps}>
          <path d="M4 19V7" />
          <path d="M10 19V10" />
          <path d="M16 19V4" />
          <path d="M3 19h18" />
        </svg>
      );
    case "gear":
      return (
        <svg {...commonProps}>
          <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
          <path d="M19.4 12a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.5-2.4 1a8.6 8.6 0 0 0-2-.9L14.5 3h-5L9 5.8a8.6 8.6 0 0 0-2 .9l-2.4-1-2 3.5 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.5 2.4-1a8.6 8.6 0 0 0 2 .9l.5 2.8h5l.5-2.8a8.6 8.6 0 0 0 2-.9l2.4 1 2-3.5-2-1.6c.1-.4.1-.8.1-1.2Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...commonProps}>
          <path d="M13 2 6 13h5l-1 9 8-12h-5V2Z" />
        </svg>
      );
    case "video":
      return (
        <svg {...commonProps}>
          <rect x="3" y="6.5" width="12" height="11" rx="2.5" />
          <path d="m15 10 6-3v10l-6-3" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...commonProps}>
          <path d="M3 12h4l2.2-4.5 3.4 9 2.5-6H21" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5 12 4.2 4.2L19 6.8" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9Z" />
        </svg>
      );
    case "cart":
      return (
        <svg {...commonProps}>
          <path d="M4 6h2l2 10h9l2-7H7.5" />
          <circle cx="10" cy="19" r="1.6" />
          <circle cx="17" cy="19" r="1.6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5.5 5.5v5.8c0 4.2 2.7 7.8 6.5 9.7 3.8-1.9 6.5-5.5 6.5-9.7V5.5L12 3Z" />
          <path d="m9.4 12.3 1.8 1.8 3.6-3.8" />
        </svg>
      );
    case "robot":
      return (
        <svg {...commonProps}>
          <path d="M9 4h6" />
          <path d="M12 4V2" />
          <rect x="6" y="7" width="12" height="9" rx="2.5" />
          <path d="M9 16v4" />
          <path d="M15 16v4" />
          <path d="M6 11H4" />
          <path d="M20 11h-2" />
          <circle cx="10" cy="11" r="1" />
          <circle cx="14" cy="11" r="1" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="M12 4 13.7 9l5 1.7-5 1.7L12 18l-1.7-5.6-5-1.7 5-1.7L12 4Z" />
        </svg>
      );
    case "wave":
      return (
        <svg {...commonProps}>
          <path d="M3 12h4l2-5 4.2 10L16 9l2 3h3" />
        </svg>
      );
    case "bell":
      return (
        <svg {...commonProps}>
          <path d="M7.5 16.5h9" />
          <path d="M9 18a3 3 0 0 0 6 0" />
          <path d="M10 5.3a2.4 2.4 0 0 1 4.8 0c0 5 .7 6.2 2.2 8.2H7.8C9.3 11.5 10 10.3 10 5.3Z" />
        </svg>
      );
    case "stack":
      return (
        <svg {...commonProps}>
          <path d="M4 7.5 12 4l8 3.5L12 11 4 7.5Z" />
          <path d="m4 12 8 3 8-3" />
          <path d="m4 16 8 3 8-3" />
        </svg>
      );
    case "mic":
      return (
        <svg {...commonProps}>
          <rect x="9" y="4" width="6" height="10" rx="3" />
          <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" />
          <path d="M12 17v3" />
          <path d="M9 20h6" />
        </svg>
      );
    case "frame":
      return (
        <svg {...commonProps}>
          <rect x="5" y="5" width="14" height="14" rx="2.5" />
          <path d="M9 5v14" />
          <path d="M15 5v14" />
          <path d="M5 9h14" />
          <path d="M5 15h14" />
        </svg>
      );
    case "scan":
      return (
        <svg {...commonProps}>
          <path d="M7 6H5v2" />
          <path d="M17 6h2v2" />
          <path d="M7 18H5v-2" />
          <path d="M17 18h2v-2" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M4 12h14" />
          <path d="m13 7 5 5-5 5" />
        </svg>
      );
    case "link":
      return (
        <svg {...commonProps}>
          <path d="M10 14 8.2 15.8a3.2 3.2 0 1 1-4.5-4.5L7 8" />
          <path d="M14 10 15.8 8.2a3.2 3.2 0 1 1 4.5 4.5L17 16" />
          <path d="m8 12 8 0" />
        </svg>
      );
    case "document":
      return (
        <svg {...commonProps}>
          <path d="M8 3h7l4 4v14H8z" />
          <path d="M15 3v4h4" />
          <path d="M11 12h5" />
          <path d="M11 16h5" />
        </svg>
      );
    case "person":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8.2" r="3.2" />
          <path d="M5.5 19.5a7.2 7.2 0 0 1 13 0" />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWorkflow((current) => (current + 1) % heroWorkflowColumns.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="page-shell">
      <div className="page-frame">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Liveplane">
            <span className="brand-mark" aria-hidden="true">
              <Icon name="wave" />
            </span>
            <span className="brand-word">Liveplane</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#how-it-works">How it works</a>
            <a className="topnav__caret" href="#use-cases">
              Use cases
            </a>
            <a href="#program">Program</a>
            <a className="topnav__caret" href="#resources">
              Resources
            </a>
          </nav>

          <a className="topbar-cta" href={founderCallMailto}>
            Book a founder call
          </a>
        </header>

        <main className="page-content" id="top">
          <section className="hero" id="how-it-works">
            <div className="hero-copy">
              <span className="eyebrow eyebrow--pill">Real-time video operations</span>

              <h1>
                <span>Turn live video into</span>
                <span>real-time revenue,</span>
                <span>automation, and action.</span>
              </h1>

              <p className="hero-copy__lede">
                Liveplane processes live video as it happens, detects important events in
                real time, and turns them into clips, alerts, metadata, and downstream
                actions — without requiring a rebuild of your existing stack.
              </p>

              <div className="hero-benefits" aria-label="Key benefits">
                {heroBenefits.map((benefit) => (
                  <div className="hero-benefits__item" key={benefit}>
                    <span className="hero-benefits__icon" aria-hidden="true">
                      <Icon name="check" />
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <a className="primary-button" href={founderCallMailto}>
                  Book a 20-minute founder call
                </a>
                <a className="secondary-button" href="#example-workflows">
                  See example workflows
                </a>
              </div>

              <div className="hero-trust">
                <div className="hero-trust__avatars" aria-hidden="true">
                  <img src={teamHeadshotsImage} alt="" />
                </div>
                <div className="hero-trust__copy">
                  <span className="hero-trust__label">
                    Built by engineers with experience across
                  </span>
                  <div className="hero-trust__logos">
                    {founderSignals.map((signal) => (
                      <span key={signal}>{signal}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="workflow-panel" aria-label="How Liveplane works">
              <div className="workflow-panel__header">
                <span className="eyebrow">How Liveplane works</span>
              </div>

              <div className="workflow-tabs" role="tablist" aria-label="Workflow stages">
                {heroWorkflowColumns.map((column, index) => (
                  <button
                    key={column.key}
                    type="button"
                    className={index === activeWorkflow ? "workflow-tab is-active" : "workflow-tab"}
                    onClick={() => setActiveWorkflow(index)}
                    role="tab"
                    aria-selected={index === activeWorkflow}
                  >
                    <span className="workflow-tab__step">{index + 1}</span>
                    <span>{column.title}</span>
                  </button>
                ))}
              </div>

              <div className="workflow-pipeline">
                {heroWorkflowColumns.map((column, index) => (
                  <Fragment key={column.key}>
                    <article
                      className={
                        index === activeWorkflow
                          ? `workflow-column workflow-column--${column.type} is-active`
                          : `workflow-column workflow-column--${column.type}`
                      }
                    >
                      <span className="workflow-column__eyebrow">{column.eyebrow}</span>

                      {column.type === "input" ? (
                        <>
                          <div className="workflow-input-preview">
                            <div className="workflow-input-preview__screen">
                              <img
                                className="workflow-input-preview__image"
                                src={heroLiveFeedImage}
                                alt="Live soccer match feed"
                              />
                              <span className="workflow-input-preview__badge">LIVE</span>
                            </div>
                          </div>

                          <div className="workflow-column__list">
                            {column.items.map((item) => (
                              <div className="workflow-list-item" key={item.label}>
                                <span className="workflow-list-item__icon" aria-hidden="true">
                                  <Icon name={item.icon} />
                                </span>
                                <span>{item.label}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null}

                      {column.type === "detect" ? (
                        <>
                          <div className="workflow-ai-card">
                            <img
                              className="workflow-ai-card__preview"
                              src={heroDetectionImage}
                              alt="Detection layer interface"
                            />
                            <span className="workflow-ai-card__mark" aria-hidden="true">
                              <Icon name="pulse" />
                            </span>
                            <strong>Liveplane AI</strong>
                            <p>Real-time analysis at the edge</p>
                          </div>

                          <div className="workflow-column__list">
                            {column.items.map((item) => (
                              <div className="workflow-list-item" key={item.label}>
                                <span className="workflow-list-item__icon" aria-hidden="true">
                                  <Icon name={item.icon} />
                                </span>
                                <span>{item.label}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null}

                      {column.type === "output" ? (
                        <div className="workflow-output-stack">
                          {column.items.map((item) => (
                            <div className="workflow-output-card" key={item.title}>
                              <div className="workflow-output-card__head">
                                {"thumbnail" in item && item.thumbnail ? (
                                  <span className="workflow-output-card__thumb" aria-hidden="true">
                                    <img src={heroOutputsImage} alt="" />
                                  </span>
                                ) : (
                                  <span className="workflow-output-card__icon" aria-hidden="true">
                                    <Icon name={item.icon} />
                                  </span>
                                )}
                                <div>
                                  <strong>{item.title}</strong>
                                  <span>{item.detail}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </article>

                    {index < heroWorkflowColumns.length - 1 ? (
                      <div className="workflow-pipeline__arrow" aria-hidden="true">
                        <Icon name="arrow" />
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>

              <div className="workflow-meta">
                <span>
                  <Icon name="bolt" />
                  Sub-second latency
                </span>
                <span>Edge or cloud deployment</span>
                <span>No platform migration</span>
              </div>
            </aside>
          </section>

          <section className="section">
            <div className="section-head section-head--centered section-head--compact">
              <span className="eyebrow">What this delivers</span>
            </div>

            <div className="deliver-grid">
              {deliveryCards.map((card) => (
                <article className="deliver-card" key={card.title}>
                  <div className="deliver-card__icon" aria-hidden="true">
                    <Icon name={card.icon} />
                  </div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="proof-panel">
            <div className="section-head section-head--centered">
              <span className="eyebrow">Why partner early</span>
              <h2>Deploy one live workflow. Prove value fast. Expand from there.</h2>
            </div>

            <div className="proof-flow">
              {proofSteps.map((step, index) => (
                <Fragment key={step.title}>
                  <article className="proof-step">
                    <span className="proof-step__number">{step.number}</span>
                    <div className="proof-step__icon" aria-hidden="true">
                      <Icon name={step.icon} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </article>

                  {index < proofSteps.length - 1 ? (
                    <div className="proof-flow__arrow" aria-hidden="true">
                      <Icon name="arrow" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>

            <p className="proof-panel__note">
              <span aria-hidden="true">
                <Icon name="shield" />
              </span>
              Start with one workflow, not a platform migration.
            </p>
          </section>

          <section className="section-surface section-surface--cream" id="use-cases">
            <div className="section-head section-head--centered section-head--contrast">
              <span className="eyebrow">High-value use cases</span>
                          </div>

            <div className="use-case-grid">
              {useCases.map((useCase) => (
                <article className="use-case-card" key={useCase.title}>
                  <div className="use-case-card__icon" aria-hidden="true">
                    <Icon name={useCase.icon} />
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="workflow-section" id="example-workflows">
            <div className="section-head section-head--centered">
              <span className="eyebrow">Example first workflows</span>
                          </div>

            <div className="workflow-examples">
              {exampleWorkflows.map((workflow, index) => (
                <article
                  className={`workflow-example-card ${
                    index < exampleWorkflows.length - 1 ? "workflow-example-card--arrow" : ""
                  }`}
                  key={workflow.title}
                >
                  <div className="workflow-example-card__icon" aria-hidden="true">
                    <Icon name={workflow.icon} />
                  </div>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="program-grid" id="program">
            <article className="program-card program-card--lead">
              <span className="eyebrow">Design partner program</span>
              <h2>A fast, low-risk path to proving real value</h2>
              <p>
                We work with a small number of teams that already operate live video and
                want to prove one high-value workflow quickly inside a real environment.
              </p>

              <div className="program-checks">
                {programBullets.map((item) => (
                  <div className="program-checks__item" key={item}>
                    <span className="program-checks__icon" aria-hidden="true">
                      <Icon name="check" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a className="primary-button primary-button--wide" href={designPartnerMailto}>
                Discuss a design partner pilot
              </a>
            </article>

            <article className="program-card program-card--timeline">
              <span className="eyebrow">What the first deployment looks like</span>
              <div className="timeline-list">
                {timelineWeeks.map((week, index) => (
                  <div className="timeline-item" key={week.label}>
                    <div className="timeline-item__rail" aria-hidden="true">
                      <span />
                      {index < timelineWeeks.length - 1 ? <i /> : null}
                    </div>
                    <div className="timeline-item__copy">
                      <strong>{week.label}</strong>
                      <h3>{week.title}</h3>
                      <p>{week.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="program-card program-card--needs" id="resources">
              <span className="eyebrow">What we need from you</span>
              <div className="needs-grid">
                {partnerNeeds.map((need) => (
                  <div className="need-item" key={need.title}>
                    <span className="need-item__icon" aria-hidden="true">
                      <Icon name={need.icon} />
                    </span>
                    <span>{need.title}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="environment-band" aria-label="Built to fit your environment">
            <span className="eyebrow eyebrow--centered">Built to fit your environment</span>

            <div className="environment-band__chips">
              {environmentChips.map((chip) => (
                <span className="environment-chip" key={chip.label}>
                  <span className="environment-chip__icon" aria-hidden="true">
                    <Icon name={chip.icon} />
                  </span>
                  <span>{chip.label}</span>
                </span>
              ))}
            </div>

            <div className="environment-band__notes">
              {environmentNotes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="final-cta">
            <div className="final-cta__mark" aria-hidden="true">
              <Icon name="wave" />
            </div>
            <div className="final-cta__body">
              <h2>
                If live video already matters to your revenue or operations,
                let&apos;s identify the first workflow worth deploying.
              </h2>
            </div>
            <div className="final-cta__actions">
              <a className="primary-button" href={founderCallMailto}>
                Book a 20-minute founder call
              </a>
              <a className="secondary-button" href="#example-workflows">
                See example workflows
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
