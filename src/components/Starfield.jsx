import { useEffect, useRef } from 'react'

const COLORS = ['237,232,219', '124,108,255', '92,232,200', '245,192,68']

export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, dpr, stars = [], meteors = [], raf, lastMeteor = 0

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      c.width = w * dpr
      c.height = h * dpr
      c.style.width = w + 'px'
      c.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initStars()
    }

    function initStars() {
      stars = []
      const n = Math.floor((w * h) / 7000)
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.15,
          vx: Math.random() * 0.25 + 0.06,
          vy: (Math.random() - 0.5) * 0.08,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          tw: Math.random() * Math.PI * 2,
          tws: Math.random() * 0.025 + 0.008,
        })
      }
    }

    function spawn() {
      const sx = Math.random() * w * 0.7
      meteors.push({
        x: sx,
        y: -20,
        l: Math.random() * 80 + 40,
        vx: 2 + Math.random() * 3.5,
        vy: 3 + Math.random() * 3,
        life: 1,
      })
    }

    function draw(ts) {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.x -= s.vx
        s.y -= s.vy
        if (s.x < -5) s.x = w + 5
        if (s.x > w + 5) s.x = -5
        if (s.y < -5) s.y = h + 5
        if (s.y > h + 5) s.y = -5
        const a = 0.35 + 0.65 * Math.sin(s.tw + ts * s.tws * 0.001)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color},${a})`
        ctx.shadowColor = `rgba(${s.color},${a * 0.5})`
        ctx.shadowBlur = s.r * 3
        ctx.fill()
        ctx.shadowBlur = 0
      }
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        m.x += m.vx
        m.y += m.vy
        m.life -= 0.014
        if (m.life <= 0) {
          meteors.splice(i, 1)
          continue
        }
        const ex = m.x - m.l * m.vx * 0.2
        const ey = m.y - m.l * m.vy * 0.2
        const g = ctx.createLinearGradient(m.x, m.y, ex, ey)
        g.addColorStop(0, `rgba(255,255,255,${m.life})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = g
        ctx.lineWidth = 1.2
        ctx.stroke()
      }
      if (ts - lastMeteor > 4000 + Math.random() * 8000) {
        lastMeteor = ts
        spawn()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
