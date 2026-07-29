import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryOverlay({ images = [], onClose }) {
  const [index, setIndex] = useState(-1)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (index >= 0) setIndex(-1)
        else onClose()
      }
      if (e.key === 'ArrowRight' && index >= 0) next()
      if (e.key === 'ArrowLeft' && index >= 0) prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, next, prev, onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center"
        onClick={() => (index >= 0 ? setIndex(-1) : onClose())}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-space/95 backdrop-blur-xl" />
        <div className="scanlines" />
        <div className="grain-overlay" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 text-ink/40 hover:text-rose transition-colors font-mono text-[10px] tracking-[0.2em]"
        >
          CLOSE [ESC]
        </button>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {index < 0 && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative z-10 w-full max-w-5xl max-h-[85vh] overflow-y-auto px-6 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="group relative overflow-hidden rounded-xl aspect-square bg-deep/60 border border-white/[0.06] hover:border-amber/30 transition-all"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-space/0 group-hover:bg-space/10 transition-colors" />
                    <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/30 bg-space/70 px-2 py-0.5 rounded">
                      {i + 1}/{images.length}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel */}
        <AnimatePresence mode="wait">
          {index >= 0 && (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 flex items-center justify-center w-full h-full px-10 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[index]}
                alt=""
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-white/50 hover:text-amber hover:border-amber/50 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center text-white/50 hover:text-amber hover:border-amber/50 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-ink/30 tracking-[0.2em]">
                {index + 1} &frasl; {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
