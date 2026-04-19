# ⚡ QuickNews — Modern React News App

A fast, responsive news web app built with **React + Vite**, delivering real-time headlines with a clean UI and installable PWA experience.

🔗 **Live Demo:** https://dailyquicknews.vercel.app

---

## 🌟 Overview

QuickNews provides a smooth and modern news browsing experience with real-time updates, category filtering, and country-based personalization.
Designed with a **minimal UI and production-ready architecture**, it focuses on performance, usability, and scalability.

---

## ✨ Features

* 📰 **Real-Time News** — Powered by Currents API
* 📂 **Category Filtering** — General, Technology, Business, Health, Sports, Entertainment
* 🌍 **Country Selector** — Supports multiple countries with flag indicators
* 🔍 **Live Search** — Instant filtering by keywords
* 🌗 **Dark / Light Mode** — Theme toggle using CSS variables
* ⚡ **Skeleton Loading** — Better perceived performance
* 📄 **Pagination** — Efficient data navigation
* 📲 **PWA Support** — Installable app with service worker
* 📥 **Install Button (Navbar)** — Clean top-right CTA like modern apps
* 📱 **Responsive Design** — Works across mobile, tablet, desktop
* 🖼 **Fallback Images** — Handles missing/broken images

---

## 📲 PWA Support

* Installable on mobile & desktop
* Service worker enabled (offline caching)
* Auto-update support
* Custom install button using `beforeinstallprompt`

---

## 🎨 UI Highlights

* Minimal, clean navbar layout
* Theme-consistent design system
* Smooth hover & interaction states
* Custom country dropdown with flags

---

## 🛠 Tech Stack

* **Frontend:** React 18, Vite 6
* **Styling:** Custom CSS (CSS Variables)
* **API:** Currents API
* **Backend:** Vercel Serverless Functions
* **PWA:** vite-plugin-pwa
* **Deployment:** Vercel

---

## 📁 Project Structure

```
Quick-News/
├── api/                # Serverless API (secure key handling)
├── public/             # Manifest & PWA assets
├── src/
│   ├── Components/     # UI components (Navbar, NewsBoard, etc.)
│   ├── assets/         # Images
│   ├── App.jsx
│   └── main.jsx
├── .env                # API key (ignored)
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/SamarjeetRay/Quick-News.git
cd Quick-News
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` file:

```env
CURRENTS_API_KEY=your_api_key_here
```

> ⚠️ Do not commit `.env`

---

## ☁️ Deployment (Vercel)

* Import repo into Vercel
* Add environment variable
* Deploy

---

## 👨‍💻 Author

**Samarjeet Kumar Ray**

* GitHub: https://github.com/SamarjeetRay
* LinkedIn: https://linkedin.com/in/samarjeetray

---

## 📄 License

MIT License
