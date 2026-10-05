import Link from "next/link";
import { InquiryForm } from "./InquiryForm";
import { CookieNotice } from "./CookieNotice";

type Locale = "de" | "en" | "pl";
const copy = {
  de: {
    nav: ["Ablauf", "Prüfpunkte", "Kosten"],
    cta: "Bedarf anfragen", tag: "Für Projekte in Deutschland und den Niederlanden",
    title: ["Fachbetriebe", "aus Polen finden."],
    intro: "Sie suchen einen Nachunternehmer für Ihr Projekt? Nennen Sie uns Gewerk, Einsatzort und Termin. Wir suchen in Polen nach passenden Unternehmen und klären die Angaben vor einer Vorstellung.",
    how: "Ablauf ansehen", formTag: "Kostenloser Erstkontakt", formTitle: "Welche Arbeiten sind geplant?",
    formIntro: "Beschreiben Sie Ihren Bedarf kurz. Wir melden uns, um offene Fragen zu klären.",
    focusTag: "Gewerke", focusTitle: "Für verschiedene Arbeiten",
    focus: "Wir suchen nach Betrieben für den konkreten Auftrag. Dazu gehören unter anderem:",
    pills: ["Sanitär & Heizung", "Elektrotechnik", "Klima & Lüftung", "Photovoltaik", "Bau & Ausbau", "Weitere Gewerke"],
    processTag: "Ablauf", processTitle: "Von der Anfrage zum Kontakt",
    steps: [
      ["Anfrage besprechen", "Wir klären Arbeiten, Einsatzort, Termin und benötigte Teamgröße."],
      ["Betriebe suchen", "Wir fragen passende Firmen nach Erfahrung, Ausstattung und Verfügbarkeit."],
      ["Kontakt abstimmen", "Wir vereinbaren die Bedingungen schriftlich und stellen die Firmen bei Interesse vor."],
    ],
    criteriaTag: "Prüfpunkte", criteriaTitle: "Was wir vorab klären",
    criteriaIntro: "Vor einer Vorstellung gleichen wir diese Angaben mit dem Projekt ab:",
    criteria: [
      ["Leistungsumfang", "Genaue Tätigkeiten, Fachgebiet und Abgrenzung zu anderen Gewerken."],
      ["Einsatz", "Ort, Starttermin, Dauer, Projektgröße und Anzahl der Einsatzorte."],
      ["Team & Ausstattung", "Personal, Sprachen, Fahrzeuge, Werkzeug und erforderliche Ausrüstung."],
      ["Nachweise", "Referenzen, Versicherung, Registrierung und geforderte Qualifikationen."],
    ],
    feesTag: "Kosten", feesTitle: "Was wann kostet",
    feeItems: [
      ["0 €", "Erster Kontakt", "Sie schildern den Bedarf und wir klären die ersten Fragen. Unverbindlich."],
      ["250 € netto", "Größere Suche", "Nur bei gesondertem Auftrag: detaillierte Analyse, Suche, Prüfung und Vorstellung."],
      ["5 %", "Bei Erfolg", "Vom Nettowert des ersten Auftrags, wenn aus der Vorstellung ein Auftrag entsteht."],
    ],
    feesNote: "Wer zahlt, Leistungsumfang und Fälligkeit vereinbaren wir vor der Weitergabe von Kontaktdaten schriftlich.",
    fine: "Ein Projektvertrag entsteht nur durch gesonderte Vereinbarung zwischen den beteiligten Unternehmen.",
    footer: "MostPraca bringt Unternehmen zusammen. Projektverträge schließen die Firmen direkt.",
    top: "Nach oben", privacy: "Datenschutz", cookies: "Cookie-Einstellungen",
  },
  en: {
    nav: ["Process", "What we check", "Fees"],
    cta: "Send your requirements", tag: "For projects in Germany and the Netherlands",
    title: ["Find firms", "in Poland."],
    intro: "Need a subcontractor for your project? Tell us the trade, location and start date. We look for suitable businesses in Poland and check the details before an introduction.",
    how: "See the process", formTag: "Free first contact", formTitle: "What work do you need?",
    formIntro: "Describe the job briefly. We will get in touch to clarify any questions.",
    focusTag: "Trades", focusTitle: "Different kinds of work",
    focus: "We search for companies according to the job. Examples include:",
    pills: ["Plumbing & heating", "Electrical", "HVAC", "Solar PV", "Construction & fit-out", "Other trades"],
    processTag: "Process", processTitle: "From inquiry to contact",
    steps: [
      ["Discuss the job", "We confirm the work, location, dates and crew size."],
      ["Find companies", "We ask suitable firms about their experience, equipment and availability."],
      ["Agree on contact", "We agree the terms in writing and introduce the firms if both are interested."],
    ],
    criteriaTag: "Checks", criteriaTitle: "What we check first",
    criteriaIntro: "Before an introduction, we compare these details with the job:",
    criteria: [
      ["Scope", "Exact tasks, trade and boundaries with other contractors."],
      ["Project", "Location, start date, duration, project size and number of sites."],
      ["Team & equipment", "Crew, languages, vehicles, tools and required equipment."],
      ["Evidence", "References, insurance, registration and required qualifications."],
    ],
    feesTag: "Fees", feesTitle: "What costs apply",
    feeItems: [
      ["€0", "First contact", "Tell us what you need and discuss the initial questions. No obligation."],
      ["€250 net", "Larger search", "Only when commissioned separately: detailed analysis, search, checks and introduction."],
      ["5%", "On success", "Of the first assignment's net value if the introduction leads to that assignment."],
    ],
    feesNote: "We agree who pays, the scope and payment dates in writing before sharing contact details.",
    fine: "The companies enter into any project contract directly and by separate agreement.",
    footer: "MostPraca introduces companies. The firms agree project contracts directly.",
    top: "Back to top", privacy: "Privacy", cookies: "Cookie settings",
  },
  pl: {
    nav: ["Jak działamy", "Co sprawdzamy", "Opłaty"],
    cta: "Wyślij zapytanie", tag: "Projekty w Niemczech i Holandii",
    title: ["Podwykonawcy", "z Polski."],
    intro: "Szukasz firmy do projektu? Podaj rodzaj prac, miejsce i termin. Szukamy odpowiednich wykonawców w Polsce i sprawdzamy informacje przed przedstawieniem firmy.",
    how: "Zobacz przebieg", formTag: "Bezpłatny pierwszy kontakt", formTitle: "Jakich prac potrzebujesz?",
    formIntro: "Opisz zlecenie w kilku zdaniach. Skontaktujemy się, żeby ustalić szczegóły.",
    focusTag: "Branże", focusTitle: "Różne rodzaje prac",
    focus: "Szukamy firm pod konkretne zlecenie, między innymi w tych obszarach:",
    pills: ["Hydraulika i ogrzewanie", "Elektryka", "Klimatyzacja i wentylacja", "Fotowoltaika", "Budownictwo", "Inne branże"],
    processTag: "Przebieg", processTitle: "Od zapytania do kontaktu",
    steps: [
      ["Omawiamy zlecenie", "Ustalamy zakres prac, miejsce, termin i liczbę potrzebnych osób."],
      ["Szukamy firm", "Pytamy odpowiednich wykonawców o doświadczenie, sprzęt i dostępność."],
      ["Uzgadniamy kontakt", "Spisujemy warunki i przedstawiamy firmy, jeśli obie są zainteresowane."],
    ],
    criteriaTag: "Sprawdzenie", criteriaTitle: "Co ustalamy wcześniej",
    criteriaIntro: "Przed przedstawieniem firmy porównujemy te informacje ze zleceniem:",
    criteria: [
      ["Zakres", "Konkretne prace, specjalizację i podział obowiązków między wykonawcami."],
      ["Zlecenie", "Miejsce, datę rozpoczęcia, czas trwania, wielkość projektu i liczbę lokalizacji."],
      ["Ekipę i sprzęt", "Liczbę osób, języki, pojazdy, narzędzia i wymagane wyposażenie."],
      ["Dokumenty", "Referencje, ubezpieczenie, rejestrację firmy i potrzebne uprawnienia."],
    ],
    feesTag: "Opłaty", feesTitle: "Kiedy pojawia się koszt",
    feeItems: [
      ["0 EUR", "Pierwszy kontakt", "Opisujesz potrzebę i omawiamy pierwsze pytania. Bez zobowiązań."],
      ["250 EUR netto", "Większe poszukiwanie", "Tylko przy osobnym zleceniu: szczegółowa analiza, szukanie, sprawdzenie i przedstawienie firmy."],
      ["5%", "Po zleceniu", "Od wartości netto pierwszego zlecenia, jeśli doszło do niego dzięki połączeniu firm."],
    ],
    feesNote: "Płatnika, zakres usługi i termin zapłaty ustalamy na piśmie przed przekazaniem danych kontaktowych.",
    fine: "Umowę na wykonanie projektu firmy zawierają bezpośrednio między sobą.",
    footer: "MostPraca kojarzy firmy. Umowę na projekt zawierają one bezpośrednio.",
    top: "Do góry", privacy: "Polityka prywatności", cookies: "Ustawienia ciasteczek",
  },
} as const;

