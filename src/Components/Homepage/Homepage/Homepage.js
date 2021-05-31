import React from 'react';
import Footer from '../../ReUse/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Homepage;