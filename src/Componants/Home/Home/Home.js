import React from 'react';
import Banner from '../../Banner/Banner';
import ContactUs from '../../ContactUs/ContactUs';
import Products from '../../Products/Products';
import Reviews from '../../Reviews/Reviews';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;