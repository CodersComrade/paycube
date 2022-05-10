import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import Contact from "../components/Contact";

const Needhelp = () => {
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
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Needhelp;

// service_aeb3phu