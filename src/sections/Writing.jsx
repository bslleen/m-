import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { writings } from '../data/writing'

export default function Writing() {
  return (
    <section className="section" id="writing">
      <ScrollReveal className="section-label">Writing &amp; observations</ScrollReveal>
      <div className="writing-list">
        {writings.map((item, i) => (
          <ScrollReveal
            key={i}
            as={Link}
            to={`/writing/${item.slug}`}
            className="writing-item"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="writing-date">{item.date}</span>
            <div className="writing-title">
              {item.title}
              <em>{item.subtitle}</em>
            </div>
            <span className="writing-arrow">→</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
