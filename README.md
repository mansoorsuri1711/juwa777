# Juwa 777 — juwa777.love

Next.js site for **Juwa 777** APK download guides, bonuses, Juwa 2.0, PC/iOS help, and responsible gaming info.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + Poppins
- Domain: `https://juwa777.love`

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Key routes

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/download-juwa-777` | APK install |
| `/juwa-2-0` | Juwa 2.0 |
| `/juwa-777-for-pc` | Emulator / PC |
| `/deposit-money-in-juwa-777` | Deposit guide |
| `/withdraw-money-from-juwa-777` | Withdraw guide |
| `/juwa-admin` | Agent / admin explainer |
| `/blog/*` | Login, safety, iOS, bonuses |

Update `DOWNLOAD_APP_URL` in `src/lib/constants.ts` when your live APK or affiliate link is ready.
