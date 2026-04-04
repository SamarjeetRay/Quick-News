import { useEffect, useState, useCallback } from "react"
import NewsItem from "./NewsItem"
import SkeletonCard from "./SkeletonCard"

const PAGE_SIZE = 9

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchNews = useCallback(() => {
    setLoading(true)
    setError(null)

    const base = `/api/v2/top-headlines`
    const params = new URLSearchParams({
      country: "us",
      category,
      pageSize: PAGE_SIZE,
      page,
      apiKey: import.meta.env.VITE_API_KEY,
    })

    if (searchQuery) {
      params.set("q", searchQuery)
    }

    fetch(`${base}?${params}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (data.status === "error") throw new Error(data.message)
        setArticles(data.articles?.filter(a => a.title !== "[Removed]") || [])
        setTotalResults(data.totalResults || 0)
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [category, searchQuery, page])

  // Reset page when category or search changes
  useEffect(() => {
    setPage(1)
  }, [category, searchQuery])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const totalPages = Math.ceil(totalResults / PAGE_SIZE)

  const getCategoryTitle = () => {
    if (searchQuery) return `Results for "${searchQuery}"`
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <main className="main-content">
      {/* Header */}
      <div className="content-header">
        <h1 className="content-title">
          <em>{getCategoryTitle()}</em> Headlines
        </h1>
        {!loading && !error && (
          <span className="result-count">
            {totalResults > 0 ? `${totalResults} stories` : ""}
          </span>
        )}
      </div>

      {/* Grid */}
      <div className="news-grid">
        {loading ? (
          Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <SkeletonCard key={i} />
          ))
        ) : error ? (
          <div className="error-box">
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button className="retry-btn" onClick={fetchNews}>Try again</button>
          </div>
        ) : articles.length === 0 ? (
          <div className="no-results">
            <h3>No stories found</h3>
            <p>Try a different search or category.</p>
          </div>
        ) : (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              source={news.source?.name}
              publishedAt={news.publishedAt}
              category={category}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {!loading && !error && totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            ← Prev
          </button>
          <span className="page-info">
            {page} / {totalPages}
          </span>
          <button
            className="page-btn"
            disabled={page >= totalPages}
            onClick={() => setPage(p => p + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  )
}

export default NewsBoard