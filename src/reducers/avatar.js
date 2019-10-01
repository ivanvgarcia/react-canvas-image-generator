import {
  GET_AVATARS,
  CHOOSE_AVATAR,
  ADD_CHOSEN_AVATAR,
  REORDER_AVATARS
} from '../actions/types';

const initialState = {
  avatars: [],
  chosenAvatars: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AVATARS:
      return {
        ...state,
        avatars: payload
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
    case REORDER_AVATARS:
      return {
        ...state,
        chosenAvatars: payload
      };
    default:
      return state;
  }
}
