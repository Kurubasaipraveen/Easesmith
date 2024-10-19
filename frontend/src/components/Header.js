import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import './ProductList'
function Header() {
  return (
    <header className="header">
      {/* Header Top Bar */}
      <div className="header-top">
        <div className="left-content">
          <span>Free Shipping on orders above 999/-</span>
        </div>
        <div className="center-content">
          <span>Call us on: +91 98768 05120</span>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="header-main">
        {/* Logo Section */}
        <div className="logo">
          <img 
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1729254543/vkoww9bqc167jh2nizd8.png" 
            alt="Chaperone Plants Logo" 
            className="logo-image" 
          />
          <h1>Chaperone</h1>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants-pots">Plants & Pots</Link>
          <div className="dropdown">
            <Link to="/tools">Tools</Link>
            <div className="dropdown-content">
              <Link to="/tools/item1">Item 1</Link>
              <Link to="/tools/item2">Item 2</Link>
            </div>
          </div>
          <Link to="/services">Our Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/story">Our Story</Link>
          <Link to="/faqs">FAQs</Link>
        </nav>
        
        {/* Profile and Cart Icons */}
        <div className="profile-cart">
          <div className='row-one'>
        <i class="bi bi-person"></i>
        <span>Profile</span>
          </div>
          <div className='row-one'>
          <Link to="/cart" className="cart-link">
          <i class="bi bi-cart"></i>
          </Link>
          <span>Cart</span>
          </div>
        </div>
      </div>

      {/* Search Bar Below Navigation */}
      <div className="search-bar"><i class="bi bi-search"></i>
        <input type="text" placeholder="Search Plant" className="search-input" />
        <img src='https://res.cloudinary.com/dyutmmnia/image/upload/v1729309455/tboggpdt6hlf18iynnwm.png' alt='plant' className="plant-icon"/>
      </div>

    </header>
  );
}

export default Header;
