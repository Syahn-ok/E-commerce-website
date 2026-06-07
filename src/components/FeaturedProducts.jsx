import { useState } from 'react';
import ProductCard from './ProductCard';

const allProducts = [
  { brand: 'Studio Maison', name: 'Draped Silk Blouse', price: '₹12,500', badge: 'new', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80', cat: 'women' },
  { brand: 'Noir Label', name: 'Structured Wool Coat', price: '₹45,000', oldPrice: '₹52,000', badge: 'sale', img: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&q=80', cat: 'women' },
  { brand: 'Atelier Voss', name: 'Croc-Embossed Tote', price: '₹28,000', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', cat: 'accessories' },
  { brand: 'Studio Maison', name: 'Cashmere Lounge Set', price: '₹18,500', badge: 'new', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', cat: 'women' },
  { brand: 'Voss & Co.', name: 'Oxford Derby Shoes', price: '₹22,000', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', cat: 'men' },
  { brand: 'Bijou Atelier', name: 'Gold Chainlink Necklace', price: '₹8,500', badge: 'new', img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', cat: 'accessories' },
  { brand: 'Noir Label', name: 'High-Waist Wide Trousers', price: '₹14,500', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b7c?w=400&q=80', cat: 'men' },
  { brand: 'Studio Maison', name: 'Linen Camp Shirt', price: '₹9,500', oldPrice: '₹12,000', badge: 'sale', img: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&q=80', cat: 'men' },
];

const TABS = ['All', 'Women', 'Men', 'Accessories'];

export default function FeaturedProducts() {
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? allProducts
    : allProducts.filter((p) => p.cat === active);

  return (
    <section className="products">
      <div className="section-header">
        <h2 className="section-title">Featured <em>Pieces</em></h2>
        <a href="#" className="section-link">View All →</a>
      </div>

      <div className="prod-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`prod-tab ${active === t.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActive(t.toLowerCase())}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="prod-grid">
        {visible.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  );
}