# @nuxtus/directus-extension-nuxtus-hook

A Directus webhook extension that handles the automatic creation of Nuxt pages and types when a new collection is created in Directus.

Calls the Nuxtus /api/directus/collection endpoint when a new collection is created.
Calls the Nuxtus /api/directus/field endpoint when fields are created, updated or deleted.

> We strongly recommend using [Nuxtus Boilerplate](https://github.com/nuxtus/nuxtus) if you are starting a new project. This will automatically install this hook with other useful Directus/Nuxt utilities.

For more details visit [nuxtus.com](https://nuxtus.com) or [read the documentation](https://docs.nuxtus.com)

## Getting started

Currently Directus extensions need to be installed manually into your existing Directus project.

To do this:

1. Clone this repository
2. Build the extension `npm run build`
3. Place `/dist/index.js` in Directus project `/extensions/hooks/nuxtus-hook/`

