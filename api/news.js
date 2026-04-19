export default async function handler(req, res) {
  const {
    category = "general",
    country = "in",
    page_size = 9,
    page_number = 1,
    keywords = "",
  } = req.query;

  const apiKey = process.env.CURRENTS_API_KEY;

  const categoryMap = {
    general: "general",
    technology: "technology",
    business: "finance",
    health: "health",
    sports: "sports",
    entertainment: "entertainment",
  };

  const countryMap = {
    in: "IN", us: "US", gb: "GB", au: "AU",
    ca: "CA", de: "DE", fr: "FR", sg: "SG",
    ae: "AE", jp: "JP", ng: "NG", za: "ZA",
  };

  const mappedCategory = categoryMap[category] || "general";
  const mappedCountry = countryMap[country] || "IN";

  try {
    const url = new URL("https://api.currentsapi.services/v1/latest-news");

    url.searchParams.append("apiKey", apiKey);
    url.searchParams.append("language", "en");
    url.searchParams.append("category", mappedCategory);
    url.searchParams.append("country", mappedCountry);
    url.searchParams.append("page_size", page_size);
    url.searchParams.append("page_number", page_number);

    if (keywords) {
      url.searchParams.append("keywords", keywords);
    }

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.status !== "ok") {
      return res.status(500).json({ error: data.message || "API error" });
    }

    res.status(200).json({
      articles: (data.news || []).map((a) => ({
        title: a.title,
        description: a.description,
        url: a.url,
        image: a.image && a.image !== "None" ? a.image : null,
        publishedAt: a.published,
        source: { name: new URL(a.url).hostname.replace("www.", "") },
      })),
      hasMore: (data.news || []).length === Number(page_size),
    });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}