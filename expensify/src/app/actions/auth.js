import { firebase, googleProvider } from "../../firebase/firebase";

// START_LOGIN
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const setLOGGEDIn = (uid) => {
  return {
    type: "LOGGED_IN",
    uid,
  };
};

export const setLOGGEDOut = () => {
  return {
    type: "LOGGED_OUT",
  };
};
