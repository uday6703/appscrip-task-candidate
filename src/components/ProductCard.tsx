'use client'

import { useState } from 'react'

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <article className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={`${product.title} - Premium ${product.category}`}
          loading="lazy"
        />
        <button 
          className={`wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">${product.price.toFixed(2)}</div>
        
        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.round(product.rating.rate))}
            {'☆'.repeat(5 - Math.round(product.rating.rate))}
          </div>
          <span className="rating-count">({product.rating.count})</span>
        </div>
        
        <button className="add-to-cart-btn">
          ADD TO CART
        </button>
      </div>
    </article>
  )
}