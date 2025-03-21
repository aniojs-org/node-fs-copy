import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {copyFactory as factory} from "#~synthetic/user/export/copyFactory.mts"

/**
 * @brief Asynchronously copy a path.
 * @description
 * Asynchronously copies path `src` to `dest`.
 * @param src Existing path.
 * @param dest Target path.
 */
export async function copy(src: string, dest: string) : Promise<undefined> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(src, dest)
}
