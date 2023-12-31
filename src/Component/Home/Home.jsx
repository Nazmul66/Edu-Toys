import React from 'react';
import Gallery_section from '../Section/Gallery_section/Gallery_section';
import About_section from '../Section/About_section/About_section';
import Offer_section from '../Section/Offer_section/Offer_section';
import Banner_section from '../Section/Banner_section/Banner_section';
import Category_section from '../Section/Category_section/Category_section';
import titleChange from '../../TitleChange/TitleChange';

const Home = () => {
    titleChange("Home");
    return (
        <div>
            <Banner_section></Banner_section>
            <Offer_section></Offer_section>
            <Category_section></Category_section>
            <About_section></About_section>
            <Gallery_section></Gallery_section>
        </div>
    );
};

export default Home;