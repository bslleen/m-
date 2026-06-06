import './styles/global.css'
import Cursor from './components/Cursor'
import RainCanvas from './components/RainCanvas'
import Clouds from './components/Clouds'
import Moon from './components/Moon'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Writing from './sections/Writing'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <RainCanvas />
      <Clouds />
      <Moon />
      <Navbar />
      <Hero />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Writing />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
