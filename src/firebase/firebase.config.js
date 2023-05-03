// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcl6UOx1ZQ0UGP6n29kfq6KmJuhz6Vtxs",
  authDomain: "my-classic-projects.firebaseapp.com",
  projectId: "my-classic-projects",
  storageBucket: "my-classic-projects.appspot.com",
  messagingSenderId: "304273582705",
  appId: "1:304273582705:web:b1838d86867ebe23e449d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;