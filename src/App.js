import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products"
import Cosmetic from "./Pages/Cosmetic"
import Shoe from "./Pages/Shoe"
import Handcraftp from "./Pages/Handcraftp";
import Garmentsector from "./Pages/Garmentsector";
import Men_shirt from "./Pages/Men_shirt";
import Men_sweater from "./Pages/Men_sweater";
import Men_woven from "./Pages/Men_woven";
import Denim_pant_men from "./Pages/Denim_pant_men";
import Denim_jacket_men from "./Pages/Denim_jacket_men";
import Men_lingerie from "./Pages/Men_lingerie";





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
                    <Route path='/Cosmetics' element ={<Cosmetic/>}/>
                    <Route path='/Shoes' element ={<Shoe/>}/>
                    <Route path='/handcraft' element ={<Handcraftp/>}/>
                    <Route path='/garments' element ={<Garmentsector/>}/>
                    <Route path='/men/tee' element ={<Men_shirt/>}/>
                    <Route path='/men/sweater' element ={<Men_sweater/>}/>
                    <Route path='/men/woven' element ={<Men_woven/>}/>
                    <Route path='/men/denimpant' element ={<Denim_pant_men/>}/>
                    <Route path='/men/denimjacket' element ={<Denim_jacket_men/>}/>
                    <Route path='/men/lingerie' element ={<Men_lingerie/>}/>



                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
