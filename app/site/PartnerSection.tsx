const texts = {
  pl: {
    heading: "Poleć firmę i współpracuj z MostPraca",
    intro: "Znasz firmę, która potrzebuje wykonawcy lub ma wolne moce? Zapraszamy twórców, tłumaczy i osoby znające rynek Polski, Niemiec i Holandii do programu poleceń.",
    terms: "Proponujemy 3% uzgodnionej wartości netto wykonanych i opłaconych prac w pierwszym pozyskanym zleceniu. Wynagrodzenie pochodzi z prowizji MostPraca 8% i jest wypłacane po jej otrzymaniu. Nie przewidujemy stałej opłaty reklamowej. Warunki ustalamy pisemnie przed przedstawieniem kontaktów.",
    help: "Pomagamy ustalić potrzeby, dopasować firmy i prowadzić komunikację polsko-niemiecką. Najpierw sprawdź, czy polecana firma chce kontaktu z MostPraca. W pierwszej wiadomości podaj swoją branżę i rynek; dane firmy przekaż po uzgodnieniu jej zainteresowania.",
    action: "Zapytaj o program poleceń", subject: "MostPraca — program poleceń",
  },
  de: {
    heading: "Unternehmen empfehlen und mit MostPraca zusammenarbeiten",
    intro: "Kennen Sie ein Unternehmen, das Nachunternehmer sucht oder freie Kapazitäten hat? Wir laden Content-Creator, Übersetzer und Personen mit Kontakten in Polen, Deutschland und den Niederlanden ein.",
    terms: "Wir schlagen 3% des vereinbarten Nettowerts der ausgeführten und bezahlten Leistungen des ersten vermittelten Auftrags vor. Die Vergütung wird aus der MostPraca-Provision von 8% finanziert und nach deren Eingang ausgezahlt. Eine feste Werbevergütung ist nicht vorgesehen. Die Bedingungen vereinbaren wir schriftlich vor der Vorstellung der Kontakte.",
    help: "Wir klären den Bedarf, suchen passende Firmen und unterstützen die polnisch-deutsche Kommunikation. Bitte fragen Sie zuerst, ob das Unternehmen Kontakt mit MostPraca wünscht. Nennen Sie uns zunächst Ihre Branche und Ihren Markt.",
    action: "Empfehlungspartnerschaft anfragen", subject: "MostPraca — Empfehlungspartnerschaft",
  },
  en: {
    heading: "Refer a company and work with MostPraca",
    intro: "Know a company looking for a subcontractor or offering spare capacity? We welcome creators, translators and people with business contacts in Poland, Germany and the Netherlands.",
    terms: "We propose 3% of the agreed net value of completed and paid work under the first introduced assignment. This is funded from MostPraca’s 8% commission and paid after that commission is received. There is no fixed advertising fee. Terms are agreed in writing before introducing contacts.",
    help: "We clarify requirements, match companies and support Polish-German communication. First check that the referred company wants contact with MostPraca. In your first message, tell us your industry and market.",
    action: "Ask about referrals", subject: "MostPraca — referral partnership",
  },
};

export function PartnerSection({ locale }: { locale: "pl" | "de" | "en" }) {
  const t = texts[locale];
  return <section id="partners" className="section wrap" aria-labelledby="partners-title">
    <h2 id="partners-title" className="section-title">{t.heading}</h2>
    <p>{t.intro}</p><p>{t.terms}</p><p>{t.help}</p>
    <a className="primary-link" href={`mailto:myjakslawomir@gmail.com?subject=${encodeURIComponent(t.subject)}`}>{t.action}</a>
  </section>;
}
