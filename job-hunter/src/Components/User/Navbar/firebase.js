
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqvnokJ1U_gDcuHuvX85xFSrMD54I6iHM",

  authDomain: "jobhunter-5340b.firebaseapp.com",

  projectId: "jobhunter-5340b",

  storageBucket: "jobhunter-5340b.appspot.com",

  messagingSenderId: "796571266452",

  appId: "1:796571266452:web:b9e2e7294811871f2ff381",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
