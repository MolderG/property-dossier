# Contributing

## Conventional Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **chore**: Changes to the build process or auxiliary tools
- **docs**: Documentation only changes
- **test**: Adding or updating tests
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Code style changes (formatting, etc.)
- **perf**: A code change that improves performance

### Examples

```
feat(api): add user authentication endpoint
fix(domain): resolve null reference in property entity
chore: update pnpm to version 9
docs: add contributing guidelines
test: add unit tests for property service
```

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes following Conventional Commits
3. Ensure all tests pass: `pnpm test`
4. Ensure linting passes: `pnpm lint`
5. Ensure type checking passes: `pnpm typecheck`
6. Open a pull request against `main`

## Branch Protection

The `main` branch is protected and requires:
- Pull request before merging
- All CI checks to pass (lint, typecheck, tests)

Even when working solo, please use pull requests to maintain a readable history and demonstrate discipline.
