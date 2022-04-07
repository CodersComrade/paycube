import Sidenav from "../components/Sidenav";

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <div className="container p-4">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <div className="card mb-3 p-3 amount-box1">
                                        <div className="card-header fs-2 fw-bold amount-header">Total Balance</div>
                                        <div className="card-body">
                                            <p className="card-text amount fs-3 fw-bold text-white"><span className="dollar">$</span> 20000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-3 p-3 amount-box2">
                                        <div className="card-header fs-2 fw-bold amount-header">Cash</div>
                                        <div className="card-body">
                                            <p className="card-text amount fs-3 fw-bold text-white"><span className="dollar">$</span> 5000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-3 p-3 amount-box3">
                                        <div className="card-header fs-2 fw-bold amount-header">Bank A/C</div>
                                        <div className="card-body">
                                            <p className="card-text amount fs-3 fw-bold text-white"><span className="dollar">$</span> 15000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;