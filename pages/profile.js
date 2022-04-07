import Sidenav from "../components/Sidenav";

const Profile = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <div className="container p-3">
                            <div className="card p-3 profile-card">
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <img src="/profile.svg" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-title fs-2 text-white">Name: <span className="info-color fw-bold">Arfin Priom</span></p>
                                            <p className="card-text text-white fs-5">User ID: <span className="info-color fw-bold">#143654</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;