import { firebase, googleProvider } from "../../firebase/firebase";

// START_LOGIN
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
};
