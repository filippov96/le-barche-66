// LeBarche 66 — Page sections part 2
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

// ============ AMENITIES ============
const Amenities = ({ t }) => (
  <section className="section amenities" id="amenities" data-screen-label="03 Amenities">
    <div className="wrap">
      <div className="amenities-head">
        <div>
          <span className="eyebrow">{t.amenities.eyebrow}</span>
          <h2 className="h2" style={{marginTop: 16}}>{t.amenities.title}</h2>
        </div>
        <p className="lede" style={{maxWidth: 460}}>{t.amenities.sub}</p>
      </div>
      <div className="amenities-grid">
        {t.amenities.items.map(([title, desc, iconName, featured], i) => (
          <div key={i} className={"amenity" + (featured ? " featured" : "")}>
            <div className="amenity-icon"><Icon name={iconName} size={32} stroke={1.4}/></div>
            <div className="amenity-title">{title}</div>
            <div className="amenity-desc">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ APARTMENTS ============
const APT_PHOTOS = [
  "photos/apt-3-4.jpg",
  "photos/apt-3a-2.jpg",
  "photos/apt-3b-2.jpg",
  "photos/apt-3c-2.jpg",
  "photos/apt-3c-2.jpg",
];

const Apartments = ({ t }) => {
  const [hovered, setHovered] = React.useState(null);
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="section" id="apartments" data-screen-label="04 Apartments">
      <div className="wrap">
        <div className="apartments-head">
          <div>
            <span className="eyebrow">{t.apartments.eyebrow}</span>
            <h2 className="h2" style={{marginTop: 16}}>{t.apartments.title}</h2>
          </div>
          <p className="lede">{t.apartments.sub}</p>
        </div>
        <div className="apt-list">
          {t.apartments.list.map(([num, name, desc, capacity, size], i) => (
            <div key={i} className="apt-row"
                 onMouseEnter={() => setHovered(i)}
                 onMouseLeave={() => setHovered(null)}>
              <div className="apt-num">{num}</div>
              <div className="apt-name-block">
                <div className="apt-num-label">Apt {num}</div>
                <div className="apt-name">{name}</div>
              </div>
              <div className="apt-desc">{desc}</div>
              <div className="apt-meta apt-meta-1"><Icon name="users" size={14}/><span><strong>{capacity}</strong></span></div>
              <div className="apt-meta apt-meta-2"><Icon name="ruler" size={14}/><span><strong>{size}</strong></span></div>
              <a href="#booking" className="apt-cta"><Icon name="arrow-up-right" size={16}/></a>
              <div className="apt-photo-wrap">
                <img src={APT_PHOTOS[i]} alt={name} className="apt-photo-img" />
                <div className="apt-photo-bar">
                  <span className="apt-tag"><Icon name="users" size={13}/>{capacity}<span className="apt-tag-sep">·</span><Icon name="ruler" size={13}/>{size}</span>
                  <a href="#booking" className="btn btn-primary apt-book-btn">{t.nav.book}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={"apt-hover-preview" + (hovered !== null ? " visible" : "")}
           style={{ left: mouse.x, top: mouse.y }}>
        {hovered !== null && (
          <>
            <img src={APT_PHOTOS[hovered]} alt={t.apartments.list[hovered][1]}/>
            <div className="apt-preview-tag">
              {t.apartments.list[hovered][0]} · {t.apartments.list[hovered][4]}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// ============ LOCATION ============
const Location = ({ t }) => (
  <section className="section location" id="location" data-screen-label="05 Location">
    <div className="wrap">
      <div className="location-grid">
        <div className="location-text">
          <span className="eyebrow">{t.location.eyebrow}</span>
          <h2 className="h2" style={{marginTop: 16}}>
            {t.location.title_a} <em className="italic" style={{fontWeight: 300, color: 'var(--terracotta)'}}>{t.location.title_b}</em>
          </h2>
          <p className="lede" style={{marginTop: 24}}>{t.location.sub}</p>
          <ul className="location-points">
            {t.location.points.map(([time, mode, place], i) => (
              <li key={i}>
                <span className="pt-time">{time}</span>
                <span>{place}</span>
                <span className="pt-mode">{mode}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="map-wrap">
          <MapStylized t={t}/>
        </div>
      </div>
    </div>
  </section>
);

// Real OpenStreetMap via Leaflet — Le Barche 66, Piazza XXVII Ottobre, Mestre
const MapStylized = ({ t }) => {
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || mapRef.current || !window.L) return;
    const L = window.L;
    // Le Barche 66, Piazza XXVII Ottobre, 30172 Mestre
    const us = [45.4906, 12.2436];
    const map = L.map(ref.current, {
      center: us,
      zoom: 13,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    // Carto Positron — clean, muted basemap that fits the hospitality palette
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    // Custom pin for Le Barche 66
    const usIcon = L.divIcon({
      className: 'leaflet-custom-pin us',
      html: '<div class="pin-inner"><div class="pin-label">Le Barche 66</div><div class="pin-dot"></div></div>',
      iconSize: [120, 50],
      iconAnchor: [60, 50],
    });
    L.marker(us, { icon: usIcon }).addTo(map)
      .bindPopup('<strong>Le Barche 66</strong><br>Piazza XXVII Ottobre 66<br>30172 Mestre, Italia');

    // Reference pins: Venezia (Piazza San Marco) + Marco Polo airport
    const refIcon = (label) => L.divIcon({
      className: 'leaflet-custom-pin',
      html: `<div class="pin-inner"><div class="pin-label">${label}</div><div class="pin-dot"></div></div>`,
      iconSize: [110, 50],
      iconAnchor: [55, 50],
    });
    L.marker([45.4341, 12.3388], { icon: refIcon(t.location.pin_venice) }).addTo(map);
    L.marker([45.5053, 12.3519], { icon: refIcon(t.location.pin_airport) }).addTo(map);

    // Fit bounds to include all three points with padding
    const bounds = L.latLngBounds([us, [45.4341, 12.3388], [45.5053, 12.3519]]);
    map.fitBounds(bounds, { padding: [60, 60] });

    return () => { map.remove(); mapRef.current = null; };
  }, [t.location.pin_venice, t.location.pin_airport]);

  return <div ref={ref} className="leaflet-mount" style={{width:'100%', height:'100%', minHeight:460}}/>;
};

window.Amenities = Amenities;
window.Apartments = Apartments;
window.Location = Location;
