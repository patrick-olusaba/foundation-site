import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Jfam Foundation</title>
      </Helmet>
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
        <div>
          <div style={{ fontSize: '5rem', marginBottom: 16 }}>🌱</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, color: 'var(--charcoal)', marginBottom: 12 }}>
            Page Not Found
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.7 }}>
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-teal">← Back to Home</Link>
            <Link to="/contact" className="btn btn-outline" style={{ border: '2px solid var(--teal)', color: 'var(--teal)' }}>Contact Us</Link>
          </div>
        </div>
      </main>
    </>
  );
}
