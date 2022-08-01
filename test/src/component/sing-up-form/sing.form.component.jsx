import { createAuthWithEmail } from "../../utils/Firebase/firebase.utils"
import { useState } from "react"

const defaultForm = {
    displayName:'',
    email:'',
    password:"",
    confirmPassword:""
}

const SingInForm = () => {
  const [formAll, setFormAll] = useState(defaultForm)
  const {displayName, email, password, confirmPassword} = formAll;
  

  console.log('what have here', formAll )
  const HandSubmit =  async(event) => {
    event.preventDefault()
    if(!email || !password){
      return await createAuthWithEmail()
    }
     
    const res = await  createAuthWithEmail()
  }
  
  
  const HandChange = (event) => {
     const {name, value}= event.target; 
     setFormAll({...formAll, [name]:value  })
  };


    return (<div>
        <h1> sing in with your email and password</h1>
        <form onSubmit={()=> {}}>
            <label> Display Name
                <input type="text"
                onChange={HandChange}
                name='displayName'
                value={displayName}
               required/>
            </label>

            <label> Your E-mail
                <input type="email"
                name="email"
                value={email}
                onChange={HandChange}
                required />
            </label> 
          
            <label>Password
                <input type="password"
                name="password"
                value={password}
                onChange={HandChange}
                required />
            </label>
            
            <label>Confirm Password
                <input type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={HandChange}
                required />
            
            </label>
            <button type="submit" >Sing In</button>
        
        </form>
    </div>  )
}

export default SingInForm