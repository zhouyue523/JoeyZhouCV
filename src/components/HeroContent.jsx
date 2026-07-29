import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../i18n'

export default function HeroContent({ setView }) {
  const { t, lang } = useLang()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[65vh] flex items-center px-6 md:px-16 py-20"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-2xl ml-0 md:ml-4"
      >
        <p className="text-[10px] tracking-[0.35em] text-ink/35 font-mono mb-6">
          <span className="text-amber mr-2">&#9724;</span>
          {t.hero.kicker}
        </p>

        {lang === 'zh' ? (
          <h1 className="font-song font-black text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-tight">
            <span className="block">{t.hero.line1}</span>
            <span className="block text-violet">「{t.hero.line2}」</span>
          </h1>
        ) : (
          <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.9]">
            <span className="block">{t.hero.line1}</span>
            <span className="block text-violet">{t.hero.line2}</span>
          </h1>
        )}

        <p className="text-[11px] tracking-[0.25em] text-teal font-mono mt-6">
          {t.hero.role}
        </p>

        <p className="text-sm md:text-base text-ink/55 font-light max-w-lg mt-4 leading-relaxed">
          {t.hero.desc}
        </p>

        <div className="flex flex-wrap gap-2.5 mt-5">
          {t.hero.chips.map((c, i) => (
            <span
              key={i}
              className="text-[9px] tracking-[0.18em] text-ink/40 font-mono border border-white/[0.1] rounded-full px-3 py-1"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => scrollTo('profile')}
            className="text-[10px] md:text-xs tracking-[0.2em] text-space font-bold font-mono bg-amber px-6 py-3 rounded-full hover:bg-amber/90 transition-colors"
          >
            {t.hero.cta1}
          </button>
          <button
            onClick={() => setView('philosophy')}
            className="text-[10px] md:text-xs tracking-[0.2em] text-ink/60 font-mono border border-white/[0.15] rounded-full px-6 py-3 hover:border-amber/50 hover:text-amber transition-colors"
          >
            {t.hero.cta2}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
