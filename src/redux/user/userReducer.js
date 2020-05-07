import { UserActionTypes } from "./userActions";

const intitalState = {
  currentUser: null,
};

const userReducer = (state = intitalState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
