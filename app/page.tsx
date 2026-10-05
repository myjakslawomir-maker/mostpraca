import { BusinessPage } from "./site/BusinessPage";

export const metadata = {
  title: "MostPraca | Nachunternehmer aus Polen für Ihre Projekte",
  description: "MostPraca klärt Ihren Bedarf und sucht passende polnische Nachunternehmer für Projekte in Deutschland und den Niederlanden.",
  alternates: { canonical: "/", languages: { de: "/", en: "/en", pl: "/pl" } },
};

export default function Home() {
  return <BusinessPage locale="de" />;
}
