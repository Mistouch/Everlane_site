
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import AboutUs from "./Pages/about-us";





function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element ={<Home/>}/>
              
              <Route path='/products' element ={<products/>}/>
              <Route path='/contact' element ={<Contact/>}/>
              <Route path="/about-us" element={<AboutUs />} />


          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
