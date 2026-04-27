import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data/content';
import '../styles/detail.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const others = BLOG_POSTS.filter(p => p.slug !== slug);

  return (
    <main className="page-enter">
      <Helmet>
        <title>{post.title} | HopeForward Foundation</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: `url(${post.img})` }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <span className="detail-hero-cat">{post.cat}</span>
          <h1>{post.title}</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <Link to="/blog">Blog</Link><span>›</span>
            <span>{post.cat}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          {/* Article */}
          <article className="detail-article animate-fade-up">
            <div className="detail-meta">
              <img src={post.authorImg} alt={post.author} className="detail-author-img" />
              <div>
                <div className="detail-author-name">{post.author}</div>
                <div className="detail-meta-sub">📅 {post.date} &nbsp;·&nbsp; ⏱ {post.readTime}</div>
              </div>
            </div>

            <p className="detail-lead">{post.excerpt}</p>

            {post.body.map((para, i) => (
              <p key={i} className="detail-para">{para}</p>
            ))}

            {/* Gallery */}
            <h3 className="detail-gallery-title">Photo Gallery</h3>
            <div className="detail-gallery">
              {post.gallery.map((src, i) => (
                <div key={i} className="detail-gallery-item">
                  <img src={src} alt={`${post.title} ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="detail-share">
              <span>Share this story:</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="share-btn">Twitter</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-btn">Facebook</a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="detail-sidebar animate-fade-up delay-2">
            <div className="sidebar-card">
              <h4 className="sidebar-title">More Stories</h4>
              {others.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="sidebar-post">
                  <img src={p.img} alt={p.title} />
                  <div>
                    <div className="sidebar-post-cat">{p.cat}</div>
                    <div className="sidebar-post-title">{p.title}</div>
                    <div className="sidebar-post-date">{p.date}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="sidebar-card sidebar-cta">
              <h4>Make a Difference</h4>
              <p>Your donation funds stories like this one.</p>
              <Link to="/donate" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>💛 Donate Now</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
