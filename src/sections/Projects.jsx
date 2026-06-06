import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <ScrollReveal className="section-label">Selected work</ScrollReveal>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ScrollReveal
            key={project.id}
            as="a"
            href={project.url}
            className="project-card"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <p className="project-number">{project.number}</p>
            <h3 className="project-title">
              {project.title.map((line, j) => (
                <span key={j}>{line}{j < project.title.length - 1 && <br />}</span>
              ))}
            </h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <span className="project-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
