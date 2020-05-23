import { UserActionTypes } from "./userActions";

const intitalState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = intitalState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
