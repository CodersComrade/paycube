import Sidenav from "../components/Sidenav";

const Expensetracker = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard bg-dark">
                        <div className="container p-4">
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <div className="card mb-3 px-3 py-5 tracker-box1">
                                        <div className="card-header fs-2 fw-bold amount-header">Total Budget</div>
                                        <div className="card-body">
                                            <p className="card-text amount fs-3 fw-bold text-white"><span>$</span> 18000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-3 px-3 py-5 tracker-box2">
                                        <div className="card-header fs-2 fw-bold amount-header">Total Expense</div>
                                        <div className="card-body">
                                            <p className="card-text amount fs-3 fw-bold text-white"><span>$</span> 16000</p>
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

export default Expensetracker;