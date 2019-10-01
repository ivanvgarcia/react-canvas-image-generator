import { combineReducers } from 'redux';
import auth from './auth';
import avatar from './avatar';

export default combineReducers({
  auth,
  avatar
});
