import { useLang } from '../i18n'

const NAV_ITEMS = [
  { id: 'profile', no: '01' },
  { id: 'films', no: '02' },
  { id: 'matrix', no: '03' },
  { id: 'explore', no: '04' },
]

export default function Nav({ view, setView }) {
  const { t, lang, toggle, ME } = useLang()

  const scrollTo = (id) => {
    if (view !== 'home') {
      setView('home')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 160)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-space/70 backdrop-blur-md border-b border-white/[0.06]">
      <button
        onClick={() => setView('home')}
        className="flex items-center gap-2 group shrink-0"
      >
        <span className="text-amber text-base leading-none mt-0.5">&#9724;</span>
        <span className="text-[10px] tracking-[0.28em] text-ink/50 font-mono group-hover:text-ink transition-colors">
          {ME.nameEn} · SPACE COWBOY
        </span>
      </button>

      <div className="hidden md:flex items-center gap-7">
        {NAV_ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => scrollTo(it.id)}
            className="text-[10px] tracking-[0.2em] text-ink/35 font-mono hover:text-amber transition-colors"
          >
            <span className="text-amber/50 mr-1">{it.no}</span>
            {t.nav[it.id]}
          </button>
        ))}
        <button
          onClick={() => setView('philosophy')}
          className="text-[10px] tracking-[0.2em] text-rose font-mono border border-rose/35 rounded-full px-3 py-1 hover:bg-rose/10 transition-colors"
        >
          {t.nav.philosophy}
        </button>
        <button
          onClick={toggle}
          className="text-[10px] tracking-[0.12em] text-ink/45 font-mono border border-white/[0.12] rounded-full px-3 py-1 hover:border-amber/50 hover:text-amber transition-colors"
        >
          {lang === 'zh' ? '中  /  EN' : 'EN  /  中'}
        </button>
      </div>

      <div className="flex md:hidden items-center gap-2.5">
        <button
          onClick={() => setView('philosophy')}
          className="text-[9px] tracking-[0.18em] text-rose font-mono border border-rose/35 rounded-full px-2.5 py-1"
        >
          {t.nav.philosophy}
        </button>
        <button
          onClick={toggle}
          className="text-[9px] tracking-[0.1em] text-ink/45 font-mono border border-white/[0.12] rounded-full px-2.5 py-1"
        >
          {lang === 'zh' ? '中/EN' : 'EN/中'}
        </button>
      </div>
    </nav>
  )
}
