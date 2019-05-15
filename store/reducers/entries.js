import { UPDATE_ENTRIES } from '../actions';

export default function(state = { data: [] }, action) {
  const { type, data } = action;

  switch (type) {
    case UPDATE_ENTRIES:
      return {
        data
      };
    default:
      return state;
  }
}
