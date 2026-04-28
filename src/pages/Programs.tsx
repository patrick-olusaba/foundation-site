import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROGRAMS } from '../data/content';
import '../styles/about.css';
import '../styles/programs.css';

const CATS = ['All', 'Education', 'Health', 'Food', 'Community', 'Emergency', 'Sports'];

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
        <title>Our Programs | Jfam Foundation</title>
        <meta name="description" content="Explore Jfam Foundation's programs: child education, clean water, nutrition, medical care, women empowerment, and emergency relief across 25 countries." />
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
                  <Link to={`/programs/${p.slug}`} className="btn btn-teal btn-sm">Learn More →</Link>
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
