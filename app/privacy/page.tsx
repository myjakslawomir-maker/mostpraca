import { PrivacyPage } from "../site/PrivacyPage";

export const metadata = {
  title: "Privacy & cookies | MostPraca",
  alternates: { canonical: "/privacy", languages: { de: "/datenschutz", en: "/privacy", pl: "/polityka-prywatnosci" } },
};

export default function Privacy() {
  return <PrivacyPage locale="en"/>;
}