export function BusinessPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === "de" ? "/" : locale === "en" ? "/en" : "/pl";
  const privacyPath = locale === "de" ? "/datenschutz" : locale === "en" ? "/privacy" : "/polityka-prywatnosci";
  return <div id="top" lang={locale} className="site-shell">
    <header className="site-header"><div className="wrap header-inner">
      <Link className="brand" href={home} aria-label="MostPraca"><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><span>Most<span className="brand-light">Praca</span></span></Link>
      <nav className="desktop-nav" aria-label={locale === "de" ? "Seitennavigation" : locale === "en" ? "Page navigation" : "Nawigacja strony"}><a href="#process">{t.nav[0]}</a><a href="#criteria">{t.nav[1]}</a><a href="#fees">{t.nav[2]}</a></nav>
      <div className="header-actions">
        <nav className="language-switch" aria-label={locale === "de" ? "Sprache wählen" : locale === "en" ? "Choose language" : "Wybierz język"}>
          <a href="/" lang="de" hrefLang="de" aria-current={locale === "de" ? "page" : undefined} className={locale === "de" ? "is-active" : undefined}><span className="language-full">Deutsch</span><span className="language-short">DE</span></a>
          <span aria-hidden="true">/</span>
          <a href="/en" lang="en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "is-active" : undefined}><span className="language-full">English</span><span className="language-short">EN</span></a>
          <span aria-hidden="true">/</span>
          <a href="/pl" lang="pl" hrefLang="pl" aria-current={locale === "pl" ? "page" : undefined} className={locale === "pl" ? "is-active" : undefined}><span className="language-full">Polski</span><span className="language-short">PL</span></a>
        </nav>
        <a className="header-cta" href="#inquiry">{t.cta}</a>
      </div>
    </div></header>
    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/>{t.tag}</div>
          <h1 id="hero-title">{t.title[0]}<br/><em>{t.title[1]}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-links"><a className="primary-link" href="#inquiry">{t.cta}</a><a className="text-link" href="#process">{t.how}</a></div>
        </div>
        <aside id="inquiry" className="inquiry-card" aria-labelledby="inquiry-heading">
          <div className="card-topline"><span>{t.formTag}</span></div>
          <h2 id="inquiry-heading">{t.formTitle}</h2><p>{t.formIntro}</p>
          <InquiryForm locale={locale}/>
        </aside>
      </section>
      <section className="focus-band" aria-labelledby="focus-title"><div className="wrap focus-grid">
        <div><span className="section-kicker light">{t.focusTag}</span><h2 id="focus-title">{t.focusTitle}</h2></div>
        <div><p>{t.focus}</p><div className="pills">{t.pills.map(item => <span key={item}>{item}</span>)}</div></div>
      </div></section>
      <section id="process" className="section wrap" aria-labelledby="process-title">
        <span className="section-kicker">{t.processTag}</span><h2 id="process-title" className="section-title">{t.processTitle}</h2>
        <div className="steps">{t.steps.map(([title, detail], i) => <article className="step" key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
      </section>
      <section id="criteria" className="section criteria" aria-labelledby="criteria-title"><div className="wrap criteria-grid">
        <div className="criteria-head"><span className="section-kicker">{t.criteriaTag}</span><h2 id="criteria-title" className="section-title">{t.criteriaTitle}</h2><p>{t.criteriaIntro}</p></div>
        <div className="criteria-list">{t.criteria.map(([title, detail], i) => <div className="criterion" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div>
      </div></section>
      <section id="fees" className="section wrap terms" aria-labelledby="fees-title">
        <div className="terms-head"><span className="section-kicker">{t.feesTag}</span><h2 id="fees-title" className="section-title">{t.feesTitle}</h2></div>
        <div className="fee-grid">{t.feeItems.map(([amount, label, detail]) => <article className="fee-card" key={label}><strong>{amount}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div>
        <p className="fees-note">{t.feesNote}</p><p className="fees-fine">{t.fine}</p>
      </section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner"><div><strong>MostPraca</strong><p>{t.footer}</p><p className="copyright">© {new Date().getFullYear()} MostPraca</p></div><div className="footer-links"><a href={privacyPath}>{t.privacy}</a><a href="#cookies">{t.cookies}</a><a href="#top">{t.top}</a></div></div></footer>
    <CookieNotice locale={locale}/>
  </div>;
}
