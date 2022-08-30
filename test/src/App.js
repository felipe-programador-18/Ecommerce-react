import "./directory/directory.styles.scss"
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NotFoundHere from "./routes/home/notfound";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication.component";



const MyShop = () => {
  return <h1>I am shop page</h1>
  
}



const App = () => {
 return(<>
  <Routes>
   <Route path="/"  element={<Navigation/>} >
    
    <Route path="*" element={<NotFoundHere/> }  />
    <Route index element={<Home/>} />
    <Route path="shop"  element={<MyShop/>}  />
    <Route path="auth" element={<Authentication/>}  />
   
   
   </Route>
  </Routes>
 
 </>)
}

export default App;
