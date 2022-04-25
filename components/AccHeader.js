import React from 'react';
import AddExpModal from './AddExpModal';
import AddMoneyModal from './AddMoneyModal';

const AccHeader = ({account,isAddNewExp,isAddNewMoney}) => {
    return (
        <div className="container">
            <div className="row px-5 py-4 bg-white">
                <div className="col-md-6">
                    <h2 style={{ color: '#55428F' }} className='fs-1 text-capitalize fw-bold'>
                        {account.name}
                    </h2>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button" data-bs-toggle="modal" data-bs-target="#addMoneyModal"
                            className="btn btn-outline w-100 my-2"
                        >
                            Add Money
                        </button>
                    </div>
                    {/* modal start */}
                    <div className="modal fade" id="addMoneyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <AddMoneyModal isAddNewMoney={isAddNewMoney} account={account}></AddMoneyModal>
                    </div>
                    {/* modal end */}
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button" data-bs-toggle="modal" data-bs-target="#addExpModal"
                            className="btn btn-outline w-100 my-2"
                        >
                            Exp. Money
                        </button>
                    </div>
                    {/* modal start */}
                    <div className="modal fade" id="addExpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <AddExpModal isAddNewExp={isAddNewExp} account={account}></AddExpModal>
                    </div>
                    {/* modal end */}
                </div>
            </div>
        </div>
    );
};

export default AccHeader;