/* Studio Field Notes reminder: editorial studio energy, asymmetrical briefing flow, ink green + cream paper + clay orange, and no guaranteed outcomes. */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Menu, X } from "lucide-react";

const GOOGLE_FORM_URL = "";

const artTracks = [
  { number: "01", title: "Drawing + illustration", note: "Observation, characters, visual stories" },
  { number: "02", title: "Painting + colour", note: "Gouache, acrylic, watercolour, mixed media" },
  { number: "03", title: "Making + sculpture", note: "Paper, clay, objects and playful structures" },
];

const steps = [
  { number: "01", title: "Tell us about the child", copy: "Share their age, interests and the kind of creative space they enjoy." },
  { number: "02", title: "We read the details", copy: "We look for an art coach whose practice, approach and availability make sense." },
  { number: "03", title: "You choose the next chat", copy: "We make an introduction so the family and coach can decide if it feels right." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Studio Field Notes home">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span className="brand-name"><small>ART COACH MATCH</small><strong>Studio Field Notes</strong></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => scrollTo("how-it-works")}>How it works</button>
          <button onClick={() => scrollTo("art-tracks")}>Art tracks</button>
          <button className="nav-cta" onClick={() => scrollTo("apply")}>Find a coach <ArrowRight size={16} /></button>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>FIELD NOTE / 01</span> FOR FAMILIES + ART COACHES</p>
          <h1>The right art coach makes room for a child’s <em>way of seeing.</em></h1>
          <p className="hero-intro">A thoughtful matching desk for children and parents looking for a creative guide — someone who can meet a child where they are, then help them go a little further.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("apply")}>Tell us what they love making <ArrowDownRight size={18} /></button>
            <button className="text-link" onClick={() => scrollTo("how-it-works")}>See the three-step fit <ArrowRight size={16} /></button>
          </div>
          <p className="micro-note"><span className="dot" /> No pressure, no public directory. Just a considered first introduction.</p>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="image-frame"><img src="/manus-storage/art-coach-hero_6bc52eeb.jpg" alt="A child painting beside an attentive art coach in a warm studio" /></div>
          <div className="image-caption"><span>STUDIO OBSERVATION</span><strong>Make space for the first mark.</strong></div>
          <div className="index-stamp">HK / 2026<br /><b>OPEN<br />STUDIO</b></div>
        </div>
      </section>

      <section className="signal-strip section-shell" aria-label="Service principles">
        <div><span className="strip-number">A</span><strong>For children</strong><p>Curiosity before correction.</p></div>
        <div><span className="strip-number">B</span><strong>For parents</strong><p>Clear next steps, no hard sell.</p></div>
        <div><span className="strip-number">C</span><strong>For coaches</strong><p>A better brief, not a popularity contest.</p></div>
      </section>

      <section id="art-tracks" className="art-tracks section-shell">
        <div className="section-heading"><p className="eyebrow"><span>FIELD NOTE / 02</span> WHERE CURIOSITY CAN GO</p><h2>Start with the medium<br /><em>that already has their attention.</em></h2></div>
        <div className="track-list">
          {artTracks.map((track) => <article className="track-card" key={track.number}><span className="track-number">{track.number}</span><div><h3>{track.title}</h3><p>{track.note}</p></div><ArrowUpRight size={19} /></article>)}
        </div>
        <div className="art-image"><img src="/manus-storage/art-coach-painting_c0b56b85.jpg" alt="A child's hands mixing paint during an art lesson" /></div>
      </section>

      <section id="how-it-works" className="how-section">
        <div className="section-shell how-grid"><div className="how-intro"><p className="eyebrow light"><span>FIELD NOTE / 03</span> THE FIT, IN PLAIN LANGUAGE</p><h2>A small brief.<br /><em>A better first step.</em></h2><p>We do not promise a perfect match or a fixed outcome. We use the details you share to make a more relevant first introduction, then leave room for the family and coach to decide together.</p></div><div className="step-list">{steps.map((step) => <div className="step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></div>)}</div></div>
      </section>

      <section id="apply" className="apply-section section-shell">
        <div className="apply-note"><p className="eyebrow"><span>APPLICATION DESK</span> FOR PARENTS + COACHES</p><h2>Tell us what the next good fit could look like.</h2><p>Use the short intake form to share the essentials. We’ll use it only to understand the request and make an initial introduction.</p><div className="privacy-list"><p><Check size={16} /> Your details stay with the matching process.</p><p><Check size={16} /> No public profile is created automatically.</p><p><Check size={16} /> You can ask questions before deciding.</p></div></div>
        <div className="form-card">{GOOGLE_FORM_URL ? <iframe title="Art coach matching application" src={`${GOOGLE_FORM_URL}?embedded=true`} loading="lazy" /> : <><div className="form-card-top"><span>FORM / 01</span><span>ABOUT 3 MINUTES</span></div><h3>The art coach intake form</h3><p>The live Google Form will appear here once its public link is connected. For now, use the form blueprint to create it in your Google account.</p><button className="button button-primary full" onClick={() => window.open("https://forms.google.com", "_blank", "noopener,noreferrer")}>Open Google Forms <ArrowRight size={17} /></button><p className="form-footnote">A parent or guardian should complete the child-related details.</p></>}</div>
      </section>

      <section className="closing-section section-shell"><div className="closing-mark"><span /><span /></div><div><p className="eyebrow"><span>ONE LAST NOTE</span> CREATIVE LEARNING IS PERSONAL</p><h2>Good coaching starts with listening.</h2></div><img src="/manus-storage/art-coach-making_4dcfaa17.jpg" alt="A child making a paper and clay artwork with an art teacher" /></section>

      <footer className="site-footer section-shell"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /></span><strong>Studio Field Notes</strong></div><p>Art coach matching for kids and parents.<br />Hong Kong service context · Details to be confirmed</p><div className="footer-links"><button onClick={() => scrollTo("apply")}>Application desk</button><button onClick={() => scrollTo("how-it-works")}>How it works</button></div><small>© 2026 Studio Field Notes. Information is for an initial introduction only.</small></footer>
    </main>
  );
}

function ArrowUpRight({ size }: { size: number }) { return <ArrowRight size={size} className="arrow-up" />; }
