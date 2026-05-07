// LeBarche 66 — Main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "lagoon",
  "hero": "default",
  "typeface": "editorial",
  "lang": "it"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [editing, setEditing] = React.useState(false);
  const [lang, setLang] = React.useState(tweaks.lang || 'it');

  // listen for edit mode toggle
  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditing(true);
      if (d.type === '__deactivate_edit_mode') setEditing(false);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // sync lang from tweaks
  React.useEffect(() => { if (tweaks.lang && tweaks.lang !== lang) setLang(tweaks.lang); }, [tweaks.lang]);
  const onLangChange = (L) => { setLang(L); setTweak('lang', L); };

  // apply palette + typeface to <html>
  React.useEffect(() => {
    const html = document.documentElement;
    html.dataset.palette = tweaks.palette;
    html.dataset.typeface = tweaks.typeface;
    html.dataset.hero = tweaks.hero;
  }, [tweaks.palette, tweaks.typeface, tweaks.hero]);

  const t = window.I18N[lang] || window.I18N.it;

  return (
    <>
      <Topbar t={t} lang={lang} setLang={onLangChange}/>
      <main>
        <Hero t={t}/>
        <Intro t={t}/>
        <Amenities t={t}/>
        <Apartments t={t}/>
        <Location t={t}/>
        <Experience t={t}/>
        <Reviews t={t}/>
        <BookingCTA t={t}/>
      </main>
      <Footer t={t}/>

      {editing && (
        <TweaksPanel title="Tweaks" subtitle="Visual variations" defaultPosition={{right: 24, bottom: 24}}>
          <TweakSection title="Palette">
            <TweakRadio label="Color theme" value={tweaks.palette}
              onChange={v => setTweak('palette', v)}
              options={[
                {value:'lagoon', label:'Lagoon'},
                {value:'stone', label:'Stone'},
                {value:'midnight', label:'Midnight'},
              ]}/>
          </TweakSection>
          <TweakSection title="Hero layout">
            <TweakRadio label="Hero variant" value={tweaks.hero}
              onChange={v => setTweak('hero', v)}
              options={[
                {value:'default', label:'Bottom'},
                {value:'centered', label:'Centered'},
                {value:'split', label:'Split'},
              ]}/>
          </TweakSection>
          <TweakSection title="Typography">
            <TweakRadio label="Display typeface" value={tweaks.typeface}
              onChange={v => setTweak('typeface', v)}
              options={[
                {value:'editorial', label:'Editorial serif'},
                {value:'modern', label:'Modern sans'},
              ]}/>
          </TweakSection>
          <TweakSection title="Language">
            <TweakRadio label="Site language" value={lang}
              onChange={onLangChange}
              options={[
                {value:'it', label:'Italiano'},
                {value:'en', label:'English'},
                {value:'de', label:'Deutsch'},
              ]}/>
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
