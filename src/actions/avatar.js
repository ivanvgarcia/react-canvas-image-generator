import {
  GET_AVATARS,
  GET_AVATAR,
  CHOOSE_AVATAR,
  ADD_CHOSEN_AVATAR,
  REMOVE_CHOSEN_AVATAR,
  REORDER_AVATARS,
  SET_HISTORY,
  CLEAR_HISTORY,
  RESET_HISTORY,
  INCREASE_STEP,
  REDUCE_STEP,
  AVATAR_ERROR
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
    dispatch({
      type: AVATAR_ERROR,
      payload: error
    });
  }
};

export const getAvatar = id => async dispatch => {
  try {
    const res = await avatarApi.get(`/avatar/${id}`);
    console.log(res);

    const payload = res.data.data;
    dispatch({
      type: GET_AVATAR,
      payload
    });
  } catch (error) {
    dispatch({
      type: AVATAR_ERROR,
      payload: error
    });
  }
};

export const chooseAvatar = payload => dispatch => {
  dispatch({
    type: CHOOSE_AVATAR,
    payload
  });
};

export const addChosenAvatar = payload => dispatch => {
  dispatch({
    type: ADD_CHOSEN_AVATAR,
    payload
  });
};

export const removeChosenAvatar = payload => dispatch => {
  dispatch({
    type: REMOVE_CHOSEN_AVATAR,
    payload
  });
};

export const reorderAvatars = payload => dispatch => {
  dispatch({
    type: REORDER_AVATARS,
    payload
  });
};

export const setHistory = payload => dispatch => {
  dispatch({
    type: SET_HISTORY,
    payload
  });
};

export const resetHistory = payload => dispatch => {
  dispatch({
    type: RESET_HISTORY,
    payload
  });
};

export const clearHistory = () => dispatch => {
  dispatch({
    type: CLEAR_HISTORY
  });
};

export const increaseStep = () => dispatch => {
  dispatch({
    type: INCREASE_STEP
  });
};

export const reduceStep = () => dispatch => {
  dispatch({
    type: REDUCE_STEP
  });
};
