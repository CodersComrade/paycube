import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from '../components/Mobilenav';
import MyAccounts from "../components/MyAccounts";

const Expensetracker = () => {
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
                        <MyAccounts></MyAccounts>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Expensetracker;