import axios from "axios"
import { defineHook } from '@directus/extensions-sdk';

const updateTypes = async function () {
	console.log("Updating types in Nuxt due to field change.")
	try {
		await axios.post("http://localhost:3000/api/directus/field")
	} catch (err) {
		console.error(err.message)
	}
}

export default defineHook(({ action }) => {
	action("collections.create", async (collection) => {
		console.log("Creating Nuxt page for " + collection.payload.collection)
		await axios.post(
			"http://localhost:3000/api/directus/collection",
			collection.payload
		)
		updateTypes()
	})

	action("fields.create", updateTypes)
	action("fields.update", updateTypes)
	action("fields.delete", updateTypes)
})
