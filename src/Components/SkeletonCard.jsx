const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton-line" style={{ width: "40%", height: "10px" }} />
        <div className="skeleton-line" style={{ width: "90%" }} />
        <div className="skeleton-line" style={{ width: "75%" }} />
        <div className="skeleton-line" style={{ width: "85%", height: "10px" }} />
        <div className="skeleton-line" style={{ width: "60%", height: "10px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
          <div className="skeleton-line" style={{ width: "30%", height: "10px" }} />
          <div className="skeleton-line" style={{ width: "20%", height: "10px" }} />
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard