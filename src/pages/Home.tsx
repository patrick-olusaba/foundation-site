import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { t } from '../i18n/translations';
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
  {
    text: 'Football saved my life. Before the academy I was dropping out of school. Now I have a scholarship, I train every day, and I want to play for Harambee Stars.',
    name: 'Brian Otieno',
    role: 'Youth Athlete, Kibera, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: 'My daughter used to miss school three days a week. Since joining the athletics program she attends every day, eats two meals, and is top of her class.',
    name: 'Grace Wanjiku',
    role: 'Parent, Mathare, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
];

const NEWS = [
  {
    title: '500 New Classrooms Built Across East Africa',
    excerpt: 'Our education initiative reached a new milestone, constructing 500 classrooms benefiting over 25,000 students.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    date: 'Apr 12, 2026',
    cat: 'Education',
    slug: '500-classrooms-east-africa',
  },
  {
    title: 'Clean Water Project Reaches 100,000 Beneficiaries',
    excerpt: 'Thanks to generous donors, our water access program now serves over 100,000 people across 12 countries.',
    img: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80',
    date: 'Mar 28, 2026',
    cat: 'Health',
    slug: 'clean-water-100k-beneficiaries',
  },
  {
    title: 'Annual Gala Raises $2M for Child Welfare',
    excerpt: 'Our annual fundraising gala set a record this year, raising $2 million for programs supporting children in need.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    date: 'Mar 10, 2026',
    cat: 'Events',
    slug: 'annual-gala-2m-raised',
  },
  {
    title: 'How Sports Is Changing Lives: Stories from the Field',
    excerpt: 'From Kibera to the national stage — meet the young athletes whose lives were transformed through football, athletics, and mentorship.',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
    date: 'Apr 20, 2026',
    cat: 'Sports',
    slug: 'sports-changing-lives',
  },
];

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const item = TESTIMONIALS[idx];
  return (
    <div className="testimonial-slider animate-fade-up">
      <div className="testimonial-slider-card">
        <div className="testimonial-stars">{'★★★★★'}</div>
        <p className="testimonial-text">"{item.text}"</p>
        <div className="testimonial-author">
          <img className="testimonial-avatar" src={item.avatar} alt={item.name} loading="lazy" />
          <div>
            <div className="testimonial-name">{item.name}</div>
            <div className="testimonial-role">{item.role}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-slider-nav">
        <button className="slider-arrow" onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous">‹</button>
        <div className="slider-dots">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`slider-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`} />
          ))}
        </div>
        <button className="slider-arrow" onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)} aria-label="Next">›</button>
      </div>
    </div>
  );
}

export default function Home() {
  const { lang } = useLang();
  const tr = t[lang];
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
            <div className="hero-badge">{tr.hero_badge}</div>
            <h1 className="hero-title">
              {tr.hero_title_1} <span>{tr.hero_title_2}</span><br />{tr.hero_title_3}
            </h1>
            <p className="hero-subtitle">{tr.hero_sub}</p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-primary">{tr.hero_donate}</Link>
              <Link to="/programs" className="btn btn-outline">{tr.hero_programs}</Link>
            </div>
            <div className="hero-stats-row">
              <div className="hero-stat">
                <div className="hero-stat-num">48K+</div>
                <div className="hero-stat-label">{tr.hero_stat_children}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">326</div>
                <div className="hero-stat-label">{tr.hero_stat_campaigns}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">$12M</div>
                <div className="hero-stat-label">{tr.hero_stat_raised}</div>
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
              { num: '48,000+', label: tr.impact_children },
              { num: '25', label: tr.impact_countries },
              { num: '$12M', label: tr.impact_raised },
              { num: '15 Yrs', label: tr.impact_years },
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
              <span className="section-tag">{tr.about_tag}</span>
              <h2 className="section-title">{tr.about_title}</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 24 }}>
                {tr.about_body}
              </p>
              <div className="about-features">
                {[
                  { icon: '📚', label: tr.about_feat_edu, text: tr.about_feat_edu_sub },
                  { icon: '💧', label: tr.about_feat_water, text: tr.about_feat_water_sub },
                  { icon: '🥗', label: tr.about_feat_food, text: tr.about_feat_food_sub },
                  { icon: '🏥', label: tr.about_feat_health, text: tr.about_feat_health_sub },
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
                <Link to="/about" className="btn btn-teal">{tr.about_learn}</Link>
                <Link to="/donate" className="btn btn-primary">{tr.about_support}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="programs-header animate-fade-up">
            <span className="section-tag">{tr.programs_tag}</span>
            <h2 className="section-title">{tr.programs_title}</h2>
            <div className="divider centered" />
            <p style={{ color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto' }}>
              {tr.programs_sub}
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
                    <span>{tr.programs_progress}</span>
                    <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{p.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                  </div>
                  <div className="program-footer">
                    <div className="program-raised">
                      {tr.programs_raised}: <strong>${(p.raised / 1000).toFixed(0)}K</strong>
                      <span style={{ color: 'var(--text-muted)' }}> / ${(p.goal / 1000).toFixed(0)}K</span>
                    </div>
                    <Link to="/donate" className="btn btn-teal btn-sm">{tr.programs_donate}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/programs" className="btn btn-teal">{tr.programs_view_all}</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-inner animate-fade-up">
          <span className="section-tag" style={{ color: 'var(--amber-light)' }}>{tr.cta_tag}</span>
          <h2 className="section-title light">{tr.cta_title}</h2>
          <p>{tr.cta_body}</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-primary">{tr.cta_donate}</Link>
            <Link to="/volunteer" className="btn btn-outline">{tr.cta_volunteer}</Link>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMING LIVES ── */}
      <section className="transforming-section">
        <div className="container">
          <div className="transforming-header animate-fade-up">
            <span className="section-tag" style={{ color: 'var(--amber)' }}>{tr.transform_tag}</span>
            <h2 className="section-title light">{tr.transform_title}</h2>
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
            <span className="section-tag">{tr.test_tag}</span>
            <h2 className="section-title">{tr.test_title}</h2>
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
              <span className="section-tag">{tr.news_tag}</span>
              <h2 className="section-title">{tr.news_title}</h2>
            </div>
            <Link to="/blog" className="btn btn-teal btn-sm">{tr.news_view_all}</Link>
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
                  <Link to={`/blog/${n.slug}`} className="news-link">{tr.news_read_more}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
