import { useState } from "react"

const defaultForm = {
    displayName:'',
    email:'',
    password:"",
    confirmpassword:""
}

const SingInForm = () => {
  const [formAll, setFormAll] = useState(defaultForm)
  const {displayName, email, password, confirmpassword} = formAll
  
  

    return (<div>
        <h1> sing in with your email and password</h1>
        <form onSubmit={() => {}}>
            <label> Display Name
                <input type="text"
                name='name' 
                required/>
            </label>

            <label> Your E-mail
                <input type="email"
               
                required />
            </label> 
          
            <label>Password
                <input type="password"
                
                required />
            </label>
            
            <label>Confirm Password
                <input type="password"   
                required />
            </label>
            <button type="submit" >Sing In</button>
        
        </form>
    </div>  )
}

export default SingInForm