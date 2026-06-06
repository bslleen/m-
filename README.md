# Lina — Personal Portfolio

A personal portfolio and writing space built with React and Vite. Atmospheric design with a lavender palette, custom cursor, animated rain canvas, and client-side article routing.

**Live:** [deployed on Vercel]

---

## Stack

- **React 19** + **Vite 7**
- **React Router v7** — client-side routing for article pages
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Cormorant Garamond** + **IM Fell English** — Google Fonts
- Deployed on **Vercel**

---

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom dot + ring cursor (hidden on touch devices)
│   ├── RainCanvas.jsx      # Animated rain (120 drops, pauses when tab hidden)
│   ├── Clouds.jsx          # Drifting cloud layers
│   ├── Moon.jsx            # Fixed moon with glow + pulse animation
│   ├── Navbar.jsx          # Fixed nav with mobile hamburger dropdown
│   └── ScrollReveal.jsx    # IntersectionObserver reveal wrapper
├── sections/
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Writing.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   └── ArticlePage.jsx     # Article template — reads from data/writing.js
├── data/
│   ├── projects.js         # Edit here to add/update projects
│   └── writing.js          # Edit here to add/update articles
├── hooks/
│   ├── useCursor.js
│   └── useScrollReveal.js
└── styles/
    └── global.css
```

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the build locally
```

---

## Adding a New Project

Open `src/data/projects.js` and add an entry to the array:

```js
{
  id: 5,
  number: '05',
  title: ['Project', 'Name'],      // two lines displayed on the card
  description: 'What it does.',
  tags: ['React', 'Go'],
  url: 'https://your-project-url',
}
```

The Projects section renders directly from this array — no other files need to change.

---

## Adding a New Article

Open `src/data/writing.js` and add an entry:

```js
{
  date: 'Jul 2026',
  title: 'Your article title',
  subtitle: 'A short subtitle shown in the list',
  slug: 'your-article-title',           // becomes /writing/your-article-title
  body: `First paragraph.

Second paragraph.`,                      // blank line between paragraphs
  projectName: 'Related Project',
  projectUrl: 'https://...',
}
```

The Writing section links automatically. The article page is generated from this data — no new files or routes needed.

---

## Routes

| Path | Page |
|---|---|
| `/` | Portfolio (Hero, Projects, Writing, About, Contact) |
| `/writing/:slug` | Article page |

`vercel.json` rewrites all paths to `/` so direct URL access and page refresh work correctly on Vercel.

---

## Contact

[bslleen@icloud.com](mailto:bslleen@icloud.com) · [github.com/bslleen](https://github.com/bslleen)
