
import SingUpForm from '../../component/sing-up-form/sing-up.form.component';

import {singInWithGooglePopup, createUserWithAuth,} from '../../utils/Firebase/firebase.utils'

import SingAnotherIn from '../../component/sing-in-component/sing-in-component';

const Authentication = () => {
  
    const loginGoogle = async () => {
     
     const {user} = await singInWithGooglePopup();
     const userReffered = await createUserWithAuth(user)
     console.log('user here', userReffered)    
    }

   


    return( <div>
       <h1>Sing in page!</h1>
       <SingAnotherIn/>
       
       { /* <button className='btn btn-primary' onClick={loginGoogle} > Sing in with google popup</button>
        */}
       <SingUpForm/>

    </div>)
}


export default Authentication


