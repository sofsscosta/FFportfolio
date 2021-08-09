import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpPTCfFjyV9QKGArHpq67iS6NO-uYbQbM",
  authDomain: "ffportfolio-99d42.firebaseapp.com",
  projectId: "ffportfolio-99d42",
  storageBucket: "ffportfolio-99d42.appspot.com",
  messagingSenderId: "278623507510",
  appId: "1:278623507510:web:bc841fc31a3631bede7497"
}
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase