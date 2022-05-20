import React from 'react';

const HighLightDetails = (props) => {
    return (
        <div className="container profile-card my-3">
            <div className="row">
                <div className="col-md-4">
                    <div style={{ background: '#55428F' }} className="card text-white m-3 p-2 rounded-pill">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.ablBlnc}</h2>
                            <p className="card-text">Abbleable Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: '#66549c' }} className="card text-white m-3 p-2 rounded-pill">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.totalBlnc}</h2>
                            <p className="card-text">Added Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: '#7364a1' }} className="card text-white m-3 p-2 rounded-pill">
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