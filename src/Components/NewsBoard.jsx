import { useEffect, useState, useCallback } from "react"
import NewsItem from "./NewsItem"
import SkeletonCard from "./SkeletonCard"

const PAGE_SIZE = 9

const NewsBoard = ({ category, searchQuery, country }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchNews = useCallback(() => {
    setLoading(true)
    setError(null)

    const params = new URLSearchParams({
      category,
      country,
      page_size: PAGE_SIZE,
      page_number: page,
    })

    if (searchQuery) params.set("keywords", searchQuery)

    fetch(`/api/news?${params}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (data.error) throw new Error(data.error)

        setArticles(data.articles || [])
        setHasMore(data.hasMore)
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [category, searchQuery, page, country])

  useEffect(() => {
    setPage(1)
  }, [category, searchQuery, country])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  const getCategoryTitle = () => {
    if (searchQuery) return `Results for "${searchQuery}"`
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <main className="main-content">
      <div className="content-header">
        <h1 className="content-title">
          <em>{getCategoryTitle()}</em> Headlines
        </h1>
      </div>

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
              src={news.image}
              url={news.url}
              source={news.source?.name}
              publishedAt={news.publishedAt}
              category={category}
            />
          ))
        )}
      </div>

      {!loading && !error && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            ← Prev
          </button>

          <span className="page-info">Page {page}</span>

          <button
            className="page-btn"
            disabled={!hasMore}
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