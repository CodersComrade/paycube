import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://vast-oasis-72771.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <>
            <h1 className='banner-title mb-5 fw-bold text-center'>Customer <span className='title-color'>Reviews</span></h1>
            <div className='container-fluid review-section'>
                <div className="container">
                    <div className="row g-5">

                        {
                            reviews.map(review => <Review review={review}></Review>)
                        }

                    </div>
                </div>

            </div>
        </>
    );
};

export default Reviews;