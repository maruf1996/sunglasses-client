import React from 'react';

const Review = (props) => {
    const {name,reting,review}=props.review;
    return (
        <div className="col-md-4">
            <div className="card shadow p-3 mb-3 bg-body rounded">
                <div className="card-body">
                    <div className="">
                        <h5 className="card-title fs-3">{name}</h5>
                        <p className="card-text fs-5 my-2 fw-bold">Reting: {reting}/5</p>
                        <p className="card-text fs-5 my-2 text-start">{review.slice(0,180)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;