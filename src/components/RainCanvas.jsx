import { useEffect, useRef } from 'react'

export default function RainCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drops = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      len: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drops.forEach(d => {
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 1, d.y + d.len)
        ctx.strokeStyle = `rgba(160,150,210,${d.opacity})`
        ctx.lineWidth = 0.8
        ctx.stroke()
        d.y += d.speed
        if (d.y > canvas.height) {
          d.y = -d.len
          d.x = Math.random() * canvas.width
        }
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas id="rain-canvas" ref={canvasRef} />
}
