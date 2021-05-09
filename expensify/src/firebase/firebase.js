import firebase from "firebase";
import { firebaseConfig } from "../firebase-config";

const firebaseFunc = () => {
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  const onValueChange = database.ref("expenses").on(
    "value",
    (snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      console.log(expenses);
    },
    (r) => console.log("Error fetching data: ", r)
  );

  database
    .ref("expenses")
    .on("child_removed", (snapshot) => console.log(snapshot.val()));

  // database.ref("expenses").push({
  //   description: "Rent",
  //   amount: 700,
  //   createdAt: 1620548740198,
  // });

  // database
  //   .ref()
  //   .once("value")
  //   .then((snapshot) => console.log("Fetched data: ", snapshot.val()))
  //   .catch((r) => console.log("Error: ", r));

  return;
  database.ref().set({
    name: "Muthu",
    age: 30,
    isSingle: false,
    location: { city: "SG", country: "Singapore", staying: "Tampines" },
  });

  database.ref("age").set(31);
  database
    .ref("location/staying")
    .set("T Tanamera")
    .then(() => console.log("Updated location"))
    .catch((r) => console.log("Error: ", r));

  database
    .ref("isSingle")
    .remove()
    .then(() => console.log("Deleted an property"))
    .catch((r) => console.log("Error: ", r));

  database.ref().update({
    name: "Muthu Kumar",
    age: 31,
    favLaptop: "Macbook",
    "location/staying": "Tanamera",
  });

  database.ref().off(onValueChange);
};

if (firebase) firebaseFunc();
