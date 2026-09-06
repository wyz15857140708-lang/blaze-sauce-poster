import { useEffect, useId } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

type MarqueeProps = { text: string; tone?: 'dark' | 'cream' | 'orange'; reverse?: boolean; speed?: 'fast' | 'slow' }

function Marquee({ text, tone = 'dark', reverse = false, speed = 'fast' }: MarqueeProps) {
  const phrase = <>{text} <span className="spark">✦</span>&nbsp;</>
  return (
    <div className={`marquee marquee--${tone}`} aria-label={text}>
      <div className={`marquee__track ${reverse ? 'is-reverse' : ''} is-${speed}`} aria-hidden="true">
        <div>{phrase}{phrase}{phrase}{phrase}</div><div>{phrase}{phrase}{phrase}{phrase}</div>
      </div>
    </div>
  )
}

function Bottle({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const sauceId = `sauce-${uid}`
  const glassId = `glass-${uid}`
  const labelPaperId = `label-paper-${uid}`
  const bodyClipId = `body-clip-${uid}`
  return (
    <svg className={`bottle ${className}`} viewBox="0 0 310 900" role="img" aria-label="An illustrated bottle of Blaze House pepper sauce">
      <defs>
        <linearGradient id={sauceId} x1="0" x2="1"><stop stopColor="#8c2515"/><stop offset=".18" stopColor="#f46a2d"/><stop offset=".48" stopColor="#e24a1f"/><stop offset=".78" stopColor="#bd321c"/><stop offset="1" stopColor="#721a17"/></linearGradient>
        <linearGradient id={glassId} x1="0" x2="1"><stop stopColor="#fff" stopOpacity=".58"/><stop offset=".18" stopColor="#fff" stopOpacity=".1"/><stop offset=".72" stopColor="#fff" stopOpacity=".02"/><stop offset="1" stopColor="#fff" stopOpacity=".34"/></linearGradient>
        <pattern id={labelPaperId} width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".8" fill="#101027" opacity=".14"/><circle cx="10" cy="9" r=".55" fill="#ef5b2a" opacity=".18"/></pattern>
        <clipPath id={bodyClipId}><path d="M99 27h112v204c0 32 9 48 30 71 25 28 38 59 38 103v420c0 31-25 56-56 56H87c-31 0-56-25-56-56V405c0-44 13-75 38-103 21-23 30-39 30-71z"/></clipPath>
      </defs>
      <ellipse cx="155" cy="868" rx="104" ry="19" fill="#080817" opacity=".28"/>
      <path d="M99 27h112v204c0 32 9 48 30 71 25 28 38 59 38 103v420c0 31-25 56-56 56H87c-31 0-56-25-56-56V405c0-44 13-75 38-103 21-23 30-39 30-71z" fill={`url(#${sauceId})`} stroke="#101027" strokeWidth="8"/>
      <g clipPath={`url(#${bodyClipId})`} fill="#4d120d" opacity=".48">
        <circle cx="87" cy="354" r="3.2"/><circle cx="203" cy="337" r="2.2"/><circle cx="244" cy="385" r="3.5"/><circle cx="65" cy="612" r="2.5"/><circle cx="232" cy="646" r="2.8"/><circle cx="89" cy="812" r="3.4"/><circle cx="205" cy="831" r="2.4"/><ellipse cx="118" cy="372" rx="1.8" ry="4" transform="rotate(-31 118 372)"/><ellipse cx="218" cy="773" rx="2" ry="4.5" transform="rotate(22 218 773)"/>
      </g>
      <path d="M95 21h120v194H95z" fill="#18171c"/><path d="M90 22h130v53H90z" rx="11" fill="#09090c"/>
      <g stroke="#3d3c43" strokeWidth="3" opacity=".82"><path d="M103 27v43M117 27v43M131 27v43M145 27v43M159 27v43M173 27v43M187 27v43M201 27v43"/></g>
      <path d="M112 31h19v174h-19z" fill="#fff" opacity=".16"/><path d="M98 195h114v19H98z" fill="#08080b"/><path d="M103 201h104" stroke="#5b5960" strokeWidth="3"/>
      <path d="M42 403h226v389H42z" fill="#fff3e6" stroke="#101027" strokeWidth="6"/>
      <path d="M49 410h212v375H49z" fill="none" stroke="#ef5b2a" strokeWidth="2" opacity=".75"/>
      <path d="M49 410h212v375H49z" fill={`url(#${labelPaperId})`}/>
      <g fill="#f05a2a"><circle cx="73" cy="445" r="15"/><circle cx="235" cy="445" r="15"/><circle cx="73" cy="750" r="15"/><circle cx="235" cy="750" r="15"/></g>
      <g fill="none" stroke="#ef5b2a" strokeWidth="5" strokeLinecap="round"><path d="M69 474c-16 10-17 26-3 34 13 8 9 23-5 30"/><path d="M240 474c16 10 17 26 3 34-13 8-9 23 5 30"/><path d="M68 718c-14-8-15-21-4-29"/><path d="M240 718c14-8 15-21 4-29"/></g>
      <text x="155" y="452" fill="#101027" textAnchor="middle" fontFamily="Barlow Condensed, Arial Narrow, sans-serif" fontSize="15" fontWeight="800" letterSpacing="2">SMALL BATCH · 150 ML</text>
      <g fill="#101027" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900"><text x="155" y="518" fontSize="48">BLAZE</text><text x="155" y="573" fontSize="48">HOUSE</text><text x="155" y="628" fontSize="48">PEPPER</text><text x="155" y="683" fontSize="48">SAUCE</text></g>
      <path d="M125 721c23-39 52-39 70 0-22-10-47-10-70 0z" fill="#f05a2a"/><circle cx="160" cy="721" r="12" fill="#101027"/>
      <g fill="#101027"><path d="M93 459l6 10 12 2-9 8 2 12-11-6-11 6 2-12-9-8 12-2z"/><path d="M217 459l6 10 12 2-9 8 2 12-11-6-11 6 2-12-9-8 12-2z"/></g>
      <path d="M60 395c4-37 18-64 40-86" stroke="#fff" strokeOpacity=".4" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <path d="M54 806c7 34 23 48 49 53h106c27-5 43-20 48-53" fill="none" stroke="#fff" strokeOpacity=".32" strokeWidth="9" strokeLinecap="round"/>
      <path d="M65 803h181" stroke="#fff" strokeOpacity=".3" strokeWidth="8"/><path d="M46 416h24v352H46z" fill={`url(#${glassId})`}/><path d="M246 422h10v338h-10z" fill="#fff" opacity=".1"/>
      <ellipse cx="155" cy="848" rx="84" ry="12" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="5"/>
    </svg>
  )
}

function Star({ className = '' }: { className?: string }) { return <span className={`deco-star ${className}`} aria-hidden="true">✦</span> }

function Egg() { return <svg className="food-icon egg" viewBox="0 0 300 300" aria-hidden="true"><path d="M152 14C88 14 29 113 42 197c11 69 55 92 110 92s99-23 110-92C275 113 216 14 152 14z" fill="#fff3e6"/><circle cx="157" cy="176" r="62" fill="#f2b636"/></svg> }
function Chicken() { return <svg className="food-icon chicken" viewBox="0 0 340 360" aria-hidden="true"><path d="M85 294c-46-32-61-99-34-159 30-66 97-91 147-58 36 24 45 63 37 101 29 6 47-1 61-21 13 37-4 81-40 95-21 9-43 10-63 4-22 55-67 76-108 38z" fill="#f7f5ec"/><path d="M95 122c37 29 59 75 61 138-20 30-50 41-79 27-47-23-62-87-34-144 13-27 31-36 52-21z" fill="#9799aa"/><circle cx="187" cy="94" r="8" fill="#101027"/><path d="M201 102l45 19-43 16z" fill="#f2b636"/><path d="M164 66l10-25 13 22 19-18 1 30z" fill="#f05a2a"/><path d="M103 295v44m32-48v48m-46 0h28m3 0h30" stroke="#f7f5ec" strokeWidth="11" strokeLinecap="round"/></svg> }
function Steak() { return <svg className="food-icon steak" viewBox="0 0 360 300" aria-hidden="true"><path d="M28 172C11 110 73 38 154 25c86-13 180 21 178 93-2 50-48 76-88 80-48 6-66 55-119 67-50 12-86-27-97-93z" fill="#f7f5ec"/><path d="M75 165c-9-39 32-84 88-94 57-10 120 12 119 53-1 29-31 43-59 47-34 4-49 38-84 47-33 8-57-18-64-53z" fill="#f05a2a"/><path d="M109 151c-4-19 19-43 48-48 29-5 61 5 61 25s-17 27-32 31c-17 5-23 20-40 24-19 4-33-11-37-32z" fill="#fff3e6"/></svg> }

function FramedStory({ kicker, title, children, symbol, variant = '' }: { kicker: string; title: string; children: React.ReactNode; symbol: string; variant?: string }) {
  return <section className={`story-frame ${variant}`}><Marquee text={kicker} speed="slow"/><div className="frame-rail rail-left">{kicker} <Star/> {kicker}</div><div className="frame-rail rail-right">{kicker} <Star/> {kicker}</div><span className="frame-medallion top-left">{symbol}</span><span className="frame-medallion top-right">{symbol}</span><span className="frame-medallion bottom-left">{symbol}</span><span className="frame-medallion bottom-right">{symbol}</span><h2>{title}</h2>{children}</section>
}

function App() {
  useEffect(() => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: .075,
      wheelMultiplier: .86,
      touchMultiplier: 1,
      overscroll: true,
      anchors: { duration: 1.15, easing: (t: number) => 1 - Math.pow(1 - t, 4) },
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    })
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]'))
    const journeyBottle = document.querySelector<HTMLElement>('.journey-bottle')
    const journey = document.querySelector<HTMLElement>('.bottle-journey')
    const buySection = document.querySelector<HTMLElement>('#buy')
    let raf = 0
    const syncJourneyEnd = () => {
      if (!journey || !buySection) return
      if (innerWidth > 700) journey.style.height = `${buySection.offsetTop + buySection.offsetHeight}px`
      else journey.style.removeProperty('height')
    }
    const update = () => {
      const h = innerHeight
      if (!reducedMotion) items.forEach((el) => {
        const rect = el.parentElement!.getBoundingClientRect()
        const progress = (h - rect.top) / (h + rect.height)
        const amount = Number(el.dataset.drift || 40)
        el.style.setProperty('--drift', `${(progress - .5) * amount}px`)
      })
      if (journeyBottle && journey && buySection && !reducedMotion) {
        const range = Math.max(journey.offsetHeight - h, 1)
        const progress = Math.max(0, Math.min(100, scrollY / range * 100))
        const join = Math.max(91, Math.min(98, buySection.offsetTop / range * 100))
        const keyframes = [
          { at: 0, x: 0, turn: 0 },
          { at: 18, x: 60, turn: 9 },
          { at: 33, x: 0, turn: -2 },
          { at: 48, x: -60, turn: -9 },
          { at: 63, x: 0, turn: -2 },
          { at: 76, x: 60, turn: 9 },
          { at: join - 9, x: 0, turn: 0 },
          { at: join - 6, x: -10, turn: -9 },
          { at: join, x: 0, turn: 0 },
          { at: 100, x: 0, turn: 0 },
        ]
        let segment = 0
        for (let i = 1; i < keyframes.length; i += 1) {
          if (progress <= keyframes[i].at) { segment = i - 1; break }
        }
        const start = keyframes[segment]
        const end = keyframes[segment + 1]
        const span = Math.max(end.at - start.at, .001)
        const t = Math.max(0, Math.min(1, (progress - start.at) / span))
        const sampleSpline = (property: 'x' | 'turn') => {
          const before = keyframes[Math.max(0, segment - 1)]
          const after = keyframes[Math.min(keyframes.length - 1, segment + 2)]
          const startSlope = segment === 0
            ? (end[property] - start[property]) / span
            : (end[property] - before[property]) / Math.max(end.at - before.at, .001)
          const endSlope = segment + 2 >= keyframes.length
            ? (end[property] - start[property]) / span
            : (after[property] - start[property]) / Math.max(after.at - start.at, .001)
          const t2 = t * t
          const t3 = t2 * t
          return (2 * t3 - 3 * t2 + 1) * start[property]
            + (t3 - 2 * t2 + t) * span * startSlope
            + (-2 * t3 + 3 * t2) * end[property]
            + (t3 - t2) * span * endSlope
        }
        const x = sampleSpline('x') / 100 * innerWidth
        const turn = sampleSpline('turn')
        journeyBottle.style.setProperty('--journey-x', `${x}px`)
        journeyBottle.style.setProperty('--journey-turn', `${turn}deg`)
      }
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    const onResize = () => { syncJourneyEnd(); onScroll() }
    const onLenisScroll = ({ velocity }: { velocity: number }) => {
      document.documentElement.style.setProperty('--scroll-energy', `${Math.min(Math.abs(velocity), 20)}`)
      onScroll()
    }
    const cta = document.querySelector<HTMLElement>('.buy-center>a')
    const onCtaMove = (event: PointerEvent) => {
      if (!cta || reducedMotion || event.pointerType === 'touch') return
      const rect = cta.getBoundingClientRect()
      cta.style.setProperty('--mag-x', `${(event.clientX - rect.left - rect.width / 2) * .13}px`)
      cta.style.setProperty('--mag-y', `${(event.clientY - rect.top - rect.height / 2) * .18}px`)
    }
    const resetCta = () => { cta?.style.setProperty('--mag-x', '0px'); cta?.style.setProperty('--mag-y', '0px') }
    lenis.on('scroll', onLenisScroll)
    cta?.addEventListener('pointermove', onCtaMove)
    cta?.addEventListener('pointerleave', resetCta)
    syncJourneyEnd(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onResize); update()
    return () => {
      lenis.off('scroll', onLenisScroll)
      lenis.destroy()
      cta?.removeEventListener('pointermove', onCtaMove)
      cta?.removeEventListener('pointerleave', resetCta)
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
      document.documentElement.style.removeProperty('--scroll-energy')
    }
  }, [])

  return <main className="poster-page">
    <header className="poster-nav"><a href="#top" className="brand">BLAZE<br/>HOUSE</a><nav aria-label="Primary navigation"><a href="#story">STORY</a><a href="#pairings">PAIRINGS</a><a href="#buy">BUY ↗</a></nav></header>

    <div className="bottle-journey" aria-hidden="true"><Bottle className="journey-bottle" /></div>

    <Marquee text="BUY NOW" />
    <section className="hero poster-frame panel-triptych" id="top">
      <div className="side-panel hero-copy"><h2>THE JOY OF<br/>PEPPER SAUCE</h2><p>Made slowly, shared loudly, and built to wake up everything on the table.</p><strong>SPREAD THE JOY.</strong></div>
      <div className="center-panel hero-center"><Star className="corner-symbol c1"/><Star className="corner-symbol c2"/><Star className="corner-symbol c3"/><Star className="corner-symbol c4"/><p className="orbit-copy orbit-left">BLAZING · SMALL BATCH · BLAZING</p><p className="orbit-copy orbit-right">PEPPER SAUCE · 2,400 SHU · PEPPER SAUCE</p><h1>THE JOY OF<br/>PEPPER SAUCE</h1><span className="center-seal">2,400<br/>SHU</span></div>
      <div className="side-panel hero-facts"><h2>BRIGHT<br/>HEAT</h2><div className="panel-rule"></div><span className="heat-mark">♨</span><p>FIRE WITH<br/>FLAVOR FIRST.</p></div>
    </section>

    <Marquee text="WHERE THE FIRE BEGAN" reverse />

    <FramedStory kicker="WHERE THE FIRE BEGAN" title="A TASTE OF HOME" symbol="✷" variant="origin" >
      <div className="country-shape" data-drift="110" aria-hidden="true"></div>
      <p className="story-copy">Born where the market is loud and the pepper is never shy. Our sauce brings sun, spice, and a little family mischief to every table.</p>
      <p className="tiny-fact">ROOTED IN TRADITION<br/>MADE FOR RIGHT NOW</p>
    </FramedStory>

    <Marquee text="GOOD ON ALMOST EVERYTHING" />
    <section className="pairing-board poster-frame" id="pairings">
      <div className="pairing-row"><Egg/><span className="row-note">THE BEST<br/>WITH</span><strong>EGG</strong><Egg/><span className="row-note">THE BEST<br/>WITH</span><strong>EGG</strong></div>
      <div className="pairing-row reverse"><Chicken/><span className="row-note">GOES GREAT<br/>WITH</span><strong>CHICKEN</strong><Chicken/><span className="row-note">GOES GREAT<br/>WITH</span><strong>CHICKEN</strong></div>
      <div className="pairing-row"><Steak/><span className="row-note">DAMN GOOD<br/>WITH</span><strong>STEAK</strong><Steak/><span className="row-note">DAMN GOOD<br/>WITH</span><strong>STEAK</strong></div>
    </section>

    <Marquee text="FROM OUR FAMILY TO YOURS" reverse />
    <section className="family poster-frame panel-triptych" id="story">
      <div className="side-panel family-copy"><h2>OUR FAMILY<br/>TO YOURS</h2><p>A recipe passed hand to hand, made slowly and shared loudly. A time-tested burst of flavor.</p><span className="drop-mark">●</span></div>
      <div className="center-panel portrait-panel"><Star className="corner-symbol c1"/><Star className="corner-symbol c2"/><div className="portrait" data-drift="45"><div className="portrait-hair"></div><div className="portrait-face"><span className="eye eye-l"></span><span className="eye eye-r"></span><span className="smile"></span></div><div className="portrait-body"></div></div></div>
      <div className="side-panel family-copy"><h2>HAND<br/>MILLED</h2><div className="panel-rule"></div><p>NO COMPROMISE. STILL MADE WITH PATIENCE, THE WAY IT SHOULD BE.</p><span className="mill-mark">✣</span></div>
    </section>

    <Marquee text="BUY NOW" />
    <section className="type-break poster-frame"><span data-drift="110">EVERY</span><span data-drift="-90">THING</span><p>THIS SAUCE IS NOT FOR EVERYTHING.</p></section>

    <Marquee text="WHY IT TASTES DIFFERENT" reverse />
    <FramedStory kicker="WHY IT TASTES DIFFERENT" title="FLAVOR MEETS HEAT" symbol="♨" variant="flavor">
      <div className="flame-ribbon" data-drift="95" aria-hidden="true"></div>
      <p className="story-copy">Most hot sauces lead with acid and leave flavor behind. Ours layers bright citrus, toasted spice, ripe pepper, and a warm finish that asks for another bite.</p>
    </FramedStory>

    <Marquee text="SOME THINGS NEED NO SAUCE" />
    <section className="avoid-board poster-frame">
      <div><span className="avoid-icon">✿</span><p>DON'T<br/>RUIN IT<br/>WITH</p><strong>MINT</strong></div>
      <div><span className="avoid-icon">●</span><p>LEAVE<br/>OUT THE</p><strong>BERRIES</strong></div>
      <div><span className="avoid-icon">◒</span><p>DO NOT<br/>TRY IT<br/>WITH</p><strong>CEREAL</strong></div>
    </section>

    <Marquee text="BUY THE GOOD STUFF" reverse />
    <section className="buy-poster poster-frame panel-triptych" id="buy">
      <div className="side-panel buy-copy"><h2>BUY THE<br/>GOOD STUFF</h2><p>We can't make a website taste like this pepper sauce. We tried. You'll just have to buy the bottle.</p></div>
      <div className="center-panel buy-center"><Star className="corner-symbol c1"/><Star className="corner-symbol c2"/><Bottle className="buy-bottle"/><a href="mailto:hello@blazehouse.example">GET THE SAUCE ↗</a></div>
      <div className="side-panel warning-copy"><strong>YOU'VE<br/>BEEN WARNED</strong><div className="panel-rule"></div><h2>THIS SAUCE<br/>BITES BACK</h2></div>
    </section>

    <Marquee text="BUY NOW" />
    <footer><div className="footer-mark">BLAZE HOUSE</div><div className="footer-links"><a href="#story">OUR STORY</a><a href="#pairings">PAIRINGS</a><a href="mailto:hello@blazehouse.example">HELLO@BLAZEHOUSE</a></div><p>ORIGINAL DEMO BRAND &amp; ARTWORK<br/>MADE WITH HEAT, NOT HYPE.</p></footer>
  </main>
}

export default App
