# MostPraca — wersja do uruchomienia na Vercel

Strona ma wersje niemiecką (`/`), angielską (`/en`) i polską (`/pl`). Formularz zapisuje zapytania w tabeli `public.inquiries` w Supabase. Na Vercel potrzebne są dwa ustawienia środowiskowe; paczka nie zawiera żadnych kluczy.

## Kolejność uruchomienia

1. W Supabase utwórz projekt i uruchom plik `sql/inquiries.sql` w **SQL Editor**. Zgłoszenia będą widoczne w **Table Editor → inquiries**.
2. W ustawieniach projektu Supabase odczytaj **Project URL** i utwórz **secret key** (`sb_secret_...`).
3. W projekcie Vercel, w **Settings → Environment Variables**, dodaj:
   - `SUPABASE_URL` — Project URL.
   - `SUPABASE_SECRET_KEY` — klucz `sb_secret_...`.
   
   Ustaw je dla środowisk **Production** i **Preview**. Klucz pozostaje wyłącznie po stronie serwera. Nie dodawaj prefiksu `NEXT_PUBLIC_` i nie wklejaj prawdziwego klucza do plików projektu.
4. Wgraj zawartość tego folderu jako projekt **Next.js**. Możesz umieścić pliki w prywatnym repozytorium GitHub i wybrać **Add New → Project → Import Git Repository** w Vercel albo użyć Vercel CLI w rozpakowanym folderze:

   ```sh
   npx vercel
   npx vercel --prod
   ```

   Komenda `npm run build` buduje projekt standardowym Next.js. Jeśli dodałeś zmienne już po pierwszej publikacji, uruchom nowe wdrożenie.
5. Wyślij próbne zapytanie z własnej strony i potwierdź wpis w tabeli `inquiries`. Formularz nie wysyła jeszcze powiadomień e-mail; zgłoszenia trzeba sprawdzać w Supabase.
6. W **Vercel → Settings → Domains** dodaj dokładną nazwę kupionej domeny. U rejestratora ustaw rekordy DNS dokładnie takie, jakie Vercel pokaże dla tego projektu. Nie trzeba przenosić rejestracji domeny.

## Przed publicznym uruchomieniem

- Uzupełnij w `app/site/PrivacyPage.tsx` pełne dane podmiotu, adres i firmowy e-mail, a następnie usuń tekst „projekt dla prywatnej wersji” w DE/EN/PL. Polityka prywatności jest obecnie szkicem.
- Ustal, kto rzeczywiście świadczy odpłatną usługę i wystawia faktury. Opis na stronie zakłada, że pierwszy kontakt jest bezpłatny, 250 EUR netto dotyczy osobno zamówionego większego poszukiwania, a 5% pierwszego zlecenia wymaga wcześniejszego pisemnego ustalenia płatnika i warunków.
- Dotychczasowe zgłoszenia z prywatnego podglądu MostPraca są w innej bazie i nie pojawią się automatycznie w nowej tabeli. Jeśli są tam prawdziwe zapytania, wyeksportuj je przed przełączeniem domeny.

Paczka nie zawiera konfiguracji ani danych konta Vercel, dostępu do Supabase ani rekordów DNS. Nazwę domeny wpisz dokładnie tak, jak widnieje w panelu rejestratora.
