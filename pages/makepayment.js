import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import { useState, useEffect } from "react";
import Link from 'next/link';

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
                  <th scope="col">Logo</th>
                  <th scope="col">Name</th>
                  {/* <th scope="col">Payment</th> */}
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
                          >
                            <Link href="/processpayment">Make Payment</Link>
                          </button>
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