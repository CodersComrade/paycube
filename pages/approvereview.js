import Dashboardnav from "../components/Dashboardnav";
import Adminsidenav from '../components/Adminsidenav';
import Mobileadminnav from '../components/Mobileadminnav';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Approvereview = () => {
    const [review, setReview] = useState([]);
    const [reviewId, setReviewId] = useState("");
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch("https://vast-oasis-72771.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);

    const handleUpdate = (id) => {
        console.log(id);
        setReviewId(id);
    };

    const onSubmit = (data, e) => {
        console.log(data);
        fetch(`https://vast-oasis-72771.herokuapp.com/review/${reviewId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert("success")
        e.preventDefault();
    };
    return (
        <>
            <Mobileadminnav></Mobileadminnav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Adminsidenav></Adminsidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                        <div>
                            <h1 className="merchant-title fw-bold my-4 ms-3">Approve Request: <span className="merchant-title-color">{review.length}</span></h1>
                            <div className="container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"># ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Review</th>
                                            <th scope="col">Approve</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            review.map(singleReview => <tr>
                                                <th scope="row" key={singleReview._id}>{singleReview._id}</th>
                                                <td>{singleReview.name}</td>
                                                <td>{singleReview.review}</td>
                                                <td>
                                                    {
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <input
                                                                onClick={() => handleUpdate(singleReview?._id)}
                                                                {...register("merchants")}
                                                                type="submit"
                                                                value="approve"
                                                                className="btn-bg fw-bold btn rounded-pill"
                                                            />
                                                        </form>
                                                    }
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Approvereview;