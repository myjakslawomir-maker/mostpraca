import { BusinessPage } from "../site/BusinessPage";

export const metadata = {
  title: "MostPraca | Podwykonawcy dopasowani do projektu",
  description: "MostPraca łączy firmy z Niemiec i Holandii ze sprawdzanymi podwykonawcami z Polski w różnych branżach.",
  alternates: { canonical: "/pl", languages: { de: "/", en: "/en", pl: "/pl", "x-default": "/" } },
};

export default function Polish() {
  return <BusinessPage locale="pl"/>;
}
