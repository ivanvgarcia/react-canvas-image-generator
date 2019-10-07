import {
  GET_AVATARS,
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

export const setHistory = payload => async dispatch => {
  try {
    dispatch({
      type: SET_HISTORY,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetHistory = payload => async dispatch => {
  try {
    dispatch({
      type: RESET_HISTORY,
      payload
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_HISTORY
    });
  } catch (error) {
    console.log(error);
  }
};

export const increaseStep = () => async dispatch => {
  try {
    dispatch({
      type: INCREASE_STEP
    });
  } catch (error) {
    console.log(error);
  }
};

export const reduceStep = () => async dispatch => {
  try {
    dispatch({
      type: REDUCE_STEP
    });
  } catch (error) {
    console.log(error);
  }
};
