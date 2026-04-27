import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <div className="container nav-inner">
          <NavLink to="/" className="nav-logo">
            <span className="logo-icon">🌱</span>
            HopeForward
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
            <NavLink to="/donate" className="nav-link nav-donate">
              Donate Now
            </NavLink>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
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
          <NavLink to="/donate" className="nav-link">
            💛 Donate Now
          </NavLink>
        </div>
      </nav>
    </>
  );
}
