import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyg8wlqT0RnknkfvhgmjUKcMzNE5IIGAc",
  authDomain: "vue-application-rialto.firebaseapp.com",
  projectId: "vue-application-rialto",
  messagingSenderId: "203736296199",
  appId: "1:203736296199:web:b080ac8cc8a03143b873a2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
