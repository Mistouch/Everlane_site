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
import Women_shirt from "./Pages/Women_shirt";
import Women_sweater from "./Pages/Women_sweater";
import Women_woven from "./Pages/Women_woven";
import Women_denimpant from "./Pages/Women_denimpant";
import Women_denimjacket from "./Pages/Women_denimjacket";
import Women_lingerie from "./Pages/Women_lingerie";
import Kid_shirt from "./Pages/Kid_shirt";
import Kid_sweater from "./Pages/Kid_sweater";
import Kid_woven from "./Pages/Kid_woven";
import Kid_denimpant from "./Pages/Kid_denimpant";
import Kid_denimjacket from "./Pages/Kid_denimjacket";
import Women_skirt from "./Pages/Women_skirt";
import Women_blazers from "./Pages/Women_blazers";
import Women_trouser from "./Pages/Women_trouser";





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

                    <Route path='/women/tee' element ={<Women_shirt/>}/>
                    <Route path='/women/sweaters' element ={<Women_sweater/>}/>
                    <Route path='/women/woven' element ={<Women_woven/>}/>
                    <Route path='/women/denimpants' element ={<Women_denimpant/>}/>
                    <Route path='/women/denimjackets' element ={<Women_denimjacket/>}/>
                    <Route path='/women/lingerie' element ={<Women_lingerie/>}/>
                    <Route path='/women/skirts' element ={<Women_skirt/>}/>
                    <Route path='/women/blazers' element ={<Women_blazers/>}/>
                    <Route path='/women/trousers' element ={<Women_trouser/>}/>

                    <Route path='/kids/tee' element ={<Kid_shirt/>}/>
                    <Route path='/kids/sweater' element ={<Kid_sweater/>}/>
                    <Route path='/kids/woven' element ={<Kid_woven/>}/>
                    <Route path='/kids/denimpant' element ={<Kid_denimpant/>}/>
                    <Route path='/kids/denimjacket' element ={<Kid_denimjacket/>}/>






                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
