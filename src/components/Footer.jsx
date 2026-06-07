export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div className="footer-logo">MAISON<span className="dot">·</span>NOIR</div>
          <p className="footer-desc">
            A curated destination for contemporary luxury fashion. Celebrating
            craftsmanship, culture, and conscious style since 2018.
          </p>
          <div className="social-row">
            {['IG', 'FB', 'TW', 'YT'].map((s) => (
              <div key={s} className="social-btn">{s}</div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <div className="footer-col-title">Collections</div>
          <div className="footer-links">
            {['Women', 'Men', 'Accessories', 'Fragrance', 'New Arrivals', 'Sale'].map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <div className="footer-col-title">Customer Care</div>
          <div className="footer-links">
            {['Shipping & Returns', 'Size Guide', 'Order Tracking', 'FAQs', 'Contact Us', 'Gift Cards'].map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="footer-col-title">Company</div>
          <div className="footer-links">
            {['About Us', 'Designers', 'Sustainability', 'Careers', 'Press', 'Affiliates'].map((l) => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 MAISON NOIR. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}