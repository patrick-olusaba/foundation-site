import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/about.css';
import '../styles/programs.css';

const PROGRAMS = [
  {
    title: 'Child Education Initiative',
    cat: 'Education',
    icon: '📚',
    desc: 'We build and equip classrooms, train teachers, and provide scholarships so every child can access quality education regardless of their background or financial situation.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    raised: 84000,
    goal: 100000,
    pct: 84,
    beneficiaries: '18,000+ children',
    countries: 12,
  },
  {
    title: 'Clean Water Access',
    cat: 'Health',
    icon: '💧',
    desc: 'We construct wells, water purification systems, and hygiene facilities in villages lacking safe water. Every five seconds, a child dies from water-related illness — we are changing that.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    raised: 71000,
    goal: 100000,
    pct: 71,
    beneficiaries: '100,000+ people',
    countries: 8,
  },
  {
    title: 'Nutrition & Meals Program',
    cat: 'Food',
    icon: '🥗',
    desc: 'We provide daily nutritious meals at schools and community centers, addressing malnutrition that stunts physical and cognitive development in millions of children.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    raised: 39000,
    goal: 100000,
    pct: 39,
    beneficiaries: '12,000+ children',
    countries: 7,
  },
  {
    title: 'Medical Care & Clinics',
    cat: 'Health',
    icon: '🏥',
    desc: 'Mobile health clinics, vaccination drives, and maternal health services bring essential medical care to children and families in remote and underserved regions.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    raised: 56000,
    goal: 100000,
    pct: 56,
    beneficiaries: '25,000+ patients',
    countries: 10,
  },
  {
    title: 'Women Empowerment',
    cat: 'Community',
    icon: '👩‍💼',
    desc: 'Empowering mothers and young women through vocational training, microfinance, and leadership programs so they can build better futures for themselves and their families.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    raised: 28000,
    goal: 100000,
    pct: 28,
    beneficiaries: '5,000+ women',
    countries: 6,
  },
  {
    title: 'Emergency Relief',
    cat: 'Emergency',
    icon: '🆘',
    desc: 'When conflict, drought, or disaster strikes, our rapid response teams deploy within 48 hours to deliver food, shelter, medicine, and psychological support to affected families.',
    img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
    raised: 92000,
    goal: 100000,
    pct: 92,
    beneficiaries: '30,000+ people',
    countries: 15,
  },
];

const CATS = ['All', 'Education', 'Health', 'Food', 'Community', 'Emergency'];

const VOLUNTEER_IMGS = [
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=60&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80',
];

export default function Programs() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROGRAMS : PROGRAMS.filter(p => p.cat === active);

  return (
    <main className="page-enter">
      <Helmet>
        <title>Our Programs | HopeForward Foundation</title>
        <meta name="description" content="Explore HopeForward's programs: child education, clean water, nutrition, medical care, women empowerment, and emergency relief across 25 countries." />
      </Helmet>
      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80)' }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>Our Programs</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Programs</span>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section">
        <div className="container">
          <div className="programs-filter animate-fade-up">
            {CATS.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.map((p, i) => (
            <div key={p.title} className={`prog-card-lg animate-fade-up delay-${(i % 3) + 1}`} style={{ flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="prog-card-lg-body">
                <div className="prog-icon">{p.icon}</div>
                <span className="program-tag prog-cat-tag">{p.cat}</span>
                <h3 className="prog-title">{p.title}</h3>
                <p className="prog-desc">{p.desc}</p>

                <div className="prog-stats">
                  <div>
                    <div className="prog-stat-label">Beneficiaries</div>
                    <div className="prog-stat-value">{p.beneficiaries}</div>
                  </div>
                  <div>
                    <div className="prog-stat-label">Countries</div>
                    <div className="prog-stat-value">{p.countries} nations</div>
                  </div>
                </div>

                <div className="prog-progress-header">
                  <span>Raised: <strong className="prog-raised-amt">${(p.raised / 1000).toFixed(0)}K</strong></span>
                  <span className="prog-pct">{p.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                </div>
                <div className="prog-goal">Goal: ${(p.goal / 1000).toFixed(0)}K</div>

                <div className="prog-actions">
                  <Link to="/donate" className="btn btn-primary btn-sm">Donate to This Cause</Link>
                  <div className="prog-volunteers">
                    <div className="prog-volunteers-avatars">
                      {VOLUNTEER_IMGS.map((src, vi) => (
                        <img key={vi} src={src} alt="volunteer" loading="lazy" />
                      ))}
                    </div>
                    <span>+120 Volunteers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container cta-inner animate-fade-up">
          <span className="section-tag" style={{ color: 'var(--amber-light)' }}>Take Action</span>
          <h2 className="section-title light">Every Contribution Matters</h2>
          <p>No gift is too small. Your donation today funds programs that literally save and transform children's lives.</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
            <Link to="/contact" className="btn btn-outline">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
