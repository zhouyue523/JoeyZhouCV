import { useState, useCallback } from 'react'
import { LangProvider, useLang } from './i18n'
import Grain from './components/Grain'
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

  const navigate = useCallback(
    (v) => {
      setView(v)
      window.__lenis?.scrollTo(0, { immediate: true })
    },
    []
  )

  return (
    <LangProvider>
      <Root view={view} navigate={navigate} />
    </LangProvider>
  )
}

function Root({ view, navigate }) {
  const { t } = useLang()

  return (
    <div className="relative">
      <Grain />
      <Nav view={view} setView={navigate} />
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
    </div>
  )
}
