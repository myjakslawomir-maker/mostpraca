"use client";

import { useState, type FormEvent } from "react";

type Locale = "de" | "en" | "pl";
const labels = {
  de: {
    company: "Unternehmen", email: "Geschäftliche E-Mail", country: "Projektland",
    location: "Region / PLZ", scope: "Gesuchte Leistung", date: "Geplanter Start",
    details: "Weitere Angaben", hint: "z. B. Projektgröße, Teamstärke, Material, Ausrüstung oder Nachweise",
    send: "Anfrage senden", sending: "Wird gesendet…", select: "Bitte auswählen",
    de: "Deutschland", nl: "Niederlande", other: "Anderes Land",
    privacy: "Ich habe die Datenschutzhinweise gelesen. Meine Angaben werden zur Bearbeitung der Anfrage verwendet.",
    privacyLink: "Datenschutz & Cookies",
    success: "Ihre Anfrage ist eingegangen. Wir melden uns nach der Prüfung per E-Mail.",
    error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  },
  en: {
    company: "Company", email: "Business email", country: "Project country",
    location: "Region / postal code", scope: "Work required", date: "Expected start",
    details: "Additional details", hint: "e.g. project size, crew size, materials, equipment or required documents",
    send: "Send inquiry", sending: "Sending…", select: "Please select",
    de: "Germany", nl: "Netherlands", other: "Other country",
    privacy: "I have read the privacy notice. My details will be used to handle this inquiry.",
    privacyLink: "Privacy & cookies",
    success: "We received your inquiry. We will reply by email after reviewing it.",
    error: "Your inquiry could not be sent. Please try again.",
  },
  pl: {
    company: "Firma", email: "Firmowy e-mail", country: "Kraj projektu",
    location: "Region / kod pocztowy", scope: "Zakres prac", date: "Planowany początek",
    details: "Dodatkowe informacje", hint: "np. wielkość projektu, liczba osób, materiały, sprzęt lub wymagane dokumenty",
    send: "Wyślij zapytanie", sending: "Wysyłanie…", select: "Wybierz kraj",
    de: "Niemcy", nl: "Holandia", other: "Inny kraj",
    privacy: "Zapoznałem się z zasadami przetwarzania danych:",
    privacyLink: "Polityka prywatności",
    success: "Otrzymaliśmy zapytanie. Po sprawdzeniu odpowiemy na podany e-mail.",
    error: "Nie udało się wysłać zapytania. Spróbuj ponownie.",
  },
} as const;

export function InquiryForm({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), locale }),
      });
      if (!response.ok) throw new Error("submission failed");
      form.reset();
      setState("sent");
    } catch { setState("error"); }
  }
  return <form className="inquiry-form" onSubmit={onSubmit}>
    <div className="form-row">
      <label>{t.company}<input name="company" required maxLength={120} autoComplete="organization" /></label>
      <label>{t.email}<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
    </div>
    <div className="form-row">
      <label>{t.country}<select name="country" required defaultValue=""><option value="" disabled>{t.select}</option><option value="DE">{t.de}</option><option value="NL">{t.nl}</option><option value="other">{t.other}</option></select></label>
      <label>{t.location}<input name="location" required maxLength={120} /></label>
    </div>
    <div className="form-row">
      <label>{t.scope}<input name="scope" required maxLength={180} /></label>
      <label>{t.date}<input name="startDate" type="date" /></label>
    </div>
    <label>{t.details}<textarea name="details" rows={3} maxLength={2000} placeholder={t.hint} /></label>
    <label className="honeypot" aria-hidden="true">Website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>
    <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>{t.privacy} <a href={locale === "de" ? "/datenschutz" : locale === "en" ? "/privacy" : "/polityka-prywatnosci"} target="_blank" rel="noopener noreferrer">{t.privacyLink}</a></span></label>
    <button type="submit" disabled={state === "sending"}>{state === "sending" ? t.sending : t.send}</button>
    <div className={`form-status ${state === "error" ? "is-error" : ""}`} role="status" aria-live="polite">{state === "sent" ? t.success : state === "error" ? t.error : ""}</div>
  </form>;
}
