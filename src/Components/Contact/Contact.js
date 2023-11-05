import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ContactAbout from './ContactAbout/ContactAbout';

const Contact = () => {
    return (
       <div className="">
            <Header></Header>
            <ContactAbout></ContactAbout>
            <Footer></Footer>
       </div>
    );
};

export default Contact;