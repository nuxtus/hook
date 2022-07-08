import axios from "axios"
import { defineHook } from '@directus/extensions-sdk';

const updateTypes = async function () {
	console.log("Updating types in Nuxt due to field change.")
	await axios.post("http://localhost:3000/api/directus/field")
}

export default defineHook(({ action }) => {
	action("collections.create", async (collection) => {
		console.log("Creating Nuxt page for " + collection.payload.collection)
		await axios.post(
			"http://localhost:3000/api/directus/collection",
			collection.payload
		)
	})

	action("fields.create", async () => {
		updateTypes()
	})
	action("fields.update", async () => {
		updateTypes()
	})
	action("fields.delete", async () => {
		updateTypes()
	})
})
