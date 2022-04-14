import React from 'react';

const singleMerchant = ({merchant}) => {
    const {businessName} = merchant;
    console.log(merchant)
    return (
        <div>
            <h4>{businessName}</h4>
        </div>
    );
};

export default singleMerchant;