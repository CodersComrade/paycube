
import React, { useState } from 'react';


const WriteReview = () => {
    const [review, setReview] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newReview = { ...review }
        newReview[field] = value;
        console.log(newReview);
        setReview(newReview);

    }

    const handleSubmit = e => {

        // fetch(`https://vast-oasis-72771.herokuapp.com/review`, {
        fetch(`https://vast-oasis-72771.herokuapp.com/review`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Posted')
                    setReview('');
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2>Write Review</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className='mb-3'
                    placeholder="Your Name"
                    onBlur={handleOnBlur} />
                <br />
                <textarea
                    placeholder='Write your review'
                    name="review"
                    onBlur={handleOnBlur}
                    rows="4"
                    cols="50"></textarea>
                <br />

                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default WriteReview;