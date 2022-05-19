import React, { useState } from 'react';
import useAuth from './hooks/useAuth';

const Bank = ({ bank }) => {
    const { user } = useAuth();
    const [addMoneyInfo, setAddMoneyInfo] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddMoneyData = { ...addMoneyInfo };
        newAddMoneyData[field] = value;
        setAddMoneyInfo(newAddMoneyData);


    }

    const handleSubmit = e => {

        fetch(`https://stormy-fortress-30009.herokuapp.com/users/${user.email}_${addMoneyInfo.amount}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMoneyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);

                    alert('Money added')
                }
            })
        e.preventDefault()
    }



    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col">

                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <button type="button" className="btn btn-bg border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                {bank}
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col">

                </div>
            </div>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn btn-close text-dark fw-bolder fs-3" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>

                        <div className="modal-body">
                            <h1 className="merchant-title fw-bold my-4 ms-3">Give Your <span className="merchant-title-color">Bank Information</span></h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        name='email'
                                        onBlur={handleOnBlur}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required></input>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>


                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        name='amount'
                                        onBlur={handleOnBlur}
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        required></input>
                                </div>
                                <button type="submit" className="btn btn-bg rounded-pill fw-bold">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bank;