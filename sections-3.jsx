// LeBarche 66 — Page sections part 3 (experience, reviews, booking, footer)

// ============ EXPERIENCE ============
const EXP_PHOTOS = {
  venezia:  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=840&q=80&auto=format&fit=crop",
  burano:   "https://images.unsplash.com/photo-1596654907146-e3f04b1561cc?w=840&q=80&auto=format&fit=crop",
  verona:   "https://images.unsplash.com/photo-1598868759776-113397b9d19b?w=840&q=80&auto=format&fit=crop",
  padova:   "https://images.unsplash.com/photo-1588447824384-2b5b65080fd0?w=840&q=80&auto=format&fit=crop",
  dolomiti: "https://images.unsplash.com/photo-1557064349-7b3817527fb8?w=840&q=80&auto=format&fit=crop",
  prosecco: "https://images.unsplash.com/photo-1502285254372-2cb4d1b0993b?w=840&q=80&auto=format&fit=crop",
};

const Experience = ({ t }) => {
  const kinds = ["venezia", "burano", "verona", "padova", "dolomiti", "prosecco"];
  const modes = ["Bus / Treno", "Bus + vaporetto", "Treno", "Treno", "Auto", "Auto"];

  return (
    <section className="section experience-section" id="experience" data-screen-label="06 Experience">
      <div className="wrap">
        <div className="exp-head">
          <span className="eyebrow">{t.experience.eyebrow}</span>
          <h2 className="h2" style={{marginTop: 16, textWrap: 'balance'}}>{t.experience.title}</h2>
          <p className="lede" style={{marginTop: 24, maxWidth: 540}}>{t.experience.sub}</p>
        </div>
        <div className="exp-grid">
          {t.experience.cards.map(([name, desc, distance], i) => (
            <article key={i} className={"exp-card exp-card-" + kinds[i]}>
              <img src={EXP_PHOTOS[kinds[i]]} alt={name} loading="lazy" className="exp-card-img" />
              <div className="exp-card-overlay" />
              <div className="exp-card-content">
                <p className="exp-card-meta">{distance} · {modes[i]}</p>
                <h3 className="exp-card-title">{name}</h3>
                <p className="exp-card-desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ REVIEWS ============
const Reviews = ({ t }) => (
  <section className="section reviews" id="reviews" data-screen-label="07 Reviews">
    <div className="wrap">
      <div className="reviews-head">
        <span className="eyebrow">{t.reviews.eyebrow}</span>
        <h2 className="h2" style={{marginTop: 16}}>{t.reviews.title}</h2>
        <p className="lede" style={{marginTop: 16}}>{t.reviews.sub}</p>
        <div className="review-platforms">
          <div className="platform-card">
            <div className="platform-score">9.6</div>
            <div className="platform-meta">
              <div className="platform-name">Booking.com</div>
              <div className="platform-stars">★★★★★</div>
              <div className="platform-count">{t.reviews.booking_count}</div>
            </div>
          </div>
          <div className="platform-card">
            <div className="platform-score">4.99</div>
            <div className="platform-meta">
              <div className="platform-name">Airbnb</div>
              <div className="platform-stars">★★★★★</div>
              <div className="platform-count">{t.reviews.airbnb_count}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-list">
        {t.reviews.reviews.slice(0, 3).map(([text, name, where, platform, plabel], i) => (
          <ReviewCard key={i} text={text} name={name} where={where} platform={platform} platformLabel={plabel}/>
        ))}
      </div>
      {t.reviews.reviews.length > 3 && (
        <div className="reviews-list" style={{marginTop: 'var(--sp-5)', gridTemplateColumns: 'repeat(2, 1fr)'}}>
          {t.reviews.reviews.slice(3).map(([text, name, where, platform, plabel], i) => (
            <ReviewCard key={i} text={text} name={name} where={where} platform={platform} platformLabel={plabel}/>
          ))}
        </div>
      )}
    </div>
  </section>
);

const ReviewCard = ({ text, name, where, platform, platformLabel }) => (
  <div className="review">
    <div className="review-stars">★★★★★</div>
    <div className="review-text">{text}</div>
    <div className="review-author">
      <div className="review-avatar">{name.charAt(0)}</div>
      <div className="review-meta">
        <div className="review-name">{name}</div>
        <div className="review-where">{where}</div>
      </div>
      <div className={"review-platform-tag " + platform}>{platformLabel}</div>
    </div>
  </div>
);

// ============ BOOKING CTA ============
const BookingCTA = ({ t }) => (
  <section className="booking-cta" id="booking" data-screen-label="08 Booking">
    <div className="wrap">
      <div className="booking-inner">
        <div>
          <h2 className="h2">
            {t.booking.title_a} <em className="italic" style={{fontWeight: 300}}>{t.booking.title_b}</em>
          </h2>
          <p className="lede booking-cta-sub">{t.booking.sub}</p>
        </div>
        <div className="booking-buttons">
          <a className="booking-btn" href="https://www.booking.com/hotel/it/le-barche66-venice-apartments.it.html?label=gen173rf-10CAEoggI46AdIM1gDaHGIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGiAhIxOTIuMTY4LjAuMjEzOjMwMDCoAgG4AuOS8s8GwAIB0gIkY2JiODE3MGEtZDJkYi00MThlLWE0NjYtNDMyMTI2ODA4MzE02AIB4AIB&aid=304142&ucfs=1&arphpl=1" target="_blank" rel="noopener">
            <div className="platform-logo pl-booking">B.</div>
            <div className="booking-btn-stack">
              <span>{t.booking.booking_label} <strong>Booking.com</strong></span>
              <small>{t.booking.booking_sub}</small>
            </div>
          </a>
          <a className="booking-btn" href="https://www.airbnb.it/rooms/1135630967783011691?source_impression_id=p3_1778158019_P31csX1oCmesVK7e" target="_blank" rel="noopener">
            <div className="platform-logo pl-airbnb">A</div>
            <div className="booking-btn-stack">
              <span>{t.booking.airbnb_label} <strong>Airbnb</strong></span>
              <small>{t.booking.airbnb_sub}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ============ FOOTER ============
const Footer = ({ t }) => (
  <footer className="footer" data-screen-label="09 Footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Le Barche <em className="italic" style={{fontWeight:300, opacity:0.7}}>66</em></div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t.footer.col_visit}</div>
          <ul>
            <li><a href="#apartments">{t.footer.links_visit[0]}</a></li>
            <li><a href="#location">{t.footer.links_visit[1]}</a></li>
            <li><a href="#experience">{t.footer.links_visit[2]}</a></li>
            <li><a href="#reviews">{t.footer.links_visit[3]}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t.footer.col_stay}</div>
          <ul>
            {t.footer.links_stay.map((l, i) => <li key={i}><a href="#booking">{l}</a></li>)}
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">{t.footer.col_contact}</div>
          <ul>
            <li style={{whiteSpace:'pre-line', color:'rgba(245,241,234,0.7)', fontSize:14}}>{t.footer.address}</li>
            <li><a href={"tel:" + t.footer.phone.replace(/\s/g, '')}>{t.footer.phone}</a></li>
            <li><a href={"mailto:" + t.footer.email}>{t.footer.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.footer.rights}</span>
        <div style={{display:'flex', gap: 24}}>
          <a href="#">{t.footer.privacy}</a>
          <a href="#">{t.footer.terms}</a>
        </div>
      </div>
    </div>
  </footer>
);

window.Experience = Experience;
window.Reviews = Reviews;
window.BookingCTA = BookingCTA;
window.Footer = Footer;
