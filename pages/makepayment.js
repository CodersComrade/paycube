
import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import { useState, useEffect } from "react";

const Makepayments = () => {
  const [merchants, setMerchant] = useState([]);
  // const [merchantsId, setMerchantsId] = useState("");

  useEffect(() => {
    fetch("https://stormy-fortress-30009.herokuapp.com/merchants")
      .then((res) => res.json())
      .then((data) => setMerchant(data));
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
            <h1 className="merchant-title fw-bold my-4 ms-3 text-center">Pay Your Merchant </h1>

            <table className="table">
              <thead>
                <tr>
                  {/* <th scope="col">Logo</th>
                          <th scope="col">Name</th>
                         
                         
                          
                          <th scope="col">Payment</th> */}
                </tr>
              </thead>
              {merchants.map((merchant) => (
                <tbody>
                  {merchant?.merchants && (
                    <tr>
                      <td>
                        <img
                          className="img-fluid approve-img "
                          src={`data:image/png;base64,${merchant?.businessLogo}`}
                        ></img>
                      </td>
                      <td>{merchant?.businessName}</td>
                      <td>
                        <div className="add-btn">
                          <button
                            type="button"
                            className="btn btn-bg rounded-pill"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Make Payment
                          </button>
                        </div>

                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Choose
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">...</div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-bg rounded-pill"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Makepayments;