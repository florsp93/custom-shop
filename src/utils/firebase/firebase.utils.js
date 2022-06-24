//USAMOS ESTE ARCHIVO COMO UNA CONEXION ENTRE FIREBASE Y NUESTRO FRONTEND, YA Q
//SI FIREBASE CAMBIA ALGO EN SU CONFIGURACION YA SABEMOS DONDE ARREGLARLO EN NUESTRO CODIGO

import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
//AUTENTICACION
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

//DATABASE
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// ----Esto lo copie de mi proyecto en la pagina de firebase------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyZ47lGK9iC4g5gJM2mIYBqomnDgXyFU",
  authDomain: "custom-shop-ca094.firebaseapp.com",
  projectId: "custom-shop-ca094",
  storageBucket: "custom-shop-ca094.appspot.com",
  messagingSenderId: "852964204365",
  appId: "1:852964204365:web:ab51e08a4856adb6722104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//------------------------------------------------------------------------------------------------------------

//primero habilitamos el provider en la pagina de fire base
//creamos una nueva instancia del auth provider de Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  //esto es una configuracion que pide google
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

//ADD COLLECTION AND DOCUMENTS
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//GET CATEGORIES AND DOCUMENTS
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

//CREATE USER DOC FROM AUTH
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
