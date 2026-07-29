import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { LangProvider, useLang } from './i18n'
import Starfield from './components/Starfield'
import Grain from './components/Grain'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HeroContent from './components/HeroContent'
import Marquee from './components/Marquee'
import Profile from './components/Profile'
import Films from './components/Films'
import Matrix from './components/Matrix'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Philosophy from './components/Philosophy'
import Interlude from './components/Interlude'

export default function App() {
  const [view, setView] = useState('home')
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true, duration: 1.2 })
    window.__lenis = lenis
    function raf(t) {
      lenis.raf(t)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  const navigate = useCallback(
    (v) => {
      setView(v)
      window.__lenis?.scrollTo(0, { immediate: true })
    },
    []
  )

  return (
    <LangProvider>
      <Root
        view={view}
        navigate={navigate}
        introDone={introDone}
        setIntroDone={setIntroDone}
      />
    </LangProvider>
  )
}

function Root({ view, navigate, introDone, setIntroDone }) {
  const { t } = useLang()

  return (
    <div className="relative">
      <Starfield />
      <Grain />
      <AnimatePresence>
        {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      </AnimatePresence>
      <Nav view={view} setView={navigate} />
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <HeroContent setView={navigate} />
            <Marquee id="m1" />
            <Profile />
            <Marquee id="m2" />
            <Films />
            <Interlude {...t.interlude1} id="1" />
            <Matrix />
            <Interlude {...t.interlude2} id="2" />
            <Explore />
            <Footer setView={navigate} />
          </motion.main>
        ) : (
          <motion.div
            key="philosophy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Philosophy onBack={() => navigate('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
