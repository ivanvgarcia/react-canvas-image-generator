import { GET_AVATARS, CHOOSE_AVATAR } from '../actions/types';

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
        chosenAvatars: [...state.chosenAvatars, payload]
      };

    default:
      return state;
  }
}
