import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import HeroBanner from './HeroBanner/HeroBanner';
import HomeAbout from './HomeAbout/HomeAbout';
import ReviewPart from './ReviewPart/ReviewPart';
import Services from './Services/Services';
import UpdateDersign from './UpdateDersign/UpdateDersign';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <HomeAbout></HomeAbout>
            <UpdateDersign></UpdateDersign>
            <ReviewPart></ReviewPart>
            <Footer></Footer>
        </div>
    );
};

export default Home;