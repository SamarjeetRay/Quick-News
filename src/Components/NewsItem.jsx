import fallback from '../assets/image.png'

const formatDate = (dateStr) => {
  if (!dateStr) return ""
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

const CATEGORY_ICONS = {
  general: "📰",
  technology: "💻",
  business: "📈",
  health: "🩺",
  sports: "⚽",
  entertainment: "🎬",
}

const NewsItem = ({ title, description, src, url, source, publishedAt, category }) => {
  const icon = CATEGORY_ICONS[category] || "📰"

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-card"
    >
      {/* Image */}
      <div className="card-image-wrap">
        {src ? (
          <img
            src={src}
            alt={title}
            onError={(e) => { e.target.src = fallback }}
          />
        ) : (
          <div className="card-no-image">{icon}</div>
        )}
        <span className="card-category-tag">{category}</span>
      </div>

      {/* Body */}
      <div className="card-body">
        {source && <span className="card-source">{source}</span>}
        <h3 className="card-title">
          {title?.length > 80 ? title.slice(0, 80) + "…" : title}
        </h3>
        {description && (
          <p className="card-desc">
            {description.length > 110 ? description.slice(0, 110) + "…" : description}
          </p>
        )}
        <div className="card-footer">
          <span className="card-date">{formatDate(publishedAt)}</span>
          <span className="read-more">Read →</span>
        </div>
      </div>
    </a>
  )
}

export default NewsItem