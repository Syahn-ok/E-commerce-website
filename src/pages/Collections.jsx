import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const ALL_PRODUCTS = [
  { brand: 'Studio Maison', name: 'Draped Silk Blouse',       price: '₹12,500', badge: 'new',  img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80', cat: 'women' },
  { brand: 'Noir Label',    name: 'Structured Wool Coat',     price: '₹45,000', oldPrice: '₹52,000', badge: 'sale', img: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&q=80', cat: 'women' },
  { brand: 'Studio Maison', name: 'Cashmere Lounge Set',      price: '₹18,500', badge: 'new',  img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', cat: 'women' },
  { brand: 'Noir Label',    name: 'Pleated Midi Skirt',       price: '₹11,000', img: 'https://images.unsplash.com/photo-1583496661160-fb5974ca1550?w=400&q=80', cat: 'women' },
  { brand: 'Voss & Co.',    name: 'Oxford Derby Shoes',       price: '₹22,000', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', cat: 'men' },
  { brand: 'Noir Label',    name: 'High-Waist Wide Trousers', price: '₹14,500', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b7c?w=400&q=80', cat: 'men' },
  { brand: 'Studio Maison', name: 'Linen Camp Shirt',         price: '₹9,500',  oldPrice: '₹12,000', badge: 'sale', img: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&q=80', cat: 'men' },
  { brand: 'Voss & Co.',    name: 'Slim Wool Blazer',         price: '₹32,000', badge: 'new',  img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80', cat: 'men' },
  { brand: 'Atelier Voss',  name: 'Croc-Embossed Tote',      price: '₹28,000', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', cat: 'accessories' },
  { brand: 'Bijou Atelier', name: 'Gold Chainlink Necklace',  price: '₹8,500',  badge: 'new',  img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', cat: 'accessories' },
  { brand: 'Atelier Voss',  name: 'Leather Card Wallet',      price: '₹5,500',  img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80', cat: 'accessories' },
  { brand: 'Bijou Atelier', name: 'Pearl Drop Earrings',      price: '₹6,200',  badge: 'new',  img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', cat: 'accessories' },
];

const FILTERS = ['All', 'Women', 'Men', 'Accessories'];

export default function Collections() {
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.cat === active);

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-eyebrow">Explore</div>
        <h1 className="page-title">Our <em>Collections</em></h1>
        <p className="page-sub">
          {ALL_PRODUCTS.length} carefully selected pieces from designers across the globe.
          Something for every wardrobe, every occasion.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <section className="collections-section">
        <div className="collections-filter">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActive(f.toLowerCase())}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="collections-grid">
          {visible.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        {visible.length === 0 && (
          <p style={{ color: 'var(--sub)', textAlign: 'center', padding: '60px 0', fontSize: '14px' }}>
            No pieces in this category yet.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
