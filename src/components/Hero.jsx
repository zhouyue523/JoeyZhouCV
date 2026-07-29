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
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setBg('image')
      const video = document.createElement('video')
      video.preload = 'auto'
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.src = '/videos/hero-bg.mp4'
      video.oncanplay = () => setShowVideo(true)
    }
    img.onerror = () => setBg('moon')
    img.src = '/images/hero-bg.jpg'
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

      {showVideo && (
        <video
          key="hero-vid"
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000"
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

      {/* Scroll hint */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-3"
      >
        <motion.svg
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-5 h-5 text-ink/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
        <span className="text-[11px] tracking-[0.5em] text-ink/45 font-mono">向下滑动</span>
        <span className="text-[9px] tracking-[0.3em] text-ink/20 font-mono">SCROLL</span>
      </motion.div>
    </section>
  )
}
