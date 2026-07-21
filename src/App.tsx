import { useEffect, useRef, useState } from 'react'
import './App.css'

const stacks = ['TypeScript + JavaScript', 'React', 'NextJS', 'Python', 'C']

function App() {
  const footerRef = useRef<HTMLElement>(null)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting)
    })

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio">
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
          <div className="hero-meteors" aria-hidden="true">
            <i className="hero-meteor hero-meteor-1" />
            <i className="hero-meteor hero-meteor-2" />
            <i className="hero-meteor hero-meteor-3" />
          </div>
          <p className="eyebrow">WEB DEVELOPER</p>
          <h1 id="hero-title">
            <span>SANGMOON</span>
            <span className="outline-text">PARK</span>
          </h1>
        </div>

        <a className="scroll-cue" href="#profile" aria-label="Scroll to profile">
          <span>SCROLL TO EXPLORE</span>
          <span
            className={`scroll-arrow${isFooterVisible ? ' scroll-arrow-hidden' : ''}`}
            aria-hidden="true"
          >
            ↓
          </span>
        </a>
      </section>

      <section className="profile" id="profile" aria-labelledby="profile-title">
        <div className="section-label">
          <span>02</span>
          <p>PROFILE</p>
        </div>

        <div className="profile-main">
          <h2 id="profile-title">
            <span className="quote-desktop">
              “복잡함을 덜어내고,
              <br />
              본질에 가까운 웹을 만듭니다.”
            </span>
            <span className="quote-mobile">
              “복잡함을
              <br />
              덜어내고,
              <br />
              본질에 가까운
              <br />
              웹을 만듭니다.”
            </span>
          </h2>

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
                {index === 0 ? (
                  <strong className="stack-combined">
                    <span>TypeScript</span>
                    <span className="stack-plus">+</span>
                    <span>JavaScript</span>
                  </strong>
                ) : (
                  <strong>{stack}</strong>
                )}
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

      <section className="profile problem-solving" aria-labelledby="problem-solving-title">
        <div className="section-label">
          <span>05</span>
          <p>APPROACH</p>
        </div>

        <div className="profile-main">
          <h2 id="problem-solving-title">
            <span className="quote-desktop">
              “문제를 명확히 정의하고,
              <br />
              가장 단순한 해답을 설계합니다.”
            </span>
            <span className="quote-mobile">
              “문제를 명확히
              <br />
              정의하고,
              <br />
              가장 단순한 해답을
              <br />
              설계합니다.”
            </span>
          </h2>
        </div>

        <div className="profile-note">
          <p>
            Define clearly. Solve deliberately.
            <br />
            From complexity to a useful answer.
          </p>
        </div>
      </section>

      <section className="singularity" aria-labelledby="singularity-title">
        <div className="singularity-topline">
          <span>06</span>
          <p>ORIGIN / OUTPUT</p>
          <p>SCROLL EVENT — 00:00:01</p>
        </div>

        <div className="impact-field" aria-hidden="true">
          <span className="impact-guide impact-guide-vertical" />
          <span className="impact-guide impact-guide-horizontal" />

          <div className="blackhole-system">
            <span className="blackhole-aura" />
            <span className="blackhole-lens" />
            <span className="blackhole-disk blackhole-disk-back" />
            <span className="blackhole-ticks" />
            <span className="blackhole-horizon" />
            <span className="blackhole-disk blackhole-disk-front" />
            <span className="blackhole-scan blackhole-scan-1" />
            <span className="blackhole-scan blackhole-scan-2" />
            <span className="blackhole-scan blackhole-scan-3" />
            <span className="blackhole-scan blackhole-scan-4" />
            <span className="blackhole-scan blackhole-scan-5" />
            <span className="blackhole-scan blackhole-scan-6" />
          </div>
        </div>

        <div className="finale-copy">
          <div className="finale-label">
            <span>FROM A SINGLE POINT</span>
            <span>TO AN INFINITE WEB</span>
          </div>
          <h2 id="singularity-title">
            <span className="finale-heading-line">
              <span>CODE</span>
              <span>BECOMES</span>
            </span>
            <span>EXPERIENCE.</span>
          </h2>
          <div className="finale-meta">
            <p>SANGMOON PARK / WEB DEVELOPER</p>
            <p>BUILDING THE CLEAR, THE USEFUL, THE ENDURING.</p>
          </div>
        </div>
      </section>

      <footer ref={footerRef}>
        <p>© 2026 SANGMOON PARK</p>
        <p>DESIGNED &amp; BUILT IN SEOUL</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
