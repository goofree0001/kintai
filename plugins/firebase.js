import firebase from "firebase/app"
import "firebase/database"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBfICaKmflH7z5Z6DHWZ6Anbnj9uKpGXGI",
    authDomain: "kintai-16a0b.firebaseapp.com",
    databaseURL: "https://kintai-16a0b-default-rtdb.firebaseio.com",
    projectId: "kintai-16a0b",
    storageBucket: "kintai-16a0b.appspot.com",
    messagingSenderId: "297429051342",
    appId: "1:297429051342:web:1a00082aa204a053c3ed9f",
  })
}

export default firebase
