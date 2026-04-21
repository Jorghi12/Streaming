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
  | "spark";

const designPartnerHref =
  "mailto:jorg@stream.ai?subject=Stream%20Different%20Design%20Partner";

const heroOutcomes = [
  {
    title: "Revenue",
    detail: "Improve live experiences and create new monetizable outputs from the same session.",
    icon: "trend"
  },
  {
    title: "Automation",
    detail: "Reduce manual review, operator overhead, and post-stream cleanup.",
    icon: "gear"
  },
  {
    title: "Action",
    detail: "Emit clips, alerts, transcripts, metadata, and workflow triggers while the stream is live.",
    icon: "bolt"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const valueProofCards = [
  {
    title: "Connect your live feeds",
    detail: "Bring in camera feeds, production streams, or existing video infrastructure.",
    icon: "video"
  },
  {
    title: "Run a high-value workflow in real time",
    detail:
      "Detect events, answer questions, generate metadata, modify outputs, or trigger actions while the stream is live.",
    icon: "pulse"
  },
  {
    title: "Ship measurable output",
    detail:
      "Create clips, alerts, transcripts, overlays, structured metadata, and workflow actions tied to real business value.",
    icon: "check"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const useCases = [
  {
    title: "Sports and media",
    detail: "More clips, faster production, richer metadata, better fan experiences.",
    icon: "globe"
  },
  {
    title: "Live commerce",
    detail: "Smarter selling, more reusable moments, stronger operator assistance.",
    icon: "cart"
  },
  {
    title: "Security and operations",
    detail: "Faster detection, lower monitoring burden, better incident visibility.",
    icon: "shield"
  },
  {
    title: "Healthcare, robotics, and industrial systems",
    detail: "Real-time visibility, guidance, summarization, and decision support.",
    icon: "robot"
  }
] satisfies Array<{ title: string; detail: string; icon: IconName }>;

const partnerHighlights = [
  "Founder-led implementation",
  "Priority roadmap influence",
  "Fast iteration around one measurable workflow",
  "Early access economics",
  "Strategic upside for early partners"
];

const founderSignals = ["Meta AI", "Google Brain", "Cruise", "RunPod"];

const stackTags = [
  "Camera feeds",
  "WebRTC",
  "RTSP",
  "Production video",
  "Downstream APIs",
  "Metadata systems",
  "Alerts",
  "Operator workflows"
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
          <path d="M4 18V6" />
          <path d="M6 18h12" />
          <path d="M8 14l4-4 3 3 5-6" />
          <path d="M16 7h4v4" />
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
          <path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z" />
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
    default:
      return null;
  }
}

function App() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Stream Different">
            <span className="brand-mark" />
            <span className="brand-word">Stream Different</span>
          </a>

          <nav className="topnav" aria-label="Primary">
            <a href="#value-proof">Value</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#design-partner">Program</a>
          </nav>

          <a className="topbar-cta" href={designPartnerHref}>
            Become a design partner
          </a>
        </header>

        <main className="page-content" id="top">
          <section className="hero section">
            <div className="hero-copy">
              <span className="eyebrow">Real-time video operations</span>
              <h1>Turn live video into real-time revenue, automation, and action.</h1>
              <p className="hero-subheadline">
                Stream Different is an edge-first runtime for teams that already operate on
                live video. It understands streams as they happen, modifies outputs in real
                time, and emits downstream actions from the same session.
              </p>
              <p className="hero-support">
                Use it to improve live experiences, automate manual workflows, generate
                operational signals instantly, and launch new products on top of live video
                without rebuilding your stack.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href={designPartnerHref}>
                  Become a design partner
                </a>
                <a className="secondary-button" href="#use-cases">
                  See high-value use cases
                </a>
              </div>

              <p className="hero-trust">
                Built for teams where live video already drives revenue or operations.
              </p>
            </div>

            <aside className="hero-panel" aria-label="Design partner outcomes">
              <div className="hero-panel__header">
                <span>What design partners prove first</span>
                <strong>One workflow. Measurable value. Fast learning.</strong>
              </div>

              <div className="hero-panel__grid">
                {heroOutcomes.map((outcome) => (
                  <article className="hero-panel__card" key={outcome.title}>
                    <div className="icon-badge icon-badge--hero">
                      <Icon name={outcome.icon} />
                    </div>
                    <div className="hero-panel__card-copy">
                      <h3>{outcome.title}</h3>
                      <p>{outcome.detail}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="hero-panel__note">
                <div className="icon-badge icon-badge--note">
                  <Icon name="spark" />
                </div>
                <p>Start with one painful workflow, not a platform migration.</p>
              </div>
            </aside>
          </section>

          <section className="section section--centered" id="value-proof">
            <div className="section-head section-head--centered">
              <span className="eyebrow">Why partner early</span>
              <h2>Deploy one live workflow. Prove value fast. Expand from there.</h2>
            </div>

            <div className="proof-grid">
              {valueProofCards.map((card, index) => (
                <article className="proof-card" key={card.title}>
                  <span className="proof-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="icon-badge icon-badge--proof">
                    <Icon name={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </article>
              ))}
            </div>

            <p className="section-footer">
              Start with one painful workflow, not a platform migration.
            </p>
          </section>

          <section className="section section--ruled section--centered" id="use-cases">
            <div className="section-head section-head--centered">
              <span className="eyebrow">High-value use cases</span>
              <h2>Where this creates value first</h2>
            </div>

            <div className="use-case-grid">
              {useCases.map((useCase) => (
                <article className="use-case-card" key={useCase.title}>
                  <div className="icon-badge icon-badge--use-case">
                    <Icon name={useCase.icon} />
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section row-grid" id="design-partner">
            <div className="feature-card feature-card--copy">
              <div className="section-copy">
                <span className="eyebrow">Design partner program</span>
                <h2>Design partner program</h2>
                <p>
                  We are working with a small number of early partners who already have
                  live video, a meaningful workflow bottleneck, and a reason to move
                  quickly.
                </p>
                <p>
                  Design partners get direct founder involvement, rapid iteration,
                  priority roadmap influence, and early access economics in exchange for
                  real deployment feedback.
                </p>
              </div>

              <a className="primary-button primary-button--wide" href={designPartnerHref}>
                Apply to become a design partner
              </a>
            </div>

            <div className="feature-card feature-card--list">
              <span className="eyebrow">Partner advantages</span>
              <ul className="highlight-list">
                {partnerHighlights.map((item) => (
                  <li key={item}>
                    <span className="highlight-check" aria-hidden="true">
                      <Icon name="check" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section row-grid">
            <div className="feature-card feature-card--copy">
              <div className="section-copy">
                <span className="eyebrow">Founder credibility</span>
                <h2>Built for production reality</h2>
                <p>
                  Built by a founder with experience across Meta AI, Google Brain, Cruise,
                  and RunPod, with a focus on real-world AI systems where latency,
                  infrastructure, and operational constraints actually matter.
                </p>
                <p>
                  The point is not pedigree for its own sake. It is to show that the
                  product is being built by someone who understands what breaks when
                  real-time systems leave the demo environment.
                </p>
              </div>

              <div className="signal-block">
                <span className="signal-label">Experience across</span>
                <div className="signal-row">
                  {founderSignals.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-card feature-card--copy">
              <div className="section-copy">
                <span className="eyebrow">Compatibility</span>
                <h2>Fits into existing live-video environments</h2>
                <p>
                  Designed to work with existing camera, streaming, and production
                  environments rather than forcing a rebuild.
                </p>
              </div>

              <div className="tag-grid" aria-label="Existing stack compatibility">
                {stackTags.map((tag) => (
                  <span className={tag === "Operator workflows" ? "tag tag--wide" : "tag"} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="section final-cta">
            <span className="eyebrow">Design partner call</span>
            <h2>
              If live video is already part of your revenue or operations, let&apos;s
              identify the first workflow worth deploying.
            </h2>
            <a className="primary-button" href={designPartnerHref}>
              Become a design partner
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
