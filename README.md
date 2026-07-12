# Property Dossier

## Quick Start

clone → docker compose up -d → pnpm i → pnpm smoke

```bash
git clone <repository-url>
cd property-dossier
docker compose up -d
pnpm install
pnpm smoke
```

## Development

- `pnpm lint` - Run linting
- `pnpm format` - Format code
- `pnpm typecheck` - Type check all packages
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm smoke` - Test database connections
