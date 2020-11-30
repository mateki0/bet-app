import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDYK1ynu0usQkSGcn6wmqZM48qm-0P8T0M",
  authDomain: "bet-app-5fa3e.firebaseapp.com",
  databaseURL: "https://bet-app-5fa3e.firebaseio.com",
  projectId: "bet-app-5fa3e",
  storageBucket: "bet-app-5fa3e.appspot.com",
  messagingSenderId: "766274440080",
  appId: "1:766274440080:web:da601e2acbef2e575b8115"
};
if (!firebase.apps.length) {
firebase.initializeApp({
  ...firebaseConfig,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID,
}
  );
  firebase.analytics();

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
