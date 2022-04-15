import Link from "next/link";

import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from '../components/Mobilenav';
import Barchart from "../components/Barchart";

const Accounts = () => {
    return (
        <>
            <Mobilenav></Mobilenav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                        <div className="add-btn">
                            <Link href='https://lit-lowlands-64850.herokuapp.com/' target="_blank"><button type="button" className="btn btn-bg rounded-pill">Add New Account</button></Link>
                        </div>
                        <Barchart></Barchart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accounts;