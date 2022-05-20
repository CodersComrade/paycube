import React from 'react';

const ExpDetails = ({ addedExp }) => {
    return (
        <div className="col-md-6">
            <div style={{ boxShadow: '1px 1px 10px 0px #55428F' }} className="m-4 p-4 bg-white rounded-3">
                <h2 className='fs-2 mb-3 fw-bold'>Expence Details</h2>
                <div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Describtion</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedExp.map(data => <tr>
                                    <td>{data?.reason}</td>
                                    <td
                                        className='fw-bold fs-5'
                                        style={{ color: '#55428F' }}
                                    >
                                        {data?.amount}
                                    </td>
                                    <td>{data?.date}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExpDetails;