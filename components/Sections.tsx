/* eslint-disable @next/next/no-img-element */
import {
  approach,
  beyond,
  contact,
  experience,
  featured,
  hero,
  logos,
  projects,
  site,
  skillBand,
  stack,
  testimonials,
} from "@/content";
import { ArrowRight, ArrowUpRight, PrincipleIcon } from "./Icons";

export function Header() {
  return (
    <header className="header">
      <nav aria-label="Primary" className="container nav">
        <a href="#top" className="brand">
          <span className="brand-mark">RH</span>
          {site.name}
        </a>
        <div className="nav-links">
          <a href="#approach" className="nav-hide-sm">Approach</a>
          <a href="#work" className="nav-hide-sm">Work</a>
          <a href="#experience" className="nav-hide-sm">Experience</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <div className="pill">
          <span className="dot" />
          {site.eyebrow}
        </div>
        <h1 className="h1">
          {hero.lead} <span className="accent">{hero.accent}</span>
        </h1>
        <p className="lede">{hero.body}</p>
        <div className="actions">
          <a href="#work" className="btn btn-primary">
            See the work <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">Contact me</a>
        </div>
      </div>

      <div className="terminal" role="img" aria-label="Illustration: a review of an AI-generated change that compiled but failed three checks and was sent back.">
        <div className="terminal-top">
          <div className="lights" aria-hidden="true"><span /><span /><span /></div>
          <span>{hero.reviewTitle}</span>
        </div>
        <ul className="checks">
          {hero.checks.map((c) => (
            <li key={c.label}>
              <span>{c.label}</span>
              {c.ok ? <span className="ok">✓ pass</span> : <span className="bad">✕ caught</span>}
            </li>
          ))}
        </ul>
        <div className="terminal-foot">
          <span>{hero.reviewFooter[0]}</span>
          <strong>{hero.reviewFooter[1]}</strong>
        </div>
      </div>
    </section>
  );
}

export function SkillBand() {
  return (
    <section aria-label="Why orchestration is a skill" className="band">
      <div className="container band-inner">
        <p className="statement">
          {skillBand.statementStart} <span className="accent">{skillBand.statementAccent}</span>{" "}
          {skillBand.statementEnd}
        </p>
        <div className="compare">
          <div className="compare-card compare-bad">
            <div className="label">Unskilled orchestration</div>
            <ul>
              {skillBand.unskilled.map((t) => (
                <li key={t}><span className="mark" aria-hidden="true">✕</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="compare-card compare-good">
            <div className="label">Skilled orchestration</div>
            <ul>
              {skillBand.skilled.map((t) => (
                <li key={t}><span className="mark" aria-hidden="true">✓</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="container section">
      <div className="split">
        <div>
          <div className="eyebrow">01 — Approach</div>
          <h2 className="h2">{approach.heading}</h2>
        </div>
        <p>{approach.intro}</p>
      </div>
      <div className="tiles">
        {approach.principles.map((p) => (
          <div className="tile" key={p.title}>
            <PrincipleIcon name={p.icon} />
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="container section">
      <div className="eyebrow">02 — Selected work</div>
      <h2 className="h2" style={{ marginBottom: 56, maxWidth: 760 }}>
        From hand-built frameworks to AI-generated automation.
      </h2>

      <article className="featured">
        <div className="featured-copy">
          <div className="meta">{featured.meta}</div>
          <h3>{featured.title}</h3>
          <p>{featured.body}</p>
          <div className="tags">
            {featured.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
        <ol className="steps">
          {featured.steps.map((s, i) => (
            <li key={s}><span>{i + 1}</span>{s}</li>
          ))}
        </ol>
      </article>

      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="meta">{p.meta}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <div className="stack">{p.stack}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container section">
      <div className="eyebrow">03 — Experience</div>
      <h2 className="h2" style={{ marginBottom: 48 }}>
        Seventeen years of automation. The last two, AI-native.
      </h2>

      <div className="timeline">
        {experience.map((e) => (
          <div className="row" key={e.company}>
            <div className={`row-date${e.current ? " current" : ""}`}>{e.dates}</div>
            <div className="row-who">
              <div className="company">
                {e.company} {e.via && <span>{e.via}</span>}
              </div>
              <div className="role">{e.role}</div>
            </div>
            <p>{e.summary}</p>
          </div>
        ))}
      </div>

      <div className="logos">
        <span className="label">Built software at</span>
        {logos.map((l) => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            style={{ height: l.height }}
            className={`logo-${l.style}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="stack-groups">
        {stack.map((g) => (
          <div className="stack-group" key={g.group}>
            <div className="label">{g.group}</div>
            <ul className="chips">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="container section">
      <div className="eyebrow" style={{ marginBottom: 40 }}>04 — What colleagues say</div>
      <div className="quotes">
        {testimonials.map((t) => (
          <figure className="quote" key={t.name}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <img src={t.photo} alt={t.name} loading="lazy" />
              <div>
                <strong>{t.name}</strong>
                <span className="muted">{t.title}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Beyond() {
  return (
    <section aria-label="Beyond the code" className="container section">
      <div className="eyebrow" style={{ marginBottom: 40 }}>05 — Beyond the code</div>
      <div className="beyond">
        {beyond.map((b) => (
          <div className="beyond-item" key={b.title}>
            <img
              src={b.image}
              alt={b.alt}
              loading="lazy"
              style={b.position ? { objectPosition: b.position } : undefined}
            />
            <div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              {b.link && (
                <p style={{ marginTop: 6 }}>
                  <a href={b.link.href} target="_blank" rel="noopener noreferrer">{b.link.label}</a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="container contact">
      <div className="contact-card">
        <div>
          <div className="eyebrow">Contact</div>
          <h2>{contact.heading}</h2>
          <p>{contact.body}</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${site.email}`} className="contact-link primary">
            {site.email} <ArrowUpRight />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link outline">
            LinkedIn <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="mono">Built AI-native · {site.domain}</span>
      </div>
    </footer>
  );
}
