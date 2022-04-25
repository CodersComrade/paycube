import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from '../components/Mobilenav';
import WriteReview from "../components/WriteReview";

const Feedback = () => {
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
                        <WriteReview></WriteReview>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;