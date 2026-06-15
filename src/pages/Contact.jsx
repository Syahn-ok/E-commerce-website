import { useState } from 'react';
import Footer from '../components/Footer';

const INFO = [
  {
    label: 'Visit Us',
    value: '14 Altamount Road, Kemps Corner\nMumbai, Maharashtra 400026',
  },
  {
    label: 'Email Us',
    value: 'hello@sayhan.com\nsupport@sayhan.com',
  },
  {
    label: 'Call Us',
    value: '+91 98200 12345\nMon – Sat, 10am – 7pm IST',
  },
  {
    label: 'Store Hours',
    value: 'Monday – Saturday: 10am – 8pm\nSunday: 11am – 6pm',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-eyebrow">Reach Out</div>
        <h1 className="page-title">Get in <em>Touch</em></h1>
        <p className="page-sub">
          Whether it's a styling question, an order issue, or just a conversation
          about fashion — we're always happy to hear from you.
        </p>
      </div>

      {/* FORM + INFO */}
      <section className="contact-section">

        {/* LEFT — FORM */}
        <div>
          <h2 className="contact-form-title">Send Us a <em>Message</em></h2>

          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <div className="contact-success-title">Message Sent</div>
              <p className="contact-success-sub">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className="form-input" type="text" placeholder="Arjun" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className="form-input" type="text" placeholder="Kapoor" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="arjun@email.com" required />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" type="text" placeholder="Order enquiry / Styling help / Other" />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Write your message here..." required />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '8px' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* RIGHT — INFO */}
        <div>
          <h2 className="contact-info-title">Find <em>Us</em></h2>
          <div className="info-items">
            {INFO.map(({ label, value }) => (
              <div key={label}>
                <div className="info-item-label">{label}</div>
                <div className="info-item-value">
                  {value.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
                <div className="info-divider" />
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
