import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const [bgType, setBgType] = useState('moon')

  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/videos/hero-bg.mp4'
    video.oncanplay = () => setBgType('video')
    const img = new Image()
    img.src = '/images/hero-bg.jpg'
    img.onload = () => {
      if (bgType === 'moon') setBgType('image')
    }
  }, [bgType])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10 pointer-events-none neon-frame" />

      {bgType === 'video' && (
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      {bgType === 'image' && (
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {bgType === 'moon' && (
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

      {/* Scroll hint */}
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
