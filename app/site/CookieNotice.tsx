"use client";

import { useEffect, useState } from "react";

type Locale = "de" | "en" | "pl";
const copy = {
  de: {
    heading: "Cookies auf dieser Website",
    text: "Wir verwenden keine Analyse- oder Werbe-Cookies. Wenn Sie „Hinweis merken“ wählen, speichern wir ein Cookie für 180 Tage, damit dieser Hinweis nicht erneut erscheint.",
    no: "Ohne Speicherung fortfahren",
    remember: "Hinweis merken",
    link: "Datenschutz & Cookies",
  },
  en: {
    heading: "Cookies on this website",
    text: "We do not use analytics or advertising cookies. If you choose “Remember notice”, we store one cookie for 180 days so this notice does not appear again.",
    no: "Continue without saving",
    remember: "Remember notice",
    link: "Privacy & cookies",
  },
  pl: {
    heading: "Ciasteczka na tej stronie",
    text: "Nie używamy ciasteczek analitycznych ani reklamowych. Jeśli wybierzesz „Zapamiętaj”, zapiszemy jedno ciasteczko na 180 dni, aby ten komunikat nie pojawiał się ponownie.",
    no: "Kontynuuj bez zapisywania",
    remember: "Zapamiętaj",
    link: "Polityka prywatności",
  },
} as const;

export function CookieNotice({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = copy[locale];
  useEffect(() => {
    const showForSettings = () => {
      if (window.location.hash === "#cookies") setVisible(true);
    };
    setVisible(!document.cookie.split("; ").some((item) => item === "mostpraca_notice=1") || window.location.hash === "#cookies");
    window.addEventListener("hashchange", showForSettings);
    return () => window.removeEventListener("hashchange", showForSettings);
  }, []);
  const close = (remember: boolean) => {
    if (remember) document.cookie = "mostpraca_notice=1; Max-Age=15552000; Path=/; SameSite=Lax; Secure";
    else document.cookie = "mostpraca_notice=; Max-Age=0; Path=/; SameSite=Lax; Secure";
    setVisible(false);
    if (window.location.hash === "#cookies") window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };
  if (!visible) return null;
  return <aside className="cookie-notice" aria-label={t.heading} role="region">
    <div><strong>{t.heading}</strong><p>{t.text} <a href={locale === "de" ? "/datenschutz" : locale === "en" ? "/privacy" : "/polityka-prywatnosci"}>{t.link}</a></p></div>
    <div className="cookie-actions">
      <button type="button" onClick={() => close(false)}>{t.no}</button>
      <button type="button" className="cookie-remember" onClick={() => close(true)}>{t.remember}</button>
    </div>
  </aside>;
}
