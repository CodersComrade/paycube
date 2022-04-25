import React, { useState } from 'react';

const Bank = ({ bank }) => {
    const [addMoneyInfo, setAddMoneyInfo] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddMoneyData = { ...addMoneyInfo };
        newAddMoneyData[field] = value;
        setAddMoneyInfo(newAddMoneyData);


    }

    const handleSubmit = e => {

        // fetch(`https://vast-oasis-72771.herokuapp.com/addMoney`, {
        fetch(`https://vast-oasis-72771.herokuapp.com/addMoney`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(addMoneyInfo)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Money added')

                }
            })

        e.preventDefault();

    }

    return (
        <div class="container">
            <div class="row align-items-start">
                <div class="col">

                </div>
                <div class="col text-center">
                    <button type="button" class="btn btn-primary text-dark border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        {bank}
                    </button>
                </div>
                <div class="col">

                </div>
            </div>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">

                            <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>

                        <div class="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input
                                        type="email"
                                        name='email'
                                        onBlur={handleOnBlur}
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required></input>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Bank</label>
                                    <input
                                        type="text"
                                        name='bank'
                                        onBlur={handleOnBlur}
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        required></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Account No</label>
                                    <input
                                        type="number"
                                        name='accountno'
                                        onBlur={handleOnBlur}
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        required></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Amount</label>
                                    <input
                                        type="number"
                                        name='amount'
                                        onBlur={handleOnBlur}
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        required></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bank;