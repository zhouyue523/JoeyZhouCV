import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const audioRef = useRef(null)
  const userInteracted = useRef(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const [bg, setBg] = useState('checking')
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    const img = new Image()
    img.onload = () => {
      setBg('image')
      const video = document.createElement('video')
      video.preload = 'auto'
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.src = base + 'videos/hero-bg.mp4'
      video.oncanplay = () => setShowVideo(true)
    }
    img.onerror = () => setBg('moon')
    img.src = base + 'images/hero-bg.jpg'
  }, [])

  /* ── audio logic ── */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = true
    audio.play().catch(() => {})

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!userInteracted.current) return
        if (entry.isIntersecting) {
          audio.muted = false
          audio.play().catch(() => {})
        } else {
          audio.pause()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    const enableAudio = () => {
      if (!userInteracted.current) {
        userInteracted.current = true
        audio.muted = false
        audio.play().catch(() => {})
      }
    }

    window.addEventListener('click', enableAudio, { once: true })
    window.addEventListener('scroll', enableAudio, { once: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('scroll', enableAudio)
      audio.pause()
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none neon-frame" />

      {/* Background audio */}
      <audio ref={audioRef} loop preload="auto" muted className="hidden">
        <source src={import.meta.env.BASE_URL + 'audio/hero-bgm.mp3'} type="audio/mpeg" />
        <source src={import.meta.env.BASE_URL + 'audio/hero-bgm.m4a'} type="audio/mp4" />
        <source src={import.meta.env.BASE_URL + 'audio/hero-bgm.wav'} type="audio/wav" />
        <source src={import.meta.env.BASE_URL + 'audio/hero-bgm.ogg'} type="audio/ogg" />
      </audio>

      {bg === 'image' && (
        <img
          src={import.meta.env.BASE_URL + 'images/hero-bg.jpg'}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {showVideo && (
        <video
          key="hero-vid"
          src={import.meta.env.BASE_URL + 'videos/hero-bg.mp4'}
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
