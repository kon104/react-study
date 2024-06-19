import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCB-R07Mc_-w5-nozS0jAxoxCoSnxSY71w",
	authDomain: "line-clone-7890b.firebaseapp.com",
	projectId: "line-clone-7890b",
	storageBucket: "line-clone-7890b.appspot.com",
	messagingSenderId: "228657850678",
	appId: "1:228657850678:web:33bc3e3bc731b392112b97"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
