import React, { useState } from 'react';
import AddMoneyModal from './AddMoneyModal';

const SingleAcc = ({ account }) => {
    const [acc, setAcc] = useState({})
    
    const findID = () => {
        const selectedAcc = {};
        selectedAcc.name = account.name;
        selectedAcc.id = account._id;
        setAcc(selectedAcc);
    }
    return (
        <div className="col-md-6">
            <div style={{ boxShadow: '1px 1px 4px 0px #55428F' }} className="m-2 my-4 p-3 rounded-3">
                <div className="d-flex justify-content-between align-items-center text-capitalize mb-2 fs-1 fw-700 border-bottom pb-1">
                    <h2 style={{ color: '#55428F' }} className="">{account.name}</h2>
                    <button className='btn' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="See Details" >
                        <img src='/details.png' style={{ maxWidth: '40px' }} alt="" />
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{ border: '1px solid #55428F' }} className="m-1 rounded">
                            <div style={{ color: '#55428F' }} className="p-2 text-center">
                                <h2 className="fs-2 my-2">$ 2450</h2>
                            </div>
                            <div style={{ background: '#55428F', color: '#fff', border: '1px solid #55428F' }} className="p-2 text-center">
                                <h4 className="my-1 fw-bold">Main Balance</h4>
                            </div>
                        </div>
                        <div className="mx-1 my-2 p-1">
                            <button
                                onClick={findID}
                                type="button" data-bs-toggle="modal" data-bs-target="#addMoneyModal"
                                className="btn btn-outline w-100 my-2"
                            >
                                Add Money
                            </button>
                        </div>
                        {/* modal start */}
                        <div className="modal fade" id="addMoneyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <AddMoneyModal account={acc}></AddMoneyModal>
                        </div>
                        {/* modal end */}
                    </div>
                    <div className="col-md-6">
                        <div style={{ border: '1px solid #55428F' }} className="m-1 rounded">
                            <div style={{ color: '#55428F' }} className="p-2 text-center">
                                <h2 className="fs-2 my-2">$ 1650</h2>
                            </div>
                            <div style={{ background: '#55428F', color: '#fff', border: '1px solid #55428F' }} className="p-2 text-center">
                                <h4 className="my-1 fw-bold">Available Balance</h4>
                            </div>
                        </div>
                        <div className="mx-1 my-2 p-1">
                            <button className="btn btn-outline w-100 my-2">Exp. Money</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAcc;