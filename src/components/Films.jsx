import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import SectionHeading from './SectionHeading'

const PLATFORM = {
  weixin: { label: '微信视频号', en: 'WeChat', color: 'text-green-400' },
  douyin: { label: '抖音', en: 'Douyin', color: 'text-cyan-400' },
  xiaohongshu: { label: '小红书', en: 'RED', color: 'text-rose' },
}

function VideoCard({ item, lang }) {
  const [hasVideo, setHasVideo] = useState(true)
  const p = PLATFORM[item.platform] || PLATFORM.weixin
  const isLink = !!item.link

  const card = (
    <div className="group relative border border-white/[0.06] rounded-2xl overflow-hidden bg-deep/30 hover:border-amber/25 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        {!isLink && hasVideo ? (
          <video
            src={`/videos/${item.v}.mp4`}
            poster={`/images/film-${item.v}.jpg`}
            controls
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setHasVideo(false)}
            preload="none"
          />
        ) : (
          <div className="absolute inset-0 vhs-grad">
            <div className="absolute inset-0 tv-grid" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-amber/50 transition-all duration-500">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/50 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute top-3 left-4 text-[8px] tracking-[0.2em] text-white/35 font-mono">{item.no}</div>
            <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[8px] text-rose font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />REC
            </div>
            <div className="absolute bottom-3 right-4 text-[9px] tracking-[0.15em] font-mono flex items-center gap-1">
              {isLink ? <span className={p.color}>{lang === 'zh' ? p.label : p.en}</span> : <span className="text-white/15">MP4</span>}
              <span className="text-white/15">{isLink ? '↗' : '▶'}</span>
            </div>
            <div className="absolute -bottom-3 -right-3 text-[6rem] md:text-[8rem] leading-none font-display text-white/[0.02] select-none">{item.no.split(' ').pop()}</div>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-[9px] tracking-[0.22em] text-teal font-mono">{item.tag}</p>
        <h3 className="mt-2 font-song text-xl font-bold group-hover:text-amber transition-colors">{item.t}</h3>
        <p className="mt-2 text-sm text-ink/48 leading-relaxed">{item.d}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-[9px] font-mono ${p.color}`}>
            &#9654; {isLink ? (lang === 'zh' ? p.label : p.en) + ' 观看' : 'MP4 播放'}
          </span>
          <span className="text-[9px] font-mono text-ink/15">{isLink ? '↗ OPEN' : '@LOCAL'}</span>
        </div>
      </div>
    </div>
  )

  return isLink ? (
    <a href={item.link} target="_blank" rel="noopener noreferrer">{card}</a>
  ) : card
}

export default function Films() {
  const { t, lang } = useLang()
  const f = t.films

  return (
    <section id="films" className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionHeading part={f.part} en={f.en} title={f.title} sub={f.sub} />
      <p className="mt-4 text-[9px] tracking-[0.2em] text-ink/25 font-mono">
        &#9432; {f.note}
      </p>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {f.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08 }}
          >
            <VideoCard item={item} lang={lang} />
          </motion.div>
        ))}
      </div>

      {/* Media Endorsement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20"
      >
        <p className="text-[10px] tracking-[0.28em] text-amber font-mono mb-1">
          {f.mediaTitle}
        </p>
        <p className="text-[9px] tracking-[0.2em] text-ink/25 font-mono mb-8">
          {f.mediaDesc}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px border border-white/[0.05] rounded-2xl overflow-hidden bg-white/[0.04]">
          {f.media.map((m, i) => (
            <div
              key={i}
              className="relative bg-space p-5 flex flex-col justify-between min-h-[110px] hover:bg-deep/80 transition-colors"
            >
              <div>
                <p className="text-sm font-bold text-ink/80">{m.name}</p>
                <p className="mt-1 text-[9px] text-ink/35 font-mono leading-tight">
                  {m.sub}
                </p>
              </div>
              <span className="text-[8px] tracking-[0.15em] text-amber/50 font-mono mt-2">
                {m.tag}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
