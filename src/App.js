
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Prod from './Pages/products';
import Shirt from './Pages/Shirt';
import Pant from './Pages/Pant';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/about-us' element ={<about-us/>}/>
              <Route path='/contact' element ={<Contact/>}/>

              <Route path='/products' element={<Prod/>}>
                 <Route path='shirt' element={<Shirt/>}/>
                 <Route path='pants' element={<Pant/>}/>
              </Route>
             

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
