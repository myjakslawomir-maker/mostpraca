export const runtime = "nodejs";

const read = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 12000) {
      return Response.json({ error: "too large" }, { status: 413 });
    }

    const body = await request.json() as Record<string, unknown>;
    if (read(body.company_website, 200)) return Response.json({ ok: true });

    const company = read(body.company, 120);
    const email = read(body.email, 200);
    const country = read(body.country, 8);
    const location = read(body.location, 120);
    const scope = read(body.scope, 180);
    const locale = read(body.locale, 2);
    const startDate = read(body.startDate, 10) || null;
    const details = read(body.details, 2000);

    if (!company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      || !["DE", "NL", "other"].includes(country) || !location || !scope
      || !["de", "en", "pl"].includes(locale) || body.consent !== "yes") {
      return Response.json({ error: "invalid inquiry" }, { status: 400 });
    }

    const baseUrl = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SECRET_KEY;
    if (!baseUrl || !key) {
      return Response.json({ error: "form unavailable" }, { status: 503 });
    }

    const response = await fetch(new URL("/rest/v1/inquiries", baseUrl), {
      method: "POST",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        company, email, country, location, scope, start_date: startDate, details, locale,
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      return Response.json({ error: "form unavailable" }, { status: 503 });
    }
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "form unavailable" }, { status: 503 });
  }
}
