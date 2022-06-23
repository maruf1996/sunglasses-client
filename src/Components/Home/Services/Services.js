import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=> setServices(data.slice(0,6)))
    },[])
    return (
        <div className="container">
            <h2 className="mt-3 text-danger fw-bolder" style={{fontSize:"48px"}}>Our <span style={{color:"teal"}}>Services</span></h2>
            <div className="my-4">
                <div className="row">
                {
                    services.map(service=> <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
                </div>
            </div>      
        </div>
    );
};

export default Services;