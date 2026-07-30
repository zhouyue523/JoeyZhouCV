import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useLang } from '../i18n'

function DarkInterlude() {
  const { t } = useLang()
  const words = t.philo.enQuote.split(' ')

  return (
    <section className="relative bg-space overflow-hidden py-32 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="font-display text-[clamp(1.8rem,5.5vw,4.5rem)] leading-[1.06] text-ink"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block mr-[0.22em]"
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-[10px] tracking-[0.25em] text-ink/25 font-mono"
        >
          — {t.philo.author}
        </motion.p>
      </div>
    </section>
  )
}

export default function Philosophy({ onBack }) {
  const { t } = useLang()
  const p = t.philo
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 30 })

  return (
    <div ref={containerRef} className="relative">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 h-[2px] bg-amber origin-left z-[70]"
      />

      {/* Nav */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-paper/80 backdrop-blur-md border-b border-space/[0.06]">
        <button
          onClick={onBack}
          className="text-[10px] tracking-[0.2em] text-space/45 font-mono hover:text-space transition-colors"
        >
          ← {p.back}
        </button>
        <span className="text-[10px] tracking-[0.18em] text-space/25 font-mono">
          {p.kicker}
        </span>
      </div>

      {/* Hero */}
      <section className="min-h-[92vh] flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto pt-24 bg-paper">
        <div className="md:ml-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.35em] text-space/30 font-mono"
          >
            {p.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 font-song font-black text-[clamp(2rem,5vw,4rem)] leading-[1.16] text-space"
          >
            {p.quote.includes('推销')
              ? p.quote.split('推销').reduce((acc, pt, i) => {
                  if (i === 0) return pt
                  return (
                    <>
                      {acc}
                      <span className="text-violet">推销</span>
                      {pt}
                    </>
                  )
                }, null)
              : p.quote}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="w-10 h-px bg-space/15" />
            <div>
              <p className="text-sm font-bold text-space/75 mont">{p.author}</p>
              <p className="text-[9px] tracking-[0.15em] text-space/30 font-mono mt-0.5">
                {p.source}
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="inline-block mt-20"
          >
            <span className="text-[9px] tracking-[0.35em] text-space/25 font-mono">
              ↓ SCROLL
            </span>
          </motion.div>
        </div>
      </section>

      {/* Lede */}
      <section className="bg-paper px-6 pb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto font-song text-lg md:text-xl leading-loose text-space/78 drop-cap"
        >
          {p.lede}
        </motion.p>
      </section>

      {/* Chapters */}
      {p.chapters.map((ch, ci) => (
        <div key={ci}>
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="bg-paper px-6 py-16 md:py-24 border-t border-space/[0.06]"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-[10px] tracking-[0.28em] text-violet font-mono">
                {ch.no} — {ch.en}
              </p>
              <h3 className="mt-4 font-song text-2xl md:text-3xl font-black text-space leading-[1.2]">
                {ch.t}
              </h3>
              <div className="mt-8 space-y-5 text-sm md:text-base leading-loose text-space/72">
                {ch.ps.map((pp, pi) => (
                  <p key={pi}>{pp}</p>
                ))}
              </div>
              <div className="mt-12 border-l-4 border-violet pl-5 md:pl-6 font-song text-xl md:text-2xl font-bold leading-snug text-space italic">
                {ch.pull}
              </div>
            </div>
          </motion.section>

          {ci === 1 && <DarkInterlude />}
        </div>
      ))}

      {/* Ending */}
      <section className="bg-paper px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.25em] text-space/30 font-mono mb-6"
          >
            {p.endingT}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-song text-xl md:text-2xl leading-relaxed text-space/75 max-w-2xl mx-auto"
          >
            {p.ending}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-space/[0.08]"
          >
            {p.outro}
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            onClick={onBack}
            className="mt-10 border border-space/35 text-space/60 px-8 py-3 rounded-full text-xs tracking-[0.18em] font-mono hover:bg-space hover:text-paper transition-colors"
          >
            {p.back}
          </motion.button>
        </div>
      </section>
    </div>
  )
}
