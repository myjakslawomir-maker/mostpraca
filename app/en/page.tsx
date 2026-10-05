import { BusinessPage } from "../site/BusinessPage";

export const metadata = {
  title: "MostPraca | Polish subcontractors for your project",
  description: "Tell MostPraca what your project needs. We find and check suitable companies in Poland for work in Germany and the Netherlands.",
  alternates: { canonical: "/en", languages: { de: "/", en: "/en", pl: "/pl" } },
};

export default function English() {
  return <BusinessPage locale="en" />;
}
