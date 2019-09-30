import { GET_AVATARS, CHOOSE_AVATAR } from './types';
import avatarApi from '../config/baseUrl';

export const getAvatars = () => async dispatch => {
  try {
    const res = await avatarApi.get(`/avatar`);
    console.log(res);
    const payload = res.data.data;

    dispatch({
      type: GET_AVATARS,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const chooseAvatar = payload => async dispatch => {
  console.log(payload);
  try {
    dispatch({
      type: CHOOSE_AVATAR,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};
