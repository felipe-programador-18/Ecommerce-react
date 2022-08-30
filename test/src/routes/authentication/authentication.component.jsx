
import SingInForm from '../../component/sing-in-form/sing-in.form.component';
import {singInWithGooglePopup, createUserWithAuth,} from '../../utils/Firebase/firebase.utils'


const Authentication = () => {
  
    const loginGoogle = async () => {
     
     const {user} = await singInWithGooglePopup();
     const userReffered = await createUserWithAuth(user)
     console.log('user here', userReffered)    
    }

   


    return( <div>
       <h1>Sing in page!</h1>
       <button className='btn btn-primary' onClick={loginGoogle} > Sing in with google popup</button>
       <SingInForm/>

    </div>)
}


export default Authentication


