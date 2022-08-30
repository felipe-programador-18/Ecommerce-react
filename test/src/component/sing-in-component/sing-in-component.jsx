

import { createAuthWithEmail, createUserWithAuth } from "../../utils/Firebase/firebase.utils"
import { useState } from "react"

import Button from "../button/bottom.component"
import FormInput from "../form-input/form-component"
import "./sing-in.styles.scss"

const defaultForm = {
    email:'',
    password:"",

}

const SingAnotherIn= () => {
  const [formAll, setFormAll] = useState(defaultForm)
  const {email, password} = formAll;
  

  
  const resetFieldForm = () => {
    setFormAll(defaultForm)
  }
  
  
  
  const HandSubmit = async (event) => {
    event.preventDefault()
  
   
    try {
       resetFieldForm()
    } catch (error) {
        
    }

  }
  
  
  const HandChange = (event) => {
     const {name, value}= event.target; 
     setFormAll({...formAll, [name]:value  })
  };
 

    return (<div  className="sing-up-container" >
        <h2>Already have an account ?</h2>
        <span> Sing in with your email and password</span>
        <form onSubmit={HandSubmit}>
         
                <FormInput
                className=''
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
    
            
            <Button className=" btn btn-dark" type="submit" >Sing In</Button>
            
        </form>
    </div>  )
}

export default SingAnotherIn