import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem' }}>
              <span className="logo-icon">🌱</span>
              HopeForward
            </Link>
            <p className="footer-desc">
              We believe every child deserves a chance to thrive. Join our mission to bring hope, education, and better futures to children in need worldwide.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">t</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">yt</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/programs">Our Programs</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-heading">Our Programs</h4>
            <div className="footer-links">
              <Link to="/programs">Child Education</Link>
              <Link to="/programs">Clean Water</Link>
              <Link to="/programs">Nutrition Support</Link>
              <Link to="/programs">Medical Care</Link>
              <Link to="/programs">Women Empowerment</Link>
              <Link to="/programs">Emergency Relief</Link>
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>244 Royal Ln, New York, NY 10001, USA</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>+1 (555) 234-5678</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span>hello@hopeforward.org</span>
            </div>

            <h4 className="footer-heading" style={{ marginTop: 24 }}>Newsletter</h4>
            <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HopeForward Foundation. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
