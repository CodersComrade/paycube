import React from 'react';
import Bank from './Bank';

const addMoney = () => {

    const banks = ['paypal', 'bbBank', 'fbsBank', 'Nib']
    return (
        <div>
            <h1 class="display-6 text-center">Banks</h1>
            <div>
                {
                    banks.map(bank => <Bank bank={bank}></Bank>)
                }
            </div>
        </div>
    );
};

export default addMoney;