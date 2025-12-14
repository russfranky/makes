# hubzz-makes Monorepo

A production-ready pnpm + Turborepo monorepo for managing multiple Figma Make applications with Next.js 14+, TypeScript, and shared utilities.

## Project Structure

```
hubzz-makes/
├── apps/
│   └── make-example/
├── packages/
│   ├── shared-utils/
│   └── config/
├── .github/
│   └── workflows/
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.json
├── .npmrc
├── .gitignore
└── README.md
```

- **apps/**: Each Make app (Next.js) lives here. Add new apps as needed.
- **packages/**: Shared utilities, UI, and config for all apps.
- **.github/**: CI/CD workflows.

## Features
- Next.js 14+ with TypeScript 5+
- pnpm workspace (strict, single node_modules)
- Turborepo for fast, incremental builds and caching
- ESLint + Prettier for code quality
- Environment variable support
- GitHub Actions CI/CD with remote caching
- Easy scaling to 30+ Make apps

## Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Start all apps in dev mode
pnpm dev

# 3. Lint, typecheck, and build all packages
pnpm lint
pnpm typecheck
pnpm build
```

## Adding a New Make App

```bash
# Scaffold a new app (replace my-make)
mkdir apps/my-make
cp -r apps/make-example/* apps/my-make/
# Update package.json and configs as needed
```

## Environment Variables
- Use `.env.local` in each app for app-specific secrets.
- Use `NEXT_PUBLIC_` prefix for variables exposed to the browser.

## CI/CD & Remote Caching
- GitHub Actions runs lint, typecheck, build, and uploads Turbo cache.
- Set `TURBO_TOKEN` and `TURBO_TEAM` secrets in your repo for remote caching.

## Development Workflow
- Use `pnpm` for all commands (never `npm` or `yarn`).
- Use `pnpm turbo run <task>` for orchestrated tasks.
- Use `pnpm --filter=<app>` to target specific apps/packages.
- Keep shared code in `packages/` and import via path aliases.

## Scaling Guidelines
- Add new apps to `apps/` and new packages to `packages/`.
- No changes needed to root configs for up to 30+ apps.
- Use Turborepo filters for selective builds/deploys.

## Troubleshooting
- If builds are slow, check Turbo cache and remote setup.
- If dependencies are missing, run `pnpm install` at the root.
- For type errors, ensure all packages extend the root `tsconfig.json`.
- For environment issues, check `.env.local` and `next.config.js`.

## Best Practices
- Commit all config changes.
- Use Prettier and ESLint before pushing.
- Use remote caching for team speed.
- Keep Make apps independent for easy deployment.

---

For full setup, see SETUP_INSTRUCTIONS.sh and the original monorepo-setup-prompt.txt.
