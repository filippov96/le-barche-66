// LeBarche 66 — Page sections
const { useState, useEffect, useRef } = React;

// ============ TOPBAR ============
const Topbar = ({ t, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={"topbar" + (scrolled ? " scrolled" : "")}>
      <a href="#top" className="topbar-logo">
        <span>Le Barche <em style={{fontStyle:'italic', opacity:0.7}}>66</em></span>
      </a>
      <nav className="topbar-nav">
        <a href="#apartments">{t.nav.apartments}</a>
        <a href="#location">{t.nav.location}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#reviews">{t.nav.reviews}</a>
      </nav>
      <div className="topbar-right">
        <div className="lang-switch" role="tablist" aria-label="Language">
          {['it','en','de'].map(L => (
            <button key={L} className={lang===L?'active':''} onClick={() => setLang(L)}>{L.toUpperCase()}</button>
          ))}
        </div>
        <a href="#booking" className="btn btn-primary">{t.nav.book}</a>
      </div>
    </header>
  );
};

// ============ HERO ============
const Hero = ({ t }) => (
  <section className="hero" id="top" data-screen-label="01 Hero">
    <div className="hero-bg">
      <img src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=2400&q=85" alt="Venice rooftops at golden hour" />
    </div>
    <div className="hero-content">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">{t.hero.eyebrow}</div>
          <h1 className="hero-headline">
            {t.hero.headline_a}<br/>
            <span className="accent italic">{t.hero.headline_b}</span><br/>
            {t.hero.headline_c}
          </h1>
          <p className="hero-sub" style={{marginTop: 24}}>{t.hero.sub}</p>
          <div className="hero-meta">
            <a href="#booking" className="btn btn-primary btn-arrow">
              {t.hero.check_dates}
              <Icon name="arrow-right" size={16}/>
            </a>
            <a href="#apartments" className="btn" style={{color: 'var(--paper)', fontWeight: 400}}>
              {t.hero.see_apartments} <Icon name="arrow-up-right" size={14}/>
            </a>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-rating">
            <div className="hero-rating-row">
              <span className="hero-rating-score">9.6</span>
              <span className="hero-rating-stars">★★★★★</span>
            </div>
            <div className="hero-rating-label">{t.hero.rating_label}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============ INTRO ============
const Intro = ({ t }) => (
  <section className="section" id="intro" data-screen-label="02 Intro">
    <div className="wrap">
      <div className="intro-grid">
        <div className="intro-text">
          <span className="eyebrow">{t.intro.eyebrow}</span>
          <h2 className="h2 intro-title">
            {t.intro.title_a} <em className="italic" style={{fontWeight:300, color:'var(--terracotta)'}}>{t.intro.title_b}</em>
          </h2>
          <p className="lede intro-body">{t.intro.body}</p>
          <div className="intro-stats">
            <div>
              <div className="intro-stat-num">{t.intro.stat1_n}</div>
              <div className="intro-stat-label">{t.intro.stat1_l}</div>
            </div>
            <div>
              <div className="intro-stat-num">{t.intro.stat2_n}</div>
              <div className="intro-stat-label">{t.intro.stat2_l}</div>
            </div>
            <div>
              <div className="intro-stat-num">{t.intro.stat3_n}</div>
              <div className="intro-stat-label">{t.intro.stat3_l}</div>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img src="photos/apt-3-4.jpg" alt="Appartamento Le Barche 66" />
          <div className="intro-image-tag">
            <Icon name="map-pin" size={14}/>
            {t.intro.tag}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Placeholder apartment "image" — minimal SVG of a modern interior, since real photos aren't provided
const ApartmentPlaceholder = ({ variant = "default" }) => {
  // generate a soft colored block representing an interior
  const palettes = {
    hero: ["#D8C8AC", "#B89E78", "#5D6E72", "#2D4654"],
    a:    ["#E2D5BB", "#A89880", "#6B7A82"],
    b:    ["#D8C8AC", "#94835E", "#4A6B7C"],
    c:    ["#E5DBC4", "#B69F7A", "#7D8266"],
    d:    ["#D2C5A5", "#876F4F", "#5D7480"],
    e:    ["#DDD0B0", "#A88D62", "#3D5A6B"],
  };
  const p = palettes[variant] || palettes.a;
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{width:'100%', height:'100%'}} aria-hidden="true">
      <rect width="400" height="500" fill={p[0]}/>
      {/* floor */}
      <rect x="0" y="380" width="400" height="120" fill={p[1]} opacity="0.7"/>
      {/* window */}
      <rect x="60" y="80" width="180" height="240" fill={p[3] || p[2]} opacity="0.85"/>
      <rect x="60" y="80" width="180" height="240" fill="none" stroke={p[0]} strokeWidth="3" opacity="0.6"/>
      <line x1="150" y1="80" x2="150" y2="320" stroke={p[0]} strokeWidth="2" opacity="0.6"/>
      <line x1="60" y1="200" x2="240" y2="200" stroke={p[0]} strokeWidth="2" opacity="0.6"/>
      {/* light from window */}
      <polygon points="60,320 240,320 280,500 20,500" fill="#FBF5E8" opacity="0.18"/>
      {/* sofa / bed silhouette */}
      <rect x="270" y="290" width="110" height="70" rx="8" fill={p[2]} opacity="0.85"/>
      <rect x="270" y="270" width="110" height="30" rx="6" fill={p[2]} opacity="0.7"/>
      {/* small lamp */}
      <circle cx="310" cy="160" r="6" fill={p[1]}/>
      <line x1="310" y1="160" x2="310" y2="80" stroke={p[1]} strokeWidth="1.5" opacity="0.5"/>
      {/* table */}
      <rect x="100" y="380" width="80" height="6" fill={p[2]} opacity="0.6"/>
      <line x1="110" y1="386" x2="110" y2="430" stroke={p[2]} strokeWidth="2" opacity="0.5"/>
      <line x1="170" y1="386" x2="170" y2="430" stroke={p[2]} strokeWidth="2" opacity="0.5"/>
    </svg>
  );
};

window.Topbar = Topbar;
window.Hero = Hero;
window.Intro = Intro;
window.ApartmentPlaceholder = ApartmentPlaceholder;
