import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const [bg, setBg] = useState('checking')
  const [upgrade, setUpgrade] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setBg('image')
    img.onerror = () => setBg('moon')
    img.src = '/images/hero-bg.jpg'
    const t = setTimeout(() => {
      const video = document.createElement('video')
      video.preload = 'none'
      video.src = '/videos/hero-bg.mp4'
      video.oncanplay = () => setUpgrade(true)
    }, 4000)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none neon-frame" />

      {bg === 'image' && (
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {bg === 'image' && upgrade && (
        <video
          key="hero-vid"
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />
      )}

      {bg === 'moon' && (
        <motion.div
          style={{ y: moonY }}
          className="absolute right-[6%] top-[14%] z-0 pointer-events-none hidden sm:block"
        >
          <div className="moon-glow float-slow relative size-[min(38vw,440px)] rounded-full bg-[radial-gradient(circle_at_36%_34%,#f8eccf,#f5c044_38%,#b14aed_74%,#4a2fb8)]">
            <div className="absolute inset-0 rounded-full orbital-ring spin-slow scale-[1.28]" />
            <div className="absolute inset-0 rounded-full orbital-ring spin-slow scale-[1.08] [animation-direction:reverse] opacity-60" />
          </div>
        </motion.div>
      )}

      {bg === 'checking' && (
        <div className="absolute inset-0 bg-space z-0" />
      )}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-10 z-10"
      >
        <span className="text-[9px] tracking-[0.4em] text-ink/25 font-mono">
          ↓ SCROLL
        </span>
      </motion.div>
    </section>
  )
}
