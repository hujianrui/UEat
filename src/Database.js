import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Database {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyB6F6PHFhFdLa_WeVubFSpDHbItasCSXs0",
            authDomain: "ueat-c91c3.firebaseapp.com",
            databaseURL: "https://ueat-c91c3.firebaseio.com",
            projectId: "ueat-c91c3",
            storageBucket: "ueat-c91c3.appspot.com",
            messagingSenderId: "47834770750",
            appId: "1:47834770750:web:7b09cc2d075e3ebaa5106f",
            measurementId: "G-1DE1FNH67H"
        };
        firebase.initializeApp(firebaseConfig);
    }

    signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
    }

    signOut = () => firebase.auth().signOut();

}

export default new Database();