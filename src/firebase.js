import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0r_VkP5pFby4K7vj3gOUzBehT6yNBHdI",
  authDomain: "new-test-project-4cb54.firebaseapp.com",
  projectId: "new-test-project-4cb54",
  storageBucket: "new-test-project-4cb54.appspot.com",
  messagingSenderId: "734364457340",
  appId: "1:734364457340:web:81f657aa7cf0da8774acf9",
  measurementId: "G-45TC09DHLF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
