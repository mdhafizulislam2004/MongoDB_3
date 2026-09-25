// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0qTYW0a7HaLVnGp26fVqRFfoFAkwLfk",
  authDomain: "database-project-1-8478d.firebaseapp.com",
  projectId: "database-project-1-8478d",
  storageBucket: "database-project-1-8478d.firebasestorage.app",
  messagingSenderId: "951198524961",
  appId: "1:951198524961:web:db9e19c08e91f7cd536560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);