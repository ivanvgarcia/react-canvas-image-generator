import {
  //   REGISTER_SUCCESS,
  //   REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  // LOGIN_FAIL,
  LOGOUT
} from './types';
import avatarApi from 'config/baseUrl';

export const checkSession = search => async dispatch => {
  try {
    const res = await avatarApi.get(`/auth/current`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    const payload = res.data;

    dispatch({
      type: USER_LOADED,
      payload
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const twitterSignIn = search => async dispatch => {
  if (!search) return;
  try {
    const query = new URLSearchParams(search);
    const token = query.get('oauth_token');
    const verifier = query.get('oauth_verifier');

    const res = await avatarApi.get(
      `auth/saveToken?oauth_token=${token}&oauth_verifier=${verifier}`
    );

    const payload = res.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload
    });
  } catch (error) {
    console.error(error);
  }
};

export const facebookSignIn = accessToken => async dispatch => {
  try {
    const res = await avatarApi.post('/auth/facebook', {
      access_token: accessToken
    });

    console.log(res);
    const payload = res.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload
    });
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
};
