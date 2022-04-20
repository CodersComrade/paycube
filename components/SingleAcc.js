import React, { useState } from 'react';
import Link from "next/link";
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
                    <Link href={`/account/${account._id}`}>
                        <button className='btn' type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="See Details" >
                            <img src='/details.png' style={{ maxWidth: '40px' }} alt="" />
                        </button>
                    </Link>
                    
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
                        <div className="col-md-6">
                            <div style={{ border: '1px solid #55428F' }} className="m-1 rounded">
                                <div style={{ color: '#55428F' }} className="p-2 text-center">
                                    <h2 className="fs-2 my-2">$ 1650</h2>
                                </div>
                                <div style={{ background: '#55428F', color: '#fff', border: '1px solid #55428F' }} className="p-2 text-center">
                                    <h4 className="my-1 fw-bold">Available Balance</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAcc;