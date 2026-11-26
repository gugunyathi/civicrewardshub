import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Gift,
  Landmark,
  MapPin,
  Store,
  UsersRound,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const impactStats = [
  { value: "48,200+", label: "faults resolved" },
  { value: "584", label: "wards represented" },
  { value: "7", label: "metros connected" },
  { value: "9", label: "provinces reached" },
];

const civicSteps = [
  {
    number: "01",
    icon: MapPin,
    title: "Residents report",
    description: "Log potholes, leaks, outages and illegal dumping from your phone, right in your ward.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "The issue is verified",
    description: "Service teams see a clearer picture of local needs and prioritise the work that matters.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Repairs are confirmed",
    description: "Contractors resolve the fault and share proof, creating a more accountable service loop.",
  },
  {
    number: "04",
    icon: Gift,
    title: "Civic action is rewarded",
    description: "Verified contributions earn CivicPoints, redeemable with participating local businesses.",
  },
];

const stakeholders = [
  {
    icon: UsersRound,
    title: "Residents",
    detail: "Local visibility, useful rewards and a voice in service delivery.",
  },
  {
    icon: Landmark,
    title: "Municipalities",
    detail: "Prioritised demand, ward insights and evidence of completed work.",
  },
  {
    icon: Building2,
    title: "Service providers",
    detail: "Clearer work queues, verified closures and measurable service quality.",
  },
  {
    icon: Store,
    title: "Local businesses",
    detail: "Hyper-local discovery that keeps more spending in the community.",
  },
];

