// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBcGVUZhN0_ktqMVfVrAGRq4urYwWsK9Qs",
//   authDomain: "virtual-try-on-ea3a5.firebaseapp.com",
//   databaseURL: "https://virtual-try-on-ea3a5-default-rtdb.firebaseio.com",
//   projectId: "virtual-try-on-ea3a5",
//   storageBucket: "virtual-try-on-ea3a5.firebasestorage.app",
//   messagingSenderId: "605687021163",
//   appId: "1:605687021163:web:e77400d93567c855927b2e",
//   measurementId: "G-RQEP45KEC4",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config (replace with your actual Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyBcGVUZhN0_ktqMVfVrAGRq4urYwWsK9Qs",
  authDomain: "virtual-try-on-ea3a5.firebaseapp.com",
  databaseURL: "https://virtual-try-on-ea3a5-default-rtdb.firebaseio.com",
  projectId: "virtual-try-on-ea3a5",
  storageBucket: "virtual-try-on-ea3a5.firebasestorage.app",
  messagingSenderId: "605687021163",
  appId: "1:605687021163:web:e77400d93567c855927b2e",
  measurementId: "G-RQEP45KEC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get authentication and Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
