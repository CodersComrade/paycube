import Dashboardnav from "../components/Dashboardnav";
import Adminsidenav from '../components/Adminsidenav';
import Mobileadminnav from '../components/Mobileadminnav';
import Adminareachart from "../components/Adminareachart";
import { useEffect, useState } from "react";

const Admindashboard = () => {
    const [users, setUsers] = useState([])
    const [merchants, setMerchant] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fortress-30009.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/merchants")
            .then((res) => res.json())
            .then((data) => setMerchant(data));
    }, []);
    return (
        <>
            <Mobileadminnav></Mobileadminnav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Adminsidenav></Adminsidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                        <div className="container my-5">
                            <div className="row g-4">
                                <div className="col-md-3">
                                    <div className="card mb-3 p-3 amount-box border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="/users.svg" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-center">
                                                    <p className="card-text fs-5 fw-bold text-muted">Users</p>
                                                    <h5 className="card-title fs-3 fw-bolder">{users.length}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card mb-3 p-3 amount-box border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="/transaction.svg" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-center">
                                                    <p className="card-text fs-5 fw-bold text-muted">Transaction</p>
                                                    <h5 className="card-title fs-3 fw-bolder">$ 30000</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card mb-3 p-3 amount-box border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="/approve.svg" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-center">
                                                    <p className="card-text fs-5 fw-bold text-muted">Approved</p>
                                                    <h5 className="card-title fs-3 fw-bolder">{merchants.length}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card mb-3 p-3 amount-box border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="/request.svg" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-center">
                                                    <p className="card-text fs-5 fw-bold text-muted">Request</p>
                                                    <h5 className="card-title fs-3 fw-bolder">{merchants.length}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Adminareachart></Adminareachart>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Admindashboard;