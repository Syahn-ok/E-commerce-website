import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, getSessionId } from '../supabase';
import { useCart } from '../CartContent';
import Footer from '../components/Footer';

function parsePrice(str) {
  return parseInt(str.replace(/[₹,\s]/g, ''), 10) || 0;
}

export default function Cart() {
  const [items, setItems]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [ordered, setOrdered] = useState(false);
  const { refreshCart }       = useCart();

  async function fetchCart() {
    setLoading(true);
    const { data, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('session_id', getSessionId())
      .order('added_at', { ascending: false });

    if (!error) setItems(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchCart(); }, []);

  async function removeItem(id) {
    await supabase.from('cart_items').delete().eq('id', id);
    const updated = items.filter((i) => i.id !== id);
    setItems(updated);
    refreshCart();
  }

  async function updateQty(id, qty) {
    if (qty < 1) { removeItem(id); return; }
    await supabase.from('cart_items').update({ quantity: qty }).eq('id', id);
    setItems(items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
  }

  async function placeOrder() {
    // Remove all items for this session after ordering
    await supabase.from('cart_items').delete().eq('session_id', getSessionId());
    setItems([]);
    setOrdered(true);
    refreshCart();
  }

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity, 0
  );
  const shipping  = subtotal > 5000 ? 0 : 499;
  const total     = subtotal + shipping;

  // ── ORDER SUCCESS ──────────────────────────────────────
  if (ordered) {
    return (
      <>
        <div className="page-header">
          <div className="page-eyebrow">Order Placed</div>
          <h1 className="page-title">Thank <em>You!</em></h1>
        </div>
        <div className="cart-success">
          <div className="cart-success-icon">✓</div>
          <h2 className="cart-success-title">Your order has been received</h2>
          <p className="cart-success-sub">
            We'll send a confirmation to your email shortly.<br />
            Estimated delivery: 3–5 business days.
          </p>
          <Link to="/collections">
            <button className="btn-gold" style={{ marginTop: '32px' }}>
              Continue Shopping
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // ── LOADING ────────────────────────────────────────────
  if (loading) {
    return (
      <>
        <div className="page-header">
          <div className="page-eyebrow">Your Bag</div>
          <h1 className="page-title">Your <em>Cart</em></h1>
        </div>
        <div className="cart-loading">Loading your cart...</div>
        <Footer />
      </>
    );
  }

  // ── EMPTY CART ─────────────────────────────────────────
  if (items.length === 0) {
    return (
      <>
        <div className="page-header">
          <div className="page-eyebrow">Your Bag</div>
          <h1 className="page-title">Your <em>Cart</em></h1>
        </div>
        <div className="cart-empty">
          <div className="cart-empty-icon">⊡</div>
          <h2 className="cart-empty-title">Your bag is empty</h2>
          <p className="cart-empty-sub">
            Looks like you haven't added anything yet.
          </p>
          <Link to="/collections">
            <button className="btn-gold" style={{ marginTop: '28px' }}>
              Browse Collections
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // ── CART WITH ITEMS ────────────────────────────────────
  return (
    <>
      <div className="page-header">
        <div className="page-eyebrow">Your Bag</div>
        <h1 className="page-title">Your <em>Cart</em></h1>
        <p className="page-sub">{items.length} item{items.length !== 1 ? 's' : ''} in your bag</p>
      </div>

      <section className="cart-section">
        {/* LEFT — ITEMS LIST */}
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.image_url} alt={item.product_name} />
              </div>

              <div className="cart-item-info">
                <div className="cart-item-brand">{item.brand}</div>
                <div className="cart-item-name">{item.product_name}</div>
                <div className="cart-item-price">{item.price}</div>
              </div>

              <div className="cart-item-controls">
                <div className="qty-wrap">
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.quantity - 1)}>−</button>
                  <span className="qty-num">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                </div>

                <div className="cart-item-total">
                  ₹{(parsePrice(item.price) * item.quantity).toLocaleString('en-IN')}
                </div>

                <button className="cart-remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="cart-summary">
          <div className="cart-summary-title">Order Summary</div>

          <div className="summary-rows">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            {shipping === 0 && (
              <div className="summary-free-ship">✦ Free shipping applied</div>
            )}
            <div className="summary-divider" />
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button className="btn-gold" style={{ width: '100%', marginTop: '28px' }} onClick={placeOrder}>
            Place Order
          </button>

          <Link to="/collections">
            <button className="btn-ghost" style={{ width: '100%', marginTop: '12px', justifyContent: 'center' }}>
              Continue Shopping
            </button>
          </Link>

          <p className="summary-note">
            Free shipping on all orders above ₹5,000
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}