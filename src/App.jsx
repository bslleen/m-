import { lazy, Suspense } from 'react'
import './styles/global.css'
import Cursor from './components/Cursor'
import RainCanvas from './components/RainCanvas'
import Clouds from './components/Clouds'
import Moon from './components/Moon'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Footer from './sections/Footer'

const Writing = lazy(() => import('./sections/Writing'))
const Contact = lazy(() => import('./sections/Contact'))

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
      <Suspense fallback={null}>
        <Writing />
      </Suspense>
      <div className="divider" />
      <About />
      <div className="divider" />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  )
}
