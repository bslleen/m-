export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Software Engineer — Algeria</p>
      <h1 className="hero-greeting">
        Hi, my name<br />is <em>Lina.</em><br />And I build things.
      </h1>
      <p className="hero-sub">
        A software engineer who builds and occasionally designs digital experiences. I also love talking and writing about them.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary"><span>View my work</span></a>
        <a href="#writing" className="btn-ghost">Read my writing →</a>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}
