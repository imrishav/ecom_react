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

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        uid,
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

export const addCollectionAndDocuments = async (colletionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(colletionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obje) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obje);
    console.log(newDocRef);
  });
  // console.log(collectionRef);
  return await batch.commit();
};

export const covertCollectionSnapshotToMpa = (collections) => {
  const transformend = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformend.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubs = authentication.onAuthStateChanged((userAuth) => {
      unSubs();
      resolve(userAuth);
    }, reject);
  });
};

export const authentication = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () =>
  authentication.signInWithPopup(googleProvider);

export default firebase;
