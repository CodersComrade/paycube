import Sidenav from "../components/Sidenav";

const Accounts = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard bg-dark">
                        <div className="container p-5">
                            <div className="row g-5">
                                <div className="col-md-12">
                                    <div className="add-new">
                                        <button className="btn btn-bg fw-bold rounded-pill">Add New</button>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://www.fnbank.net/assets/files/wydPmZ7T/FNBJBHilltopCREvening.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">ABC Bank</p>
                                            <p className="card-title text-white fs-5">Name: <span className="info-color fw-bold">Arfin Priom</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">A/C No: <span className="info-color fw-bold">14365447896</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">Balance: <span className="info-color fw-bold">$ 700</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://www.fnbank.net/assets/files/wydPmZ7T/FNBJBHilltopCREvening.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">ABC Bank</p>
                                            <p className="card-title text-white fs-5">Name: <span className="info-color fw-bold">Arfin Priom</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">A/C No: <span className="info-color fw-bold">14365447896</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">Balance: <span className="info-color fw-bold">$ 700</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://www.fnbank.net/assets/files/wydPmZ7T/FNBJBHilltopCREvening.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">ABC Bank</p>
                                            <p className="card-title text-white fs-5">Name: <span className="info-color fw-bold">Arfin Priom</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">A/C No: <span className="info-color fw-bold">14365447896</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">Balance: <span className="info-color fw-bold">$ 700</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://www.fnbank.net/assets/files/wydPmZ7T/FNBJBHilltopCREvening.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">ABC Bank</p>
                                            <p className="card-title text-white fs-5">Name: <span className="info-color fw-bold">Arfin Priom</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">A/C No: <span className="info-color fw-bold">14365447896</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <p className="card-text text-white fs-6">Balance: <span className="info-color fw-bold">$ 700</span></p>
                                            </li>
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
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

export default Accounts;