import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeading from './SectionHeading'
import { useMultiImages } from './useMultiImages'
import GalleryOverlay from './GalleryOverlay'

const GRADS = [
  'from-violet/15 via-purple/10 to-deep',
  'from-teal/10 via-deep to-violet/8',
  'from-amber/8 via-deep to-teal/10',
  'from-rose/8 via-deep to-violet/10',
  'from-purple/12 via-deep to-teal/8',
  'from-cyan/10 via-deep to-purple/12',
]

/* ── Image-based card ── */
function ImageCard({ item, index }) {
  const images = useMultiImages(item.img)
  const [open, setOpen] = useState(false)
  const hasImages = images.length > 0
  const thumbnail = images[0] || null

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: (index % 6) * 0.08 }}
        onClick={() => hasImages && setOpen(true)}
        className={`group relative border border-white/[0.05] rounded-2xl overflow-hidden min-h-[220px] p-6 flex flex-col justify-end hover:border-violet/30 transition-all duration-500 bg-deep/20 ${hasImages ? 'cursor-pointer' : ''}`}
      >
        <div className={`absolute inset-0 bg-linear-to-br ${GRADS[index % GRADS.length]} opacity-60`} />
        {thumbnail && (
          <img src={thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
        )}
        <span className="absolute top-4 right-4 font-display text-[2.2rem] opacity-[0.04] select-none">{item.en}</span>
        {images.length > 1 && (
          <span className="absolute top-5 left-5 z-10 text-[8px] tracking-[0.15em] font-mono text-white/50 bg-space/70 backdrop-blur px-2 py-0.5 rounded-full">
            ×{images.length}
          </span>
        )}
        <div className="relative z-10">
          <p className="text-[9px] tracking-[0.2em] text-teal font-mono">{item.no}</p>
          <h3 className="mt-1 font-song text-2xl font-bold">{item.t}</h3>
          <p className="text-[8px] tracking-[0.18em] text-ink/18 font-mono">{item.en}</p>
          <p className="mt-2 text-sm text-ink/48 leading-relaxed max-w-xs">{item.d}</p>
        </div>
        {!hasImages && (
          <p className="relative z-10 mt-3 text-[8px] tracking-[0.14em] text-teal/40 font-mono">
            DROP images/{item.img}.jpg / -1.jpg …
          </p>
        )}
      </motion.div>
      {open && images.length > 0 && <GalleryOverlay images={images} onClose={() => setOpen(false)} />}
    </>
  )
}

/* ── Video-based card ── */
function VideoCard({ item, index }) {
  const [hasVideo, setHasVideo] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 6) * 0.08 }}
      className="group relative border border-white/[0.05] rounded-2xl overflow-hidden min-h-[220px] p-6 flex flex-col justify-end hover:border-amber/30 transition-all duration-500 bg-deep/20"
    >
      <div className={`absolute inset-0 bg-linear-to-br ${GRADS[index % GRADS.length]} opacity-60`} />
      <span className="absolute top-4 right-4 font-display text-[2.2rem] opacity-[0.04] select-none">{item.en}</span>

      <div className="relative z-10 mb-4">
        {hasVideo ? (
          <video
            src={`/videos/${item.video}.mp4`}
            poster={`/images/${item.video}.jpg`}
            controls
            className="w-full rounded-xl"
            onError={() => setHasVideo(false)}
            preload="none"
          />
        ) : (
          <div className="w-full aspect-video rounded-xl vhs-grad flex items-center justify-center border border-white/[0.08]">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full border-2 border-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white/50 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-2 text-[8px] font-mono text-ink/20">DROP videos/{item.video}.mp4</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <p className="text-[9px] tracking-[0.2em] text-teal font-mono">{item.no}</p>
        <h3 className="mt-1 font-song text-2xl font-bold">{item.t}</h3>
        <p className="text-[8px] tracking-[0.18em] text-ink/18 font-mono">{item.en}</p>
        <p className="mt-2 text-sm text-ink/48 leading-relaxed max-w-xs">{item.d}</p>
      </div>
    </motion.div>
  )
}

export default function Explore() {
  const { t } = useLang()
  const e = t.explore

  return (
    <section id="explore" className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHeading part={e.part} en={e.en} title={e.title} sub={e.sub} />
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {e.items.map((item, i) =>
          item.video ? (
            <VideoCard key={i} item={item} index={i} />
          ) : (
            <ImageCard key={i} item={item} index={i} />
          )
        )}
      </div>
    </section>
  )
}
