import { useState, useEffect } from 'react'
import { ImageWithFallback } from '@/ImageWithFallback'

// ── 10 photos ─────────────────────────────────────────────────────────────
import imgStudio     from '@/imports/Screenshot_2026-09-06_235930.png' // Colors Makeup Studio exterior
import imgOdiaBride  from '@/imports/Screenshot_2026-09-06_235942.png' // Odia bride red silk saree – HERO
import imgHairStr    from '@/imports/Screenshot_2026-09-06_235957.png' // hair straightening result
import imgMirrorBride from '@/imports/Screenshot_2026-09-07_000006.png' // bride at Colors studio mirror
import imgBlueSaree  from '@/imports/Screenshot_2026-09-07_000014.png' // blue saree elegant side
import imgNavyBride  from '@/imports/Screenshot_2026-09-07_000035.png' // navy velvet back profile
import imgMagenta    from '@/imports/Screenshot_2026-09-07_000051.png' // magenta saree mehndi
import imgPinkJoy    from '@/imports/Screenshot_2026-09-07_000101.png' // pink lehenga joyful
import imgRoseBride  from '@/imports/Screenshot_2026-09-07_000116.png' // red saree rose garland
import imgCurtain    from '@/imports/Screenshot_2026-09-07_000141.png' // red bride between curtains

