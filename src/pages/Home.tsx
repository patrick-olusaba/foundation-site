import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import '../styles/home.css';

const PROGRAMS = [
  {
    title: 'Child Education',
    tag: 'Education',
    desc: 'Providing quality education and school supplies to children in underserved communities worldwide.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    raised: 84000,
    goal: 100000,
    pct: 84,
  },
  {
    title: 'Clean Water Access',
    tag: 'Health',
    desc: 'Building wells and water purification systems in rural villages to ensure safe drinking water.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80',
    raised: 71000,
    goal: 100000,
    pct: 71,
  },
  {
    title: 'Nutrition & Meals',
    tag: 'Food',
    desc: 'Daily nutritious meals for malnourished children to support healthy growth and development.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    raised: 39000,
    goal: 100000,
    pct: 39,
  },
];

const TESTIMONIALS = [
  {
    text: 'HopeForward changed my daughter\'s life. She now attends school and dreams of becoming a doctor. I am eternally grateful for the support this foundation provides.',
    name: 'Amara Diallo',
    role: 'Parent, Senegal',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    text: 'As a volunteer, I\'ve witnessed firsthand how every dollar donated translates into real impact. The team\'s dedication is truly inspiring.',
    name: 'James Okonkwo',
    role: 'Field Volunteer, Kenya',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
  {
    text: 'The clean water project brought a borehole to our village. Children are now healthier and mothers no longer walk miles for water every day.',
    name: 'Fatima Al-Hassan',
    role: 'Community Leader, Mali',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
];

const NEWS = [
  {
    title: '500 New Classrooms Built Across East Africa',
    excerpt: 'Our education initiative reached a new milestone, constructing 500 classrooms benefiting over 25,000 students.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    date: 'Apr 12, 2026',
    cat: 'Education',
  },
  {
    title: 'Clean Water Project Reaches 100,000 Beneficiaries',
    excerpt: 'Thanks to generous donors, our water access program now serves over 100,000 people across 12 countries.',
    img: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80',
    date: 'Mar 28, 2026',
    cat: 'Health',
  },
  {
    title: 'Annual Gala Raises $2M for Child Welfare',
    excerpt: 'Our annual fundraising gala set a record this year, raising $2 million for programs supporting children in need.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    date: 'Mar 10, 2026',
    cat: 'Events',
  },
];

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  return (
    <div className="testimonial-slider animate-fade-up">
      <div className="testimonial-slider-card">
        <div className="testimonial-stars">{'★★★★★'}</div>
        <p className="testimonial-text">"{t.text}"</p>
        <div className="testimonial-author">
          <img className="testimonial-avatar" src={t.avatar} alt={t.name} loading="lazy" />
          <div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-role">{t.role}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-slider-nav">
        <button
          className="slider-arrow"
          onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          aria-label="Previous"
        >‹</button>
        <div className="slider-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`slider-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
        <button
          className="slider-arrow"
          onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
          aria-label="Next"
        >›</button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-enter">
      <Helmet>
        <title>HopeForward Foundation — Bringing Hope to Children in Need</title>
        <meta name="description" content="HopeForward Foundation delivers education, clean water, nutrition, and healthcare to 48,000+ children across 25 countries. Join us in making a difference." />
      </Helmet>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-shape" />
        <div className="hero-shape-2" />
        <div className="container hero-content">
          <div className="hero-text animate-fade-up">
            <div className="hero-badge">
              🌍 Making a Difference Since 2010
            </div>
            <h1 className="hero-title">
              Bringing <span>Hope</span> to<br />Children in Need
            </h1>
            <p className="hero-subtitle">
              Every child deserves safety, education, and nourishment. Join us in creating a world where no child is left behind — one life at a time.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
              <Link to="/programs" className="btn btn-outline">Our Programs →</Link>
            </div>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <div className="hero-stat-num">48K+</div>
                <div className="hero-stat-label">Children Helped</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">326</div>
                <div className="hero-stat-label">Active Campaigns</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">$12M</div>
                <div className="hero-stat-label">Funds Raised</div>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-in delay-2">
            <div className="hero-float-card">
              <strong>120+</strong>
              <span>Volunteers</span>
            </div>
            <div className="hero-img-card">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="Children smiling"
              />
              <div className="hero-img-badge">
                <div className="hero-img-badge-icon">✅</div>
                <div>
                  <strong>Verified NGO</strong>
                  <span>Since 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT BANNER ── */}
      <div className="impact-banner">
        <div className="container">
          <div className="impact-banner-inner">
            {[
              { num: '48,000+', label: 'Children Helped' },
              { num: '25', label: 'Countries Reached' },
              { num: '$12M', label: 'Total Raised' },
              { num: '15 Yrs', label: 'Of Impact' },
            ].map(({ num, label }) => (
              <div key={label} className="impact-item">
                <span className="impact-num">{num}</span>
                <span className="impact-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-stack animate-fade-up">
              <img
                className="about-img-main"
                src="https://images.unsplash.com/photo-1590608897129-79da98d15969?w=700&q=80"
                alt="Children learning"
              />
              <img
                className="about-img-secondary"
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&q=80"
                alt="Volunteer with children"
              />
              <div className="about-years-badge">
                <strong>15+</strong>
                <span>Years of Impact</span>
              </div>
            </div>

            <div className="animate-fade-up delay-2">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">We Believe Every Child Deserves a Chance to Thrive</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24 }}>
                HopeForward Foundation was built on the principle that compassion and collective action can drive lasting change. We partner with local communities to deliver education, clean water, healthcare, and nutrition to the world's most vulnerable children.
              </p>
              <div className="about-features">
                {[
                  { icon: '📚', label: 'Education First', text: 'Quality learning for every child' },
                  { icon: '💧', label: 'Clean Water', text: 'Safe water for entire villages' },
                  { icon: '🥗', label: 'Nutrition', text: 'Daily meals for healthy growth' },
                  { icon: '🏥', label: 'Medical Care', text: 'Healthcare access for all' },
                ].map(({ icon, label, text }) => (
                  <div key={label} className="about-feature">
                    <div className="about-feat-icon">{icon}</div>
                    <div>
                      <div className="about-feat-label">{label}</div>
                      <div className="about-feat-text">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-teal">Learn More About Us</Link>
                <Link to="/donate" className="btn btn-primary">Support Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="programs-header animate-fade-up">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Programs for Children</h2>
            <div className="divider centered" />
            <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto' }}>
              Your donation directly fuels life-changing programs that give children the foundations they need.
            </p>
          </div>
          <div className="grid-3">
            {PROGRAMS.map((p, i) => (
              <div key={p.title} className={`program-card animate-fade-up delay-${i + 1}`}>
                <div style={{ overflow: 'hidden' }}>
                  <img className="program-img" src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="program-body">
                  <span className="program-tag">{p.tag}</span>
                  <h3 className="program-title">{p.title}</h3>
                  <p className="program-desc">{p.desc}</p>
                  <div className="program-progress-label">
                    <span>Progress</span>
                    <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{p.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                  </div>
                  <div className="program-footer">
                    <div className="program-raised">
                      Raised: <strong>${(p.raised / 1000).toFixed(0)}K</strong>
                      <span style={{ color: 'var(--text-muted)' }}> / ${(p.goal / 1000).toFixed(0)}K</span>
                    </div>
                    <Link to="/donate" className="btn btn-teal btn-sm">Donate →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/programs" className="btn btn-teal">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-inner animate-fade-up">
          <span className="section-tag" style={{ color: 'var(--amber-light)' }}>Make a Difference</span>
          <h2 className="section-title light">Your Support Can Change a Life Today</h2>
          <p>Every dollar you give goes directly to children who need it most. Together, we can build a brighter future.</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
            <Link to="/about" className="btn btn-outline">Become a Volunteer</Link>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMING LIVES ── */}
      <section className="transforming-section">
        <div className="container">
          <div className="transforming-header animate-fade-up">
            <span className="section-tag" style={{ color: 'var(--amber)' }}>We are doing projects for children</span>
            <h2 className="section-title light">Transforming Lives<br />Through Charity</h2>
          </div>
          <div className="transforming-grid animate-fade-up delay-1">
            {[
              { img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', label: 'Empowering Through Food' },
              { img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80', label: 'Clean Water To Rural' },
              { img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80', label: 'Our People & Child Trouble' },
            ].map((item) => (
              <div key={item.label} className="transforming-card">
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="transforming-card-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SLIDER ── */}
      <section className="section">
        <div className="container">
          <div className="testimonials-header animate-fade-up">
            <span className="section-tag">Stories of Hope</span>
            <h2 className="section-title">Voices from the Field</h2>
            <div className="divider centered" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="news-header animate-fade-up">
            <div>
              <span className="section-tag">Latest Updates</span>
              <h2 className="section-title">News & Stories</h2>
            </div>
            <Link to="/programs" className="btn btn-teal btn-sm">View All →</Link>
          </div>
          <div className="grid-3">
            {NEWS.map((n, i) => (
              <div key={n.title} className={`news-card animate-fade-up delay-${i + 1}`}>
                <img className="news-img" src={n.img} alt={n.title} />
                <div className="news-body">
                  <div className="news-meta">
                    <span>📅 {n.date}</span>
                    <span style={{ color: 'var(--teal)', fontWeight: 600 }}>• {n.cat}</span>
                  </div>
                  <h3 className="news-title">{n.title}</h3>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <Link to="/programs" className="news-link">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
