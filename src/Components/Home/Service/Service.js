import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {img,name,price,description,id}=props.service;
    return (
        <div className="col-md-4">
            <div className="mx-1 shadow-lg mb-4 p-3 bg-body rounded">
                <img src={img} alt="" className="rounded img-fluid py-4" style={{width:"300px",height:"140px"}}/>
                <div className="text-start">
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <p className="mb-3" style={{textAlign:"justify", fontWeight:"500"}}> {description.slice(0,120)}</p>
                <Link to={`/service/${id}`}>
                    <button style={{background:'#ee2c2c',border:'white',padding:'12px',color:'white', fontWeight:'500', borderRadius:"10px"}}>Booking Now</button>
                </Link>
                </div> 
            </div> 
    </div>
    );
};

export default Service;