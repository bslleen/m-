import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <section className="section" id="about">
      <ScrollReveal className="section-label">About</ScrollReveal>
      <div className="about-grid">
        <ScrollReveal className="about-text">
          <h2>A software engineer<br />who <em>occasionally</em><br />builds worlds.</h2>
          <p>I'm a third-year CS student in Algeria building full-stack systems — from government payroll infrastructure to Victorian literary archives with ambient sound.</p>
          <p>I believe the details do the talking. Motion, atmosphere, the weight of a word in an error message — these are not decorations. They are the product.</p>
          <p>I'm working toward building secured, scalable systems wrapped in interfaces that feel like something.</p>
        </ScrollReveal>
        <ScrollReveal className="about-details" style={{ transitionDelay: '0.2s' }}>
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <span className="detail-value">Algeria</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Currently</span>
            <span className="detail-value">Year 3 of 5, CS</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Stack</span>
            <span className="detail-value">React, Go, Node, PostgreSQL</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Learning</span>
            <span className="detail-value">Rust, German, driving</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Available for</span>
            <span className="detail-value">Freelance projects</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
