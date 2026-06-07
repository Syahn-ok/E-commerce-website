export default function EditorialBanner() {
  return (
    <section className="editorial">
      <div className="editorial-img">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80&fit=crop"
          alt="Summer Lookbook 2026"
        />
      </div>

      <div className="editorial-content">
        <div className="editorial-eyebrow">Limited Edition</div>

        <h2 className="editorial-title">
          The Summer<br />
          <em>Lookbook</em><br />
          is Here.
        </h2>

        <p className="editorial-sub">
          Forty pages of inspiration from our creative directors. Discover how to
          wear the season's most coveted pieces in your own way.
        </p>

        <button className="btn-gold">View Lookbook</button>
      </div>
    </section>
  );
}