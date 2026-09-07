import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown, Download, ExternalLink, Menu, X } from 'lucide-react';
import { credentials, diaryEntries, evidenceTabs, professionalExperience, researchAndService } from './data';

type TabKey = keyof typeof evidenceTabs;

const navItems = [
  ['about', 'Profile'],
  ['case-study', 'Case study'],
  ['evidence', 'CPD evidence'],
  ['contact', 'Contact'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [activeTab, setActiveTab] = useState<TabKey>('practice');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id));
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -55% 0px' },
    );
    sections.forEach(section => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const visibleEntries = showAll ? diaryEntries : diaryEntries.slice(0, 7);
  const selectedEvidence = evidenceTabs[activeTab];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container-wide topbar-inner">
          <button className="wordmark" onClick={() => jumpTo('top')} aria-label="Back to top" data-testid="button-back-to-top">
            <span className="wordmark-mark">FO</span>
            <span>Francis Onyema<br /><small style={{ fontWeight: 500, letterSpacing: 0, color: 'hsl(var(--muted-foreground))' }}>Prosthetist &amp; Orthotist</small></span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-navigation" data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="site-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map(([id, label]) => (
              <button key={id} className={activeSection === id ? 'is-active' : ''} onClick={() => jumpTo(id)} aria-current={activeSection === id ? 'location' : undefined} data-testid={`link-${id}`}>
                {label}
              </button>
            ))}
            <button className="nav-contact" onClick={() => jumpTo('contact')} data-testid="link-start-conversation">Start a conversation <ArrowUpRight size={13} style={{ verticalAlign: 'middle' }} /></button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container-wide hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Prosthetics / Orthotics / Clinical practice</div>
              <h1 className="display">Evidence for <em>better movement.</em></h1>
              <p className="hero-lede">I am Francis Onyema Chinenyeze — a board-certified prosthetist and orthotist in Abuja with over four years of clinical experience across patient-centred care, gait analysis, digital design and 3D fabrication.</p>
              <div className="hero-actions">
                <button className="button-primary" onClick={() => jumpTo('case-study')} data-testid="button-view-case-study">Read the case study <ArrowDownRight size={16} /></button>
                <button className="button-text" onClick={() => jumpTo('evidence')} data-testid="button-view-cpd">Explore CPD evidence <ArrowDownRight size={15} /></button>
              </div>
              <div className="hero-note"><span className="hero-note-line" /><span>A professional portfolio of practice and reflection. Source evidence is represented faithfully; reported patient feedback is labelled as reported, not presented as a universal or independently verified outcome.</span></div>
            </div>
            <div className="anatomy-plate reveal" role="img" aria-label="Explanatory clinical systems diagram">
              <div className="plate-visual">
                <div className="plate-ring"><div className="plate-core" /></div>
                <span className="plate-label top">ASSESS / OBSERVE</span><span className="plate-label side">ITERATE</span><span className="plate-label bottom">MEASURE / REFLECT</span>
              </div>
              <div className="plate-caption"><span className="mono">EXPLANATORY REPRESENTATION</span><br />A visual shorthand for the relationship between clinical reasoning, design iteration and outcome-informed care.</div>
            </div>
          </div>
        </section>

        <section className="strip" aria-label="Portfolio summary">
          <div className="container-wide strip-grid">
            <div className="strip-item"><span className="strip-value">122</span><span className="strip-label">CPD hours recorded<br />period shown in source portfolio</span></div>
            <div className="strip-item"><span className="strip-value">21</span><span className="strip-label">submitted entries<br />supporting development</span></div>
            <div className="strip-item"><span className="strip-value">20 / 1</span><span className="strip-label">diary submissions<br />reflective submission</span></div>
            <div className="strip-item"><span className="strip-value">2025—26</span><span className="strip-label">source portfolio period<br />22 Oct 2025 — 29 Aug 2026</span></div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container-wide">
            <div className="section-heading">
              <span className="eyebrow">01 / Profile</span>
              <div><h2 className="display">A technical practice with a human centre.</h2><p>My work sits where clinical judgement meets practical making: understanding the person, reading the movement, then shaping a device around what matters in their life.</p></div>
            </div>
            <div className="profile-grid">
              <div className="profile-block">
                <h3 className="mono">POSITION</h3>
                <p>Currently at Instalimb, I work where clinical judgement meets digital manufacturing: from patient assessment and 3D scanning through CAD design, fabrication, fitting and follow-up. My practice is also shaped by teaching, mentorship, community advocacy and a commitment to making evidence useful at the point of care.</p>
              </div>
              <div className="profile-block">
                <h3 className="mono">AT A GLANCE</h3>
                <ul className="profile-list">
                  <li><span>Profession</span><span>Prosthetics &amp; orthotics</span></li>
                  <li><span>Based in</span><span>Abuja, Nigeria</span></li>
                  <li><span>Current role</span><span>Prosthetist &amp; Orthotist · Instalimb</span></li>
                  <li><span>Digital practice</span><span>3D scanning · CAD · 3D printing</span></li>
                  <li><span>Education</span><span>Prosthetics &amp; Orthotics · FUTO</span></li>
                  <li><span>Clinical experience</span><span>4+ years</span></li>
                  <li><span>Certification</span><span>Board-certified P&amp;O · 2022</span></li>
                  <li><span>Registration reference</span><span>MR/22/0167</span></li>
                </ul>
              </div>
            </div>
            <div className="experience-trail">
              <div className="experience-label">
                <span className="mono">SELECTED EXPERIENCE</span>
                <span className="experience-location">ABUJA / NIGERIA</span>
              </div>
              <div className="experience-list">
                {professionalExperience.map(item => (
                  <article className="experience-item" key={`${item.organisation}-${item.period}`}>
                    <span className="experience-period mono">{item.period}</span>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="experience-org">{item.organisation}</p>
                      <p className="experience-detail">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="credentials-trail">
              <div className="experience-label">
                <span className="mono">CREDENTIALS / FOCUS</span>
                <span className="experience-location">CLINICAL / DIGITAL / COMMUNITY</span>
              </div>
              <div className="credentials-grid">
                <div className="credential-list">
                  {credentials.map(item => (
                    <article className="credential-item" key={item.title}>
                      <span className="credential-label mono">{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </div>
                <div className="research-panel">
                  <span className="credential-label mono">RESEARCH INTERESTS</span>
                  <div className="interest-list">
                    {researchAndService.interests.map(item => <span key={item}>{item}</span>)}
                  </div>
                  <span className="credential-label mono publication-label">SELECTED WRITING</span>
                  <ul>
                    {researchAndService.publications.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section case-study" id="case-study">
          <div className="container-wide">
            <div className="section-heading">
              <span className="eyebrow">02 / Reflective case study</span>
              <div><h2 className="display case-title">Moving from containment to considered freedom.</h2><p>A reflective account of designing and fabricating a sub-ischial transfemoral socket for a patient who had used an ischial containment socket for over six years.</p></div>
            </div>
            <div className="case-layout">
              <aside className="case-sticky">
                <h3>One case.<br />Several kinds<br /><em>of evidence.</em></h3>
                <p>The source reflection describes the decisions, observations and learning in this fitting process. The visual treatment below is an explanatory interpretation, not a clinical record or a patient image.</p>
                <div className="case-meta">
                  <div><span>REFLECTION DATE</span><span>22 October 2025</span></div>
                  <div><span>DESIGN LANGUAGE</span><span>NU FlexSIV / NU FlexSIS</span></div>
                  <div><span>TOOLS REFERENCED</span><span>PLUS-M™ / Onform</span></div>
                </div>
              </aside>
              <div className="case-flow">
                <div className="flow-row"><div className="flow-index">01</div><div className="flow-content"><h4>Context / a change in design</h4><p>The opportunity was to design and fabricate a sub-ischial transfemoral socket for a patient transitioning from a long-used ischial containment design. The reflection compares comfort, suspension, control and gait.</p><div className="flow-tags"><span className="flow-tag">TRANSFEMORAL</span><span className="flow-tag">SOCKET DESIGN</span></div></div></div>
                <div className="comparison"><div><h4>Ischial containment</h4><p>Previous socket design used by the patient for over six years.</p></div><div><h4>Sub-ischial</h4><p>New design considered around individual anatomy, function and feedback.</p></div></div>
                <div className="flow-row"><div className="flow-index">02</div><div className="flow-content"><h4>Investigation / listen, observe, locate</h4><p>During test fitting, I assessed comfort, suspension, residual-limb movement, pelvic stability and gait pattern across the body’s planes. Patient feedback added information about pressure, sitting comfort and perceived security that observation alone could not provide.</p><div className="flow-tags"><span className="flow-tag">CLINICAL FINDINGS</span><span className="flow-tag">PATIENT FEEDBACK</span><span className="flow-tag">DYNAMIC GAIT</span></div></div></div>
                <div className="flow-row"><div className="flow-index">03</div><div className="flow-content"><h4>Decision / design for the person in front of you</h4><p>Clinical and anatomical findings were incorporated into the design and fabrication process using NU FlexSIV and NU FlexSIS socket designs. The intention was adequate containment without unnecessarily restricting the patient.</p><div className="evidence-callout"><strong>Decision principle.</strong> The reflection identifies small changes to socket shape, trimlines and pressure distribution as meaningful levers for comfort, stability and gait.</div></div></div>
                <div className="flow-row"><div className="flow-index">04</div><div className="flow-content"><h4>Iteration / make the next change deliberate</h4><p>The fitting reinforced an incremental approach: assess, modify, reassess. Rather than treating the first design as final, each change was informed by clinical assessment and the patient’s own account of the device.</p></div></div>
                <div className="flow-row"><div className="flow-index">05</div><div className="flow-content"><h4>Validation / two lenses on movement</h4><p>PLUS-M™ was used as an outcome measure, while Onform supported video-based observational gait analysis. The reflection reports patient feedback of improved perineal comfort, particularly during sitting, and improved hip stability and prosthetic control. These are reported observations from the source reflection, not independently verified metrics.</p><div className="flow-tags"><span className="flow-tag">PLUS-M™</span><span className="flow-tag">ONFORM GAIT ANALYSIS</span><span className="flow-tag">REPORTED OBSERVATION</span></div></div></div>
                <div className="flow-row"><div className="flow-index">06</div><div className="flow-content"><h4>Learning / carry the reasoning forward</h4><p>The experience strengthened my approach to transfemoral socket assessment and design: begin with individual anatomy and functional requirements, involve the patient throughout, and make dynamic gait assessment part of systematic evaluation.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="evidence">
          <div className="container-wide">
            <div className="section-heading cpd-intro">
              <span className="eyebrow">03 / CPD evidence</span>
              <div><h2 className="display">A record of staying curious.</h2><p>Selected evidence from the CPD portfolio, condensed for scanning. The source records 121.66 hours in detail and presents the portfolio summary as 122 hours.</p></div>
            </div>
            <div className="evidence-grid">
              <div className="hours-card"><span className="eyebrow" style={{ color: 'hsl(42 40% 98% / .75)' }}>Recorded learning</span><div className="hours-number">122</div><p>hours of CPD across professional, educational, technical and reflective activity.</p><div className="hours-foot"><span>22 OCT 2025</span><span>29 AUG 2026</span></div></div>
              <div>
                <div className="evidence-tabs" role="tablist" aria-label="Evidence themes">
                  {(Object.keys(evidenceTabs) as TabKey[]).map(key => <button key={key} role="tab" aria-selected={activeTab === key} className={`evidence-tab ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)} data-testid={`tab-evidence-${key}`}>{evidenceTabs[key].label}</button>)}
                </div>
                <div className="evidence-panel" role="tabpanel"><h3>{selectedEvidence.title}</h3><p>{selectedEvidence.body}</p><ul className="evidence-list">{selectedEvidence.items.map(item => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </div>
            <div className="diary-table-wrap">
              <div className="diary-table-head"><span>Selected diary entries</span><span>Date</span><span>Hours</span></div>
              {visibleEntries.map(([title, date, hours], index) => <div className="diary-row" key={title}><span className="diary-title">{String(index + 1).padStart(2, '0')} &nbsp; {title}</span><span className="diary-date">{date}</span><span className="diary-hours">{hours}</span></div>)}
              <button className="show-more" onClick={() => setShowAll(show => !show)} data-testid="button-toggle-diary">{showAll ? 'Show fewer entries' : `Show all ${diaryEntries.length} entries`} <ChevronDown size={13} style={{ transform: showAll ? 'rotate(180deg)' : undefined, verticalAlign: 'middle' }} /></button>
            </div>
          </div>
        </section>

        <section className="section practice-section">
          <div className="container-wide">
            <div className="section-heading"><span className="eyebrow">04 / Working principles</span><div><h2 className="display">Make the evidence useful.</h2><p>Across the portfolio, three threads recur: understand the person, make carefully, and keep learning from what happens next.</p></div></div>
            <div className="practice-grid">
              <div className="practice-card"><span className="practice-number">01</span><h3>Patient-centred reasoning</h3><p>Feedback about comfort, pressure, sitting and security is treated as part of the clinical picture — alongside observation and assessment.</p><div className="tools"><span className="tool">SHARED DECISION-MAKING</span><span className="tool">FUNCTIONAL NEEDS</span></div></div>
              <div className="practice-card"><span className="practice-number">02</span><h3>Digital, not detached</h3><p>3D scanning, modelling and digital fabrication are approached as tools for better individualisation, not replacements for clinical judgement.</p><div className="tools"><span className="tool">3D SCANNING</span><span className="tool">MODELLING</span><span className="tool">FABRICATION</span></div></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container-wide contact-grid">
            <div><div className="eyebrow">05 / Next step</div><h2 className="display">Let’s talk about the work.</h2><p>For a clinical collaboration, practice education conversation or a role where thoughtful making matters, I would welcome a considered conversation.</p><div className="contact-links"><a className="contact-link" href="/Chinenyeze-Francis-Onyema-CV.pdf" download aria-label="Download Francis Onyema Chinenyeze's CV">Download my CV <Download size={16} /></a><a className="contact-link" href="mailto:chinenyezefrancis@gmail.com" aria-label="Email Francis Onyema Chinenyeze">chinenyezefrancis@gmail.com <ExternalLink size={16} /></a><a className="contact-link" href="https://www.linkedin.com/in/chinenyeze-francis-onyema-" target="_blank" rel="noreferrer" aria-label="Open Francis Onyema Chinenyeze's LinkedIn profile">View my LinkedIn profile <ExternalLink size={16} /></a></div></div>
            <div className="contact-note"><span className="mono">A NOTE ON EVIDENCE</span><br /><br />This presentation is based on Francis Onyema Chinenyeze’s CPD portfolio and reflective entry. Synthetic diagrams are labelled as explanatory representations. No patient-identifying imagery, fabricated testimonials or unverified outcome claims are used.</div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container-wide footer-inner"><span>© Francis Onyema Chinenyeze</span><span className="mono">PROSTHETICS / ORTHOTICS / EVIDENCE</span></div></footer>
    </div>
  );
}

export default App;