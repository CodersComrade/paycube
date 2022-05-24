import Image from 'next/image';
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";

const WriteReview = () => {
    const [review, setReview] = useState({})
    const [currentUsers, setCurrentUsers] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setCurrentUsers(data));
    }, []);

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
        <>
            <div className='card border-0 merchant-form p-5 mt-3'>
                <h1 className="merchant-title fw-bold my-4">Give Your <span className="merchant-title-color">Feedback</span></h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                {currentUsers.map(
                                    (currentUser) =>
                                        user.email == currentUser.email && (
                                            <div className="col-md-12">
                                                <h6 className="label my-3">Your Name</h6>
                                                <input type="text" className="form-control" id="inputName4" name="name" value={currentUser?.userName} onBlur={handleOnBlur} />
                                            </div>
                                        )
                                )}
                                <div className="col-md-12">
                                    <h6 className="label my-3">Your Feedback</h6>
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="review" onBlur={handleOnBlur}></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-bg rounded-pill">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <div className=''>
                                <Image
                                    alt="banner"
                                    src="/feedback.svg"
                                    layout="responsive"
                                    width={700}
                                    height={475}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default WriteReview;