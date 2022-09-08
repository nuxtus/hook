import { Logger, pino } from "pino"
import { afterEach, expect, test, vi } from "vitest"
import { createCollection, deleteCollection, updateTypes } from "../src/nuxtRemote"

import axios from "axios"

const logger: Logger = pino()

type CollectionPayload = {
	url: string
	collectionPayload?: {
		collection: string
		singleton: boolean
	}
}

vi.mock("axios", () => ({
	default: {
		post: vi.fn().mockImplementation((url: string, collectionPayload = {}) => {
			return {
				url,
				collectionPayload,
			}
		}),
	},
}))

afterEach(() => {
	vi.clearAllMocks()
})

test("creating collection", async () => {
	const response: unknown = await createCollection(
		{
			payload: {
				collection: "nuxtus_test_collection",
				singleton: false,
			},
		},
		logger
	)
	const result = response as CollectionPayload
	expect(result.url).toBe("http://localhost:3000/api/directus/collection")
	expect(axios.post).toBeCalledTimes(1)
})

test("deleting collection", async () => {
	const response: unknown = await deleteCollection({
		payload: {
			collection: "nuxtus_test_collection",
		}
	}, logger)
	const result = response as CollectionPayload
	expect(result.url).toBe("http://localhost:3000/api/directus/collection")
	expect(axios.delete).toBeCalledTimes(1)
})

test("adding field", async () => {
	const response: unknown = await updateTypes(logger)
	const result = response as CollectionPayload
	expect(result.url).toBe("http://localhost:3000/api/directus/field")
	expect(axios.post).toBeCalledTimes(1)
})
