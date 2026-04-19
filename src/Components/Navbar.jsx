import { useState } from "react"

const CATEGORIES = ["general", "technology", "business", "health", "sports", "entertainment"]

const COUNTRIES = [
  { code: "in", label: "🇮🇳 India" },
  { code: "us", label: "🇺🇸 USA" },
  { code: "gb", label: "🇬🇧 UK" },
  { code: "au", label: "🇦🇺 Australia" },
  { code: "ca", label: "🇨🇦 Canada" },
  { code: "de", label: "🇩🇪 Germany" },
  { code: "fr", label: "🇫🇷 France" },
  { code: "sg", label: "🇸🇬 Singapore" },
  { code: "ae", label: "🇦🇪 UAE" },
  { code: "jp", label: "🇯🇵 Japan" },
  { code: "ng", label: "🇳🇬 Nigeria" },
  { code: "za", label: "🇿🇦 South Africa" },
]

const Navbar = ({ setCategory, activeCategory, darkMode, setDarkMode, setSearchQuery, country, setCountry }) => {
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

        {/* Country Selector */}
        <select
          className="country-select"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value)
            setSearchQuery("")
            setSearchVal("")
          }}
          title="Select country"
        >
          {COUNTRIES.map(c => (
            <option key={c.code} value={c.code}>{c.label}</option>
          ))}
        </select>

        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to light" : "Switch to dark"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Install PWA button — shown only when installable */}
        <InstallButton />

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

// PWA install prompt button
function InstallButton() {
  const [prompt, setPrompt] = useState(null)

  // Capture the install prompt event
  if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      setPrompt(e)
    }, { once: true })
  }

  if (!prompt) return null

  return (
    <button
      className="install-btn"
      onClick={async () => {
        prompt.prompt()
        const { outcome } = await prompt.userChoice
        if (outcome === "accepted") setPrompt(null)
      }}
      title="Install QuickNews as app"
    >
      ⬇ Install
    </button>
  )
}

export default Navbar