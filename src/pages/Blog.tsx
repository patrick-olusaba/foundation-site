import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data/content';
import '../styles/detail.css';

export default function Blog() {
  return (
    <main className="page-enter">
      <Helmet>
        <title>News & Stories | HopeForward Foundation</title>
        <meta name="description" content="Latest news, impact stories, and updates from HopeForward Foundation." />
      </Helmet>

      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80)' }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>News & Stories</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {BLOG_POSTS.map((post, i) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className={`news-card animate-fade-up delay-${i + 1}`} style={{ display: 'block', textDecoration: 'none' }}>
                <img className="news-img" src={post.img} alt={post.title} loading="lazy" />
                <div className="news-body">
                  <div className="news-meta">
                    <span>📅 {post.date}</span>
                    <span style={{ color: 'var(--teal)', fontWeight: 600 }}>• {post.cat}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <h3 className="news-title">{post.title}</h3>
                  <p className="news-excerpt">{post.excerpt}</p>
                  <div className="news-author">
                    <img src={post.authorImg} alt={post.author} />
                    <span>{post.author}</span>
                  </div>
                  <span className="news-link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
