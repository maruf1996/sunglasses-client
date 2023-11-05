import { useEffect, useState } from "react";


const useService=()=>{
    const [serviceItem,setServiceItem]=useState([]);

    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=>setServiceItem(data))
    },[])
    return [serviceItem];
}

export default useService;