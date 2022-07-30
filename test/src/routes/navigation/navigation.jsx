import { Outlet } from "react-router-dom"
import { Fragment } from "react"

const Navigation = () => {
    return ( <Fragment >
        <div className="navigation" >  
        <h1>Navigation here!!</h1>
        <Outlet/>
        </div>
        </Fragment>
      )
  }
  

export default Navigation  