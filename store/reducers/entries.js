import { UPDATE_ENTRIES } from '../actions';

export default function(state = { data: [] }, action) {
  const { type, entries } = action;

  switch (type) {
    case UPDATE_ENTRIES:
      return {
        data: entries
      };
    default:
      return state;
  }
}
