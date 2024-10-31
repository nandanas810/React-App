import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="header">
      <h1 className="logo">MAINLINE MENSWEAR</h1>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="search-input"
        />
      </form>

      <nav>
        <a href="#wishlist" aria-label="Wishlist">
          <i className="fas fa-heart"></i>
        </a>
        <a href="#cart" aria-label="Cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a href="#cart" aria-label="Cart">
        <i class="fa-solid fa-user"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;