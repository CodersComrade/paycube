import React from 'react';

const HighLightDetails = (props) => {
    return (
        <div style={{ background: '#F9f9f9' }} className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-success m-3 p-2">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.ablBlnc}</h2>
                            <p className="card-text">Abbleable Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-primary m-3 p-2">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.totalBlnc}</h2>
                            <p className="card-text">Added Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white bg-info m-3 p-2">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.expBlnc}</h2>
                            <p className="card-text">Expence Balance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighLightDetails;