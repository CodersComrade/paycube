import React from 'react';

const Review = ({ review }) => {
    return (

        <div className="col-md-4">

            <div className="card border-0 rounded-3">
                <div className="card-header quote-logo">
                    #
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>" {review.review} "</p>
                        <footer className="blockquote-footer mt-4">-- <cite title="Source Title">{review.name}</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>

    );
};

export default Review;