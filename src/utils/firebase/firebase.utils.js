import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
//AUTENTICACION
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
//DATABASE
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

//creamos una nueva instancia del auth provider de Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  //esto es una configuracion que pide google
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  }
  return userDocRef;
};
