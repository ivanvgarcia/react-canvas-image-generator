import {
  GET_AVATARS,
  GET_AVATAR,
  CHOOSE_AVATAR,
  ADD_CHOSEN_AVATAR,
  REMOVE_CHOSEN_AVATAR,
  REORDER_AVATARS,
  SET_HISTORY,
  RESET_HISTORY,
  REDUCE_STEP,
  CLEAR_HISTORY,
  INCREASE_STEP,
  AVATAR_ERROR
} from '../actions/types';

const initialState = {
  avatars: [],
  avatar: null,
  chosenAvatars: [],
  history: [],
  step: -1,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AVATARS:
      return {
        ...state,
        avatars: payload
      };
    case GET_AVATAR:
      return {
        ...state,
        avatar: payload
      };
    case CHOOSE_AVATAR:
      return {
        ...state,
        chosenAvatars: [payload, ...state.chosenAvatars]
      };
    case ADD_CHOSEN_AVATAR:
      return {
        ...state,
        avatars: [payload, ...state.avatars]
      };
    case REMOVE_CHOSEN_AVATAR:
      return {
        ...state,
        chosenAvatars: state.chosenAvatars.filter(
          avatar => avatar._id !== payload
        )
      };
    case REORDER_AVATARS:
      return {
        ...state,
        chosenAvatars: payload
      };
    case SET_HISTORY:
      return {
        ...state,
        history: [...state.history, payload],
        step: (state.step += 1)
      };
    case RESET_HISTORY:
      return {
        ...state,
        history: [...payload]
      };
    case INCREASE_STEP:
      return {
        ...state,
        step: (state.step += 1)
      };
    case REDUCE_STEP:
      return {
        ...state,
        step: (state.step -= 1)
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
        step: -1
      };
    case AVATAR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
