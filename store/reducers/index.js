import { combineReducers } from 'redux';

import entries from './entries';
import settings from './settings';

export default combineReducers({
  entries,
  settings
});
