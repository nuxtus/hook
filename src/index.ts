import { createCollection, deleteCollection, updateTypes } from "./nuxtRemote"

import { defineHook } from "@directus/extensions-sdk"

export default defineHook(({ action }, { logger }) => {
	action("collections.create", (collection) =>
		createCollection(collection, logger)
	)

	action("collections.delete", (collection) => 
		deleteCollection(collection, logger)
	)

	action("fields.create", () => updateTypes(logger))
	action("fields.update", () => updateTypes(logger))
	action("fields.delete", () => updateTypes(logger))
})
