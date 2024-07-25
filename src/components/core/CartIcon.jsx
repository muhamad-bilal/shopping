import React from 'react';
import './cart.css'; 


const CartIcon = () => {
  return (
    <div className="cart-icon">
      <img src="/shopping-cart.png" alt="Cart Icon" />
      <span>0</span> {/* Cart items count */}
    </div>
  );
};

export default CartIcon;
