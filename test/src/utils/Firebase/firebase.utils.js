import { initializeApp} from 'firebase/app'
import { getAuth ,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'

import  {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig ={
    apiKey: "AIzaSyCQoQ89UFskes6yhO-6Q_Im5htCA-tmaH8",
    authDomain: "e-commerce-fdf6f.firebaseapp.com",
    projectId: "e-commerce-fdf6f",
    storageBucket: "e-commerce-fdf6f.appspot.com",
    messagingSenderId: "281515855856",
    appId: "1:281515855856:web:b35f90a046b42a4b679735"
  };

const FirebaseApp = initializeApp(firebaseConfig)  

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
//two kinds to sing in google and another is with redirect google
export const singInWithGooglePopup= () => signInWithPopup(auth, googleprovider)  

//export const singGoogleWithRed= () =>  signInWithRedirect(auth,googleprovider)





export const db = getFirestore()


// here i created to verify my authentication with firebase and google!
export const createUserWithAuth = async (userauth, additionalInformation={}) => {  
  const getRefferedDoc = doc(db,'users', userauth.uid )
    
  const userSnapshot = await getDoc( getRefferedDoc)
  
  if(!userSnapshot.exists()){
   const {displayName, email } = userauth;

   const createdAt = new Date()
   try {
     await setDoc(getRefferedDoc, {
       displayName,
        email,
        createdAt,
        ...additionalInformation
     })
   } catch (error) {
      console.log("error in creating users", error.message)
   }
  }
  return getRefferedDoc;


}

export const createAuthWithEmail = async (email, password) => {
   if(!email || !password) return;
   
  return await createUserWithEmailAndPassword(auth, email, password)

}