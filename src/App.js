
//import Routeers
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//import Components
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import FetchAPI from "./Component/FetchAPI";

function App() {
  return (
    <div className="App">
      <h2>Hello News World</h2>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/General' element={<FetchAPI category="general"/>}></Route> */}
          <Route path='/Business' element={<FetchAPI category="business"/>}></Route>
          <Route path='/Entertainment' element={<FetchAPI category="entertainment"/>}></Route>
          <Route path='/Health' element={<FetchAPI category="health"/>}></Route>
          <Route path='/Science' element={<FetchAPI category="science"/>}></Route>
          <Route path='/Sports' element={<FetchAPI category="sports"/>}></Route>
          <Route path='/Technology' element={<FetchAPI category="technology"/>}></Route>
          <Route path='/Food' element={<FetchAPI category="food"/>}></Route>
          <Route path='/Tourism' element={<FetchAPI category="tourism"/>}></Route>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
