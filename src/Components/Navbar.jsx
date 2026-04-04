import { useState } from "react"

const CATEGORIES = ["general", "technology", "business", "health", "sports", "entertainment"]

const Navbar = ({ setCategory, activeCategory, darkMode, setDarkMode, setSearchQuery }) => {
  const [searchVal, setSearchVal] = useState("")

  const handleSearch = (e) => {
    const val = e.target.value
    setSearchVal(val)
    setSearchQuery(val)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <a className="brand" href="#">
          Quick<span>News</span>
        </a>

        {/* Search */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search headlines..."
            value={searchVal}
            onChange={handleSearch}
          />
        </div>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to light" : "Switch to dark"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Categories */}
        <ul className="nav-categories">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                className={activeCategory === cat ? "active" : ""}
                onClick={() => {
                  setCategory(cat)
                  setSearchQuery("")
                  setSearchVal("")
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar