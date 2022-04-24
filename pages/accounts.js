import Link from "next/link";
import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from '../components/Mobilenav';
import Areachart from "../components/Areachart";

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
                            <Link href='/addMoney' target="_blank"><button type="button" className="btn btn-bg rounded-pill">Add Money</button></Link>
                        </div>
                        <Areachart></Areachart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accounts;