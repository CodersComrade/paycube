import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    fetch("https://stormy-fortress-30009.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setCurrentUsers(data));
  }, []);
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
            <div className="container p-3">
              <div className="card p-5 profile-card border-0">
                {currentUsers.map(
                  (currentUser) =>
                    
                    user.email == currentUser.email && (
                      <div className="row g-3">
                        <div className="col-md-4">
                          <img
                            src={user.photoURL}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-title fs-2 text-dark">
                              Name:{" "}
                              <span className="info-color fw-bold">
                                {currentUser.userName}
                              </span>
                            </p>
                            <p className="card-text text-dark fs-5">
                              User ID:{" "}
                              <span className="info-color fw-bold">
                                #143654
                              </span>
                            </p>
                            <p className="card-text text-dark fs-5">
                              Email:{" "}
                              <span className="info-color fw-bold">
                                {currentUser.email}
                              </span>
                            </p>
                            <p className="card-text text-dark fs-5">
                              Mobile No:{" "}
                              <span className="info-color fw-bold">
                              {currentUser.phoneNumber}
                              </span>
                            </p>
                           <button className="btn btn-bg rounded-pill fw-bold mt-4">
                              Edit Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
