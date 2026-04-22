# Repository Guidelines

## Project Structure & Module Organization
Application routes live in `src/app`, including page components, API routes, and route-specific tests such as `page.int.test.tsx`. Reusable UI sits in `src/components`, usually alongside unit tests or a local `__tests__` folder. Business logic is organized under `src/_modules`, split by domain (`blog`, `gift`) and layered into `_application`, `_domain`, and `_infrastructure`. Shared providers, utilities, fixtures, and mocks live in `src/providers`, `src/utils`, `src/__fixtures__`, and `src/__mocks__`. Static assets belong in `public/`.

## Build, Test, and Development Commands
Use `npm run dev` to start the Next.js dev server with Turbo on `http://localhost:3000`. Run `npm run build` to produce a production build, and `npm run start` to serve that build locally. Use `npm run lint` for the Next.js + TypeScript ESLint rules, and `npm test` for the Jest suite with coverage enabled. For active test work, `npm run test:watch` is the fastest feedback loop.

## Coding Style & Naming Conventions
Write TypeScript with 2-space indentation and follow the existing component-first layout. Use `PascalCase` for React components and domain entities, `camelCase` for functions and variables, and `kebab-case` only where framework conventions require it. Keep route files named `page.tsx`, `layout.tsx`, or `route.ts`. Respect the `@/` import alias from `tsconfig.json`. ESLint extends `next/core-web-vitals` and `next/typescript`; unused variables fail lint unless intentionally prefixed with `_`.

## Testing Guidelines
Jest runs in `jsdom` with Testing Library helpers from `jest.setup.ts`. Prefer `*.unit.test.ts(x)` for isolated logic and components, and `*.int.test.tsx` for route or integration coverage. Keep tests near the code they verify. Coverage is collected from `src/components`, `src/app`, and `src/_modules`, so new feature work should include matching tests before merge.

## Commit & Pull Request Guidelines
Commits follow Conventional Commits, for example `feat: add blog pagination` or `chore: update dependencies`. Keep each commit focused and lint-clean. Pull requests should include a short summary, linked issue when applicable, test notes (`npm test`, `npm run lint`), and screenshots for visible UI changes.

## Security & Configuration Tips
Do not commit secrets or production tokens. Review integrations that touch Ghost, Google Cloud Storage, JWT validation, or cookie/session providers carefully, and prefer environment-based configuration over hardcoded values.
