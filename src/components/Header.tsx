'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className="logo">
            <h1>SHOP.CO</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#shop">Shop</a></li>
              <li><a href="#onsale">On Sale</a></li>
              <li><a href="#newarrivals">New Arrivals</a></li>
              <li><a href="#brands">Brands</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search for products..." 
                aria-label="Search products"
              />
            </div>
            
            <div className="action-icons">
              <button className="icon-btn" aria-label="Cart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 16C16.4 16 16 16.4 16 17C16 17.6 16.4 18 17 18C17.6 18 18 17.6 18 17C18 16.4 17.6 16 17 16ZM9 17C9 17.6 8.6 18 8 18C7.4 18 7 17.6 7 17C7 16.4 7.4 16 8 16C8.6 16 9 16.4 9 17Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="icon-btn" aria-label="User account">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21M16 7C16 9.2 14.2 11 12 11C9.8 11 8 9.2 8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}