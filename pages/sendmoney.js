import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import Image from 'next/image';

import { useEffect, useState } from "react";
import useAuth from "../components/hooks/useAuth";
import { useForm } from "react-hook-form";

const Sendmoney = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const [receiverNumber, setReceiverNumber] = useState();
    const [receiverEmailId, setReceiverEmailId] = useState();
    const [sendingAmount, setSendingAmount] = useState();
    const [currentUsers, setCurrentUsers] = useState([]);
    const [sendMoneyInfo, setSendMoneyInfo] = useState({});


    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSendMoneyData = { ...sendMoneyInfo };
        newSendMoneyData[field] = value;
        setSendMoneyInfo(newSendMoneyData);


    }


   
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
    
    // const handleSubmit = e => {

    //     fetch(`http://localhost:5000/users/${user.email}_${addMoneyInfo.amount}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(addMoneyInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {
    //                 console.log(data);

    //                 alert('Money added')
    //             }
    //         })
    //     e.preventDefault()
    // }

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
            <Mobilenav></Mobilenav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>

                        <div className="card border-0 merchant-form p-5 mt-3">
                            <h1 className="merchant-title fw-bold my-4">Give Receiver <span className="merchant-title-color">Information</span></h1>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-5'>
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


                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fs-4 fw-bold" id="exampleModalLabel">Confirm Payment</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="modal-body">
                                                                    <h6 className="label my-3">Receiver Number </h6>
                                                                    <input
                                                                       type="number"
                                                                       name='receiverNumber'
                                                                       onBlur={handleOnBlur}
                                                                        required
                                                                        className="form-control"
                                                                        value={receiverNumber}
                                                                    />
                                                                    <br />
                                                                    <h6 className="label my-3">Receiver Email </h6>
                                                                    <input
                                                                       type="email"
                                                                       name='email'
                                                                       onBlur={handleOnBlur}
                                                                        required
                                                                        className="form-control"
                                                                        value={receiverEmailId}
                                                                    />
                                                                    <br />
                                                                    <h6 className="label my-3">Amount </h6>
                                                                    <input
                                                                       type="number"
                                                                       name='sendMoney'
                                                                       onBlur={handleOnBlur}
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
                                        </form>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className=''>
                                            <Image
                                                alt="banner"
                                                src="/sendmoney.svg"
                                                layout="responsive"
                                                width={700}
                                                height={475}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sendmoney;