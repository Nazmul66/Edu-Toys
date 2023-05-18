import React from 'react';
import Gallery_section from '../Section/Gallery_section/Gallery_section';
import About_section from '../Section/About_section/About_section';
import Offer_section from '../Section/Offer_section/Offer_section';

const Home = () => {
    return (
        <div>
            <Offer_section></Offer_section>
            <About_section></About_section>
            <Gallery_section></Gallery_section>
        </div>
    );
};

export default Home;