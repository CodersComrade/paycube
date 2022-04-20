import React, { useEffect, useState } from 'react';
import BalangeDetails from './BalangeDetails';
import ExpDetails from './ExpDetails';

const ShowDetails = ({account,addNew}) => {
    const [addedMoney, setAddedMoney] = useState([])
    const [addedExp, setAddedExp] = useState([])

    useEffect(() => {
        if (account._id) {
            fetch(`http://localhost:5000/getAddedMoney/${account._id}`)
                .then(res => res.json())
                .then(data => setAddedMoney(data.reverse()))
        }
    }, [account,addNew]);

    useEffect(() => {
        if (account._id) {
            fetch(`http://localhost:5000/getExp/${account._id}`)
                .then(res => res.json())
                .then(data => setAddedExp(data.reverse()))
        }
    }, [account,addNew]);

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