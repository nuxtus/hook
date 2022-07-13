import axios from "axios"
import { defineHook } from '@directus/extensions-sdk';

const nuxtServer: string = process.env.NUXT_SERVER || "http://localhost:3000"

const updateTypes = async function () {
	console.log("Updating types in Nuxt due to field change.")
	try {
		await axios.post(`${nuxtServer}/api/directus/field`)
	} catch (err: any) {
		console.error(err.message)
	}
}

export default defineHook(({ action }) => {
	action("collections.create", async (collection) => {
		// Get types before creating page otherwise Nuxt restarts while getting them
		await updateTypes()
		console.log("Creating Nuxt page for " + collection.payload.collection)
		await axios.post(
			`${nuxtServer}/api/directus/collection`,
			collection.payload
		)
	})

	action("fields.create", updateTypes)
	action("fields.update", updateTypes)
	action("fields.delete", updateTypes)
})
