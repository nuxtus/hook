import axios from "axios"
import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter, action }) => {
	action("collections.create", async (collection) => {
		console.log("Creating Nuxt page for " + collection.payload.collection)
		await axios.post(
			"http://localhost:3000/api/directus/collection",
			collection.payload
		)
	})
});
