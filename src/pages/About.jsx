import Footer from '../components/Footer';

const values = [
  {
    icon: '✦',
    title: 'Craftsmanship',
    body: 'Every piece in our collection is handpicked for its quality of construction. We work only with designers who treat their craft as an art form.',
  },
  {
    icon: '◈',
    title: 'Curation',
    body: "We don't carry everything. We carry the right things. Our buyers travel to 12 countries each season to find pieces worth your wardrobe.",
  },
  {
    icon: '❋',
    title: 'Sustainability',
    body: "Luxury and responsibility aren't opposites. Over 60% of our catalogue comes from designers with verified sustainable production practices.",
  },
  {
    icon: '◎',
    title: 'Community',
    body: 'We believe fashion is conversation. Our members get early access, styling events, and a direct line to our curators whenever they need it.',
  },
];

const stats = [
  { num: '8+',   label: 'Years in Business'  },
  { num: '60+',  label: 'Global Designers'   },
  { num: '12',   label: 'Countries Sourced'  },
  { num: '10k+', label: 'Happy Customers'    },
];

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-eyebrow">Who We Are</div>
        <h1 className="page-title">The Story<br />Behind <em>Sayhan</em></h1>
        <p className="page-sub">
          A curated destination for contemporary luxury fashion — built on the belief
          that what you wear should mean something.
        </p>
      </div>

      {/* BRAND STORY */}
      <section className="about-story">
        <div className="about-story-img">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&fit=crop"
            alt="Sayhan store interior"
          />
        </div>
        <div className="about-story-text">
          <div className="about-story-label">Our Origin</div>
          <h2 className="about-story-title">
            Born from a Love of<br /><em>Thoughtful Dressing</em>
          </h2>
          <p className="about-story-body">
            Sayhan was founded in 2018 with one simple belief — that luxury fashion
            should feel personal, not performative. We were tired of fast trends and
            forgettable pieces. So we built something different.
          </p>
          <br />
          <p className="about-story-body">
            Starting with a small edit of ten designers from Paris and Milan, we've
            grown into a destination trusted by stylists, architects, and anyone who
            believes a well-chosen wardrobe is one of life's quiet pleasures.
          </p>
          <br />
          <p className="about-story-body">
            Today we work with over 60 designers across 12 countries, but the
            philosophy hasn't changed — only carry what we'd genuinely wear ourselves.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="about-stats">
        {stats.map(({ num, label }) => (
          <div key={label} className="about-stat">
            <span className="num">{num}</span>
            <span className="label">{label}</span>
          </div>
        ))}
      </div>

      {/* VALUES */}
      <section className="about-values">
        <div className="section-header">
          <h2 className="section-title">What We<br /><em>Stand For</em></h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="about-quote">
        <div className="about-quote-mark">"</div>
        <blockquote className="about-quote-text">
          We don't just sell clothes.<br />We sell the feeling of getting dressed right.
        </blockquote>
        <div className="about-quote-attr">— Sayhan, Founder</div>
      </section>

      <Footer />
    </>
  );
}
