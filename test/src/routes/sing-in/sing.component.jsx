
import SingInForm from '../../component/sing-up-form/sing.form.component';
import {singInWithGooglePopup, createUserWithAuth,} from '../../utils/Firebase/firebase.utils'


const SingIn = () => {
  
    const loginGoogle = async () => {
     
     const {user} = await singInWithGooglePopup();
     const userReffered = await createUserWithAuth(user)
     console.log('user here', userReffered)    
    }

   


    return( <div>
       <h1>Sing in page!</h1>
       <button onClick={loginGoogle} > Sing my Account</button>
       <SingInForm/>

    </div>)
}


export default SingIn


