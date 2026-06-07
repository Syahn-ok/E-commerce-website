import './App.css';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import Categories      from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import EditorialBanner from './components/EditorialBanner';
import Testimonials    from './components/Testimonials';
import Footer          from './components/Footer';

// Announcement bar — marquee strip below navbar
function AnnouncementBar() {
  const items = [
    'Free shipping on orders over ₹5,000',
    'New Arrivals: Summer Collection 2026',
    'Exclusive — Members get early access to sales',
    'Free returns within 30 days',
    'New Arrivals: Summer Collection 2026',
  ];
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="announce">
      <div className="announce-track">
        {doubled.map((text, i) => (
          <div key={i} className="announce-item">
            <span className="star">✦</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// Newsletter — inline here since it's a simple shared UI section
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

export default function App() {
  return (
    <>
      <Navbar />
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