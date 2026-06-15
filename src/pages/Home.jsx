import Hero            from '../components/Hero';
import Categories      from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import EditorialBanner from '../components/EditorialBanner';
import Testimonials    from '../components/Testimonials';
import Footer          from '../components/Footer';

// Marquee announcement strip — only shown on homepage
function AnnouncementBar() {
  const items = [
    'Free shipping on orders over ₹5,000',
    'New Arrivals: Summer Collection 2026',
    'Exclusive — Members get early access to sales',
    'Free returns within 30 days',
    'New Arrivals: Summer Collection 2026',
  ];
  return (
    <div className="announce">
      <div className="announce-track">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="announce-item">
            <span className="star">✦</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// Newsletter section — only shown on homepage
function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <h2 className="nl-title">Stay in the<br /><em>Loop</em></h2>
        <p className="nl-sub">
          New arrivals, exclusive drops, and member offers — directly to your
          inbox. No spam, ever.
        </p>
      </div>
      <div>
        <div className="nl-form">
          <input className="nl-input" type="email" placeholder="Your email address" />
          <button className="nl-btn">Subscribe</button>
        </div>
        <p className="nl-note">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <EditorialBanner />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
