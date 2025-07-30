import React from 'react';
import './ShoesPage.css';
import Footer from "../Footerr/Footer,jsx";
import oxfordImage from '../Assets/oxford.jpeg';
import {useNavigate} from "react-router-dom";

import Menshoe from "../Menp/Menshoe";
import Womenshoe from "../Womenp/Womenshoe";
import Kidshoe from "../Kidsp/Kidshoe"; // Replace with actual images


const ShoesPage = () => {
    const navigate = useNavigate();


    return (
<>
      <div>
         <Menshoe/>
      </div>
    <div>
       <Womenshoe/>
    </div>
    <div>
        <Kidshoe/>
    </div>
    <Footer/>
    </>


    );
};

export default ShoesPage;