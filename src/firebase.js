import {initializeApp} from "firebase/app";

import {
    getFirestore, collection, onSnapshot,
    getDocs, addDoc, deleteDoc, doc,
    query, where, orderBy,
    serverTimestamp, getDoc, updateDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBt5hIhM8wmXQU0JwRI7m6odJT24uDOQVo",
    authDomain: "fir-test-b2fd9.firebaseapp.com",
    projectId: "fir-test-b2fd9",
    storageBucket: "fir-test-b2fd9.appspot.com",
    messagingSenderId: "70649045941",
    appId: "1:70649045941:web:53b35c638711931a886ffc"
};
//init firebase app
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore(app);
//collection ref
const colRef = collection(db, "books")


//get data
getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })





