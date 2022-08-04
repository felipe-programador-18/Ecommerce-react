import "./form.styles.scss"

const FormInput = ({label,...otherprops}) => {
    
    return(  
    <div className="group" >
     <input form='form-input' {...otherprops} /> 
    
      { label &&  (    
          <label className={`${otherprops.value.length ? "shrink": ""}form-input-label`} > {label} </label>
          
      )}   

    </div> )
}

export default FormInput