import "./directory/directory.styles.scss"
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
const App = () => {
 return(<>
  <Routes>
   <Route path="/"  element={<Home/>} />
  </Routes>
 
 </>)
}

export default App;
