export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT — editorial text */}
      <div className="hero-left">
        <div className="hero-eyebrow au1">New Collection — SS 2026</div>

        <h1 className="hero-title au2">
          The Art<br />
          of <em>Dressing</em><br />
          Well.
        </h1>

        <p className="hero-sub au3">
          Curated luxury pieces from the world's most celebrated designers.
          Where craftsmanship meets contemporary elegance.
        </p>

        <div className="hero-ctas au4">
          <button className="btn-gold">Explore Collection</button>
          <button className="btn-ghost">Lookbook 2026 →</button>
        </div>

        <div className="hero-stats au5">
          <div className="stat">
            <span className="num">340+</span>
            <span className="label">Pieces</span>
          </div>
          <div className="stat">
            <span className="num">60+</span>
            <span className="label">Designers</span>
          </div>
          <div className="stat">
            <span className="num">12</span>
            <span className="label">Countries</span>
          </div>
        </div>
      </div>

      {/* RIGHT — fashion image */}
      <div className="hero-right">
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop"
            alt="MAISON NOIR — SS 2026 Collection"
          />
        </div>
        <div className="hero-gradient" />

        {/* Floating product preview card */}
        <div className="hero-float fade">
          <div className="fl">New Arrival</div>
          <div className="fn">Silk Wrap Dress</div>
          <div className="fp">₹18,500</div>
        </div>
      </div>
    </section>
  );
}