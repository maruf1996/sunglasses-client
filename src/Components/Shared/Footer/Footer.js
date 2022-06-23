import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='' style={{background:"Brown"}}>
            <div className="row py-5 mx-4">
                <div className="col-md-4 text-start mb-4">
                    <div className="">
                        <h4 className='fw-bold mb-3' style={{color:"white"}}>Address</h4>
                        <p className='fw-bold fs-5' style={{color:"#E5E4E2"}}>H#000 (0th Floor), Road #00, New DOHS, <br />
                        Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="col-md-4 text-start mb-4">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <h4 className='fw-bold mb-3' style={{color:"white"}}>Company</h4>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>About</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Project</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Our Team</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Team Condition</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Submit Listing</p></Link>
                        </div>
                        <div className="col-md-6 mb-3">
                        <h4 className='fw-bold mb-3' style={{color:"white"}}>Quick Links</h4>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Quick Links</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Rentals</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Sales</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Contact</p></Link>
                            <Link style={{textDecoration:"none",color:"#E5E4E2"}}><p className='fw-bolder'>Our blog</p></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-start mb-3">
                    <div className="">
                        <h4 className='fw-bold' style={{color:"white"}}>About us</h4>
                        <p className='fw-bolder fs-5' style={{color:"#E5E4E2"}}>consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;