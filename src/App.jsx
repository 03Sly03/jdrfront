import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PersoDetail from "./pages/PersoDetail.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/perso/:id"} element={<PersoDetail/>} />
        </Routes>
    </>
  )
}

export default App
