import { Logger } from "pino"
import axios from "axios"

const nuxtServer: string = process.env.NUXT_SERVER || "http://localhost:3000"

export const createCollection = async function (
	collection: any,
	logger: Logger
) {
	logger.info("Creating Nuxt page for " + collection.payload.collection)
	return await axios.post(
		`${nuxtServer}/api/directus/collection`,
		collection.payload
	)
}

export const updateTypes = async function (logger: Logger) {
	logger.info("Updating types in Nuxt due to field change.")
	try {
		return await axios.post(`${nuxtServer}/api/directus/field`)
	} catch (err: any) {
		logger.error(err.message)
		return
	}
}
