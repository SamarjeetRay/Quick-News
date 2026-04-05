export default async function handler(req, res) {
  const { category = "general", lang = "en", country = "in", max = 9, page = 1, q } = req.query

  const params = new URLSearchParams({
    category,
    lang,
    country,
    max,
    page,
    apikey: process.env.VITE_API_KEY,
  })

  if (q) params.set("q", q)

  try {
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?${params}`)
    const data = await response.json()
    res.status(response.status).json(data)
  } catch (err) {
    res.status(500).json({ errors: [err.message] })
  }
}
