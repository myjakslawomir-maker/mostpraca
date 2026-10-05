import { CookieNotice } from "./CookieNotice";

type Locale = "de" | "en" | "pl";
const copy = {
  de: {
    title: "Datenschutz & Cookies",
    home: "Zurück zu MostPraca",
    language: "Sprache wählen",
    draft: "Entwurf für die private Vorschau. Angaben zum Verantwortlichen und zur Kontaktadresse müssen vor der öffentlichen Freigabe ergänzt werden.",
    updated: "Stand: 29. September 2026",
    sections: [
      ["1. Verantwortlicher", "MostPraca wird betrieben von: [vollständiger Name oder Firmenname, Rechtsform und Anschrift ergänzen]. Kontakt für Datenschutzanfragen: [geschäftliche E-Mail-Adresse ergänzen]."],
      ["2. Daten aus Ihrer Anfrage", "Wenn Sie das Formular absenden, speichern wir den Unternehmensnamen, die geschäftliche E-Mail-Adresse, Projektland und Region, gesuchte Leistung, gegebenenfalls Startdatum und weitere Angaben sowie den Zeitpunkt des Eingangs. Technische Zugriffsdaten können für Betrieb und Sicherheit der Website verarbeitet werden."],
      ["3. Zweck und Rechtsgrundlage", "Wir verwenden diese Angaben, um Ihre Anfrage zu beantworten, Projektanforderungen zu klären und eine mögliche B2B-Zusammenarbeit vorzubereiten. Für Anfragen von Unternehmensvertretern stützen wir uns auf unser berechtigtes Interesse an der Bearbeitung geschäftlicher Anfragen (Art. 6 Abs. 1 lit. f DSGVO); bei unmittelbar vorvertraglichen Schritten kann Art. 6 Abs. 1 lit. b DSGVO einschlägig sein. Das Absenden führt nicht zu Werbung oder einem Vertrag."],
      ["4. Weitergabe und Dienstleister", "Die Website und die Anfragen werden über technische Hosting- und Datenbankdienste verarbeitet. Wir geben Ihre Kontaktdaten nicht ohne vorherige Rücksprache an mögliche Nachunternehmer weiter. Eine Offenlegung kann erforderlich sein, wenn eine gesetzliche Pflicht besteht."],
      ["5. Aufbewahrung", "Anfragen werden nur so lange aufbewahrt, wie dies für ihre Bearbeitung, eine vereinbarte Anschlusskommunikation oder rechtliche Pflichten erforderlich ist. Vor dem öffentlichen Start wird ein konkreter Löschprozess für nicht weiterverfolgte Anfragen festgelegt."],
      ["6. Ihre Rechte", "Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen und einer Verarbeitung auf Grundlage berechtigter Interessen widersprechen. Außerdem können Sie sich bei einer zuständigen Datenschutzaufsichtsbehörde beschweren. Richten Sie Ihre Anfrage an die oben genannte Kontaktadresse, sobald sie ergänzt ist."],
      ["7. Cookies", "MostPraca setzt keine Analyse- oder Werbe-Cookies. Nur wenn Sie im Cookie-Hinweis „Hinweis merken“ auswählen, speichern wir das Erstanbieter-Cookie mostpraca_notice=1 für 180 Tage. Es dient ausschließlich dazu, den Hinweis bei späteren Besuchen auszublenden. Mit „Ohne Speicherung fortfahren“ wird dieses Cookie nicht gesetzt. Während der privaten Vorschau können für die Anmeldung technisch notwendige Cookies des Zugangs- und Hostingdienstes eingesetzt werden."],
      ["8. Entscheidungen", "Das Formular führt nicht zu einer ausschließlich automatisierten Entscheidung über Ihre Anfrage. Eine Vorstellung eines Partners erfolgt erst nach Prüfung und Abstimmung."],
    ],
    cookieSettings: "Cookie-Einstellungen öffnen",
  },
  en: {
    title: "Privacy & cookies",
    home: "Back to MostPraca",
    language: "Choose language",
    draft: "Draft for the private preview. The controller's legal details and contact address must be completed before the site is made public.",
    updated: "Updated: 29 September 2026",
    sections: [
      ["1. Controller", "MostPraca is operated by: [complete legal name, legal form and postal address]. Contact for privacy requests: [complete business email address]."],
      ["2. Data in your inquiry", "When you submit the form, we store the company name, business email, project country and region, work required, any start date and additional details, plus the time received. Technical access data may be processed to operate and secure the website."],
      ["3. Purpose and legal basis", "We use this information to reply, clarify project requirements and prepare a possible B2B collaboration. For inquiries from company representatives we rely on our legitimate interest in handling business inquiries (Article 6(1)(f) GDPR); where steps are directly precontractual, Article 6(1)(b) may apply. Submitting a form does not create a contract or sign you up for marketing."],
      ["4. Sharing and service providers", "Technical hosting and database services process the website and inquiries. We do not share your contact details with potential subcontractors without discussing it with you first. Disclosure may be required by law."],
      ["5. Retention", "We keep inquiries only for as long as needed to handle them, for agreed follow-up, or to meet legal obligations. A specific deletion process for inquiries that do not proceed will be set before public launch."],
      ["6. Your rights", "You may request access, correction, deletion or restriction of processing, and object to processing based on legitimate interests. You may also complain to a competent data protection authority. Use the contact address above once completed."],
      ["7. Cookies", "MostPraca does not use analytics or advertising cookies. Only if you choose “Remember notice” do we save the first-party cookie mostpraca_notice=1 for 180 days. Its sole purpose is to hide the notice on later visits. “Continue without saving” does not set this cookie. While this preview is private, technically necessary sign-in cookies may be used by the access and hosting service."],
      ["8. Decisions", "The form does not make a solely automated decision about your inquiry. Any partner introduction follows a review and discussion."],
    ],
    cookieSettings: "Open cookie settings",
  },
  pl: {
    title: "Polityka prywatności",
    home: "Wróć do MostPraca",
    language: "Wybierz język",
    draft: "Projekt dla prywatnej wersji strony. Przed publicznym udostępnieniem trzeba uzupełnić dane podmiotu prowadzącego MostPraca i adres kontaktowy.",
    updated: "Stan na 29 września 2026 r.",
    sections: [
      ["1. Administrator danych", "MostPraca jest prowadzona przez: [uzupełnić pełną nazwę lub imię i nazwisko, formę prawną oraz adres]. Kontakt w sprawach ochrony danych: [uzupełnić firmowy adres e-mail]."],
      ["2. Dane z formularza", "Po wysłaniu formularza zapisujemy nazwę firmy, firmowy adres e-mail, kraj i region projektu, rodzaj prac, ewentualną datę rozpoczęcia i dodatkowe informacje oraz czas otrzymania zgłoszenia. Dane techniczne dotyczące dostępu mogą być przetwarzane w celu działania i ochrony strony."],
      ["3. Cel i podstawa", "Dane służą do odpowiedzi na zapytanie, ustalenia wymagań projektu i przygotowania ewentualnej współpracy B2B. W przypadku zapytań przedstawicieli firm podstawą jest uzasadniony interes w obsłudze kontaktu biznesowego (art. 6 ust. 1 lit. f RODO); przy działaniach bezpośrednio poprzedzających umowę może mieć zastosowanie art. 6 ust. 1 lit. b RODO. Wysłanie formularza nie oznacza zawarcia umowy ani zgody na marketing."],
      ["4. Udostępnianie danych", "Strona i zgłoszenia są obsługiwane przez dostawców hostingu i bazy danych. Nie przekazujemy danych kontaktowych potencjalnym podwykonawcom bez wcześniejszego uzgodnienia. Ujawnienie danych może nastąpić, gdy wymagają tego przepisy."],
      ["5. Przechowywanie", "Zgłoszenia przechowujemy tylko przez czas potrzebny do ich obsługi, uzgodnionej dalszej korespondencji albo wykonania obowiązków prawnych. Przed uruchomieniem publicznym ustalimy konkretną procedurę usuwania zgłoszeń, które nie prowadzą do współpracy."],
      ["6. Twoje prawa", "Możesz zażądać dostępu do danych, sprostowania, usunięcia lub ograniczenia ich przetwarzania oraz sprzeciwić się przetwarzaniu opartemu na uzasadnionym interesie. Możesz też złożyć skargę do właściwego organu ochrony danych. W tej sprawie napisz na adres kontaktowy wskazany powyżej, gdy zostanie uzupełniony."],
      ["7. Ciasteczka", "MostPraca nie stosuje ciasteczek analitycznych ani reklamowych. Tylko po wybraniu przycisku „Zapamiętaj” zapisujemy własne ciasteczko mostpraca_notice=1 na 180 dni. Służy ono wyłącznie do ukrycia komunikatu podczas kolejnych wizyt. Opcja „Kontynuuj bez zapisywania” nie zapisuje tego ciasteczka. W prywatnej wersji strony system dostępu i hostingu może używać niezbędnych ciasteczek logowania."],
      ["8. Decyzje", "Formularz nie podejmuje wyłącznie automatycznych decyzji dotyczących zgłoszenia. Przedstawienie partnera następuje dopiero po sprawdzeniu i uzgodnieniu."],
    ],
    cookieSettings: "Otwórz ustawienia ciasteczek",
  },
} as const;

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = locale === "de" ? "/" : locale === "en" ? "/en" : "/pl";
  return <div className="site-shell privacy-page" lang={locale}>
    <header className="site-header"><div className="wrap privacy-header"><a className="brand" href={home}>Most<span className="brand-light">Praca</span></a><nav className="language-switch" aria-label={t.language}>
      <a href="/datenschutz" lang="de" className={locale === "de" ? "is-active" : undefined} aria-current={locale === "de" ? "page" : undefined}><span className="language-full">Deutsch</span><span className="language-short">DE</span></a><span aria-hidden="true">/</span>
      <a href="/privacy" lang="en" className={locale === "en" ? "is-active" : undefined} aria-current={locale === "en" ? "page" : undefined}><span className="language-full">English</span><span className="language-short">EN</span></a><span aria-hidden="true">/</span>
      <a href="/polityka-prywatnosci" lang="pl" className={locale === "pl" ? "is-active" : undefined} aria-current={locale === "pl" ? "page" : undefined}><span className="language-full">Polski</span><span className="language-short">PL</span></a>
    </nav></div></header>
    <main className="wrap privacy-content"><a className="back-link" href={home}>← {t.home}</a><h1>{t.title}</h1><p className="draft-note">{t.draft}</p><p className="privacy-date">{t.updated}</p>
      {t.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
      <a className="back-link" href="#cookies">{t.cookieSettings}</a>
    </main>
    <CookieNotice locale={locale}/>
  </div>;
}
