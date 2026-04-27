import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/about.css';
import '../styles/donate.css';

const AMOUNTS = [
  { val: 10, label: '$10', impact: 'School meals for a week' },
  { val: 25, label: '$25', impact: 'School supplies' },
  { val: 50, label: '$50', impact: 'Medical checkup' },
  { val: 100, label: '$100', impact: '1 month of education' },
];

const RECENT_DONORS = [
  { name: 'Sarah M.', location: 'New York, US', amount: '$250', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', time: '2 min ago' },
  { name: 'James O.', location: 'London, UK', amount: '$100', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', time: '14 min ago' },
  { name: 'Amina K.', location: 'Toronto, CA', amount: '$500', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80', time: '1 hr ago' },
];

export default function Donate() {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState('');
  const [freq, setFreq] = useState<'one-time' | 'monthly'>('one-time');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  return (
    <main className="page-enter">
      <Helmet>
        <title>Donate | HopeForward Foundation</title>
        <meta name="description" content="Make a secure donation to HopeForward Foundation. Every dollar goes directly to programs that educate, feed, and protect children in need." />
      </Helmet>
      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80)' }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>Donate Now</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Donate</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section section-alt">
        <div className="container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }} className="animate-fade-up">
              <div style={{ fontSize: '4rem', marginBottom: 20 }}>💛</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>Thank You for Your Generosity!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto 32px' }}>
                Your donation of <strong style={{ color: 'var(--teal)' }}>${custom || amount}</strong> will make a real difference. A receipt has been sent to your email.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setSubmitted(false)} className="btn btn-teal">Make Another Donation</button>
                <Link to="/programs" className="btn btn-outline" style={{ border: '2px solid var(--teal)', color: 'var(--teal)' }}>See Our Programs</Link>
              </div>
            </div>
          ) : (
            <div className="donate-layout">
              {/* Form */}
              <div className="donate-form-card animate-fade-up">
                <div className="donate-form-title">Make a Donation</div>
                <div className="donate-form-subtitle">Choose an amount and complete your donation below</div>

                {/* Frequency */}
                <div className="freq-tabs">
                  {(['one-time', 'monthly'] as const).map(f => (
                    <button key={f} className={`freq-tab ${freq === f ? 'active' : ''}`} onClick={() => setFreq(f)}>
                      {f === 'one-time' ? 'One-Time Gift' : '🔄 Monthly Gift'}
                    </button>
                  ))}
                </div>

                {/* Preset Amounts */}
                <div className="amount-presets">
                  {AMOUNTS.map(a => (
                    <button
                      key={a.val}
                      className={`amount-btn ${amount === a.val && !custom ? 'active' : ''}`}
                      onClick={() => { setAmount(a.val); setCustom(''); }}
                    >
                      {a.label}
                      <small>{a.impact}</small>
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="form-group">
                  <label className="form-label">Custom Amount (USD)</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontWeight: 600 }}>$</span>
                    <input
                      className="input"
                      style={{ paddingLeft: 28 }}
                      type="number"
                      placeholder="Enter amount"
                      value={custom}
                      onChange={e => { setCustom(e.target.value); setAmount(0); }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ borderTop: '2px solid var(--cream-dark)', paddingTop: 24, marginTop: 8, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: 'var(--charcoal)', marginBottom: 16, fontSize: '0.9rem' }}>Personal Information</div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input className="input" type="text" placeholder="John" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input className="input" type="text" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="input" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div style={{ borderTop: '2px solid var(--cream-dark)', paddingTop: 24, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: 'var(--charcoal)', marginBottom: 16, fontSize: '0.9rem' }}>Payment Details</div>
                    <div className="form-group">
                      <label className="form-label">Card Number</label>
                      <input className="input" type="text" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Expiry Date</label>
                        <input className="input" type="text" placeholder="MM / YY" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">CVV</label>
                        <input className="input" type="text" placeholder="123" required />
                      </div>
                    </div>
                  </div>

                  <div className="payment-methods">
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>We accept:</span>
                    {['VISA', 'MCARD', 'AMEX', 'PayPal', 'M-Pesa'].map(p => (
                      <span key={p} className="pay-icon">{p}</span>
                    ))}
                  </div>

                  <button type="submit" className="donate-submit" disabled={loading}>
                    {loading ? 'Processing…' : `💛 Donate $${custom || amount} ${freq === 'monthly' ? '/ Month' : 'Now'}`}
                  </button>
                  <div className="donate-security">
                    🔒 Secure 256-bit SSL encrypted payment
                  </div>
                </form>
              </div>

              {/* Sidebar */}
              <div className="donate-sidebar">
                {/* Impact */}
                <div className="impact-card animate-fade-up delay-1">
                  <h3>Your Impact</h3>
                  <p>See what different donation amounts accomplish for children in need.</p>
                  {[
                    { amount: '$10', text: 'Provides school meals for one child for a full week' },
                    { amount: '$25', text: 'Supplies an entire classroom with pencils and notebooks' },
                    { amount: '$50', text: 'Funds a full medical check-up and vaccinations' },
                    { amount: '$100', text: 'Sponsors one month of quality education for a child' },
                    { amount: '$500', text: 'Digs a fresh-water well serving an entire village' },
                  ].map(({ amount: a, text }) => (
                    <div key={a} className="impact-item-row">
                      <span className="impact-item-amount">{a}</span>
                      <span className="impact-item-text">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Trust */}
                <div className="trust-card animate-fade-up delay-2">
                  <h3>Why Donate to Us?</h3>
                  {[
                    { icon: '✅', title: 'Verified & Transparent', text: '100% of your donation goes to programs. Our financials are publicly audited.' },
                    { icon: '🏆', title: 'Award-Winning NGO', text: 'Recognized by UNICEF and the UN for outstanding humanitarian impact.' },
                    { icon: '🔒', title: 'Secure Payments', text: 'Bank-level SSL encryption protects every transaction.' },
                    { icon: '📊', title: 'Impact Reports', text: 'Donors receive quarterly impact reports showing exactly what their gift achieved.' },
                  ].map(t => (
                    <div key={t.title} className="trust-item">
                      <span className="trust-icon">{t.icon}</span>
                      <div className="trust-text">
                        <strong>{t.title}</strong>
                        {t.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Donors */}
                <div className="recent-donors-card animate-fade-up delay-3">
                  <h3>🌟 Recent Donors</h3>
                  {RECENT_DONORS.map(d => (
                    <div key={d.name} className="donor-row">
                      <img className="donor-avatar" src={d.img} alt={d.name} loading="lazy" />
                      <div>
                        <div className="donor-name">{d.name}</div>
                        <div className="donor-info">{d.location} · {d.time}</div>
                      </div>
                      <div className="donor-amount">{d.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
