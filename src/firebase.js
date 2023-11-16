import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyANt1WzB5g_6I6Twukbyro_YkJGuFH7-Gw",
  authDomain: "react-authentication-4ad6d.firebaseapp.com",
  projectId: "react-authentication-4ad6d",
  storageBucket: "react-authentication-4ad6d.appspot.com",
  messagingSenderId: "414329221900",
  appId: "1:414329221900:web:117f44b4ef0954464b8f29",
  measurementId: "G-ZYBW9SN09Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;