# Contributing

Thank you for your interest in contributing to Personal Reading Ecosystem.

Although the project is currently in early development, these guidelines help maintain consistency as it grows.

---

## Project Philosophy

Every contribution should support the project's core principles:

- Offline-first
- User ownership of data
- Cross-platform consistency
- Simple, maintainable architecture
- Performance over unnecessary complexity

When in doubt, prefer the simpler solution.

---

## Development Workflow

1. Create a feature branch from `main`.
2. Keep commits focused on a single logical change.
3. Write or update tests where appropriate.
4. Ensure documentation remains accurate.
5. Open a Pull Request.

---

## Branch Naming

Examples:

```
feature/import-pipeline
feature/pdf-reader
feature/bookmarks

bugfix/search-index

refactor/domain-model

docs/readme
```

---

## Commit Messages

Follow Conventional Commits.

Examples:

```
feat: add book import service

fix: prevent duplicate metadata entries

refactor: simplify repository interfaces

docs: update architecture documentation

test: add annotation repository tests
```

---

## Coding Principles

- Prefer composition over inheritance.
- Keep domain logic independent of UI frameworks.
- Avoid premature abstraction.
- Keep functions small and focused.
- Write code that is easy to delete and replace.
- Make failures explicit.

---

## Testing

Every change should include appropriate tests whenever practical.

Testing priorities:

1. Domain logic
2. Import pipeline
3. Synchronization
4. Storage
5. User interface

---

## Pull Request Checklist

Before opening a Pull Request, verify that:

- [ ] The change solves a single problem.
- [ ] Tests pass.
- [ ] Documentation has been updated if necessary.
- [ ] No unnecessary dependencies were introduced.
- [ ] The architecture remains consistent with project principles.

---

## Code Reviews

Reviews should focus on:

- Correctness
- Simplicity
- Maintainability
- Performance
- Consistency

Preference should always be given to code that is easier to understand and maintain.

---

## Questions

If you're unsure about a design decision, discuss it before implementing a large feature.
