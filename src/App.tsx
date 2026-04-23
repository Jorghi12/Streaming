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

const founderSignals = [
  { name: "Meta AI", logo: "/brands/meta-ai.svg" },
  { name: "Google", logo: "/brands/google.svg" },
  { name: "Cruise", logo: "/brands/cruise.svg" },
  { name: "RunPod", logo: "/brands/runpod.svg" }
];

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
  return (
    <span
      className="icon-svg"
      aria-hidden="true"
      style={{ ["--icon-url" as any]: `url(/icons/${name}.svg)` }}
    />
  );
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
                  <div className="hero-trust__logos" aria-label="Prior experience logos">
                    {founderSignals.map((signal) => (
                      <span className="hero-trust__logo" key={signal.name}>
                        <img className="hero-trust__logo-image" src={signal.logo} alt={signal.name} />
                      </span>
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
            <div className="section-head section-head--centered section-head--contrast section-head--spaced">
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
            <div className="section-head section-head--centered section-head--spaced">
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
              <span className="eyebrow">Start with one workflow</span>
              <h2>
                If live video already matters to your revenue or operations,
                let&apos;s identify the first workflow worth deploying.
              </h2>
              <p>
                High-signal deployment, direct founder support, and measurable value in weeks —
                without forcing a platform migration.
              </p>
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
