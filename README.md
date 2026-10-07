# quantum-embrace.com — v2

Personal site for Ron Hermansen, AI-Native Developer. Next.js 15 (App Router) + TypeScript, no UI framework, a single CSS file.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Requires Node 18.18 or newer (Node 20+ recommended).

## Where things live

| What | File |
| --- | --- |
| All copy (headlines, bullets, jobs, testimonials) | `content.ts` |
| Layout and sections | `components/Sections.tsx` |
| Colors, type, spacing | `app/globals.css` (tokens at the top under `:root`) |
| Page title and social preview text | `app/layout.tsx` |
| Images | `public/images/` |

To change the accent color everywhere, edit `--accent` in `app/globals.css`.

## Deploying

AWS Amplify builds and deploys every push to `main`. The build steps live in `amplify.yml` (Node 20, `npm install`, `next build`).

Fonts come from the `geist` npm package, so the build doesn't need to reach Google Fonts.
