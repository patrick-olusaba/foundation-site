import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/jfam-foundation.png';
import { useLang } from '../context/LangContext';
import { t } from '../i18n/translations';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, toggle } = useLang();
  const tr = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const NAV_ITEMS = [
    { label: tr.nav_home, path: '/' },
    { label: tr.nav_about, path: '/about' },
    { label: tr.nav_programs, path: '/programs' },
    { label: tr.nav_blog, path: '/blog' },
    { label: tr.nav_volunteer, path: '/volunteer' },
    { label: tr.nav_contact, path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="container nav-inner">
          <NavLink to="/" className="nav-logo">
            <img src={logoImg} alt="JFAM Foundation" className="nav-logo-img" />
          </NavLink>

          <div className="nav-links">
            {NAV_ITEMS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
            <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
              {lang === 'en' ? '🇰🇪 SW' : '🇬🇧 EN'}
            </button>
            <NavLink to="/donate" className="nav-link nav-donate">
              {tr.nav_donate}
            </NavLink>
          </div>

          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>

        <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <button className="lang-toggle lang-toggle-mobile" onClick={toggle}>
            {lang === 'en' ? '🇰🇪 Kiswahili' : '🇬🇧 English'}
          </button>
          <NavLink to="/donate" className="nav-link">
            💛 {tr.nav_donate}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
