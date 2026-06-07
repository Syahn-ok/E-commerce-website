import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        SAYHAN<span className="dot">·</span>NOIR
      </div>

      <div className="nav-links">
        <a href="#">Collections</a>
        <a href="#">Lookbook</a>
        <a href="#">Designers</a>
        <a href="#">About</a>
      </div>

      <div className="nav-icons">
        <div className="nav-icon" title="Search">⌕</div>
        <div className="nav-icon" title="Wishlist">♡</div>
        <div className="nav-icon cart" title="Cart">⊡</div>
      </div>
    </nav>
  );
}