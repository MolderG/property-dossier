# ADR 001: Domain Package Zero Runtime Dependencies

## Status
Accepted

## Context
The `packages/domain` package contains the core business logic and domain models of the property-dossier application. This layer is the heart of the system and must remain pure, framework-agnostic, and free from external runtime dependencies.

## Decision
The `packages/domain` package **MUST** have zero runtime dependencies. Only `devDependencies` are permitted.

### Permitted Dependencies
- TypeScript (for type checking and compilation)
- Testing frameworks (as devDependencies only)

### Prohibited Dependencies
- Any runtime libraries or frameworks
- External packages that would be bundled in production
- Infrastructure concerns (databases, HTTP clients, etc.)

## Rationale
1. **Purity of Domain Logic**: The domain layer should express business rules without being coupled to external implementations
2. **Testability**: Zero runtime dependencies makes domain logic trivially testable in isolation
3. **Portability**: Domain logic can be reused across different contexts (CLI, web API, etc.) without dependency conflicts
4. **Clear Boundaries**: Enforces strict separation between domain logic and infrastructure/application concerns
5. **Dependency Hygiene**: Prevents accidental leakage of infrastructure concerns into the domain layer

## Consequences
### Positive
- Domain logic remains framework-agnostic
- Easy to test without mocking external dependencies
- Clear architectural boundaries
- Reduced bundle size for consumers of domain types

### Negative
- May require more boilerplate to define interfaces for infrastructure concerns
- Some developers may find the restriction initially limiting

## Implementation
The `packages/domain/package.json` must only contain `devDependencies`:

```json
{
  "name": "@property-dossier/domain",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "*"
  }
}
```

Any attempt to add runtime dependencies to this package should be rejected during code review.

## References
- Domain-Driven Design (Eric Evans)
- Clean Architecture (Robert C. Martin)
