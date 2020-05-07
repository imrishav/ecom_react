const intialState = {
  name: "",
};

const testReducer = (state = intialState, action) => {
  switch (action.type) {
    case "RISHAV":
      return {
        ...state,
        name: action.payload,
      };
    case "MAMTA":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
