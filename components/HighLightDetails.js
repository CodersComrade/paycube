import React from 'react';

const HighLightDetails = (props) => {
    return (
        <div className="container profile-card my-3 p-3">
            <div className="row">
                <div className="col-md-4">
                    <div style={{ background: '#55428F', clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 51% 89%, 0 89%)" }} className="card text-white m-3 p-2 rounded-3">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.ablBlnc}</h2>
                            <p className="card-text">Available Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: '#66549c', clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 51% 89%, 0 89%)" }} className="card text-white m-3 p-2 rounded-3">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.totalBlnc}</h2>
                            <p className="card-text">Added Balance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{ background: '#7364a1', clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 51% 89%, 0 89%)" }} className="card text-white m-3 p-2 rounded-3">
                        <div className="card-body">
                            <h2 className="card-title fs-2">$ {props.expBlnc}</h2>
                            <p className="card-text">Expensed Balance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighLightDetails;