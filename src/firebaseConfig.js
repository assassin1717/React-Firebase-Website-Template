import firebase from "firebase";
const rebase = require('re-base')

const firebaseConfig  = {
  apiKey: "AIzaSyCPkpsU9p5luk1JrhqKfFIqRkuhfLnIP9s",
  authDomain: "react-portfolio-assassin1717.firebaseapp.com",
  databaseURL: "https://react-portfolio-assassin1717-default-rtdb.firebaseio.com",
  projectId: "react-portfolio-assassin1717",
  storageBucket: "react-portfolio-assassin1717.appspot.com",
  messagingSenderId: "735253477625",
  appId: "1:735253477625:web:5fb33fa2daf61ced644a28",
  measurementId: "G-C3SSS79MWR"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const config=rebase.createClass(firebaseApp.database())

export const storage=firebaseApp.storage()
export const auth=firebaseApp.auth()

export default config