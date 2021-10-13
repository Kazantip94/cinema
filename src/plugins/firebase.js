import {initializeApp} from 'firebase/app'
// import { getFirestore } from "firebase/firestore"
// import { getDatabase } from "firebase/database"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCI3xAYflwEpJx3JhRrpI2StnbsWVQg3xk",
    authDomain: "vue-cinema-crm.firebaseapp.com",
    projectId: "vue-cinema-crm",
    storageBucket: "vue-cinema-crm.appspot.com",
    messagingSenderId: "771012724253",
    appId: "1:771012724253:web:a47fbe390287825d6a68f4",
    measurementId: "G-4XNEY7YF7J"
  }
  
export const app = initializeApp(firebaseConfig)

export const signIn = signInWithEmailAndPassword
export const register = createUserWithEmailAndPassword
export const signOutUser = signOut
// export const db = getDatabase()



