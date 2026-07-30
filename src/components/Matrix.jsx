import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeading from './SectionHeading'

function Counter({ to, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * e))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-amber">
      {val.toLocaleString()}
      <span className="text-violet">{suffix}</span>
    </span>
  )
}

function AccountCard({ account, index }) {
  const [imgOk, setImgOk] = useState(false)
  const catColors = {
    LOOKS: 'bg-rose/15 text-rose border-rose/25',
    TECH: 'bg-teal/15 text-teal border-teal/25',
    MEME: 'bg-amber/15 text-amber border-amber/25',
  }

  return (
    <motion.a
      href={account.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.06 }}
      className="group relative block border border-white/[0.06] rounded-2xl overflow-hidden bg-deep/40 hover:border-amber/20 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[9/16] relative overflow-hidden bg-space cursor-pointer">
        {imgOk ? (
          <img
            src={import.meta.env.BASE_URL + `images/${account.img}.jpg`}
            alt={account.name}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 vhs-grad">
            <img
            src={import.meta.env.BASE_URL + `images/${account.img}.jpg`}
              alt=""
              className="hidden"
              onLoad={() => setImgOk(true)}
            />
            <span className="text-white/15 font-mono text-[9px] tracking-[0.15em]">
              {account.img}.jpg
            </span>
            <span className="text-[7px] text-white/8 font-mono">SCREENSHOT</span>
          </div>
        )}
        {/* Hover overlay with link hint */}
        <div className="absolute inset-0 bg-space/0 group-hover:bg-space/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-white/70 bg-space/60 px-3 py-1.5 rounded-full">
            抖音 ↗
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold truncate">{account.name}</h4>
          <span
            className={`text-[8px] tracking-[0.12em] font-mono px-2 py-0.5 rounded-full border ${catColors[account.catEn] || 'bg-white/5 text-ink/30 border-white/10'}`}
          >
            {account.cat}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[9px] tracking-[0.15em] text-ink/25 font-mono group-hover:text-amber transition-colors">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.6 12.2L13.5 18.3C12.7 19.1 11.3 19.1 10.5 18.3L6.8 14.6C6 13.8 6 12.4 6.8 11.6L12.9 5.5C14.7 3.7 17.5 3.7 19.3 5.5L19.6 5.8C21.4 7.6 21.4 10.4 19.6 12.2Z" />
            <path d="M4.2 17.4L3.9 17.1C2.1 15.3 2.1 12.5 3.9 10.7L10 4.6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          抖音直达
        </div>
      </div>
    </motion.a>
  )
}

export default function Matrix() {
  const { t } = useLang()
  const m = t.matrix

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="matrix"
      className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeading part={m.part} en={m.en} title={m.title} sub={m.sub} />

      {/* Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden"
      >
        {m.stats.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-space p-6 md:p-8"
          >
            <Counter to={s.v} suffix={s.s} />
            <p className="mt-1.5 text-[9px] tracking-[0.22em] text-ink/30 font-mono">
              {s.l}
            </p>
            <p className="text-[7px] tracking-[0.22em] text-ink/12 font-mono">
              {s.en}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Groups */}
      <div className="mt-20">
        <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono">
          {m.groupsTitle}
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {m.groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/[0.05] bg-deep/40 rounded-2xl p-6 hover:border-purple/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-[0.2em] text-ink/75 font-mono">
                  {g.t}
                  <span className="text-ink/15 ml-1.5">{g.en}</span>
                </p>
                <span className="font-display text-3xl text-violet/50">
                  ×{g.n}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                {[...Array(g.n)].map((_, j) => (
                  <div
                    key={j}
                    className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.01] flex items-center justify-center text-[8px] font-mono text-ink/18"
                  >
                    K{j + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/42 leading-relaxed">{g.d}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl text-lg md:text-xl font-song text-ink/65 italic leading-relaxed border-l-2 border-violet pl-6"
      >
        {m.desc}
      </motion.p>

      {/* Top Accounts Showcase */}
      <div className="mt-20">
        <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono mb-2">
          {m.accountsTitle}
        </p>
        <p className="text-[8px] tracking-[0.18em] text-ink/18 font-mono mb-8">
          {m.accountsNote}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {m.accounts.map((a, i) => (
            <AccountCard key={i} account={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
