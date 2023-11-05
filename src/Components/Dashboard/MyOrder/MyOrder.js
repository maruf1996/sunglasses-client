import React, { useEffect, useState } from 'react';
import MyOrderDetails from '../MyOrderDetails/MyOrderDetails';

const MyOrder = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=> setServices(data.slice(0,6)))
    },[])
    return (
        <div>
           <h1>My Order</h1> 
           <div className="row">
           {
                    services.map(service=> <MyOrderDetails
                        key={service.id}
                        service={service}
                    ></MyOrderDetails>)
            }
           </div>
        </div>
    );
};

export default MyOrder;