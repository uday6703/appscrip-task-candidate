'use client'

interface FiltersProps {
  filters: {
    category: string[]
    priceRange: [number, number]
    size: string[]
    color: string[]
    dressStyle: string[]
  }
  setFilters: (filters: any) => void
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  const categories = [
    "men's clothing",
    "women's clothing", 
    "jewelery",
    "electronics"
  ]

  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

  const colors = [
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#000000" },
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Orange", value: "#FFA500" }
  ]

  const dressStyles = ["Casual", "Formal", "Party", "Gym"]

  const toggleFilter = (filterType: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item: string) => item !== value)
        : [...prev[filterType], value]
    }))
  }

  const handlePriceChange = (min: number, max: number) => {
    setFilters((prev: any) => ({
      ...prev,
      priceRange: [min, max]
    }))
  }

  return (
    <div className="filters">
      {/* Categories */}
      <div className="filter-group">
        <h3 className="filter-title">CATEGORIES</h3>
        <div className="filter-options">
          {categories.map(category => (
            <label key={category} className="filter-option">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => toggleFilter('category', category)}
              />
              <span className="checkmark"></span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <h3 className="filter-title">PRICE</h3>
        <div className="price-range">
          <div className="price-inputs">
            <div className="price-input">
              <span>$</span>
              <input
                type="number"
                placeholder="0"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
              />
            </div>
            <span className="price-separator">-</span>
            <div className="price-input">
              <span>$</span>
              <input
                type="number"
                placeholder="100"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="filter-group">
        <h3 className="filter-title">COLORS</h3>
        <div className="color-options">
          {colors.map(color => (
            <button
              key={color.name}
              className={`color-option ${filters.color.includes(color.name) ? 'active' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => toggleFilter('color', color.name)}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="filter-group">
        <h3 className="filter-title">SIZE</h3>
        <div className="size-options">
          {sizes.map(size => (
            <button
              key={size}
              className={`size-option ${filters.size.includes(size) ? 'active' : ''}`}
              onClick={() => toggleFilter('size', size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="filter-group">
        <h3 className="filter-title">DRESS STYLE</h3>
        <div className="filter-options">
          {dressStyles.map(style => (
            <label key={style} className="filter-option">
              <input
                type="checkbox"
                checked={filters.dressStyle.includes(style)}
                onChange={() => toggleFilter('dressStyle', style)}
              />
              <span className="checkmark"></span>
              {style}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}