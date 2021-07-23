import * as ACTIONS from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL:
      return action.payload;
    case ACTIONS.CREATE_POST:
      return [...state, action.payload];
    case ACTIONS.DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    case ACTIONS.UPDATE_POST:
    case ACTIONS.LIKE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};

export default reducer;
