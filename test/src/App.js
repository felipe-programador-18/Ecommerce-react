import "./directory/directory.styles.scss"
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NotFoundHere from "./routes/home/notfound";
import Navigation from "./routes/navigation/navigation";




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
   
   </Route>
  </Routes>
 
 </>)
}

export default App;
