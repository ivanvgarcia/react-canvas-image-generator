import {
  GET_AVATARS,
  CHOOSE_AVATAR,
  ADD_CHOSEN_AVATAR,
  REMOVE_CHOSEN_AVATAR,
  REORDER_AVATARS
} from './types';
import avatarApi from '../config/baseUrl';

export const getAvatars = () => async dispatch => {
  try {
    const res = await avatarApi.get(`/avatar`);

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
  try {
    dispatch({
      type: CHOOSE_AVATAR,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const addChosenAvatar = payload => async dispatch => {
  try {
    dispatch({
      type: ADD_CHOSEN_AVATAR,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeChosenAvatar = payload => async dispatch => {
  try {
    dispatch({
      type: REMOVE_CHOSEN_AVATAR,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const reorderAvatars = payload => async dispatch => {
  try {
    dispatch({
      type: REORDER_AVATARS,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};
