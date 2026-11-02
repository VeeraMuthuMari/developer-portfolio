# Veeramuthumari S — Developer Portfolio

A frontend-only personal portfolio built with Vue 3, Vite, Vue Router and CSS.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Pages
- `/` Home
- `/about` About
- `/skills` Skills
- `/experience` Experience
- `/projects` Projects
- `/services` Services
- `/contact` Contact

## Customize before publishing
1. Update `src/data/profile.js` with your real email and social profile URLs.
2. Update project descriptions and technology lists in `src/data/projects.js` to include only details you can publicly share.
3. Update career details in `src/data/experience.js`.
4. Add your résumé at `public/resume/veeramuthumari-resume.pdf`.
5. Add your own profile photo if desired; the current hero uses a stylized placeholder.
6. Configure hosting to rewrite unknown paths to `index.html` so Vue Router history URLs work.

## Contact form
The contact form is frontend-only. It opens the visitor's default email application using a `mailto:` link. It does not store submissions or send data to a server.
