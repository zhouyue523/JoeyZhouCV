import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '../i18n'
import SectionHeading from './SectionHeading'

export default function Profile() {
  const { t, lang, ME } = useLang()
  const p = t.profile
  const [imgOk, setImgOk] = useState(false)

  const FIELDS = [
    { zh: '姓\u2008名', en: 'NAME', v: ME.nameZh },
    { zh: '出生年月', en: 'D.O.B.', v: ME.dob },
    { zh: '毕业院校', en: 'UNIVERSITY', v: ME.school },
    { zh: '籍\u2008贯', en: 'ORIGIN', v: ME.origin },
    { zh: '电\u2008话', en: 'PHONE', v: ME.phone },
    { zh: '邮\u2008箱', en: 'EMAIL', v: ME.email },
  ]

  return (
    <section
      id="profile"
      className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeading part={p.part} en={p.en} title={p.title} sub={p.sub} />

      <div className="mt-20 grid md:grid-cols-5 gap-10">
        {/* Dossier */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-2 relative border border-white/[0.06] bg-deep/50 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="absolute -top-3.5 left-8 w-28 h-7 bg-amber/75 -rotate-[7deg] opacity-70 rounded-sm" />
          <div className="absolute -top-2 right-6 border-2 border-rose text-rose px-3 py-0.5 text-[8px] tracking-[0.18em] font-mono -rotate-[11deg] opacity-80">
            {p.stamp}
          </div>

          <div className="flex items-center justify-between mt-4 mb-6">
            <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono">
              {p.fileNo}
            </p>
            <span className="flex items-center gap-1.5 text-[8px] text-rose font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
              REC
            </span>
          </div>

          {/* IP Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-violet/55 via-purple/35 to-teal/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white/[0.12] bg-space/80">
                {imgOk ? (
                  <img
                    src={ME.avatar}
                    alt="IP Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={ME.avatar}
                      alt=""
                      className="hidden"
                      onLoad={() => setImgOk(true)}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                      <span className="text-2xl opacity-30">&#9734;</span>
                      <span className="text-[7px] tracking-[0.15em] text-ink/20 font-mono text-center leading-tight">
                        DROP<br />avatar-ip.png
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 border-2 border-amber/40 rounded-lg bg-space/90 flex items-center justify-center -rotate-[14deg]">
                <span className="font-display text-[8px] text-amber/50">IP</span>
              </div>
            </div>
          </div>

          <dl className="space-y-0">
            {FIELDS.map((f, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b border-white/[0.04]"
              >
                <dt className="text-[9px] tracking-[0.2em] text-ink/30 font-mono">
                  {lang === 'zh' ? f.zh : f.en}
                </dt>
                <dd className="text-sm font-medium text-ink/80">{f.v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm italic text-ink/40 font-song leading-relaxed">
            {p.quote}
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-3"
        >
          <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono mb-6">
            {p.skillsTitle}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.skills.map((s, i) => (
              <div
                key={i}
                className="group border border-white/[0.05] bg-white/[0.01] rounded-2xl p-5 md:p-6 hover:border-violet/35 hover:-translate-y-1 transition-all duration-500"
              >
                <p className="text-[9px] tracking-[0.18em] text-amber font-mono">
                  {s.no}
                  <span className="text-ink/15 ml-2">{s.en}</span>
                </p>
                <h3 className="mt-2 font-song text-lg md:text-xl font-bold text-ink/85">
                  {s.t}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-ink/48 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-20"
      >
        <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono mb-8">
          {p.expTitle}
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {p.experiences.map((e, i) => (
            <div
              key={i}
              className="relative border-l-2 border-violet/40 pl-5 hover:border-violet transition-colors"
            >
              <p className="text-[9px] tracking-[0.2em] text-amber font-mono">
                {e.no}
              </p>
              <p className="text-xs tracking-[0.18em] text-ink/25 font-mono mt-0.5">
                {e.en}
              </p>
              <h4 className="mt-2 font-song text-lg font-bold text-ink/80">
                {e.t}
              </h4>
              <p className="text-[10px] text-teal font-mono mt-0.5">{e.sub}</p>
              <p className="mt-2 text-xs md:text-sm text-ink/48 leading-relaxed">
                {e.d}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20"
      >
        <p className="text-[9px] tracking-[0.28em] text-ink/25 font-mono mb-6">
          {p.eduTitle}
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {p.eduItems.map((e, i) => (
            <div
              key={i}
              className="border border-white/[0.05] rounded-2xl p-5 md:p-6 bg-white/[0.01]"
            >
              <p className="text-[9px] tracking-[0.2em] text-ink/25 font-mono">
                {e.period}
              </p>
              <h4 className="mt-1.5 font-song text-base md:text-lg font-bold text-ink/80">
                {e.t}
              </h4>
              <p className="mt-2 text-xs text-ink/40 leading-relaxed">{e.d}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
