import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCrlwVeiQxJ9wFqTGA3dRq68MoJCUVwlR4",
  authDomain: "react-ecom-26f57.firebaseapp.com",
  databaseURL: "https://react-ecom-26f57.firebaseio.com",
  projectId: "react-ecom-26f57",
  storageBucket: "react-ecom-26f57.appspot.com",
  messagingSenderId: "1030498264284",
  appId: "1:1030498264284:web:7739521b63c6a791494019",
  measurementId: "G-GGK36S858G",
};

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.log("error in creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const authentication = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => authentication.signInWithPopup(provider);

export default firebase;
