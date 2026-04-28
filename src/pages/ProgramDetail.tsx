import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROGRAMS } from '../data/content';
import '../styles/detail.css';

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = PROGRAMS.find(p => p.slug === slug);
  if (!program) return <Navigate to="/programs" replace />;

  const others = PROGRAMS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className="page-enter">
      <Helmet>
        <title>{program.title} | Jfam Foundation</title>
        <meta name="description" content={program.desc} />
      </Helmet>

      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: `url(${program.img})` }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <span className="detail-hero-cat">{program.cat}</span>
          <h1>{program.icon} {program.title}</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/programs">Programs</Link><span>›</span>
            <span>{program.title}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          {/* Main content */}
          <article className="detail-article animate-fade-up">
            {/* Stats bar */}
            <div className="prog-detail-stats">
              <div className="prog-detail-stat">
                <div className="prog-detail-stat-val">{program.beneficiaries}</div>
                <div className="prog-detail-stat-label">Beneficiaries</div>
              </div>
              <div className="prog-detail-stat">
                <div className="prog-detail-stat-val">{program.countries} nations</div>
                <div className="prog-detail-stat-label">Countries</div>
              </div>
              <div className="prog-detail-stat">
                <div className="prog-detail-stat-val">{program.pct}%</div>
                <div className="prog-detail-stat-label">Goal Reached</div>
              </div>
            </div>

            {/* Progress */}
            <div className="prog-detail-progress">
              <div className="prog-detail-progress-labels">
                <span>Raised: <strong style={{ color: 'var(--teal)' }}>${(program.raised / 1000).toFixed(0)}K</strong></span>
                <span>Goal: ${(program.goal / 1000).toFixed(0)}K</span>
              </div>
              <div className="progress-bar" style={{ height: 12 }}>
                <div className="progress-fill" style={{ width: `${program.pct}%` }} />
              </div>
            </div>

            <p className="detail-lead">{program.desc}</p>

            {program.story.map((para, i) => (
              <p key={i} className="detail-para">{para}</p>
            ))}

            {/* Gallery */}
            <h3 className="detail-gallery-title">Program Gallery</h3>
            <div className="detail-gallery">
              {program.gallery.map((src, i) => (
                <div key={i} className="detail-gallery-item">
                  <img src={src} alt={`${program.title} ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="prog-detail-donate-bar">
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Support this program</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>100% of your gift goes directly to this cause</div>
              </div>
              <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="detail-sidebar animate-fade-up delay-2">
            <div className="sidebar-card sidebar-cta">
              <h4>Fund This Program</h4>
              <p>Every dollar goes directly to {program.title.toLowerCase()}.</p>
              <Link to="/donate" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>💛 Donate Now</Link>
              <Link to="/volunteer" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>🙋 Volunteer</Link>
            </div>

            <div className="sidebar-card">
              <h4 className="sidebar-title">Other Programs</h4>
              {others.map(p => (
                <Link key={p.slug} to={`/programs/${p.slug}`} className="sidebar-post">
                  <img src={p.img} alt={p.title} />
                  <div>
                    <div className="sidebar-post-cat">{p.cat}</div>
                    <div className="sidebar-post-title">{p.title}</div>
                    <div className="sidebar-post-date">{p.beneficiaries}</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
