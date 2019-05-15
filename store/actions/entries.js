import { ADD_TODO, REMOVE_TODO } from './'

export function updateEntries(entries) {
	return {
		type: UPDATE_ENTRIES,
		entries
	}
}
