import axios from "axios"

const nuxtServer: string = process.env.NUXT_SERVER || "http://localhost:3000"

export const createCollection = async function (collection: any) {
	// Get types before creating page otherwise Nuxt restarts while getting them
	await updateTypes()
	console.log("Creating Nuxt page for " + collection.payload.collection)
	return await axios.post(
		`${nuxtServer}/api/directus/collection`,
		collection.payload
	)
}

export const updateTypes = async function () {
	console.log("Updating types in Nuxt due to field change.")
	try {
		return await axios.post(`${nuxtServer}/api/directus/field`)
	} catch (err: any) {
		console.error(err.message)
		return
	}
}
