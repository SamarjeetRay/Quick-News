import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import "./App.css"

const App = () => {
  const [category, setCategory] = useState("general")
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar
        setCategory={setCategory}
        activeCategory={category}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSearchQuery={setSearchQuery}
      />
      <NewsBoard
        category={category}
        searchQuery={searchQuery}
        darkMode={darkMode}
      />
    </div>
  )
}

export default App