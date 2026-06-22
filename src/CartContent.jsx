import { createContext, useContext, useState, useEffect } from 'react';
import { supabase, getSessionId } from './Supabase';

const CartContext = createContext();

// Wrap the whole app in this so every component can read the cart count
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  async function refreshCart() {
    const { count } = await supabase
      .from('cart_items')
      .select('*', { count: 'exact', head: true })
      .eq('session_id', getSessionId());
    setCartCount(count || 0);
  }

  // Fetch count once when the app first loads
  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Use this hook in any component to get cartCount or refreshCart
export function useCart() {
  return useContext(CartContext);
}