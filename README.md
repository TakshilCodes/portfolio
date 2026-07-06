# Takshil Pandya Portfolio

A fresh Next.js App Router portfolio rebuilt from the Figma export as a visual reference, not copied generated code.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- react-icons
- react-github-calendar

## GitHub Contribution Graph

The contribution graph uses `react-github-calendar` for `TakshilCodes`.

No GitHub token is required. The package fetches public contribution data through the public `github-contributions-api` service used by the component.

Setup steps:

1. Install dependencies with `pnpm install`.
2. Run locally with `pnpm run dev`.
3. Open the local site and check the `Consistency` section.
4. No `.env.local` entry is needed for the graph.
5. No Vercel environment variable is needed for the graph.

Notes:

- The graph reflects what GitHub exposes on the public profile.
- Public contributions work by default.
- Private contribution counts only appear if GitHub profile settings allow them to appear publicly.
- The backing public API caches results, so new commits may take a little while to show.

## Development

```bash
pnpm install
pnpm run dev
pnpm run lint
pnpm run build
```
