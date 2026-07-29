import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Interlude({ label, title, subtitle, id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.03])
  const [hasImg, setHasImg] = useState(false)

  useEffect(() => {
    if (!id) return
    const img = new Image()
    img.onload = () => setHasImg(true)
    img.src = `/images/interlude-${id}.jpg`
  }, [id])

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {hasImg && (
        <>
          <img
            src={`/images/interlude-${id}.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-space/40" />
        </>
      )}

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 select-none"
      >
        <p className="text-[9px] tracking-[0.45em] text-amber/50 font-mono mb-8">
          {label}
        </p>
        <h2 className="font-display text-[clamp(4rem,14vw,11rem)] leading-none text-outline text-ink/30">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-6 text-[10px] tracking-[0.3em] text-ink/20 font-mono">
            {subtitle}
          </p>
        )}
      </motion.div>

      {!hasImg && (
        <>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.03] -rotate-6" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.02] rotate-6" />
        </>
      )}
    </section>
  )
}
