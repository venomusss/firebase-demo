import {initializeApp} from "firebase/app";

import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, query, where,
    orderBy, serverTimestamp, getDoc, updateDoc,
} from "firebase/firestore";

import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged
} from 'firebase/auth'

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
const auth = getAuth(app);
//collection ref
const colRef = collection(db, "books")

//queries
const q = query(colRef, orderBy('createdAt'))


onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id})
    })
    console.log(books)
})

export const addBook = (title, author) => {
    addDoc(colRef, {
        title: title,
        author: author,
        createdAt: serverTimestamp(),
    }).then();
}

export const removeBook = (id) => {
    const docRef = doc(db, 'books', id)
    deleteDoc(docRef).then();
}

export const updateBook = (id, title, author) => {
    const docRef = doc(db, 'books', id);
    updateDoc(docRef, {
        title: title,
        author: author,
    }).then()
}

const docRef = doc(db, 'books', "z6W0m9Ts9yGMrucJZGND")

getDoc(docRef).then();

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

export const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("User created: " + cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("User signed in: " + cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export const signOutUser = () => {
    signOut(auth)
        .then(() => {
            console.log("User is signed out")
        })
        .catch((err) => {
            console.log(err.message)
        })
}

onAuthStateChanged(auth, (user) => {
    console.log("User status changed: " + user)
})




