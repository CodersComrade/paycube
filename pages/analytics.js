import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";

const Analytics = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;