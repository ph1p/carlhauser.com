import { HYDRATE } from 'next-redux-wrapper';
import { UPDATE_ENTRIES } from '../actions';

export default function EntriesReducer(state = { data: [] }, action) {
  const { type, data } = action;

  switch (type) {
    case HYDRATE:
      return {
        data: action.payload.entries.data,
      };
      break;
    case UPDATE_ENTRIES:
      return {
        data,
      };
    default:
      return state;
  }
}
