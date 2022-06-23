import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from '../Review/Review';

const ReviewPart = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container mt-5'>
            <div className="">
                <h4>REVIEW & TESTIMONIALS</h4>
                <h2 className='fs-1 text-bolder'>Top Reviews Sunglasses</h2>
            </div>
            <div className="row my-4">
                {
                    reviews.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ReviewPart;