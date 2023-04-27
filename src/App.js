import "./App.css";
import { Route, Routes } from "react-router-dom";
//components import
import ApiFetch from "./Component/ApiFetch";
import Home from "./Pages/Home";
import About from "./Pages/About.js";
import Navbar from "./Pages/Navbar";
import Search from "./Pages/Search";

// import Country from './Pages/Country'

function App() {
  return (
    <div className="App">
      <h1>News Application</h1>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path='/Search'  element={<Search/>}/>
        {/* <Route path="/Country" element={<Country/>}/> */}
      </Routes>
      <ApiFetch />
    </div>
  );
}

export default App;
