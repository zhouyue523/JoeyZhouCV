import { useLang } from '../i18n'

export default function Marquee({ id }) {
  const { t } = useLang()
  const texts = { m1: t.marquee.m1, m2: t.marquee.m2, outro: t.marquee.outro }
  const txt = texts[id] || ''

  return (
    <div className="overflow-hidden border-y border-white/[0.03] py-3.5 select-none">
      <div className="marquee-track">
        <span className="text-[10px] tracking-[0.2em] text-ink/30 font-mono pr-10">
          {txt}
        </span>
        <span className="text-[10px] tracking-[0.2em] text-ink/30 font-mono pr-10">
          {txt}
        </span>
      </div>
    </div>
  )
}
