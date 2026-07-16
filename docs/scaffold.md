# Initial scaffold

The repository follows the architecture's inward dependency direction:

```text
presentation -> application -> domain
                  ^
          infrastructure implements application ports
```

- `apps/desktop`, `apps/mobile`, and `apps/backend` are independent application shells.
- `packages/domain` is framework-free shared language; `packages/application` owns workflow ports.
- `packages/reader`, `storage`, `sync`, `search`, and `metadata` reserve the architecture's bounded contexts.
- `packages/api-client` owns versioned HTTP contracts, avoiding model drift.
- `packages/design-system` encodes the Scholarly Minimalist tokens.

Product behavior is intentionally absent. The only backend endpoint is a non-product health check for deployment verification.

CI validates the mobile web bundle; native iOS and Android artifacts require the platform-specific Expo build environment.
