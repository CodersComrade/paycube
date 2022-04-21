import React from 'react';
import BalangeDetails from './BalangeDetails';
import ExpDetails from './ExpDetails';

const ShowDetails = ({addedMoney,addedExp}) => {
    

    return (
        <div style={{ background: '#F9f9f9' }} className="container">
            <div className="row">
                <BalangeDetails addedMoney={addedMoney}></BalangeDetails>
                <ExpDetails addedExp={addedExp}></ExpDetails>
            </div>
        </div>
    );
};

export default ShowDetails;