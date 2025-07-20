
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Prod from './Pages/products';
import Shirt from './Pages/Shirt';
import Pant from './Pages/Pant';

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

=======
              <Route path='/about-us' element ={<about-us/>}/>
              <Route path='/contact' element ={<Contact/>}/>

<<<<<<< HEAD
              <Route path='/products' element={<Prod/>}>
                 <Route path='shirt' element={<Shirt/>}/>
                 <Route path='pants' element={<Pant/>}/>
              </Route>
             
=======
>>>>>>> 82b22a6e563e2052d26090b84bb01173b013dad8

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
