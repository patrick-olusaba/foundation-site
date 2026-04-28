import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/about.css';

const TEAM = [
  {
    name: 'Leslie Alexander',
    role: 'Senior Volunteer',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  },
  {
    name: 'Joshua Nunnally',
    role: 'Field Volunteer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Ken William',
    role: 'Programs Director',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Lillian Lewis',
    role: 'Fundraising Lead',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
];

const FEATURES = [
  { icon: '🎓', title: 'We Educate & Help Poor People', desc: 'Providing quality education and resources to underserved communities.' },
  { icon: '🤝', title: 'We Helping People & Donations', desc: 'Connecting donors with communities through impactful giving programs.' },
  { icon: '🛡️', title: 'We Ensure Safety & Donation', desc: 'Providing essential treatment, ensuring a better future for all.' },
  { icon: '🏥', title: 'Awarded Service & Treatment', desc: 'Recognized for delivering top quality care and support worldwide.' },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80',
  'https://images.unsplash.com/photo-1590608897129-79da98d15969?w=600&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
];

export default function About() {
  return (
    <main className="page-enter">
      <Helmet>
        <title>About Us | Jfam Foundation</title>
        <meta name="description" content="Learn about Jfam Foundation's mission, leadership team, and global partners working to protect and empower children worldwide." />
      </Helmet>

      {/* ── Dark Photo Hero ── */}
      <section className="page-hero-dark">
        <div
          className="page-hero-dark-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80)' }}
        />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>About Us</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* ── Collage + Mission ── */}
      <section className="section">
        <div className="container">
          <div className="about-collage-grid">
            {/* Image collage */}
            <div className="about-collage animate-fade-up">
              <img
                className="collage-main"
                src="https://images.unsplash.com/photo-1590608897129-79da98d15969?w=700&q=80"
                alt="Children learning"
              />
              <img
                className="collage-top-right"
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80"
                alt="Volunteer with children"
              />
              <img
                className="collage-bottom-right"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                alt="Education program"
              />
              <div className="collage-badge">
                <span>Since</span>
                <strong>1,999</strong>
              </div>
            </div>

            {/* Text content */}
            <div className="animate-fade-up delay-2">
              <span className="section-tag">Building Brighter Futures Through Kindness</span>
              <h2 className="section-title">Helping Each Other Can Make <em style={{ color: 'var(--amber)', fontStyle: 'normal' }}>World</em> Better</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Helping each other builds a stronger, wider, and more harmonious world. When we support one another, we create an environment of trust, understanding, and mutual respect. Acts of kindness, big or small, can cultivate a community where challenges become opportunities for growth, and difficulties become stepping stones.
              </p>
              <ul className="about-bullet-list">
                <li>Passion Driven</li>
                <li>Helped fund 2,000+ Product powerful</li>
                <li>Award Winning nonprofit company</li>
              </ul>
              <div className="about-contact-row">
                <div className="about-contact-avatars">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=60&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" alt="" />
                </div>
                <div>
                  <div className="about-contact-label">Phone</div>
                  <div className="about-contact-value">+1 (345) 090-21</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Connect ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="animate-fade-up">
            <span className="section-tag">Compassion in Action, Join Us Today</span>
            <h2 className="section-title">How We Connect With<br />People Helping</h2>
            <div className="divider centered" />
          </div>
          <div className="grid-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`connect-card animate-fade-up delay-${i + 1}`}>
                <div className="connect-icon">{f.icon}</div>
                <h4 className="connect-title">{f.title}</h4>
                <p className="connect-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className="animate-fade-up">
            <span className="section-tag">You Can Help The Poor With Us</span>
            <h2 className="section-title">Meet The <em style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Team</em> Member</h2>
          </div>
          <div className="grid-4">
            {TEAM.map((m, i) => (
              <div key={m.name} className={`team-card-new animate-fade-up delay-${i + 1}`}>
                <div className="team-img-wrap">
                  <img src={m.img} alt={m.name} loading="lazy" />
                  <div className="team-volunteer-badge">VOLUNTEER</div>
                  <button className="team-share-btn" aria-label="Share">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </button>
                </div>
                <div className="team-card-body">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/contact" className="btn btn-teal">All Volunteer</Link>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }} className="animate-fade-up">
            <span className="section-tag">Photos doing good children</span>
            <h2 className="section-title">Our Awesome Gallery</h2>
            <div className="divider centered" />
          </div>
          <div className="gallery-grid animate-fade-up delay-1">
            {GALLERY.map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-inner animate-fade-up">
          <span className="section-tag" style={{ color: 'var(--amber-light)' }}>Join Our Mission</span>
          <h2 className="section-title light">Ready to Make a Difference?</h2>
          <p>Whether you donate, volunteer, or spread the word — every action counts.</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
            <Link to="/contact" className="btn btn-outline">Get Involved</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
