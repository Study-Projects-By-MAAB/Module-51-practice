// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: "module-51-practice-ed2ea.firebaseapp.com",
    projectId: "module-51-practice-ed2ea",
    storageBucket: "module-51-practice-ed2ea.appspot.com",
    messagingSenderId: "592806543594",
    appId: "1:592806543594:web:fc398d529ef9861ef61793",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
