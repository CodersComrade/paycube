import Dashboardnav from "../components/Dashboardnav";
import Adminsidenav from '../components/Adminsidenav';
import Mobileadminnav from '../components/Mobileadminnav';

const Approvereview = () => {
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
                    </div>
                </div>
            </div>
        </>
    );
};
export default Approvereview;