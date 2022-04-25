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
        <div>
            <h1>Show review</h1>
            <div class="container">
                <div class="row">

                    {
                        reviews.map(review => <Review review={review}></Review>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Reviews;