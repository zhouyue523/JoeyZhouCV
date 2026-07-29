import { motion } from 'framer-motion'

export default function SectionHeading({ part, en, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-[10px] tracking-[0.32em] text-amber font-mono">
        {part} <span className="text-ink/25">· {en}</span>
      </p>
      <h2 className="mt-3 font-song font-black text-[clamp(2rem,5.5vw,3.8rem)] leading-[1.08]">
        {title}
      </h2>
      {sub && (
        <p className="mt-2.5 text-[10px] tracking-[0.22em] text-ink/30 font-mono">
          {sub}
        </p>
      )}
      <div className="mt-8 h-px w-full bg-white/[0.06]" />
    </motion.div>
  )
}