// ── Scroll Reveal ────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.section-reveal,.reveal-left,.reveal-right,.reveal-scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ── Floating 3D Pink Balls ───────────────────────────────────────────────────
function FloatingBalls() {
  const balls = [
    { s: 100, t: '6%',  l: '3%',  d: '0s',   dur: '7s',  o: 0.9 },
    { s: 55,  t: '12%', r: '6%',  d: '1s',   dur: '9s',  o: 0.8 },
    { s: 140, t: '42%', l: '-3%', d: '2s',   dur: '11s', o: 0.7 },
    { s: 45,  t: '62%', r: '4%',  d: '0.5s', dur: '6s',  o: 0.85 },
    { s: 110, b: '18%', l: '8%',  d: '3s',   dur: '8s',  o: 0.75 },
    { s: 70,  b: '8%',  r: '10%', d: '1.5s', dur: '10s', o: 0.8 },
    { s: 38,  t: '77%', l: '38%', d: '2.5s', dur: '7s',  o: 0.9 },
    { s: 80,  t: '22%', l: '43%', d: '4s',   dur: '9s',  o: 0.6 },
    { s: 28,  t: '52%', r: '22%', d: '1s',   dur: '5s',  o: 0.95 },
    { s: 50,  b: '33%', r: '28%', d: '3.5s', dur: '8s',  o: 0.7 },
    { s: 22,  t: '30%', l: '22%', d: '0.8s', dur: '6s',  o: 1 },
    { s: 60,  b: '55%', r: '45%', d: '2s',   dur: '8s',  o: 0.65 },
  ]
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full animate-pink-pulse"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.32) 0%, transparent 68%)', filter: 'blur(50px)' }} />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full animate-pink-pulse"
        style={{ background: 'radial-gradient(circle, rgba(224,85,128,0.28) 0%, transparent 68%)', filter: 'blur(55px)', animationDelay: '1.8s' }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full animate-pink-pulse"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.25) 0%, transparent 68%)', filter: 'blur(45px)', animationDelay: '0.9s' }} />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full animate-pink-pulse"
        style={{ background: 'radial-gradient(circle, rgba(255,120,160,0.2) 0%, transparent 68%)', filter: 'blur(40px)', animationDelay: '2.5s' }} />
      {balls.map((b, i) => (
        <div key={i} className="pink-ball absolute"
          style={{
            width: b.s, height: b.s,
            top: (b as any).t, left: (b as any).l, right: (b as any).r, bottom: (b as any).b,
            opacity: b.o,
            animation: `float${i % 3 === 0 ? '' : i % 3 + 1} ${b.dur} ease-in-out infinite`,
            animationDelay: b.d,
          }} />
      ))}
    </div>
  )
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [
    { label: 'Home',     href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery',  href: '#gallery' },
    { label: 'Reviews',  href: '#reviews' },
    { label: 'FAQ',      href: '#faq' },
    { label: 'Contact',  href: '#map' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-xl py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="flex flex-col leading-none group">
          <span className="font-script text-[24px] text-amber-800 group-hover:text-amber-700 transition-colors leading-tight">Colors Makeup Studio</span>
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-amber-600">Haripur Branch · Cuttack · Odisha</span>
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}
                className="font-body text-[13px] font-medium text-stone-900 hover:text-amber-800 transition-colors relative
                  after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-amber-700 after:to-stone-500
                  after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#appointment" className="hidden md:inline-block btn-primary text-[11px] px-5 py-2.5">
          <span>✦ Book Now</span>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2">
          <span className={`block w-6 h-[2px] bg-amber-800 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-amber-800 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-amber-800 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-pink border-t border-amber-100 px-6 pt-4 pb-6 mt-2">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 font-body font-medium text-stone-900 border-b border-amber-100/60 hover:text-amber-800 transition-colors">
              <span className="text-amber-600 text-xs">✦</span>{l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)} className="btn-primary mt-5 block text-center">
            <span>Book Appointment</span>
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="hero-bg relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.22) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,100,150,0.2) 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left section-reveal">
          <div className="inline-flex items-center gap-2 glass-pink rounded-full px-4 py-2 mb-6 pink-glow-sm">
            <span className="text-base animate-sparkle">✦</span>
            <span className="font-body text-[11px] uppercase tracking-[0.18em] text-amber-900 font-semibold">Odisha's Premier Beauty Studio</span>
            <span className="text-base animate-sparkle" style={{ animationDelay: '1s' }}>✦</span>
          </div>

          <p className="font-script text-amber-700 text-4xl mb-1 leading-none"
            style={{ textShadow: '0 2px 20px rgba(199,59,106,0.3)' }}>Welcome to</p>

          <h1 className="font-display font-bold leading-[0.9] mb-4">
            <span className="block text-[46px] md:text-[56px] text-stone-950" style={{ letterSpacing: '-0.02em' }}>Colors</span>
            <span className="block text-[38px] md:text-[46px] gradient-text" style={{ letterSpacing: '-0.01em' }}>Makeup Studio</span>
            <span className="block text-[20px] md:text-[26px] text-stone-800 italic font-medium mt-2">Haripur Branch · Cuttack</span>
          </h1>

          <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600" />
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-amber-700 font-semibold">The Artistic Beauty Salon · Odisha</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600" />
          </div>

          <p className="font-body text-stone-800 text-[15px] leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
            Welcome to <strong>Colors Makeup Studio</strong> — Cuttack's premier artistic beauty destination.
            From radiant Odia bridal looks to silk saree elegance, skin treatments, and professional hair care,
            we bring out the finest version of you for every celebration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <a href="#appointment" className="btn-primary"><span>✦ Book Your Appointment</span></a>
            <a href="#gallery" className="btn-outline">View Portfolio</a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start">
            {[['800+','Happy Clients'],['7+','Years'],['100%','Satisfaction']].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-display text-[34px] font-bold gradient-text leading-none">{n}</p>
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-stone-600 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="relative flex justify-center md:justify-end section-reveal" style={{ transitionDelay: '0.25s' }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[360px] h-[360px] rounded-full border border-dashed border-amber-300/60 animate-rotate" />
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-amber-600/40 animate-float3"
              style={{ animationDuration: '10s' }} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full animate-pink-pulse pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.38) 0%, transparent 65%)', filter: 'blur(35px)' }} />

          <div className="relative z-10 animate-float" style={{ animationDuration: '8s' }}>
            <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[415px] rounded-[44px] overflow-hidden pink-glow"
              style={{ border: '4px solid rgba(199,59,106,0.45)', boxShadow: '0 0 0 8px rgba(199,59,106,0.1), 0 30px 80px rgba(199,59,106,0.4)' }}>
              <ImageWithFallback src={imgOdiaBride}
                alt="Beautiful Odia bride in red silk saree with gold jewellery — Colors Makeup Studio Cuttack"
                className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-amber-300/10 pointer-events-none" />
            </div>

            <div className="absolute -bottom-5 -left-5 glass-pink rounded-2xl px-5 py-3 pink-glow">
              <p className="font-script text-amber-800 text-[22px] leading-none">Colors Makeup Studio</p>
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-stone-600 mt-0.5">Haripur Rd · Cuttack · Odisha</p>
            </div>

            <div className="absolute -top-5 -right-5 w-[60px] h-[60px] glass rounded-full flex items-center justify-center pink-glow-sm">
              <span className="text-[28px] animate-sparkle">✦</span>
            </div>

            <div className="absolute top-1/2 -right-16 glass-pink rounded-2xl px-3 py-2 text-center animate-float2"
              style={{ animationDuration: '6s' }}>
              <p className="font-display text-[22px] font-bold gradient-text">★ 5.0</p>
              <p className="font-body text-[9px] uppercase text-stone-600 tracking-widest">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="font-body text-[10px] text-amber-700 uppercase tracking-[0.2em]">Scroll</p>
        <div className="w-px h-9 bg-gradient-to-b from-amber-700 to-transparent" />
      </div>
    </section>
  )
}

// ── Marquee Strip ────────────────────────────────────────────────────────────
function MarqueeStrip() {
  const items = [
    '✦ Colors Makeup Studio Cuttack', '✦ Odia Bridal Artistry', '✦ HD & Airbrush Specialist',
    '✦ Silk Saree Bridal Looks', '✦ Premium Hair Treatments', '✦ Haripur Branch · Odisha', '✦ The Artistic Beauty Salon'
  ]
  const doubled = [...items, ...items]
  return (
    <div className="py-5 overflow-hidden" style={{ background: 'linear-gradient(135deg, #4A2C20, #9A6B36, #4A2C20)' }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="font-body text-white/90 text-[12px] font-semibold uppercase tracking-[0.18em] mx-8 shrink-0">{t}</span>
        ))}
      </div>
    </div>
  )
}

// ── Services — DARK SECTION ──────────────────────────────────────────────────
function Services() {
  const services = [
    { icon: '👰', title: 'Odia Bridal Makeup',     desc: 'Authentic and HD Odia bridal looks in red silk with gold jewellery — traditional artistry refined for modern brides.' },
    { icon: '🪷', title: 'Pre-Bridal Package',      desc: 'Complete skin prep — facials, clean-up, D-tan, bleach & personalised skincare — starting weeks before your big day.' },
    { icon: '💄', title: 'Party & Occasion Makeup', desc: 'Glamorous looks for pujas, receptions, sangeet, and every celebration that calls for a head-turning appearance.' },
    { icon: '✂️', title: 'Hair Treatments',          desc: 'Keratin smoothening, straightening, rebonding, deep conditioning, and styling for silky, luminous hair.' },
    { icon: '✨', title: 'Skin Care Services',       desc: 'Gold facials, fruit facials, de-pigmentation, clean-ups and advanced skin treatments for a glowing complexion.' },
    { icon: '🎨', title: 'Saree & Draping Styling', desc: 'Expert saree draping in multiple regional styles — Bengali, Odia, Nivi — for weddings and cultural functions.' },
  ]
  return (
    <section id="services" className="dark-pink-section py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.2) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,100,140,0.15) 0%, transparent 65%)', filter: 'blur(50px)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 section-reveal">
          <p className="font-script text-[38px] leading-none mb-2"
            style={{ color: '#C5A16B', textShadow: '0 0 30px rgba(240,124,160,0.5)' }}>What We Offer</p>
          <div className="section-divider-white" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h2>
          <p className="font-body text-white/60 max-w-xl mx-auto text-[15px]">
            Every service at Colors Makeup Studio is crafted to celebrate the beauty of every woman — rooted in Odia tradition, elevated by modern artistry.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="card-dark-3d glass-dark rounded-3xl p-8 text-center reveal-scale"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(199,59,106,0.5), rgba(139,26,56,0.8))', boxShadow: '0 8px 25px rgba(199,59,106,0.35)' }}>
                {s.icon}
              </div>
              <h3 className="font-display text-[22px] font-semibold text-white mb-3">{s.title}</h3>
              <p className="font-body text-[13px] text-white/55 leading-relaxed">{s.desc}</p>
              <div className="mt-5 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Gallery ──────────────────────────────────────────────────────────────────
function Gallery() {
  const photos = [
    { src: imgCurtain,    label: 'Grand Bridal Reveal',       sub: 'Red Lehenga · Dramatic Entry' },
    { src: imgMirrorBride,label: 'Studio Bridal Session',     sub: 'Colors Makeup Studio · Cuttack' },
    { src: imgRoseBride,  label: 'Odia Wedding Ceremony',     sub: 'Red Silk Saree · Rose Garland' },
    { src: imgMagenta,    label: 'Magenta Sangeet Glam',      sub: 'Mehndi Art · Silk Saree Look' },
    { src: imgNavyBride,  label: 'Navy Velvet Elegance',      sub: 'Backless Blouse · Side Profile' },
    { src: imgPinkJoy,    label: 'Joyful Pink Celebration',   sub: 'Lehenga · Studio Look' },
    { src: imgBlueSaree,  label: 'Blue Saree Editorial',      sub: 'Elegant Side Profile Shoot' },
    { src: imgHairStr,    label: 'Silky Hair Treatment',      sub: 'Keratin Smoothening Result' },
    { src: imgOdiaBride,  label: 'Classic Odia Bridal',       sub: 'Red Silk · Gold Jewellery' },
  ]
  return (
    <section id="gallery" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F4ED 0%, #EFE5D7 50%, #F8F4ED 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.12) 0%, transparent 60%)', filter: 'blur(70px)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 section-reveal">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Our Portfolio</p>
          <div className="section-divider" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-950 mb-4">Gallery</h2>
          <p className="font-body text-stone-700 max-w-xl mx-auto text-[15px]">
            Every look is a tribute to beauty. Explore the transformations crafted at <em>Colors Makeup Studio, Cuttack</em>.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl group reveal-scale cursor-pointer"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback src={p.src} alt={p.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
                <div>
                  <p className="font-display text-white text-[18px] font-semibold">{p.label}</p>
                  <p className="font-body text-white/65 text-[11px] mt-0.5 uppercase tracking-wider">{p.sub}</p>
                  <div className="h-0.5 w-10 mt-2" style={{ background: 'linear-gradient(90deg, #C5A16B, transparent)' }} />
                </div>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #9A6B36, #4A2C20)' }}>
                <span className="text-white text-[10px]">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const reasons = [
    { icon: '🏅', title: 'Expert Odia Bridal Specialists', desc: 'Our artists are trained in authentic Odia bridal traditions — red silk, gold jewellery, alta, and the complete ceremonial look.' },
    { icon: '💎', title: 'Premium Products Only',           desc: 'MAC, Kryolan, Huda Beauty & professional salon brands — long-lasting, skin-safe, and HD camera-ready.' },
    { icon: '📸', title: 'Flawless for Every Camera',       desc: 'Looks crafted to photograph brilliantly — whether it\'s DSLR portraits, drone shots, or phone photography.' },
    { icon: '🕐', title: 'Always Punctual',                 desc: 'We understand how precious time is on your wedding day. Your look is always complete right when you need it.' },
    { icon: '✨', title: 'Skin + Hair + Makeup Together',   desc: 'A true full-service studio — from skin prep and hair treatments to the final bridal look, all under one roof.' },
    { icon: '🪷', title: 'Personalised for Every Client',  desc: 'No two clients get the same look. We study your skin tone, outfit, occasion, and vision before every appointment.' },
  ]
  return (
    <section id="why" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EFE5D7 0%, #F8F4ED 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex gap-4 reveal-left">
          <div className="w-1/2 rounded-3xl overflow-hidden shadow-2xl" style={{ marginTop: '3rem' }}>
            <ImageWithFallback src={imgMirrorBride}
              alt="Bride at Colors Makeup Studio mirror — Cuttack"
              className="w-full h-[340px] object-cover object-top" />
          </div>
          <div className="w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback src={imgNavyBride}
              alt="Navy velvet bridal look — Colors Makeup Studio"
              className="w-full h-[340px] object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-pink rounded-2xl px-7 py-4 pink-glow text-center whitespace-nowrap">
            <p className="font-display text-[28px] font-bold gradient-text">800+ Clients</p>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-stone-700 mt-0.5">Beautifully Transformed</p>
          </div>
        </div>

        <div className="reveal-right mt-10 md:mt-0">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Why Colors Studio</p>
          <div className="section-divider-left" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-10 leading-tight">
            Cuttack's Most Trusted<br />Beauty Studio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-3.5 items-start reveal-scale group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #E8D8C5, #D9B985)', boxShadow: '0 6px 20px rgba(199,59,106,0.2)' }}>
                  {r.icon}
                </div>
                <div>
                  <p className="font-body font-semibold text-stone-950 text-[13px] mb-0.5">{r.title}</p>
                  <p className="font-body text-[12px] text-stone-700 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Compliment Section 1 — Studio Showcase ────────────────────────────────────
function StudioShowcase() {
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F4ED 0%, #E8D8C5 50%, #F8F4ED 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(199,59,106,0.1) 0%, transparent 65%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        {/* Studio photo */}
        <div className="reveal-left">
          <div className="rounded-[40px] overflow-hidden pink-glow"
            style={{ border: '4px solid rgba(199,59,106,0.3)', boxShadow: '0 30px 80px rgba(199,59,106,0.25)' }}>
            <ImageWithFallback src={imgStudio}
              alt="Colors Makeup Studio — The Artistic Beauty Salon, Haripur Road, Cuttack"
              className="w-full h-[420px] object-cover object-center" />
          </div>
          {/* Tag badge */}
          <div className="mt-5 flex gap-3 justify-center">
            {['For Ladies Only','Premium Studio','Odisha Certified'].map(t => (
              <span key={t} className="glass-pink rounded-full px-4 py-1.5 font-body text-[11px] font-semibold text-amber-900 uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Copy */}
        <div className="reveal-right">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Visit Us</p>
          <div className="section-divider-left" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6 leading-tight">
            Step Into Colors —<br />
            <span className="gradient-text">Cuttack's Artistic Beauty Studio</span>
          </h2>
          <p className="font-body text-stone-700 text-[15px] leading-relaxed mb-8">
            Our Haripur Branch studio in Cuttack is designed exclusively for women — a serene, premium space where artistry meets comfort.
            From the moment you walk through our glass doors, you'll feel the difference of a studio that truly cares about every detail of your look.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { icon: '💺', text: 'State-of-the-art makeup chairs with professional ring-light setups' },
              { icon: '🏠', text: 'Private bridal room for intimate, stress-free bridal prep sessions' },
              { icon: '🌿', text: 'Calm, elegant atmosphere designed to make you feel at ease' },
              { icon: '🛡️', text: '100% hygienic — all tools sterilised between every client' },
            ].map(item => (
              <div key={item.icon} className="flex items-center gap-3">
                <span className="text-xl w-8 text-center shrink-0">{item.icon}</span>
                <p className="font-body text-[13px] text-stone-800">{item.text}</p>
              </div>
            ))}
          </div>
          <a href="#appointment" className="btn-primary"><span>✦ Book a Visit</span></a>
        </div>
      </div>
    </section>
  )
}

// ── Dark Quote Banner ────────────────────────────────────────────────────────
function DarkQuoteBanner() {
  return (
    <section className="deep-rose-section py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(199,59,106,0.25) 0%, transparent 65%)', filter: 'blur(50px)' }} />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="pink-ball absolute animate-float"
            style={{
              width:  [30,18,45,22,35,15,28,40][i],
              height: [30,18,45,22,35,15,28,40][i],
              top:  `${[10,70,20,80,5,60,40,30][i]}%`,
              left: `${[5,90,80,10,60,25,45,70][i]}%`,
              opacity: 0.5,
              animationDuration: `${[7,5,9,6,8,5,7,6][i]}s`,
              animationDelay: `${[0,.5,1,1.5,2,2.5,3,3.5][i]}s`,
            }} />
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center section-reveal">
        <span className="font-script text-amber-600 text-5xl leading-none block mb-4"
          style={{ textShadow: '0 0 40px rgba(199,59,106,0.6)' }}>✦</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Every Woman Deserves to Look<br />
          <span style={{ background: 'linear-gradient(135deg, #C5A16B, #E6D5BE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Her Most Beautiful Self
          </span>
        </h2>
        <p className="font-script text-amber-300 text-3xl mb-4">Your Beauty. Our Colors. Your Day.</p>
        <p className="font-body text-white/55 text-[15px] mb-12 max-w-xl mx-auto">
          At Colors Makeup Studio, we blend the pride of Odia tradition with contemporary artistry to create looks that are timeless, personal, and breathtaking.
        </p>
        <a href="#appointment" className="btn-white"><span>✦ Begin Your Transformation</span></a>
      </div>
    </section>
  )
}

// ── Testimonials — DARK SECTION ──────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: 'Priyanka Mohanty',  loc: 'Cuttack',    stars: 5, text: 'Colors Makeup Studio made me look absolutely stunning on my wedding day! The Odia bridal look was so authentic and perfect. I received compliments from every single guest!', img: '👰' },
    { name: 'Swagatika Sahoo',   loc: 'Bhubaneswar', stars: 5, text: 'I came from Bhubaneswar specifically for Colors Studio and it was worth every bit. The team understood exactly what I wanted — traditional Odia look with a modern touch. Loved it!', img: '🌸' },
    { name: 'Deepika Rath',      loc: 'Cuttack',    stars: 5, text: 'The keratin hair treatment here is absolutely the best! My hair has never been this silky and smooth. The result lasted for months. Highly recommend Colors for all hair services!', img: '✨' },
    { name: 'Mamata Das',        loc: 'Kendrapara', stars: 5, text: 'My daughter\'s bridal makeup was beyond anything I expected. The team at Colors is so professional, warm, and talented. We will always come back for every celebration!', img: '💐' },
    { name: 'Lipsa Nayak',       loc: 'Cuttack',    stars: 5, text: 'I got my party makeup done at Colors for my cousin\'s reception and I felt like an absolute queen! The makeup lasted 12 hours without any touch-ups. Incredible work!', img: '🎨' },
    { name: 'Ananya Pattnaik',   loc: 'Puri',       stars: 5, text: 'From the pre-bridal package to the wedding day look — Colors handled everything perfectly. My skin glowed like never before. Best beauty studio in Cuttack without any doubt!', img: '💍' },
  ]
  return (
    <section id="reviews" className="dark-pink-section py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.2) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,100,140,0.15) 0%, transparent 65%)', filter: 'blur(50px)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 section-reveal">
          <p className="font-script text-[38px] leading-none mb-2"
            style={{ color: '#C5A16B', textShadow: '0 0 30px rgba(240,124,160,0.5)' }}>Client Love</p>
          <div className="section-divider-white" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="font-body text-white/55 max-w-xl mx-auto text-[15px]">
            Real words from real clients who trusted Colors Makeup Studio with their most special moments.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className="card-dark-3d glass-dark rounded-3xl p-7 reveal-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-1 mb-4">
                {Array(r.stars).fill(null).map((_, j) => (
                  <span key={j} className="text-[16px]" style={{ color: '#C5A16B', textShadow: '0 0 10px rgba(240,124,160,0.6)' }}>★</span>
                ))}
              </div>
              <p className="font-body text-white/70 text-[13px] leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(240,124,160,0.4), transparent)' }} />
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(199,59,106,0.6), rgba(139,26,56,0.9))', boxShadow: '0 4px 15px rgba(199,59,106,0.35)' }}>
                  {r.img}
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-[14px]">{r.name}</p>
                  <p className="font-body text-[11px] text-amber-600">{r.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Stats Banner ─────────────────────────────────────────────────────────────
function StatsBanner() {
  const cards = [
    { stat: '7+',   label: 'Years of Excellence',  src: imgOdiaBride,   sub: 'Serving Cuttack brides with pride since our founding' },
    { stat: '800+', label: 'Clients Transformed',  src: imgRoseBride,   sub: 'Every look personalised, every client cherished' },
    { stat: '25+',  label: 'Expert Techniques',    src: imgMagenta,     sub: 'HD, Airbrush, Silk Saree Bridal & more' },
    { stat: '100%', label: 'Client Satisfaction',  src: imgPinkJoy,     sub: 'We perfect every detail until you are in love with your look' },
  ]
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EFE5D7 0%, #E8D8C5 50%, #EFE5D7 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(199,59,106,0.1) 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 section-reveal">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Our Promise</p>
          <div className="section-divider" />
          <h2 className="font-display text-5xl font-bold text-stone-950">By the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <div key={c.label} className="glass rounded-3xl overflow-hidden card-3d pink-glow reveal-scale" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="h-40 overflow-hidden">
                <ImageWithFallback src={c.src} alt={c.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <p className="font-display text-[48px] font-bold gradient-text leading-none mb-1">{c.stat}</p>
                <p className="font-body font-semibold text-stone-950 text-[12px] mb-1">{c.label}</p>
                <p className="font-body text-[11px] text-stone-600 leading-relaxed">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── NEW Compliment Section 2 — Odia Bridal Traditions ─────────────────────────
function OdiaBridalTradition() {
  const traditions = [
    { icon: '🔴', title: 'The Sacred Red', desc: 'Red Odia silk saree — the cornerstone of every Odia bridal look. Our artists master the exact drape, alta feet, and vermillion that make an Odia bride complete.' },
    { icon: '✨', title: 'Gold Jewellery Harmony', desc: 'We plan your entire look around your gold — the Chandrahar, Bajuband, Tikli, and Nath — so every piece shines in perfect harmony with your makeup.' },
    { icon: '🪷', title: 'Floral Hair Artistry', desc: 'Traditional Odia bridal hairstyles adorned with beli, rose, and marigold flowers — crafted to stay perfect through your entire ceremony.' },
    { icon: '🎨', title: 'Alta & Ceremonial Rituals', desc: 'We understand the sacred details — alta application, sindoor ceremony prep, and the finishing touches that honour your rituals beautifully.' },
  ]
  return (
    <section className="py-28 relative overflow-hidden dark-pink-section">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(199,59,106,0.2) 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4 reveal-left">
          <div className="rounded-3xl overflow-hidden pink-glow row-span-2" style={{ border: '2px solid rgba(199,59,106,0.3)' }}>
            <ImageWithFallback src={imgCurtain} alt="Odia bride in traditional red between curtains"
              className="w-full h-full object-cover object-top" style={{ minHeight: '380px' }} />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(199,59,106,0.2)' }}>
            <ImageWithFallback src={imgRoseBride} alt="Odia bride at ceremony with rose garland"
              className="w-full h-44 object-cover object-top" />
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(199,59,106,0.2)' }}>
            <ImageWithFallback src={imgMirrorBride} alt="Bride getting ready at Colors Studio"
              className="w-full h-44 object-cover object-top" />
          </div>
        </div>
        {/* Copy */}
        <div className="reveal-right">
          <p className="font-script text-[38px] leading-none mb-2" style={{ color: '#C5A16B' }}>Our Speciality</p>
          <div className="section-divider-white" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Masters of the<br />
            <span style={{ background: 'linear-gradient(135deg, #C5A16B, #E6D5BE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Odia Bridal Tradition
            </span>
          </h2>
          <p className="font-body text-white/60 text-[14px] leading-relaxed mb-8">
            Odisha has one of the most beautiful and distinctive bridal traditions in India. At Colors Makeup Studio,
            we take pride in honouring every detail — from the deep red paat saree to the intricate gold necklace layering.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {traditions.map((t, i) => (
              <div key={t.title} className="glass-dark rounded-2xl p-5 reveal-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-2xl block mb-2">{t.icon}</span>
                <p className="font-body font-semibold text-amber-300 text-[13px] mb-1">{t.title}</p>
                <p className="font-body text-white/55 text-[12px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── NEW Compliment Section 3 — Transformations Reel ─────────────────────────
function TransformationsReel() {
  const looks = [
    { src: imgBlueSaree,  title: 'Contemporary Elegance',   desc: 'Subtle glam for the modern Odia woman — natural base, defined eyes, soft lips.' },
    { src: imgMagenta,    title: 'Vibrant Festive Glam',    desc: 'Bold magenta saree look with mehndi art — perfect for sangeet and puja celebrations.' },
    { src: imgPinkJoy,    title: 'Playful Party Look',      desc: 'Pink lehenga with statement eyes — joyful, camera-ready, and full of personality.' },
    { src: imgHairStr,    title: 'Silk-Smooth Hair Result', desc: 'Our professional keratin treatment delivers salon-straight, glossy hair that lasts for months.' },
  ]
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F4ED 0%, #EFE5D7 50%, #F8F4ED 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(199,59,106,0.1) 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 section-reveal">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Client Transformations</p>
          <div className="section-divider" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-950 mb-4">
            Every Look, A New Story
          </h2>
          <p className="font-body text-stone-700 max-w-xl mx-auto text-[15px]">
            From everyday elegance to grand bridal statements — Colors Makeup Studio crafts a unique story for every woman who sits in our chair.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((l, i) => (
            <div key={l.title} className="glass rounded-3xl overflow-hidden card-3d reveal-scale group" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="h-56 overflow-hidden">
                <ImageWithFallback src={l.src} alt={l.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="h-0.5 w-10 mb-4" style={{ background: 'linear-gradient(90deg, #9A6B36, #C5A16B)' }} />
                <h3 className="font-display text-[18px] font-semibold text-stone-950 mb-2">{l.title}</h3>
                <p className="font-body text-[12px] text-stone-700 leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14 section-reveal">
          <p className="font-body text-stone-700 text-[15px] mb-6">Ready to start your own transformation story?</p>
          <a href="#appointment" className="btn-primary"><span>✦ Book Your Session Today</span></a>
        </div>
      </div>
    </section>
  )
}

// ── Bridal Quote ──────────────────────────────────────────────────────────────
function BridalQuote() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8F4ED 0%, #EFE5D7 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(199,59,106,0.35) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center section-reveal">
        <p className="font-display text-[100px] text-amber-200 leading-none -mb-6">"</p>
        <p className="font-display text-3xl md:text-5xl italic font-medium text-stone-900 leading-snug">
          An Odia bride in red silk is the most magnificent sight in the universe.<br />
          <span className="gradient-text font-bold">We make sure she is painted perfectly.</span>
        </p>
        <p className="font-script text-amber-700 text-3xl mt-6">— Colors Makeup Studio, Cuttack</p>
        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="w-2 h-2 rounded-full bg-amber-300" />
          <div className="h-[3px] w-10 rounded-full" style={{ background: 'linear-gradient(90deg, #9A6B36, #C5A16B)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #9A6B36, #4A2C20)' }} />
          <div className="h-[3px] w-10 rounded-full" style={{ background: 'linear-gradient(90deg, #C5A16B, #9A6B36)' }} />
          <div className="w-2 h-2 rounded-full bg-amber-300" />
        </div>
      </div>
    </section>
  )
}

// ── Appointment ───────────────────────────────────────────────────────────────
function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const services = ['Odia Bridal Makeup', 'Pre-Bridal Package', 'Party Makeup', 'Hair Treatment', 'Skin Facial', 'Saree Draping']
  const handle = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <section id="appointment" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EFE5D7 0%, #F8F4ED 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(199,59,106,0.1) 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto px-5">
        <div className="text-center mb-14 section-reveal">
          <p className="font-script text-amber-700 text-[38px] leading-none mb-2">Ready to Glow?</p>
          <div className="section-divider" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-950 mb-4">Book at Colors Studio</h2>
          <p className="font-body text-stone-700 max-w-xl mx-auto text-[15px]">
            Fill the form and our team will confirm your appointment within 24 hours.
          </p>
        </div>
        {sent ? (
          <div className="glass rounded-3xl p-16 text-center section-reveal pink-glow">
            <p className="text-5xl mb-5">🌸</p>
            <h3 className="font-display text-4xl font-bold text-stone-950 mb-3">Request Received!</h3>
            <p className="font-body text-stone-700 mb-6">Our team will call you within 24 hours to confirm your appointment at Colors Studio.</p>
            <p className="font-body text-sm text-stone-600">Or WhatsApp us directly: <strong className="text-amber-800">08093202010</strong></p>
          </div>
        ) : (
          <form onSubmit={submit} className="glass rounded-3xl p-8 md:p-12 section-reveal">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input required placeholder="Your Full Name" value={form.name} onChange={handle('name')} className="form-input" />
              <input required placeholder="Phone Number" value={form.phone} onChange={handle('phone')} className="form-input" />
              <input type="email" placeholder="Email Address" value={form.email} onChange={handle('email')} className="form-input" />
              <input type="date" value={form.date} onChange={handle('date')} className="form-input" />
            </div>
            <select required value={form.service} onChange={handle('service')} className="form-input mb-4">
              <option value="">Select a Service</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea placeholder="Any special requests, your outfit details, or notes for us..." value={form.message}
              onChange={handle('message')} rows={4} className="form-input resize-none mb-8" />
            <button type="submit" className="btn-primary w-full">
              <span>✦ Confirm My Appointment at Colors Studio</span>
            </button>
            <p className="font-body text-[12px] text-stone-500 text-center mt-4">
              Or call / WhatsApp: <a href="tel:08093202010" className="text-amber-800 font-semibold">08093202010</a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Map ───────────────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section id="map" className="py-28 relative overflow-hidden dark-pink-section">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(199,59,106,0.2) 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        <div className="section-reveal">
          <p className="font-script text-[38px] leading-none mb-2"
            style={{ color: '#C5A16B', textShadow: '0 0 30px rgba(240,124,160,0.5)' }}>Find Us</p>
          <div className="section-divider-white" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-10">Visit Colors Makeup Studio</h2>
          <div className="space-y-4">
            {[
              { icon: '📍', label: 'Studio Address',   val: 'Ahead of Haripur Durga Mandap\nHaripur Rd, Siba Bazar\nKataka (Cuttack), Odisha 753001' },
              { icon: '📞', label: 'Phone / WhatsApp', val: '08093202010' },
              { icon: '🕐', label: 'Studio Hours',      val: 'Mon – Sat: 9:00 AM – 7:30 PM\nSunday: By Appointment Only' },
              { icon: '📷', label: 'Instagram',         val: '@colorsmakeupstudio' },
            ].map(item => (
              <div key={item.label} className="flex gap-4 items-start glass-dark rounded-2xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-body font-semibold text-amber-300 text-[12px] uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-body text-white/70 text-[13px] whitespace-pre-line">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right">
          <div className="rounded-3xl overflow-hidden pink-glow" style={{ height: '420px', border: '3px solid rgba(199,59,106,0.4)' }}>
            <iframe title="Colors Makeup Studio Cuttack Location"
              width="100%" height="100%" frameBorder="0" style={{ border: 0 }} loading="lazy" allowFullScreen
              src="https://maps.google.com/maps?q=Haripur+Road+Siba+Bazar+Cuttack+Odisha+753001&t=&z=15&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const faqs = [
    { q: 'How far in advance should I book Colors Studio for my wedding?', a: 'We recommend booking at least 3–5 months in advance for bridal appointments, especially during the Odia wedding seasons (Oct–Feb and April–May). Popular dates fill up very quickly!' },
    { q: 'Do you offer a bridal trial session?', a: 'Yes! A bridal trial is strongly recommended 4–6 weeks before your wedding. This allows us to test the full look, check compatibility with your skin, and make any adjustments so the final result is absolutely perfect.' },
    { q: 'Do you specialise in Odia traditional bridal looks?', a: 'Absolutely! Odia bridal makeup — including the red paat saree look, gold jewellery coordination, alta, tikka, and nose ring styling — is our core speciality and our deepest pride.' },
    { q: 'What hair treatments do you offer at Colors Studio?', a: 'We offer keratin smoothening, rebonding, straightening, deep conditioning, scalp treatments, hair spa, colouring, and styling. Our hair straightening results speak for themselves — silky, glossy, and long-lasting.' },
    { q: 'Do you provide home or venue services?', a: 'Yes! Colors Makeup Studio provides doorstep bridal services across Cuttack and nearby areas. Please contact us on 08093202010 to discuss your requirements and travel charges.' },
    { q: 'What does the pre-bridal package include?', a: 'Our pre-bridal package covers skin analysis, a series of brightening facials, D-tan, bleach, waxing, threading, and a personalised skincare plan — ideally starting 2–3 months before your wedding for the best results.' },
  ]
  return (
    <section id="faq" className="deep-rose-section py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(199,59,106,0.2) 0%, transparent 55%)' }} />
      <div className="relative z-10 max-w-3xl mx-auto px-5">
        <div className="text-center mb-14 section-reveal">
          <p className="font-script text-[38px] leading-none mb-2" style={{ color: '#C5A16B' }}>Have Questions?</p>
          <div className="section-divider-white" />
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">Frequently Asked</h2>
        </div>
        <div className="space-y-3 section-reveal">
          {faqs.map((f, i) => (
            <div key={i}
              className={`glass-dark rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'ring-1 ring-amber-700/50' : ''}`}
              style={{ boxShadow: open === i ? '0 0 30px rgba(199,59,106,0.25)' : 'none' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <span className="font-body font-semibold text-white text-[14px] leading-snug">{f.q}</span>
                <span className={`text-amber-600 text-2xl font-light transition-transform duration-300 shrink-0 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, rgba(199,59,106,0.5), transparent)' }} />
                  <p className="font-body text-[13px] text-white/60 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4A2C20 0%, #9A6B36 40%, #B88A55 65%, #9A6B36 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.12) 0%, transparent 50%)' }} />
        {[100,60,140,50,80].map((s, i) => (
          <div key={i} className="absolute rounded-full animate-float"
            style={{
              width: s, height: s, background: 'rgba(255,255,255,0.08)',
              top:  `${[8,65,25,80,45][i]}%`, left: `${[4,88,12,75,92][i]}%`,
              animationDuration: `${[6,8,10,5,7][i]}s`, animationDelay: `${[0,.5,1,1.5,2][i]}s`,
            }} />
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center section-reveal">
        <p className="font-script text-white/70 text-4xl mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
          Your most beautiful day deserves the best
        </p>
        <h2 className="font-display text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>
          Book Colors<br />Studio Today
        </h2>
        <p className="font-body text-white/75 text-[16px] mb-12 max-w-2xl mx-auto">
          Cuttack's most trusted beauty studio is ready to craft your perfect look. Slots fill fast — secure yours today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#appointment" className="btn-white">✦ Book Now</a>
          <a href="https://wa.me/918093202010" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            WhatsApp Us
          </a>
        </div>
        <p className="font-body text-white/50 text-[12px] mt-10">
          📍 Haripur Rd, Siba Bazar, Cuttack, Odisha 753001 · 📞 08093202010
        </p>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-14" style={{ background: '#211710' }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-script text-3xl mb-1 leading-tight" style={{ color: '#C5A16B' }}>Colors Makeup Studio</p>
            <p className="font-display text-white/50 text-sm italic mb-2">The Artistic Beauty Salon · Haripur Branch</p>
            <p className="font-body text-white/30 text-[11px] uppercase tracking-widest mb-5">Cuttack · Odisha · India</p>
            <p className="font-body text-white/35 text-[12px] leading-relaxed">
              Ahead of Haripur Durga Mandap<br />
              Haripur Rd, Siba Bazar<br />
              Kataka (Cuttack), Odisha 753001
            </p>
          </div>
          <div>
            <p className="font-body font-semibold text-white uppercase tracking-[0.15em] text-[11px] mb-5">Quick Links</p>
            {[['Services','#services'],['Gallery','#gallery'],['Reviews','#reviews'],['FAQ','#faq'],['Book Appointment','#appointment']].map(([l,h]) => (
              <a key={l} href={h}
                className="flex items-center gap-2 font-body text-[13px] text-white/40 hover:text-amber-600 transition-colors mb-2.5">
                <span className="text-amber-800 text-[9px]">✦</span>{l}
              </a>
            ))}
          </div>
          <div>
            <p className="font-body font-semibold text-white uppercase tracking-[0.15em] text-[11px] mb-5">Connect</p>
            <p className="font-body text-[13px] text-white/40 mb-2">📞 08093202010</p>
            <p className="font-body text-[13px] text-white/40 mb-7">📷 @colorsmakeupstudio</p>
            <div className="flex gap-3">
              <a href="https://wa.me/918093202010" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all"
                style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 text-center">
          <p className="font-body text-white/20 text-[11px]">
            © 2026 Colors Makeup Studio · Haripur Branch · The Artistic Beauty Salon · Cuttack, Odisha, India
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── Floating Buttons ──────────────────────────────────────────────────────────
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      <a href="https://wa.me/918093202010" target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
        style={{ boxShadow: '0 8px 30px rgba(34,197,94,0.5)' }}>
        <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
        style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', boxShadow: '0 8px 30px rgba(220,39,67,0.5)' }}>
        <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
    </div>
  )
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()
  return (
    <div className="relative min-h-screen" style={{ background: '#F8F4ED' }}>
      <FloatingBalls />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <StudioShowcase />
        <DarkQuoteBanner />
        <Testimonials />
        <StatsBanner />
        <OdiaBridalTradition />
        <TransformationsReel />
        <BridalQuote />
        <Appointment />
        <MapSection />
        <FAQ />
        <CTA />
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  )
}
