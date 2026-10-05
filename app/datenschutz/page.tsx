import { PrivacyPage } from "../site/PrivacyPage";

export const metadata = {
  title: "Datenschutz & Cookies | MostPraca",
  alternates: { canonical: "/datenschutz", languages: { de: "/datenschutz", en: "/privacy", pl: "/polityka-prywatnosci" } },
};

export default function Datenschutz() {
  return <PrivacyPage locale="de"/>;
}
