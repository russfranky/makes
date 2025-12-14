#!/bin/bash
set -e

# hubzz-makes Automated Setup Script
# Run from the monorepo root

# 1. Ensure pnpm is installed
if ! command -v pnpm &> /dev/null; then
  echo "pnpm not found. Installing..."
  npm install -g pnpm@8.15.4
fi

# 2. Install dependencies
pnpm install

# 3. Build all packages
pnpm build

# 4. Lint and typecheck
pnpm lint
pnpm typecheck

# 5. Format check
pnpm format

# 6. Print success message
echo "\n✅ Monorepo setup complete!"
echo "Run 'pnpm dev' to start developing."
