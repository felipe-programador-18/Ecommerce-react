import { createAuthWithEmail, createUserWithAuth } from "../../utils/Firebase/firebase.utils"
import { useState } from "react"

import Button from "../button/bottom.component"
import FormInput from "../../form-input/form-component"
import "./sing.up.styles.scss"

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
 

    return (<div  className="sing-up-container" >
        <span> sing in with your email and password</span>
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
            
            <Button className=" btn btn-dark" type="submit" >Sing In</Button>
            
        </form>
    </div>  )
}

export default SingInForm