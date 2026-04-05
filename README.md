# Quick News ⚡

A responsive React news application built with **Vite** and styled with custom CSS. Fetches real-time headlines using the **GNews API** with category-based navigation, search, dark/light mode, skeleton loading, and pagination.

## Live Demo

🔗 [quick-news-live.vercel.app](https://quick-news-live.vercel.app)

---

## Features

- **Real-Time Headlines** — powered by GNews API, works in both local and production environments
- **Category Navigation** — General, Technology, Business, Health, Sports, Entertainment
- **Search** — live search across headlines
- **Dark / Light Mode** — toggle with persistent UI state
- **Skeleton Loading** — smooth loading placeholders
- **Pagination** — browse multiple pages of results
- **Responsive Design** — works on desktop, tablet, and mobile
- **Fallback Images** — broken images gracefully replaced with a placeholder

---

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- Custom CSS (no Bootstrap dependency)
- [GNews API](https://gnews.io/) for news data

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

1. **Clone or download** this repository.

2. **Navigate to the project directory:**
   ```sh
   cd Quick-News
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

### Configure GNews API

This app uses [GNews API](https://gnews.io/) — unlike NewsAPI, GNews works on deployed/production sites on the free tier.

1. Sign up at [gnews.io](https://gnews.io) and grab your free API key.

2. Create a `.env` file in the root of the project:
   ```sh
   touch .env
   ```

3. Add your key:
   ```env
   VITE_API_KEY=your_gnews_api_key_here
   ```

4. Save and start the dev server.

> **Note:** Never commit your `.env` file. It's already listed in `.gitignore`.

### Run Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deploying to Vercel

This project includes a `vercel.json` and is ready to deploy.

1. Push your code to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. In the Vercel dashboard, go to **Settings → Environment Variables** and add:
   ```
   VITE_API_KEY = your_gnews_api_key_here
   ```
4. Deploy — it works out of the box on the free GNews tier.

> **Why GNews instead of NewsAPI?** NewsAPI's free plan blocks requests from non-localhost domains. GNews allows production deployments on the free tier (100 requests/day).

---

## Project Structure

```
Quick-News/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx        # Navigation, search, theme toggle
│   │   ├── NewsBoard.jsx     # Fetches & displays articles grid
│   │   ├── NewsItem.jsx      # Individual news card
│   │   └── SkeletonCard.jsx  # Loading placeholder
│   ├── assets/
│   │   └── image.png         # Fallback image for broken article images
│   ├── App.jsx
│   ├── App.css               # All styles + dark/light theme variables
│   └── main.jsx
├── .env                      # Your API key (not committed)
├── vite.config.js            # Dev proxy config for GNews
└── vercel.json               # Vercel deployment config
```

---

## GNews API Reference

| Feature | GNews Free Tier |
|---|---|
| Requests/day | 100 |
| Works on deployed sites | ✅ Yes |
| Categories supported | general, technology, business, health, sports, entertainment |
| Image field | `article.image` |
| Total count field | `data.totalArticles` |

---

## License

MIT — feel free to use, modify, and share.
