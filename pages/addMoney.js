import React from 'react';
import Bank from '../components/Bank';

const addMoney = () => {

    const banks = ['Paypal', 'Bb Bank', 'Fbs Bank', 'Nib Bank', 'Center Bank']
    return (
        <div>
            <h1 className="merchant-title fw-bold my-4 ms-3 text-center">Choose Your <span className="merchant-title-color">Bank</span></h1>
            <div>
                {
                    banks.map(bank => <Bank bank={bank}></Bank>)
                }
            </div>
        </div>
    );
};

export default addMoney;