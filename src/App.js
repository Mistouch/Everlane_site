
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products"





function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/products' element ={<Products/>}/>
              <Route path='/contact' element ={<Contact/>}/>
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path='/contact' element ={<Contact/>}/>
              <Route path='/Men' element ={<Home/>}/>
              <Route path='/Women' element ={<Home/>}/>
              <Route path='/Kids' element ={<Home/>}/>



          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
