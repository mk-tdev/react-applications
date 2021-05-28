export const defaultAuthState = {
  isAuthenticated: false,
  uid: null,
};

export default (state = defaultAuthState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        isAuthenticated: true,
        uid: action.uid,
      };
    case "LOGGED_OUT":
      return {
        isAuthenticated: false,
        uid: null,
      };
    default:
      return state;
  }
};
