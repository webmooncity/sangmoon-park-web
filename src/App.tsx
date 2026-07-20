import './App.css'

const stacks = ['TypeScript + JavaScript', 'React', 'NextJS', 'Python', 'C']

function App() {
  return (
    <main className="portfolio">
      <div className="scroll-journey" aria-hidden="true">
        <span className="route-segment route-a" />
        <span className="route-segment route-b" />
        <span className="route-segment route-c" />
        <span className="route-segment route-d" />
        <span className="route-segment route-e" />
        <span className="journey-pulse" />
      </div>

      <header className="site-header">
        <div className="header-meta" aria-label="Current location and availability">
          <span>SEOUL, KOREA</span>
          <span className="availability">
            <i aria-hidden="true" /> AVAILABLE FOR WORK
          </span>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>DEVELOPER / 2026</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">WEB DEVELOPER</p>
          <h1 id="hero-title">
            <span>SANGMOON</span>
            <span className="outline-text">PARK</span>
          </h1>
          <p className="hero-copy">
            I design and build clear, enduring experiences for the web.
          </p>
        </div>

        <a className="scroll-cue" href="#profile" aria-label="Scroll to profile">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="profile" id="profile" aria-labelledby="profile-title">
        <div className="section-label">
          <span>02</span>
          <p>PROFILE</p>
        </div>

        <div className="profile-main">
          <h2 id="profile-title">
            복잡함을 덜어내고,
            <br />
            본질에 가까운 웹을 만듭니다.
          </h2>

          <blockquote>“간결함은 궁극의 정교함이다.”</blockquote>
        </div>

        <div className="profile-note">
          <p>
            Thoughtful code. Precise interaction.
            <br />
            Digital experiences made to last.
          </p>
        </div>
      </section>

      <section className="details" aria-label="Skills and contact information">
        <article className="detail-block stack-block">
          <div className="detail-heading">
            <span>03</span>
            <h2>STACK</h2>
          </div>
          <ul className="stack-list">
            {stacks.map((stack, index) => (
              <li key={stack}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{stack}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-block contact-block">
          <div className="detail-heading">
            <span>04</span>
            <h2>CONTACT</h2>
          </div>
          <address>
            <div className="contact-row">
              <span>LOCATION</span>
              <p>Seoul, Korea</p>
            </div>
            <div className="contact-row">
              <span>PHONE</span>
              <a href="tel:+821037595969">+82 10 3759 5969</a>
            </div>
            <div className="contact-row">
              <span>E-MAIL</span>
              <a href="mailto:sangmoon.web@gmail.com">sangmoon.web@gmail.com</a>
            </div>
          </address>
        </article>
      </section>

      <section className="singularity" aria-labelledby="singularity-title">
        <div className="singularity-topline">
          <span>05</span>
          <p>ORIGIN / OUTPUT</p>
          <p>SCROLL EVENT — 00:00:01</p>
        </div>

        <div className="impact-field" aria-hidden="true">
          <span className="impact-frame-left" />
          <span className="impact-frame-right" />
          <span className="impact-line impact-drop" />
          <span className="impact-line impact-turn" />

          <div className="impact-node">
            <span className="impact-halo" />
            <span className="impact-ring impact-ring-outer" />
            <span className="impact-ring impact-ring-inner" />
            <span className="impact-core" />
          </div>

          <div className="impact-readout">
            <span>SIGNAL / 05</span>
            <span>AMPLIFICATION — 01.00</span>
          </div>
        </div>

        <div className="finale-copy">
          <div className="finale-label">
            <span>FROM A SINGLE POINT</span>
            <span>TO AN INFINITE WEB</span>
          </div>
          <h2 id="singularity-title">
            <span>CODE BECOMES</span>
            <span>EXPERIENCE.</span>
          </h2>
          <div className="finale-meta">
            <p>SANGMOON PARK / WEB DEVELOPER</p>
            <p>BUILDING THE CLEAR, THE USEFUL, THE ENDURING.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 SANGMOON PARK</p>
        <p>DESIGNED &amp; BUILT IN SEOUL</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
