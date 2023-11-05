import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ExploreServices from '../ExploreServices/ExploreServices';

const ExploreMain = () => {
    return (
        <div>
            <Header></Header>
            <ExploreServices></ExploreServices>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMain;