import { initializeApp} from 'firebase/app'
import { getAuth, signInWithRedirect ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig ={
    apiKey: "AIzaSyCQoQ89UFskes6yhO-6Q_Im5htCA-tmaH8",
    authDomain: "e-commerce-fdf6f.firebaseapp.com",
    projectId: "e-commerce-fdf6f",
    storageBucket: "e-commerce-fdf6f.appspot.com",
    messagingSenderId: "281515855856",
    appId: "1:281515855856:web:b35f90a046b42a4b679735"
  };

const FirebaseApp = initializeApp(firebaseConfig)  

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const singInWithGooglePopup= () => signInWithPopup(auth, provider)  

