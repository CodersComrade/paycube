import Dashboardnav from "../components/Dashboardnav";
import Adminsidenav from '../components/Adminsidenav';
import Mobileadminnav from '../components/Mobileadminnav';
import Adminbarchart from "../components/Adminbarchart";

const Admianalytics = () => {
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
                        <div className="add-btn">
                            <h3 className="card-title feature-title mb-5 fw-bold">Applicaton <span className="feature-title-color">Overview</span></h3>
                        </div>
                        <Adminbarchart></Adminbarchart>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Admianalytics;