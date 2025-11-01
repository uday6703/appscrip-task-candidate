'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

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

interface FiltersState {
  category: string[]
  priceRange: [number, number]
  size: string[]
  color: string[]
  dressStyle: string[]
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<FiltersState>({
    category: [],
    priceRange: [0, 1000],
    size: [],
    color: [],
    dressStyle: []
  })
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [filters, products])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback sample data
      const sampleProducts: Product[] = [
        {
          id: 1,
          title: "Classic White T-Shirt",
          price: 29.99,
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 4.5, count: 120 }
        },
        {
          id: 2,
          title: "Black Premium Jacket",
          price: 89.99,
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: { rate: 4.8, count: 85 }
        }
      ]
      setProducts(sampleProducts)
      setFilteredProducts(sampleProducts)
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = [...products]
    
    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product => 
        filters.category.includes(product.category)
      )
    }
    
    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    )
    
    setFilteredProducts(filtered)
  }

  const clearAllFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 1000],
      size: [],
      color: [],
      dressStyle: []
    })
  }

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="container">
            <div className="loading">Loading products...</div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
              Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </section>

          {/* Results Header */}
          <div className="results-header">
            <div className="results-info">
              <span className="results-count">{filteredProducts.length} ITEMS</span>
              <button 
                className="filter-toggle mobile-only"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                FILTER
              </button>
            </div>
            
            <div className="view-options">
              <button className="view-option active" aria-label="Grid view">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Content Grid */}
          <div className="content-grid">
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${showFilters ? 'mobile-open' : ''}`}>
              <div className="filters-header">
                <h2>FILTERS</h2>
                <button className="clear-filters-btn" onClick={clearAllFilters}>
                  CLEAR ALL
                </button>
              </div>
              <Filters filters={filters} setFilters={setFilters} />
            </aside>
            
            {/* Products Section */}
            <section className="products-section">
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="no-products">
                  <p>No products found matching your criteria.</p>
                  <button className="clear-filters-btn large" onClick={clearAllFilters}>
                    CLEAR ALL FILTERS
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}