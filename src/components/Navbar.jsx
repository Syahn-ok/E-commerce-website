import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { label: 'Collections', to: '/collections' },
    { label: 'About',       to: '/about'       },
    { label: 'Contact',     to: '/contact'     },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        SAYHAN<span className="dot">·</span>NOIR
      </Link>

      <div className="nav-links">
        {links.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={location.pathname === to ? 'active-link' : ''}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="nav-icons">
        <div className="nav-icon">⌕</div>
        <div className="nav-icon">♡</div>
        <div className="nav-icon cart">⊡</div>
      </div>
    </nav>
  );
}
