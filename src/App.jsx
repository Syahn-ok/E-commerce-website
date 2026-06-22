import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './pages.css';
import './Cart.css';
import {supabase} from './supabase';


import { CartProvider } from './CartContent';
import Navbar      from './components/Navbar';
import Home        from './pages/Home';
import About       from './pages/About';
import Collections from './pages/Collections';
import Contact     from './pages/Contact';
import Cart        from './pages/Cart';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/"            element={<Home />}        />
          <Route path="/about"       element={<About />}       />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact"     element={<Contact />}     />
          <Route path="/cart"        element={<Cart />}        />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}