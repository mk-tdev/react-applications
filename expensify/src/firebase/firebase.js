import firebase from "firebase";
import { firebaseConfig } from "../firebase-config";

if (firebase) {
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  database.ref().set({
    name: "Muthu",
    age: 30,
    isSingle: false,
    location: { city: "SG", country: "Singapore", staying: "Tampines" },
  });

  database.ref("age").set(31);
  database
    .ref("location/staying")
    .set("Tanamera")
    .then(() => console.log("Updated location"))
    .catch((r) => console.log("Error: ", r));
}
