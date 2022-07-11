# @nuxtus/directus-extension-nuxtus-hook

A Directus webhook extension that handles the automatic creation of Nuxt pages and types when a new collection is created in Directus.

Calls the Nuxtus /api/directus/collection endpoint when a new collection is created.
Calls the Nuxtus /api/directus/field endpoint when fields are created, updated or deleted.

> Requires the [Nuxtus Boilerplate](https://github.com/nuxtus/nuxtus)

## Build

```bash
npm run build
```

Place `/dist/index.js` in Directus project `/extensions/hooks/nuxtus-hook/`

