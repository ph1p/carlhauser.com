import { SET_CLIENT_HEIGHT } from '../actions';

export default function(state = { clientHeight: 0 }, action) {
  const { type, data } = action;

  switch (type) {
    case SET_CLIENT_HEIGHT:
      return {
        clientHeight: data
      };
    default:
      return state;
  }
}
