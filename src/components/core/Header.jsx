import React from 'react';
import Logo from './Logo';
import CartIcon from './CartIcon';
import './header.css'; // Import the CSS file
import Navigation from './Navigation';


const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <CartIcon />
    </header>
  );
};

export default Header;