const partnerTracks = [
  {
    icon: Building2,
    label: "01 · Municipal suppliers",
    title: "Make service work visible",
    detail: "Use ward-level insight and independent closure evidence to support reliable service delivery.",
    link: "mailto:partners@civicrewards.co.za?subject=Municipal%20supplier%20partnership",
  },
  {
    icon: Store,
    label: "02 · Ward businesses",
    title: "Bring rewards closer",
    detail: "Welcome nearby residents with relevant offers and help local commerce thrive.",
    link: "mailto:partners@civicrewards.co.za?subject=Ward%20business%20partnership",
  },
  {
    icon: Landmark,
    label: "03 · Metro & corporate",
    title: "Back measurable progress",
    detail: "Connect community investment to visible ward outcomes and credible impact reporting.",
    link: "mailto:partners@civicrewards.co.za?subject=Metro%20and%20corporate%20partnership",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CivicRewards | Civic action for responsive cities" },
      {
        name: "description",
        content:
          "CivicRewards connects residents, municipalities, service providers and local businesses around verified repairs, better service delivery and local rewards.",
      },
      { property: "og:title", content: "CivicRewards | Civic action for responsive cities" },
      {
        property: "og:description",
        content:
          "A public-service delivery loyalty platform that turns verified civic action into stronger neighbourhoods and local rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="page-container header-inner">
          <a className="brand" href="#top" aria-label="CivicRewards home">
            <span className="brand-mark" aria-hidden="true">
              <Landmark />
            </span>
            <span className="brand-copy">
              <strong>CivicRewards</strong>
              <span>South Africa</span>
            </span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#impact">Our impact</a>
            <a href="#partners">For partners</a>
          </nav>

          <Button asChild size="sm" className="header-cta">
            <a href="#partners">
              Partner with us <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top" aria-labelledby="hero-title">
          <div className="page-container hero-grid">
            <div className="hero-copy-block">
              <p className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true" />
                Public service delivery, powered by people
              </p>
              <h1 className="hero-title" id="hero-title">
                Every civic action can <span>move a city forward.</span>
              </h1>
              <p className="hero-description">
                CivicRewards brings residents, municipalities, service providers and local businesses
                together around verified repairs, stronger neighbourhoods and meaningful local rewards.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg" className="cta-primary">
                  <a href="https://civicrewards.co.za/ReportApp" target="_blank" rel="noreferrer">
                    Report a service issue <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="cta-secondary">
                  <a href="#how-it-works">See how it works</a>
                </Button>
              </div>
              <p className="hero-note">
                <BadgeCheck aria-hidden="true" />
                Verified civic action. Visible neighbourhood impact.
              </p>
            </div>

            <figure className="city-visual">
              <img
                src="/images/johannesburg-civic-urban.jpg"
                alt="A clear daytime view of central Johannesburg, its streets, trees and skyline."
              />
              <div className="city-location">
                <span className="live-indicator" aria-hidden="true" />
                Johannesburg · Ward 12
              </div>
              <figcaption className="verified-card">
                <span className="verified-icon" aria-hidden="true">
                  <BadgeCheck />
                </span>
                <span className="verified-copy">
                  <strong>Repair verified</strong>
                  <span>Pothole fixed · Ward 12</span>
                </span>
                <span className="points-earned">+120 pts</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="impact-strip" id="impact" aria-label="CivicRewards impact">
          <div className="page-container impact-grid">
            {impactStats.map((stat) => (
              <div className="impact-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section" id="how-it-works" aria-labelledby="process-title">
          <div className="page-container">
            <div className="section-heading">
              <p className="section-kicker">The civic loop</p>
              <h2 id="process-title">A clearer path from report to reward.</h2>
              <p>
                One well-reported issue can help improve a street, strengthen service accountability
                and support a more connected local economy.
              </p>
            </div>
            <ol className="steps-grid">
              {civicSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <li className="step-item" key={step.number}>
                    <div className="step-topline">
                      <span className="step-number">{step.number}</span>
                      <span className="step-icon" aria-hidden="true">
                        <Icon />
                      </span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="service-section" aria-labelledby="service-title">
          <div className="page-container service-grid">
            <div className="service-intro">
              <p className="section-kicker">A shared city signal</p>
              <h2 id="service-title">Better service delivery takes all of us.</h2>
              <p>
                Local knowledge becomes more useful when the people who live, work and deliver
                services in a ward can see the same priorities—and the progress that follows.
              </p>
              <a className="text-link" href="#partners">
                Find your place in the loop <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="stakeholder-list">
              {stakeholders.map((stakeholder) => {
                const Icon = stakeholder.icon;
                return (
                  <article className="stakeholder-item" key={stakeholder.title}>
                    <span className="stakeholder-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3>{stakeholder.title}</h3>
                      <p>{stakeholder.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="partners-section" id="partners" aria-labelledby="partners-title">
          <div className="page-container">
            <div className="partners-heading">
              <div className="section-heading">
                <p className="section-kicker">Built together</p>
                <h2 id="partners-title">One mission. A place for every partner.</h2>
                <p>
                  Support more responsive public services and thriving local economies in the way
                  that fits your organisation.
                </p>
              </div>
              <a className="text-link partners-contact" href="mailto:partners@civicrewards.co.za">
                Talk to our team <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="partner-grid">
              {partnerTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <article className="partner-card" key={track.label}>
                    <span className="partner-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <p className="partner-label">{track.label}</p>
                    <h3>{track.title}</h3>
                    <p className="partner-detail">{track.detail}</p>
                    <a className="partner-action" href={track.link}>
                      Discuss a partnership <ArrowUpRight aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="page-container closing-inner">
            <div>
              <p className="section-kicker">CivicRewards · South Africa</p>
              <h2 id="closing-title">Let’s make public service visible, valued and local.</h2>
            </div>
            <Button asChild size="lg" className="closing-cta">
              <a href="mailto:partners@civicrewards.co.za">
                Start a conversation <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="CivicRewards home">
            <span className="brand-mark" aria-hidden="true">
              <Landmark />
            </span>
            <span className="brand-copy">
              <strong>CivicRewards</strong>
              <span>South Africa</span>
            </span>
          </a>
          <p>Stronger neighbourhoods start with people working together.</p>
          <a href="https://civicrewards.co.za/councillor" target="_blank" rel="noreferrer">
            Councillor Signal Desk <ArrowUpRight aria-hidden="true" />
          </a>
          <span className="footer-copyright">© CivicRewards South Africa</span>
        </div>
      </footer>
    </div>
  );
}