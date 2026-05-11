export type Locale = 'it' | 'en' | 'de';

const i18n = {
  it: {
    nav: { apartments: "Appartamenti", location: "Dove siamo", experience: "L'esperienza", reviews: "Recensioni", book: "Prenota" },
    hero: { eyebrow: "Mestre · Venezia", headline_a: "Modernità e relax", headline_b: "nel cuore di Mestre,", headline_c: "a un soffio da Venezia.", sub: "Comfort moderno e posizione strategica. Venezia a pochi minuti, tutto il resto a portata di passeggiata.", check_dates: "Verifica disponibilità", see_apartments: "Scopri gli appartamenti", rating_label: "su 247 recensioni" },
    intro: { eyebrow: "Residential", title_a: "Alloggi moderni, confortevoli", title_b: "e di classe — un'esperienza esclusiva.", body: "Gli appartamenti sono appena stati ristrutturati e offrono ogni comfort. Nel centro di Venezia Mestre: in pochi passi raggiungi supermercato, ristoranti, locali e negozi. Area sicura, servita da tutti i mezzi pubblici verso Venezia, la stazione e l'aeroporto.", stat1_n: "50m²", stat1_l: "media per appartamento", stat2_n: "0 min", stat2_l: "dal centro di Mestre", stat3_n: "15 min", stat3_l: "da Venezia centro storico", tag: "Centro di Venezia Mestre" },
    amenities: {
      eyebrow: "Le comodità", title: "Tutto quello che ti serve, già pronto.", sub: "Cinque appartamenti recentemente ristrutturati, pensati per chi cerca uno stile di vita moderno e una posizione perfetta per scoprire il Veneto.",
      items: [
        ["Parcheggio in loco", "Arrivi comodamente in auto — un privilegio raro a Venezia.", "parking", true],
        ["Wi-Fi veloce", "Fibra in tutti gli appartamenti, perfetta per lavorare da remoto.", "wifi", false],
        ["Climatizzazione", "Riscaldamento e aria condizionata in ogni stanza.", "ac", false],
        ["Cucina attrezzata", "Angolo cottura completo: piano, frigo, stoviglie e caffè.", "kitchen", false],
        ["Ristrutturati nel 2024", "Finiture moderne, materiali di qualità, biancheria nuova.", "renovated", false],
        ["Mezzi pubblici", "Bus per Venezia, stazione e aeroporto a pochi metri.", "transit", false],
        ["Self check-in", "Codice digitale, arrivi e parti quando vuoi.", "key", false],
        ["Lavatrice e asciugatrice", "Per soggiorni lunghi, niente bagagli pesanti.", "laundry", false]
      ] as [string, string, string, boolean][]
    },
    apartments: {
      eyebrow: "Cinque appartamenti", title: "Scegli il tuo spazio.", sub: "Ogni appartamento ha camera, soggiorno con divano letto, angolo cottura e bagno privato. Tutti tra 48 e 60 m².",
      list: [
        ["3",  "Comfort Suite",       "Camera, soggiorno con divano letto, angolo cottura e bagno.", "fino a 3 ospiti", "48 m²"],
        ["3A", "Family Studio Plus",  "Camera, soggiorno con divano letto, angolo cottura e bagno.", "fino a 4 ospiti", "60 m²"],
        ["3B", "Comfort Suite",       "Camera, soggiorno con divano letto, angolo cottura e bagno.", "fino a 4 ospiti", "55 m²"],
        ["3C", "Comfort Suite",       "Camera, soggiorno con divano letto, angolo cottura e bagno.", "fino a 4 ospiti", "52 m²"],
        ["3D", "Comfort Suite",       "Camera, soggiorno con divano letto, angolo cottura e bagno.", "2 ospiti",        "50 m²"]
      ] as [string, string, string, string, string][]
    },
    location: { eyebrow: "Dove ci troviamo", title_a: "Ci troviamo nel centro", title_b: "di Venezia Mestre.", sub: "Una posizione che fa la differenza. Tutto raggiungibile a piedi o in pochi minuti di mezzi pubblici — e in più, parcheggio per chi arriva in auto.", points: [["2 min","A piedi","Bus per Venezia"],["8 min","In treno","Stazione di Mestre"],["15 min","In bus","Piazza San Marco"],["20 min","In auto","Aeroporto Marco Polo"],["1 ora","In treno","Verona, Padova, Treviso"]] as [string,string,string][], pin_venice: "Venezia", pin_airport: "Aeroporto" },
    experience: { eyebrow: "Veneto, fuori dalla porta", title: "L'esperienza inizia da qui.", sub: "Mestre è il punto di partenza perfetto per scoprire alcuni dei luoghi più belli d'Italia.", cards: [["Venezia","Piazza San Marco e i sestieri","15 min"],["Burano","L'isola dei colori","1 h 10 min"],["Verona","Arena e Romeo & Giulietta","1 h 10 min"],["Padova","Cappella degli Scrovegni","30 min"],["Dolomiti","Le montagne più belle del mondo","2 h"],["Colline del Prosecco","Patrimonio UNESCO","1 h"]] as [string,string,string][] },
    reviews: { eyebrow: "Dicono di noi", title: "Ospiti che tornerebbero.", sub: "I voti reali dei nostri ospiti su Booking e Airbnb — niente filtri, niente trucchi.", booking_count: "180 recensioni", airbnb_count: "67 recensioni", reviews: [["Posizione eccellente. Comodo parcheggio riservato sotto casa. Appartamento ristrutturato con gusto: curato, elegante. Cucina completissima. Staff super disponibile.","Alessandro","Italia","booking","Booking.com"],["Posizione ottima — 2 minuti a piedi al tram, 10 minuti da Venezia. Molti ristoranti e bar raggiungibili a piedi. Lo consiglio e ci tornerò sicuramente.","Barb","Ospite Airbnb","airbnb","Airbnb"],["Appartamento pulitissimo. Antonella ci ha accolto con grande gentilezza spiegandoci tutto, compreso come raggiungere Venezia. Silenzioso, affacciato su un cortile interno. Dotazione nuova, WiFi ottimo.","Danyferr","Italia","booking","Booking.com"],["Ottimo soggiorno. Appartamento esattamente come descritto, pulito, check-in semplice. Posizione perfetta per raggiungere Venezia — ottimi collegamenti. Zona incantevole, ristoranti e supermercati a piedi.","Oksana","Ospite Airbnb","airbnb","Airbnb"],["Ottimo appartamento! Il riscaldamento funziona benissimo e gli spazi sono molto ampi. La nostra host Antonella è stata cordialissima e sempre disponibile. Soggiorno fantastico.","Farisah Diyana","Ospite Airbnb","airbnb","Airbnb"]] as [string,string,string,string,string][] },
    booking: { title_a: "Pronto per la tua", title_b: "fuga veneziana?", sub: "Prenota direttamente sulla piattaforma che preferisci. Stessi prezzi, stesse garanzie.", booking_label: "Prenota su", booking_sub: "Cancellazione gratuita", airbnb_label: "Prenota su", airbnb_sub: "Superhost dal 2023" },
    footer: { tagline: "Cinque appartamenti moderni nel cuore di Venezia Mestre. Ristrutturati nel 2024, pensati per chi viaggia bene.", col_visit: "Visita", col_stay: "Soggiorno", col_contact: "Contatti", links_visit: ["Gli appartamenti","Dove siamo","L'esperienza","Recensioni"], links_stay: ["Booking.com","Airbnb","Check-in info","Politica cancellazione"], address: "66 Piazza XXVII Ottobre,\n30172 Mestre, Italia", phone: "+39 041 000 0000", email: "ciao@lebarche66.it", rights: "© 2026 Le Barche 66. Tutti i diritti riservati.", privacy: "Privacy", terms: "Termini" }
  },
  en: {
    nav: { apartments: "Apartments", location: "Location", experience: "Experience", reviews: "Reviews", book: "Book" },
    hero: { eyebrow: "Mestre · Venice", headline_a: "Modern comfort", headline_b: "in the heart of Mestre,", headline_c: "a breath from Venice.", sub: "Modern comfort, strategic location. Venice in minutes, everything else just steps away.", check_dates: "Check availability", see_apartments: "View apartments", rating_label: "from 247 reviews" },
    intro: { eyebrow: "Residential", title_a: "Modern, comfortable, refined apartments", title_b: "for an exclusive experience.", body: "Recently renovated apartments offering every comfort. Right in the centre of Venice Mestre: supermarket, restaurants, bars and shops are all just a short walk away. A safe area, served by every public transport to Venice, the train station and the airport.", stat1_n: "50m²", stat1_l: "average per apartment", stat2_n: "0 min", stat2_l: "from Mestre centre", stat3_n: "15 min", stat3_l: "to historic Venice", tag: "Centre of Venice Mestre" },
    amenities: {
      eyebrow: "Amenities", title: "Everything you need, ready and waiting.", sub: "Five recently renovated apartments, designed for travellers who want modern living and a perfect base for exploring Veneto.",
      items: [
        ["On-site parking","Arrive easily by car — a rare privilege in Venice.","parking",true],
        ["Fast Wi-Fi","Fibre internet throughout, perfect for remote work.","wifi",false],
        ["Climate control","Heating and air conditioning in every room.","ac",false],
        ["Equipped kitchen","Full kitchenette: stove, fridge, cookware and coffee.","kitchen",false],
        ["Renovated in 2024","Modern finishes, quality materials, fresh linens.","renovated",false],
        ["Public transit","Buses to Venice, station and airport just metres away.","transit",false],
        ["Self check-in","Digital code — arrive and leave on your own time.","key",false],
        ["Washer and dryer","For longer stays, leave the heavy luggage at home.","laundry",false]
      ] as [string, string, string, boolean][]
    },
    apartments: {
      eyebrow: "Five apartments", title: "Choose your space.", sub: "Each apartment has a bedroom, living area with sofa bed, kitchenette and private bathroom. All between 48 and 60 m².",
      list: [
        ["3","Comfort Suite","Bedroom, living room with sofa bed, kitchenette and bathroom.","up to 3 guests","48 m²"],
        ["3A","Family Studio Plus","Bedroom, living room with sofa bed, kitchenette and bathroom.","up to 4 guests","60 m²"],
        ["3B","Comfort Suite","Bedroom, living room with sofa bed, kitchenette and bathroom.","up to 4 guests","55 m²"],
        ["3C","Comfort Suite","Bedroom, living room with sofa bed, kitchenette and bathroom.","up to 4 guests","52 m²"],
        ["3D","Comfort Suite","Bedroom, living room with sofa bed, kitchenette and bathroom.","2 guests","50 m²"]
      ] as [string, string, string, string, string][]
    },
    location: { eyebrow: "Where we are", title_a: "We're in the heart", title_b: "of Venice Mestre.", sub: "A location that makes the difference. Everything reachable on foot or in minutes by public transport — plus, parking for those arriving by car.", points: [["2 min","On foot","Bus to Venice"],["8 min","By train","Mestre station"],["15 min","By bus","St. Mark's Square"],["20 min","By car","Marco Polo Airport"],["1 hr","By train","Verona, Padua, Treviso"]] as [string,string,string][], pin_venice: "Venice", pin_airport: "Airport" },
    experience: { eyebrow: "Veneto, just outside", title: "The experience starts here.", sub: "Mestre is the perfect starting point for discovering some of Italy's most beautiful places.", cards: [["Venice","St. Mark's Square and the sestieri","15 min"],["Burano","The island of colours","1 h 10 min"],["Verona","Arena and Romeo & Juliet","1 h 10 min"],["Padua","Scrovegni Chapel","30 min"],["Dolomites","The world's most beautiful mountains","2 h"],["Prosecco Hills","UNESCO World Heritage","1 h"]] as [string,string,string][] },
    reviews: { eyebrow: "What guests say", title: "Guests who'd come back.", sub: "Real ratings from our guests on Booking and Airbnb — no filters, no tricks.", booking_count: "180 reviews", airbnb_count: "67 reviews", reviews: [["Excellent location. Convenient reserved parking right below. Tastefully renovated apartment: refined and elegant. Fully equipped kitchen. Super helpful staff.","Alessandro","Italy","booking","Booking.com"],["Prime location — 2 minutes' walk to the tram, 10 minutes from Venice. Plenty of restaurants and cafés within walking distance. Highly recommended, will definitely be back.","Barb","Airbnb guest","airbnb","Airbnb"],["Spotlessly clean apartment. Antonella welcomed us very warmly and explained everything, including how to get to Venice. Quiet inner courtyard. Brand-new furnishings and excellent WiFi.","Danyferr","Italy","booking","Booking.com"],["Great stay. Apartment exactly as described and spotless, smooth check-in. Perfect location for Venice — great transport links. Charming area with restaurants and supermarkets all walkable.","Oksana","Airbnb guest","airbnb","Airbnb"],["Brilliant apartment! Great heating and very generous living space. Our host Antonella was super friendly and always available. A fantastic stay.","Farisah Diyana","Airbnb guest","airbnb","Airbnb"]] as [string,string,string,string,string][] },
    booking: { title_a: "Ready for your", title_b: "Venetian getaway?", sub: "Book directly on the platform you prefer. Same prices, same guarantees.", booking_label: "Book on", booking_sub: "Free cancellation", airbnb_label: "Book on", airbnb_sub: "Superhost since 2023" },
    footer: { tagline: "Five modern apartments in the heart of Venice Mestre. Renovated in 2024, designed for thoughtful travellers.", col_visit: "Visit", col_stay: "Stay", col_contact: "Contact", links_visit: ["The apartments","Location","Experience","Reviews"], links_stay: ["Booking.com","Airbnb","Check-in info","Cancellation policy"], address: "66 Piazza XXVII Ottobre,\n30172 Mestre, Italy", phone: "+39 041 000 0000", email: "hello@lebarche66.it", rights: "© 2026 Le Barche 66. All rights reserved.", privacy: "Privacy", terms: "Terms" }
  },
  de: {
    nav: { apartments: "Apartments", location: "Lage", experience: "Erlebnis", reviews: "Bewertungen", book: "Buchen" },
    hero: { eyebrow: "Mestre · Venedig", headline_a: "Moderner Komfort", headline_b: "im Herzen von Mestre,", headline_c: "einen Atemzug von Venedig.", sub: "Moderner Komfort, strategische Lage. Venedig in Minuten, alles andere nur ein paar Schritte entfernt.", check_dates: "Verfügbarkeit prüfen", see_apartments: "Apartments ansehen", rating_label: "aus 247 Bewertungen" },
    intro: { eyebrow: "Residential", title_a: "Moderne, komfortable, edle Apartments", title_b: "für ein exklusives Erlebnis.", body: "Frisch renovierte Apartments mit jedem Komfort. Direkt im Zentrum von Venedig Mestre: Supermarkt, Restaurants, Bars und Geschäfte alle wenige Schritte entfernt. Sicheres Viertel, mit allen öffentlichen Verkehrsmitteln nach Venedig, zum Bahnhof und zum Flughafen.", stat1_n: "50m²", stat1_l: "Durchschnitt pro Apartment", stat2_n: "0 Min.", stat2_l: "vom Mestre-Zentrum", stat3_n: "15 Min.", stat3_l: "zur Altstadt von Venedig", tag: "Zentrum von Venedig Mestre" },
    amenities: {
      eyebrow: "Ausstattung", title: "Alles was Sie brauchen, schon bereit.", sub: "Fünf frisch renovierte Apartments, ideal für Reisende, die modernen Wohnkomfort und eine perfekte Basis für Veneto suchen.",
      items: [
        ["Parkplatz vor Ort","Bequeme Anreise mit dem Auto — in Venedig ein seltenes Privileg.","parking",true],
        ["Schnelles WLAN","Glasfaser in allen Apartments, ideal für Remote-Arbeit.","wifi",false],
        ["Klimaanlage","Heizung und Klimaanlage in jedem Zimmer.","ac",false],
        ["Voll ausgestattete Küche","Komplette Küchenzeile: Herd, Kühlschrank, Geschirr, Kaffee.","kitchen",false],
        ["2024 renoviert","Moderne Ausstattung, Qualitätsmaterialien, frische Bettwäsche.","renovated",false],
        ["Öffentliche Verkehrsmittel","Busse nach Venedig, Bahnhof und Flughafen wenige Meter entfernt.","transit",false],
        ["Self check-in","Digitaler Code — kommen und gehen Sie wann Sie möchten.","key",false],
        ["Waschmaschine & Trockner","Für längere Aufenthalte, ohne schweres Gepäck.","laundry",false]
      ] as [string, string, string, boolean][]
    },
    apartments: {
      eyebrow: "Fünf Apartments", title: "Wählen Sie Ihren Raum.", sub: "Jedes Apartment hat ein Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und privates Bad. Alle zwischen 48 und 60 m².",
      list: [
        ["3","Comfort Suite","Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und Bad.","bis zu 3 Gäste","48 m²"],
        ["3A","Family Studio Plus","Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und Bad.","bis zu 4 Gäste","60 m²"],
        ["3B","Comfort Suite","Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und Bad.","bis zu 4 Gäste","55 m²"],
        ["3C","Comfort Suite","Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und Bad.","bis zu 4 Gäste","52 m²"],
        ["3D","Comfort Suite","Schlafzimmer, Wohnzimmer mit Schlafsofa, Küchenzeile und Bad.","2 Gäste","50 m²"]
      ] as [string, string, string, string, string][]
    },
    location: { eyebrow: "Wo wir sind", title_a: "Wir sind im Herzen", title_b: "von Venedig Mestre.", sub: "Eine Lage, die den Unterschied macht. Alles zu Fuß oder in Minuten mit öffentlichen Verkehrsmitteln erreichbar — und Parkplatz für Autoreisende.", points: [["2 Min.","Zu Fuß","Bus nach Venedig"],["8 Min.","Per Zug","Bahnhof Mestre"],["15 Min.","Per Bus","Markusplatz"],["20 Min.","Per Auto","Flughafen Marco Polo"],["1 Std.","Per Zug","Verona, Padua, Treviso"]] as [string,string,string][], pin_venice: "Venedig", pin_airport: "Flughafen" },
    experience: { eyebrow: "Veneto vor der Tür", title: "Das Erlebnis beginnt hier.", sub: "Mestre ist der perfekte Ausgangspunkt, um einige der schönsten Orte Italiens zu entdecken.", cards: [["Venedig","Markusplatz und die sestieri","15 Min."],["Burano","Die bunte Insel","1 Std. 10 Min."],["Verona","Arena und Romeo & Julia","1 Std. 10 Min."],["Padua","Scrovegni-Kapelle","30 Min."],["Dolomiten","Die schönsten Berge der Welt","2 Std."],["Prosecco-Hügel","UNESCO-Welterbe","1 Std."]] as [string,string,string][] },
    reviews: { eyebrow: "Stimmen unserer Gäste", title: "Gäste, die wiederkommen.", sub: "Echte Bewertungen unserer Gäste auf Booking und Airbnb — keine Filter, keine Tricks.", booking_count: "180 Bewertungen", airbnb_count: "67 Bewertungen", reviews: [["Ausgezeichnete Lage. Bequemer Privatparkplatz direkt darunter. Geschmackvoll renovierte Wohnung: gepflegt und elegant. Vollausgestattete Küche. Sehr hilfsbereites Personal.","Alessandro","Italien","booking","Booking.com"],["Perfekte Lage — 2 Minuten zu Fuß zur Tram, 10 Minuten nach Venedig. Viele Restaurants und Cafés fußläufig erreichbar. Sehr empfehlenswert, ich komme sicher wieder.","Barb","Airbnb-Gast","airbnb","Airbnb"],["Blitzsaubere Wohnung. Antonella empfing uns sehr herzlich und erklärte alles, auch wie man nach Venedig kommt. Ruhiger Innenhof. Neue Einrichtung und ausgezeichnetes WLAN.","Danyferr","Italien","booking","Booking.com"],["Toller Aufenthalt. Wohnung genau wie beschrieben und sauber, unkomplizierter Check-in. Perfekte Lage für Venedig — gute Verkehrsanbindung. Charmante Gegend mit Restaurants und Supermärkten.","Oksana","Airbnb-Gast","airbnb","Airbnb"],["Tolles Apartment! Heizung super und sehr großzügige Wohnfläche. Unsere Gastgeberin Antonella war sehr freundlich und immer erreichbar. Ein fantastischer Aufenthalt.","Farisah Diyana","Airbnb-Gast","airbnb","Airbnb"]] as [string,string,string,string,string][] },
    booking: { title_a: "Bereit für Ihre", title_b: "venezianische Auszeit?", sub: "Buchen Sie direkt auf der Plattform Ihrer Wahl. Gleiche Preise, gleiche Garantien.", booking_label: "Buchen auf", booking_sub: "Kostenlose Stornierung", airbnb_label: "Buchen auf", airbnb_sub: "Superhost seit 2023" },
    footer: { tagline: "Fünf moderne Apartments im Herzen von Venedig Mestre. 2024 renoviert, gemacht für bewusste Reisende.", col_visit: "Besuchen", col_stay: "Aufenthalt", col_contact: "Kontakt", links_visit: ["Die Apartments","Lage","Erlebnis","Bewertungen"], links_stay: ["Booking.com","Airbnb","Check-in Info","Stornierungsbedingungen"], address: "66 Piazza XXVII Ottobre,\n30172 Mestre, Italien", phone: "+39 041 000 0000", email: "hallo@lebarche66.it", rights: "© 2026 Le Barche 66. Alle Rechte vorbehalten.", privacy: "Datenschutz", terms: "AGB" }
  }
} as const;

export default i18n;
export type T = typeof i18n['it'];
