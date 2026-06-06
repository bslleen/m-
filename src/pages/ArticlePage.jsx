import { useParams, Link } from 'react-router-dom'
import { writings } from '../data/writing'
import Cursor from '../components/Cursor'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = writings.find(w => w.slug === slug)

  if (!article) {
    return (
      <div className="article-page">
        <header className="article-nav">
          <Link to="/" className="article-back">← Back</Link>
        </header>
        <div className="article-content">
          <p className="article-date">404</p>
          <h1 className="article-title">Article not found.</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <Cursor />
      <header className="article-nav">
        <Link to="/" className="article-back">← Back</Link>
      </header>
      <article className="article-content">
        <p className="article-date">{article.date}</p>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-rule" />
        {article.body.split('\n\n').map((paragraph, i) => (
          <p key={i} className="article-body">{paragraph}</p>
        ))}
        <div className="article-footer">
          <a href={article.projectUrl} className="btn-primary">
            <span>View {article.projectName}</span>
          </a>
        </div>
      </article>
    </div>
  )
}
