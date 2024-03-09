import React from 'react';
import "./home.component.scss";
import Carousel from '../carousel/carousel';
import Categories from "./categories.component";
import BestSellers from "./bestSellers.component";
import AboutUs from "./aboutUs.component";
import WeavingProcess from "./weavingProcess.component";
const Home = () => {
    return (
        <div className='home-container'>
            <Carousel />
            <Categories />
            <BestSellers />
            <AboutUs />
            <WeavingProcess />
        </div>
    )
}

export default Home;