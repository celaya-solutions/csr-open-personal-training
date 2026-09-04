# Trainer Studio — Celaya Solutions Course Edition

Software for a personal trainer: the people you coach, a library of exercises to build workouts from, the workouts themselves, a calendar of sessions, and a record of who has paid.

This is a course edition. Read [COURSE_EDITION.md](COURSE_EDITION.md) before you start, and use fake data only.

## Why this one is on the shelf

Two reasons. First, it starts full. The exercise library is 873 exercises, seeded into the database before you write a line, so you are working with real volume from minute one instead of three rows you typed in yourself. Searching and paging through that is a different problem than searching through nothing.

Second, it is the only project here that lets a stranger see something without logging in. You can turn any workout into a public link and send it to a client's phone, and you can take the link back. That is a small, safe first look at the question every real app has to answer: who is allowed to see this.

## What you have to change to pass

1. A change you can see on the screen.
2. A change to the server or to what gets stored.
3. The app live on the internet.
4. The backend running on Railway, still running tomorrow.
5. A three minute demo: the problem, the before, the after.

## Run it on your machine

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Open the address the terminal prints. Set `APP_PASSWORD` and `SESSION_SECRET` in `.env` first; the server refuses to serve without them. The first run creates the database and loads the full exercise library plus a few sample clients and workouts, so give it a moment.

Checks before you hand anything in:

```bash
pnpm build
pnpm typecheck
pnpm smoke          # with the app already running
pnpm db:export -- exports/my-backup.db
```

There is a `seed` script left over from the source project that expects a different database tool. You do not need it. The schema and the exercise library are applied for you when the server starts.

## Where to look when you want to change something

| What you want to change | Where it lives |
| --- | --- |
| Any screen | `src/client/components/` |
| Building a workout | `src/client/components/workout-builder.tsx` |
| The exercise library screen | `src/client/components/exercise-library.tsx` |
| Where exercise pictures come from | `src/client/lib/exercise-image.ts` |
| Which screen shows for which address | `src/client/hooks/use-router.ts` |
| How data loads and saves | `src/client/hooks/use-app.ts` |
| What the API does | `src/server/index.ts` |
| What gets stored | `src/server/schema.sql` |
| The class password gate | `src/server/course-app.ts` |
| How the server starts | `src/server/node.ts` |

## What it stores

Clients are the people you coach. Exercises come seeded and you are not expected to add to them. A workout is a list of workout exercises in an order, each with its own sets, reps, rest, and notes. Sessions are the calendar. Payments are a plain ledger of what came in and what is still owed.

## Putting it online

Everything runs as one Railway service: the same Node process serves the built screen out of `dist/` and answers `/api/*`. The database lives on a Railway volume so your clients and workouts survive the night. Step by step in [COURSE_EDITION.md](COURSE_EDITION.md).

```bash
railway up
```

## Built with

Preact and TypeScript on Vite for the screen, with Tailwind. Hono on Node 22 for the API, with Zod checking the shape of what comes in. SQLite for storage.

## Source and license

Imported from an open source coaching project. The source project, the exact commit, and what was changed for the course are recorded in [UPSTREAM.md](UPSTREAM.md). The original MIT license and copyright notice are kept in [LICENSE](LICENSE) and stay with any copy you make.

The exercise library is a separate piece of work. It comes from the free-exercise-db dataset, which is public domain under the Unlicense. The pictures are not stored here; they are loaded from a public file host, pinned to one exact version so they cannot change under you.

This is a course edition, not a product. It is free and noncommercial, and the Celaya Solutions Course Edition notice stays on it.
