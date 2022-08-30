import './button.scss'

const Button_Type = {
    google :"google-sign-in",
    inverted: "inverted"

}


const Button = ({children, buttonType, ...otherprops}) => {
  return <button className={`button-container ${Button_Type[buttonType]}`} {...otherprops} >
    {children} 
  
  </button> 

}

export default Button