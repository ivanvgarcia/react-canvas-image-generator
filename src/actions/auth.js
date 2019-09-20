import {
  //   REGISTER_SUCCESS,
  //   REGISTER_FAIL,
  USER_LOADED,
  //   AUTH_ERROR,
  LOGIN_SUCCESS
  //   LOGIN_FAIL,
  //   LOGOUT
} from './types';
import avatarApi from '../config/baseUrl';

export const checkSession = search => async dispatch => {
  try {
    const res = await avatarApi.get(`/sessions/check`);

    const user = JSON.parse(res.data.user);

    dispatch({
      type: USER_LOADED,
      payload: user
    });
  } catch (error) {
    console.error(error);
  }
};

export const twitterSignIn = search => async dispatch => {
  if (!search) return;
  try {
    const query = new URLSearchParams(search);
    const token = query.get('oauth_token');
    const verifier = query.get('oauth_verifier');
    console.log(token, verifier);
    const res = await avatarApi.get(
      `sessions/saveAccessTokens?oauth_token=${token}&oauth_verifier=${verifier}`
    );

    const user = JSON.parse(res.data.user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  } catch (error) {
    console.error(error);
  }
};
