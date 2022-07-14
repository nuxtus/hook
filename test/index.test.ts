import { afterEach, expect, test, vi } from "vitest"
import { createCollection, updateTypes } from "../src/nuxtRemote"

import axios from "axios"

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
	const response: unknown = await createCollection({
		payload: {
			collection: "nuxtus_test_collection",
			singleton: false,
		},
	})
	const result = response as CollectionPayload
	expect(result.url).toBe("http://localhost:3000/api/directus/collection")
	expect(axios.post).toBeCalledTimes(2) // 1 for the collection, 1 for the field creation
})

test("adding field", async () => {
	const response: unknown = await updateTypes()
	const result = response as CollectionPayload
	expect(result.url).toBe("http://localhost:3000/api/directus/field")
	expect(axios.post).toBeCalledTimes(1)
})
