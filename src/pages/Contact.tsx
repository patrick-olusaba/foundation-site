import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/about.css';
import '../styles/contact.css';

const FAQS = [
  { q: 'Where does my donation go?', a: '100% of your donation is directed to our programs. Administrative costs are covered by separate operational grants, so every dollar you give reaches the children it is meant to help.' },
  { q: 'Is my donation tax-deductible?', a: 'Yes. HopeForward Foundation is a registered 501(c)(3) nonprofit. All donations are tax-deductible to the extent permitted by law. You will receive a receipt for your records.' },
  { q: 'Can I sponsor a specific child or program?', a: 'Absolutely. You can direct your donation to any of our six programs. Child sponsorship options are available starting at $25/month and include regular updates on the child\'s progress.' },
  { q: 'How do I become a volunteer?', a: 'We welcome volunteers in the field and remotely. Fill out the contact form on this page with "Volunteer" selected and our team will reach out within 48 hours with opportunities matching your skills.' },
  { q: 'How transparent is your organization?', a: 'Very. We publish annual impact reports, quarterly financial statements, and third-party audits on our website. We are rated 4-star by Charity Navigator and hold the GuideStar Platinum Seal.' },
];

const CONTACT_TYPES = [
  { icon: '💛', label: 'Donate', sub: 'Give a gift' },
  { icon: '🙋', label: 'Volunteer', sub: 'Join our team' },
  { icon: '🤝', label: 'Partner', sub: 'Corporate/NGO' },
  { icon: '📰', label: 'Media', sub: 'Press inquiry' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactType, setContactType] = useState('Donate');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <main className="page-enter">
      <Helmet>
        <title>Contact Us | HopeForward Foundation</title>
        <meta name="description" content="Get in touch with HopeForward Foundation. Donate, volunteer, partner, or reach out to our team. We respond within 24 hours." />
      </Helmet>
      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1600&q=80)' }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>Contact Us</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info animate-fade-up">
              <span className="section-tag">Contact Us</span>
              <h3>Let's Build a Better Future Together</h3>
              <p>Whether you're a donor, volunteer, community partner, or journalist — our doors are always open. Reach us through any of the channels below and we'll respond within 24 hours.</p>

              {[
                { icon: '📍', label: 'Our Office', value: '244 Royal Lane, New York, NY 10001', sub: 'Visit us Monday – Friday, 9am – 5pm' },
                { icon: '📞', label: 'Phone', value: '+1 (555) 234-5678', sub: 'Mon–Fri, 9am–6pm EST' },
                { icon: '✉️', label: 'Email', value: 'hello@hopeforward.org', sub: 'We reply within 24 hours' },
                { icon: '🌍', label: 'Field Offices', value: 'Nairobi · Lagos · Dhaka · Bogotá', sub: 'Regional offices across 4 continents' },
              ].map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div>
                    <div className="contact-detail-label">{d.label}</div>
                    <div className="contact-detail-value">{d.value}</div>
                    <div className="contact-detail-sub">{d.sub}</div>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="contact-map">
                <iframe
                  title="HopeForward Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.99716492346193!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1713952000000!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card animate-fade-up delay-2">
              <h3>Send Us a Message</h3>
              <p>Tell us how you'd like to get involved and we'll be in touch.</p>

              {/* Contact type */}
              <div className="contact-type-grid">
                {CONTACT_TYPES.map(ct => (
                  <button
                    key={ct.label}
                    className={`contact-type-btn ${contactType === ct.label ? 'active' : ''}`}
                    onClick={() => setContactType(ct.label)}
                  >
                    <span className="ct-icon">{ct.icon}</span>
                    <span className="ct-label">{ct.label}</span>
                    <span className="ct-sub">{ct.sub}</span>
                  </button>
                ))}
              </div>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn btn-teal btn-sm" style={{ marginTop: 20 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true); }, 1200); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">First Name</label>
                      <input className="input" type="text" placeholder="John" required />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Last Name</label>
                      <input className="input" type="text" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="input" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone (Optional)</label>
                    <input className="input" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input className="input" type="text" placeholder={`${contactType} inquiry`} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="input" placeholder="Tell us how we can help or how you'd like to get involved..." required />
                  </div>
                  <button type="submit" className="contact-submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="faq-section animate-fade-up">
            <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-sub">Can't find what you're looking for? Drop us a message above.</p>

            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className={`faq-question ${openFaq === i ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span className={`faq-chevron ${openFaq === i ? 'open' : ''}`}>▼</span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container cta-inner animate-fade-up">
          <span className="section-tag" style={{ color: 'var(--amber-light)' }}>Together We Can</span>
          <h2 className="section-title light">Every Child Deserves Hope</h2>
          <p>Join thousands of supporters around the world who are making a real difference every day.</p>
          <div className="cta-actions">
            <Link to="/donate" className="btn btn-primary">💛 Donate Now</Link>
            <Link to="/programs" className="btn btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
