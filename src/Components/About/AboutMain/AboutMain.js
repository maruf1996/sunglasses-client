import React from 'react';
import aboutimg from '../../../images/images.jpg'

const AboutMain = () => {
    return (
        <div className='container'>
          <div style={{marginTop:"80px", marginBottom:"80px"}} className="row">
              <div className="col-md-6">
                <img src={aboutimg} alt="" className='img-fluid' style={{width:"500px",height:'350px'}}/>
              </div>
              <div className="col-md-6 my-5 text-start">
                <h1 className='fw-bolder mb-3' style={{fontSize:"60px", color:"black"}}>Sunglasses</h1>
                <p style={{color:"gray", fontSize:"18px"}}>In SUNGLASSES we believe that the purchase of glasses can be pleasant and inspiring, and through their proper selection you can not only see better but also look better.. That's why we've created a place full of positive energy and attention to visual comfort, with the largest selection of Oakley glasses that inspire millions of people around the world to do what they enjoy. Visit us and see how we can inspire you as well.</p>
              </div>
            </div>   
        </div>
    );
};

export default AboutMain;