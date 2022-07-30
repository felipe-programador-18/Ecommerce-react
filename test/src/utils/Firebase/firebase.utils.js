import { initializeApp} from 'firebase/app'
import { getAuth, signInWithRedirect ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1-kB_TEfhduPqRfBbCCSbir-LhAq_LrM",
    authDomain: "shop-ecommerce-3cd44.firebaseapp.com",
    projectId: "shop-ecommerce-3cd44",
    storageBucket: "shop-ecommerce-3cd44.appspot.com",
    messagingSenderId: "1073525718520",
    appId: "1:1073525718520:web:655925e3157df082276a0d"
  };

const FirebaseApp = initializeApp(firebaseConfig)  

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const singInWithGooglePopup= () => signInWithPopup(auth, provider)  

