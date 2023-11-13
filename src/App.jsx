import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Perso from "./pages/perso.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/perso"} element={<Perso/>} />
        </Routes>
    </>
  )
}

export default App
