import { createCollection, updateTypes } from "./nuxtRemote"

import { defineHook } from "@directus/extensions-sdk"

export default defineHook(({ action }) => {
	action("collections.create", createCollection)

	action("fields.create", updateTypes)
	action("fields.update", updateTypes)
	action("fields.delete", updateTypes)
})
