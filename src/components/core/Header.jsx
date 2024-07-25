import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <SearchBar />
      <CartIcon />
    </header>
  );
};

export default Header;
