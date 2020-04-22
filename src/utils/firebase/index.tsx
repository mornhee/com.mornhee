import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyA46PajvavgL37_q8VxZyYQ56ssrn5ZE2s",
  authDomain: "com-mornhee.firebaseapp.com",
  databaseURL: "https://com-mornhee.firebaseio.com",
  projectId: "com-mornhee"
});

const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore();

export default firebase
export { auth, database, firestore }