import { useLang } from '../i18n'
import Marquee from './Marquee'

export default function Footer({ setView }) {
  const { t, ME } = useLang()
  const f = t.footer

  return (
    <footer className="relative">
      <div className="border-t border-white/[0.04]">
        <Marquee id="outro" />
      </div>
      <div className="py-28 text-center">
        <h2 className="font-display text-[clamp(2rem,6vw,5rem)] text-outline text-ink/30">
          {f.line1}
        </h2>
        <p className="mt-3 text-[10px] tracking-[0.22em] text-ink/30 font-mono">
          {f.line2}
        </p>
        <div className="mt-12 flex flex-wrap gap-5 justify-center items-center">
          <span className="text-[10px] text-ink/35 font-mono">
            {f.contact}: {ME.email}
          </span>
          <button
            onClick={() => setView('philosophy')}
            className="text-[10px] tracking-[0.2em] text-rose font-mono border border-rose/25 rounded-full px-4 py-1.5 hover:bg-rose/8 transition-colors"
          >
            {f.philosophy} ↗
          </button>
        </div>
      </div>
      <div className="border-t border-white/[0.03] px-6 py-4 flex justify-between text-[8px] tracking-[0.18em] text-ink/15 font-mono">
        <span>{f.rights}</span>
        <span>SIDE A · END</span>
      </div>
    </footer>
  )
}
