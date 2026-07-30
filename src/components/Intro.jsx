import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n'

export default function Intro({ onDone }) {
  const { t, ME } = useLang()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const ti = [
      setTimeout(() => setStep(1), 550),
      setTimeout(() => setStep(2), 1300),
      setTimeout(() => onDone(), 2300),
    ]
    return () => ti.forEach(clearTimeout)
  }, [onDone])

  const skip = useCallback(() => onDone(), [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-space flex items-center justify-center cursor-pointer select-none"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.75, 0, 0.25, 1] }}
      onClick={skip}
    >
      <div className="text-center">
        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.45em] text-ink/35 font-mono mb-6"
          >
            {t.intro.l1}
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[clamp(2.4rem,8vw,5.5rem)] leading-none text-ink"
          >
            {t.intro.l2}
          </motion.p>
        )}
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.35em] text-ink/35 font-mono mt-6"
          >
            {t.intro.l3} <span className="text-amber">{ME.nameZh}</span>
          </motion.p>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[9px] tracking-[0.2em] text-ink/20 font-mono mt-8"
        >
          {t.intro.skip}
        </motion.p>
      </div>
    </motion.div>
  )
}
