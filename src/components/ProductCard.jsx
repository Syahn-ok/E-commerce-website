export default function ProductCard({ product }) {
  const { brand, name, price, oldPrice, badge, img } = product;

  return (
    <div className="prod-card">
      <div className="prod-img-wrap">
        <img className="prod-img-el" src={img} alt={name} />

        {badge && (
          <span className={`prod-badge badge-${badge}`}>
            {badge === 'new' ? 'New In' : 'Sale'}
          </span>
        )}

        <div className="prod-wish">♡</div>

        <div className="prod-overlay">
          <button className="add-bag">Add to Bag</button>
        </div>
      </div>

      <div className="prod-info">
        <div className="prod-brand">{brand}</div>
        <div className="prod-name">{name}</div>
        <div className="prod-foot">
          <div className="prod-price">
            {oldPrice && <s>{oldPrice}</s>}
            {price}
          </div>
          <div className="prod-sizes">
            {['XS', 'S', 'M', 'L'].map((s) => (
              <span key={s} className="sz">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}