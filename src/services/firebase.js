import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBw8QyKtZdfp456o9625UFETQPimyP7Cs8",
    authDomain: "social-login-46e1b.firebaseapp.com",
    projectId: "social-login-46e1b",
    storageBucket: "social-login-46e1b.appspot.com",
    messagingSenderId: "814638015377",
    appId: "1:814638015377:web:b718561b4678a9821b3030"
};

firebase.initializeApp(firebaseConfig);

const userAuth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => userAuth.signInWithPopup(provider);

export {
    userAuth,
    signInWithGoogle
}