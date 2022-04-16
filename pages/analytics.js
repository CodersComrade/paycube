import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from '../components/Mobilenav';
import Barchart from "../components/Barchart";

const Analytics = () => {
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
                            <h3 className="card-title feature-title mb-5 fw-bold">See Your <span className="feature-title-color">Expenditure</span></h3>
                        </div>
                        <Barchart></Barchart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;