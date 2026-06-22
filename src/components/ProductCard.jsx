import { useState } from 'react';
import { supabase, getSessionId } from '../supabase';
import { useCart } from '../CartContext';

export default function ProductCard({ product }) {
  const { brand, name, price, oldPrice, badge, img } = product;
  const [status, setStatus] = useState('idle'); // idle | adding | added | error
  const { refreshCart } = useCart();

  async function handleAddToCart() {
    setStatus('adding');

    const { error } = await supabase.from('cart_items').insert({
      session_id:   getSessionId(),
      product_name: name,
      brand:        brand,
      price:        price,
      image_url:    img,
      quantity:     1,
    });

    if (error) {
      console.error('Cart error:', error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    } else {
      setStatus('added');
      refreshCart(); // update the navbar badge instantly
      setTimeout(() => setStatus('idle'), 2000);
    }
  }

  const btnLabel =
    status === 'adding' ? 'Adding...' :
    status === 'added'  ? '✓ Added!'  :
    status === 'error'  ? 'Try Again' :
    'Add to Bag';

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
          <button
            className="add-bag"
            onClick={handleAddToCart}
            disabled={status === 'adding'}
            style={status === 'added' ? { background: '#2a6e4a' } : {}}
          >
            {btnLabel}
          </button>
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