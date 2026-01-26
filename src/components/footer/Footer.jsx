import './Footer.css'

function Footer() {

  return (
    <>
      <div className="footer-main">
        <div className="footer-section">
          <div className="footer-section1">
            <div className="footer-profile">
              <h2>Rayan Nejara</h2>
            </div>
            <p className="footer-section1-description">Creating exceptional digital experiences through innovative design and development.</p>
          </div>
          <div className="footer-section2">
            <h3>quick links</h3>
            <ul>
              <li><a href="#cards">projekte</a></li>
              <li><a href="#about">über mich</a></li>
              <li><a href="https://www.linkedin.com/in/rayannejara/">LinkedIn</a></li>
              <li><a href="https://github.com/R-Nejara">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-section3">
            <h3>Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Web Entwicklung</li>
              <li>Linux</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="copyright-section">&copy; 2025. Alle Rechte Sind Vorbehalten.</div>
      </div>
    </>
  )
}

export default Footer
