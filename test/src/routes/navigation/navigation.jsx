import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrownLogo } from "../../assets/crown (1).svg"
import "./navigation.styles.scss"


const Navigation = () => {
    return ( <Fragment >
        <div className="navigation" >  
         <Link  className="logo-container" to='/' >       
         <CrownLogo className="logo"  />
         </Link>

          <div className="nav-links-container" >
           <Link className="nav-link" to='/shop' >Shop</Link>
           <Link className="nav-link" to='/auth' >Sing-In</Link>
          </div>

        </div>
       
        <Outlet/>
        </Fragment>
      )
  }
  

export default Navigation  