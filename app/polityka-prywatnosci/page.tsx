import { PrivacyPage } from "../site/PrivacyPage";

export const metadata = {
  title: "Polityka prywatności | MostPraca",
  alternates: { canonical: "/polityka-prywatnosci", languages: { de: "/datenschutz", en: "/privacy", pl: "/polityka-prywatnosci" } },
};

export default function PolitykaPrywatnosci() {
  return <PrivacyPage locale="pl"/>;
}
