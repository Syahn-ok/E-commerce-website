const categories = [
  {
    name: 'Women',
    count: '148 Pieces',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&fit=crop',
  },
  {
    name: 'Men',
    count: '96 Pieces',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop',
  },
  {
    name: 'Accessories',
    count: '72 Pieces',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&fit=crop',
  },
  {
    name: 'Fragrance',
    count: '24 Pieces',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80&fit=crop',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-header">
        <h2 className="section-title">
          Shop by <em>Category</em>
        </h2>
        <a href="#" className="section-link">View All →</a>
      </div>

      <div className="cats-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="cat-card">
            <img src={cat.img} alt={cat.name} />
            <div className="cat-overlay" />
            <div className="cat-info">
              <div className="cat-count">{cat.count}</div>
              <div className="cat-name">{cat.name}</div>
            </div>
            <div className="cat-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}