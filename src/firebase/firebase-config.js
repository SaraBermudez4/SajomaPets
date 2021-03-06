import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBkzLMe4Qoctb4OcE34AsEw7kOWMtvJGt0",
    authDomain: "sajoma-pets.firebaseapp.com",
    projectId: "sajoma-pets",
    storageBucket: "sajoma-pets.appspot.com",
    messagingSenderId: "997451965959",
    appId: "1:997451965959:web:4ec1204b7f97999140eca2"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}