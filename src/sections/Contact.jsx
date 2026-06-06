import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <ScrollReveal className="section-label">Contact</ScrollReveal>
      <ScrollReveal>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '2rem' }}>
          Have something<br />worth <em style={{ color: 'var(--lavender-deep)' }}>building?</em>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '3rem' }}>
          I'm open to freelance projects. If what you're building needs to feel like something — reach out.
        </p>
        <a href="mailto:lina@example.com" className="btn-primary"><span>Send a message</span></a>
      </ScrollReveal>
    </section>
  )
}
