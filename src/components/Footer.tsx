import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { t } from '../i18n/translations';
import logoImg from '../assets/jfam-foundation.png';
import '../styles/footer.css';

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" style={{ display: 'inline-block' }}>
              <img src={logoImg} alt="JFAM Foundation" style={{ height: 64, width: 'auto' }} />
            </Link>
            <p className="footer-desc">{tr.footer_desc}</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">t</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{tr.footer_links}</h4>
            <div className="footer-links">
              <Link to="/">{tr.nav_home}</Link>
              <Link to="/about">{tr.nav_about}</Link>
              <Link to="/programs">{tr.nav_programs}</Link>
              <Link to="/blog">{tr.nav_blog}</Link>
              <Link to="/volunteer">{tr.nav_volunteer}</Link>
              <Link to="/donate">{tr.nav_donate}</Link>
              <Link to="/contact">{tr.nav_contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{tr.footer_programs}</h4>
            <div className="footer-links">
              <Link to="/programs/child-education">{lang === 'en' ? 'Child Education' : 'Elimu ya Watoto'}</Link>
              <Link to="/programs/clean-water">{lang === 'en' ? 'Clean Water' : 'Maji Safi'}</Link>
              <Link to="/programs/nutrition-meals">{lang === 'en' ? 'Nutrition Support' : 'Msaada wa Lishe'}</Link>
              <Link to="/programs/medical-care">{lang === 'en' ? 'Medical Care' : 'Huduma za Afya'}</Link>
              <Link to="/programs/women-empowerment">{lang === 'en' ? 'Women Empowerment' : 'Uwezeshaji wa Wanawake'}</Link>
              <Link to="/programs/emergency-relief">{lang === 'en' ? 'Emergency Relief' : 'Msaada wa Dharura'}</Link>
              <Link to="/programs/youth-sports-talent">{lang === 'en' ? 'Youth Sports & Talent' : 'Michezo ya Vijana'}</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{tr.footer_contact}</h4>
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

            <h4 className="footer-heading" style={{ marginTop: 24 }}>{tr.footer_newsletter}</h4>
            <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder={tr.footer_newsletter_placeholder} />
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{tr.footer_copy}</span>
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
