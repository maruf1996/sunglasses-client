import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404-img.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img style={{width:"630px"}} className='img-fluid my-5' src={notfound} alt="" />
            <h2>Oops! Page Is Not Found</h2>
            <Link to="/home">
                <button className='btn btn-info my-3 text-light px-4 py-2 fw-bold'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;