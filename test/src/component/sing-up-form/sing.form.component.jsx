import { createAuthWithEmail, createUserWithAuth } from "../../utils/Firebase/firebase.utils"
import { useState } from "react"

import FormInput from "../../form-input/form-component"


const defaultForm = {
    displayName:'',
    email:'',
    password:"",
    confirmPassword:""
}

const SingInForm = () => {
  const [formAll, setFormAll] = useState(defaultForm)
  const {displayName, email, password, confirmPassword} = formAll;
  

  
  const resetFieldForm = () => {
    setFormAll(defaultForm)
  }
  
  
  
  const HandSubmit = async (event) => {
    event.preventDefault()
    if(password !== confirmPassword){
     alert('password do no match')
     return;
    }
   
    try {
       const {user} = await createAuthWithEmail(email, password);  
       await createUserWithAuth(user, {displayName})
       resetFieldForm()

    } catch (error) {
        if(error.code === "auth/email-already-in-use"){
            alert('cannot create user, email already in use. ')
        }else {
        console.log("encounter error here..", error)
        }
    }

  }
  
  
  const HandChange = (event) => {
     const {name, value}= event.target; 
     setFormAll({...formAll, [name]:value  })
  };


    return (<div>
        <h1> sing in with your email and password</h1>
        <form onSubmit={HandSubmit}>
           
                <FormInput 
                label='Display Name'
                type="text"
                onChange={HandChange}
                name='displayName'
                value={displayName}
               required/>
           

          
                <FormInput 
                label='Your E-mail'
                type="email"
                name="email"
                value={email}
                onChange={HandChange}
                required />
          
          
            
                <FormInput
                label= "Password"
                type="password"
                name="password"
                value={password}
                onChange={HandChange}
                required />
       
            
            
                <FormInput
                label='Confirm Password'
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={HandChange}
                required />
            
            <button type="submit" >Sing In</button>
        
        </form>
    </div>  )
}

export default SingInForm