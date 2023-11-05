import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutMain from './AboutMain/AboutMain';

const About = () => {
    return (
        <div>
            <Header></Header>
            <AboutBanner></AboutBanner>
            <AboutMain></AboutMain>
            <Footer></Footer>
        </div>
    );
};

export default About;