import { useEffect, useState } from "react";
import useAuth from "../components/hooks/useAuth";
import { useForm } from "react-hook-form";

const Processpayment = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const [receiverNumber, setReceiverNumber] = useState();
    const [receiverEmailId, setReceiverEmailId] = useState();
    const [sendingAmount, setSendingAmount] = useState();
    const [currentUsers, setCurrentUsers] = useState([]);

    const onSubmit = (data) => {
        data.senderEmail = user.email;

        fetch("https://stormy-fortress-30009.herokuapp.com/sendmoney", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        setReceiverNumber(data.receiverNo);
        setReceiverEmailId(data.receiverEmail);
        setSendingAmount(data.sendAmount);
    };

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setCurrentUsers(data));
    }, []);

    currentUsers.map(currentUser => {
        if (user.email == currentUser.email) {
            console.log(currentUser._id)
        }
    })

    return (
        <>
            <div className="container">
                <h1 className="merchant-title fw-bold fs-1 my-5 text-center">Pay With <span className="merchant-title-color">PayCube</span></h1>
                <div className='card border-0 merchant-form p-5 my-3'>
                    <img src="/processpayment.svg" className="img-fluid" alt="edit" />
                    <h1 className="merchant-title fw-bold my-4 text-center">Provide Necessary <span className="merchant-title-color">Information</span></h1>
                    <div className='container'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h6 className="label mb-3">Receiver Number </h6>
                            <input
                                {...register("receiverNo")}
                                required
                                className="form-control"
                            />{" "}
                            <br />
                            <h6 className="label my-3">Receiver Email </h6>
                            <input
                                {...register("receiverEmail")}
                                required
                                className="form-control"
                            />
                            <br />
                            <h6 className="label my-3">Amount </h6>
                            <input
                                {...register("sendAmount")}
                                required
                                className="form-control"
                            />
                            <br />
                            {/* <input type="submit" className="btn-bg fw-bold btn rounded-pill" value="Send" /> */}

                            <button type="submit" className="btn-bg fw-bold btn rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fs-4 fw-bold" id="exampleModalLabel">Confirm Payment</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div>
                                    <form>
                                        <div className="modal-body">
                                            <h6 className="label my-3">Receiver Number </h6>
                                            <input
                                                required
                                                className="form-control"
                                                value={receiverNumber}
                                            />
                                            <br />
                                            <h6 className="label my-3">Receiver Email </h6>
                                            <input
                                                required
                                                className="form-control"
                                                value={receiverEmailId}
                                            />
                                            <br />
                                            <h6 className="label my-3">Amount </h6>
                                            <input
                                                required
                                                className="form-control"
                                                value={sendingAmount}
                                            />
                                            <br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline btn-bg fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn-bg fw-bold btn rounded-pill">Confirm</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Processpayment;