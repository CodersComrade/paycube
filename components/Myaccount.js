import React, { useEffect, useState } from 'react';
import CreateNewAcc from './CreateNewAcc';
import useAuth from './hooks/useAuth';
import SingleAcc from './SingleAcc';

const MyAccount = () => {
    const { user } = useAuth();
    const [accounts, setAccounts] = useState([]);
    const [addNewAccount, SetAddNewAccount] = useState(false);

    const addAccount = () => {
        SetAddNewAccount(true);
    }

    useEffect(() => {
        if (user.email) {
            fetch(`https://fierce-wildwood-99415.herokuapp.com/getAccounts/${user.email}`)
                .then(res => res.json())
                .then(data => setAccounts(data.reverse()))
        }
    }, [addNewAccount, user]);

    return (
        <div className="container">
            <div className='d-flex justify-content-center align-items-center text-capitalize m-2 p-2'>
                <button
                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    className='btn btn-outline text-capitalize fs-2 fw-bold'>
                    create new Account
                </button>
            </div>
            {/* modal start */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <CreateNewAcc addAccount={addAccount}></CreateNewAcc>
            </div>
            {/* modal end */}
            <div className="row  m-3">
                {
                    accounts.map(account => <SingleAcc key={account._id} account={account}></SingleAcc>)
                }
            </div>
        </div>
    );
};

export default MyAccount;