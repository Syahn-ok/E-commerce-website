const testimonials = [
  {
    quote: "The quality of every single piece is remarkable. I've been a loyal customer for three years and the craftsmanship never disappoints. MAISON NOIR has completely transformed my wardrobe.",
    name: 'Priya Mehta',
    role: 'Fashion Stylist, Mumbai',
    stars: 5,
  },
  {
    quote: "I ordered the cashmere set on Tuesday and it arrived beautifully packaged by Thursday. The fabric is beyond luxurious and the fit is absolutely perfect. Worth every rupee.",
    name: 'Arjun Kapoor',
    role: 'Creative Director, Delhi',
    stars: 5,
  },
  {
    quote: "What sets Maison Noir apart isn't just the clothes — it's the experience. The curation is impeccable and the attention to detail in packaging makes you feel truly special.",
    name: 'Rhea Desai',
    role: 'Architect, Bangalore',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header">
        <h2 className="section-title">
          What Our<br />
          <em>Clients Say</em>
        </h2>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--fd)', fontSize: '52px', fontWeight: '300', color: 'var(--gold)', opacity: 0.4, lineHeight: 1 }}>
            4.9
          </div>
          <div style={{ fontSize: '10.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--sub)', marginTop: '4px' }}>
            Average Rating
          </div>
        </div>
      </div>

      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-qmark">"</div>
            <p className="testi-text">"{t.quote}"</p>
            <div className="testi-stars">{'★'.repeat(t.stars)}</div>
            <div className="testi-div" />
            <div className="testi-name">{t.name}</div>
            <div className="testi-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}