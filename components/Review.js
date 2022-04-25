import React from 'react';

const Review = ({ review }) => {
    return (

        <div class="col-4">
            <h3 className='text-center'>{review.name}</h3>
            <p className='text-center'>{review.review}</p>
        </div>

    );
};

export default Review;