# Manual Setup Commands

# 1. Install pnpm (if not installed)
npm install -g pnpm@8.15.4

# 2. Install dependencies
pnpm install

# 3. Build all packages
pnpm build

# 4. Lint, typecheck, and format
pnpm lint
pnpm typecheck
pnpm format

# 5. Start all apps in dev mode
pnpm dev

# 6. Run tests (if present)
pnpm test || echo "No tests found"

# Verification Steps
# ------------------
# - All commands above should complete without errors.
# - Visit http://localhost:3000 for make-example app.
# - Check .next/, dist/, and build/ folders for build outputs.
# - Confirm Turbo cache is working (see .turbo/ and CI logs).

# Common Issues & Solutions
# -------------------------
# - pnpm not found: Install with `npm install -g pnpm@8.15.4`
# - Type errors: Ensure all packages extend root tsconfig.json
# - Lint/format errors: Run `pnpm format` and `pnpm lint --fix`
# - Turbo cache not working: Set TURBO_TOKEN and TURBO_TEAM in CI
# - Next.js build errors: Check next.config.js and .env.local

# Scaling Guidelines
# ------------------
# - Add new apps to apps/ and new packages to packages/
# - No root config changes needed for up to 30+ apps
# - Use pnpm turbo run <task> --filter=<app> for selective builds
# - Keep shared logic in packages/ and import via path aliases

# Development Workflow Best Practices
# -----------------------------------
# - Use pnpm for all commands
# - Use turbo for orchestrated tasks
# - Use Prettier and ESLint before pushing
# - Commit all config changes
# - Use remote caching for team speed
# - Keep Make apps independent for easy deployment
