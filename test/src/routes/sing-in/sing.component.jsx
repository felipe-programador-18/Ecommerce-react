
import {singInWithGooglePopup } from '../../utils/Firebase/firebase.utils'


const SingIn = () => {
    const loginGoogle = async () => {
     const response = await singInWithGooglePopup();
     console.log('testing USER',response)
    }


    return( <div>
       <h1>Sing in page!</h1>
       <button onClick={loginGoogle} > Sing my Account</button>

    </div>)
}


export default SingIn


