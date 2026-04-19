import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
  const [category, setCategory] = useState("general")
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(true)
  const [country, setCountry] = useState("in")

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar
        setCategory={setCategory}
        activeCategory={category}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSearchQuery={setSearchQuery}
        country={country}
        setCountry={setCountry}
      />

      <NewsBoard
        category={category}
        searchQuery={searchQuery}
        darkMode={darkMode}
        country={country}
      />

      <Footer />

    </div>
  )
}

export default App