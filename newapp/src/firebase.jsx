// v9 compat packages are API compatible with v8 code
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlHFiTKUC0vhlBjeFvfow4Lb4XqKPRL0M",
  authDomain: "apppforfirebaseprojext.firebaseapp.com",
  databaseURL: "https://apppforfirebaseprojext-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apppforfirebaseprojext",
  storageBucket: "apppforfirebaseprojext.appspot.com",
  messagingSenderId: "1030365021260",
  appId: "1:1030365021260:web:07a68e5191d9328e5ce0e9"
};
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = getDatabase();
export default database;  