import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/volunteer.css';

const ROLES = ['Field Volunteer', 'Remote Support', 'Fundraising', 'Medical Professional', 'Teacher / Educator', 'Communications'];
const AVAILABILITY = ['Weekdays', 'Weekends', 'Full-time (3+ months)', 'Part-time (a few hours/week)'];

type Step = 1 | 2 | 3 | 4;

export default function Volunteer() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', country: '',
    role: '', availability: '', experience: '', motivation: '',
    skills: '', languages: '',
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <main className="page-enter">
      <Helmet>
        <title>Volunteer | HopeForward Foundation</title>
        <meta name="description" content="Join HopeForward as a volunteer. Apply online and help us deliver education, clean water, and healthcare to children in need." />
      </Helmet>

      {/* Hero */}
      <section className="page-hero-dark">
        <div className="page-hero-dark-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80)' }} />
        <div className="page-hero-dark-overlay" />
        <div className="container page-hero-dark-inner animate-fade-up">
          <h1>Become a Volunteer</h1>
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span>Volunteer</span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="volunteer-layout">
            {/* Form */}
            <div className="volunteer-form-wrap animate-fade-up">
              {/* Steps indicator */}
              <div className="vol-steps">
                {([1, 2, 3] as Step[]).map(s => (
                  <div key={s} className={`vol-step ${step === s ? 'active' : step > s ? 'done' : ''}`}>
                    <div className="vol-step-num">{step > s ? '✓' : s}</div>
                    <div className="vol-step-label">{s === 1 ? 'Personal Info' : s === 2 ? 'Your Role' : 'Review'}</div>
                  </div>
                ))}
              </div>

              {step === 4 ? (
                <div className="vol-success animate-fade-up">
                  <div className="vol-success-icon">🎉</div>
                  <h2>Application Submitted!</h2>
                  <p>Thank you for applying to volunteer with HopeForward. Our team will review your application and contact you within 48 hours.</p>
                  <Link to="/" className="btn btn-teal">Back to Home</Link>
                </div>
              ) : (
                <div className="vol-form-card">
                  {step === 1 && (
                    <div className="animate-fade-up">
                      <h3 className="vol-step-title">Personal Information</h3>
                      <div className="form-row-2">
                        <div className="form-group">
                          <label className="form-label">First Name *</label>
                          <input className="input" value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="John" required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Last Name *</label>
                          <input className="input" value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input className="input" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="john@example.com" required />
                      </div>
                      <div className="form-row-2">
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input className="input" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 555 000 0000" />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Country *</label>
                          <input className="input" value={form.country} onChange={e => set('country', e.target.value)} placeholder="United States" required />
                        </div>
                      </div>
                      <button
                        className="btn btn-teal vol-next-btn"
                        disabled={!form.firstName || !form.lastName || !form.email || !form.country}
                        onClick={() => setStep(2)}
                      >Next: Your Role →</button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-up">
                      <h3 className="vol-step-title">Your Role & Availability</h3>
                      <div className="form-group">
                        <label className="form-label">Volunteer Role *</label>
                        <div className="vol-options">
                          {ROLES.map(r => (
                            <button key={r} className={`vol-option ${form.role === r ? 'active' : ''}`} onClick={() => set('role', r)}>{r}</button>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Availability *</label>
                        <div className="vol-options">
                          {AVAILABILITY.map(a => (
                            <button key={a} className={`vol-option ${form.availability === a ? 'active' : ''}`} onClick={() => set('availability', a)}>{a}</button>
                          ))}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Relevant Skills</label>
                        <input className="input" value={form.skills} onChange={e => set('skills', e.target.value)} placeholder="e.g. Teaching, First Aid, Carpentry, Web Design" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Languages Spoken</label>
                        <input className="input" value={form.languages} onChange={e => set('languages', e.target.value)} placeholder="e.g. English, French, Swahili" />
                      </div>
                      <div className="vol-btn-row">
                        <button className="btn btn-outline" style={{ border: '2px solid var(--teal)', color: 'var(--teal)' }} onClick={() => setStep(1)}>← Back</button>
                        <button
                          className="btn btn-teal"
                          disabled={!form.role || !form.availability}
                          onClick={() => setStep(3)}
                        >Next: Review →</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-up">
                      <h3 className="vol-step-title">Review & Submit</h3>
                      <div className="vol-review">
                        {[
                          ['Name', `${form.firstName} ${form.lastName}`],
                          ['Email', form.email],
                          ['Phone', form.phone || '—'],
                          ['Country', form.country],
                          ['Role', form.role],
                          ['Availability', form.availability],
                          ['Skills', form.skills || '—'],
                          ['Languages', form.languages || '—'],
                        ].map(([label, value]) => (
                          <div key={label} className="vol-review-row">
                            <span className="vol-review-label">{label}</span>
                            <span className="vol-review-value">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Why do you want to volunteer? (optional)</label>
                        <textarea className="input" value={form.motivation} onChange={e => set('motivation', e.target.value)} placeholder="Tell us what motivates you to join HopeForward..." />
                      </div>
                      <div className="vol-btn-row">
                        <button className="btn btn-outline" style={{ border: '2px solid var(--teal)', color: 'var(--teal)' }} onClick={() => setStep(2)}>← Back</button>
                        <button className="btn btn-primary" onClick={() => setStep(4)}>Submit Application 🎉</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Info sidebar */}
            <aside className="volunteer-info animate-fade-up delay-2">
              <div className="sidebar-card">
                <h4 className="sidebar-title">Why Volunteer?</h4>
                {[
                  { icon: '🌍', text: 'Work in 25+ countries across Africa, Asia & Latin America' },
                  { icon: '💛', text: 'Directly impact children\'s lives every single day' },
                  { icon: '📚', text: 'Gain hands-on experience in humanitarian work' },
                  { icon: '🤝', text: 'Join a global community of 120+ passionate volunteers' },
                  { icon: '✈️', text: 'Field placements include accommodation & local transport' },
                ].map(({ icon, text }) => (
                  <div key={text} className="vol-info-item">
                    <span className="vol-info-icon">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="sidebar-card sidebar-cta">
                <h4>Have Questions?</h4>
                <p>Our volunteer coordinator is happy to help.</p>
                <Link to="/contact" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }}>Contact Us</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
