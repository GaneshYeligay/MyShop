import React from 'react';
import logo from './logo.svg';
import './App.css';
import TshirtList from './TshirtList';
import Cart from './Cart'
import { CartProvider } from './CartContext';
import Shop from './Shop';


function App() {
  return (
    <div className="App">
      <CartProvider>
      
      <Cart />
     <TshirtList/>
     <Shop/>
     </CartProvider>
    </div>
  );
}

export default App;
