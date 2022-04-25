import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import Linechart from "../components/Linechart";
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";

const Dashboard = () => {
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
            <div className="container my-5">
              {currentUsers.map(
                (currentUser) =>
                  user.email == currentUser.email && (
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="card amount-box border-0 p-3">
                          <div className="card-body">
                            <h5 className="card-title amount-title mb-3 fw-bold">
                              Transaction
                            </h5>
                            <h3 className="card-subtitle mb-2 text-muted amount">
                              $ 3000
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card amount-box border-0 p-3">
                          <div className="card-body">
                            <h5 className="card-title amount-title mb-3 fw-bold">
                              Cash In
                            </h5>
                            <h3 className="card-subtitle mb-2 text-muted amount">
                              $ 5000
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card amount-box2 border-0 p-3">
                          <div className="card-body">
                            <h5 className="card-title amount-title mb-3 text-white fw-bold">
                              Balance
                            </h5>
                            <h3 className="card-subtitle mb-2 text-white amount">
                              {currentUser.balance}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            <Linechart></Linechart>
            <Reviews></Reviews>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
