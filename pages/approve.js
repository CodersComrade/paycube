
import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Approve = () => {
  const [merchants, setMerchant] = useState([]);
  const [merchantsId, setMerchantsId] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://stormy-fortress-30009.herokuapp.com/merchants")
      .then((res) => res.json())
      .then((data) => setMerchant(data));
  }, []);

  const handleUpdate = (id) => {
    console.log(id);
    setMerchantsId(id);
  };

  const onSubmit = (data, e) => {
    console.log(data);
    fetch(`https://stormy-fortress-30009.herokuapp.com/merchants/${merchantsId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      alert("success")
    e.preventDefault();
  };

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
            <div>
              <h1 className="merchant-title fw-bold my-4 ms-3">Approve Request: <span className="merchant-title-color">{merchants.length}</span></h1>
              <div className="container">
                {merchants.map((merchant) => (
                  <>

                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Logo</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone No</th>
                          <th scope="col">Nid No</th>
                          <th scope="col">Approve</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" key={merchant._id}>{merchant._id}</th>
                          <td>
                            <img
                              className="img-fluid approve-img"
                              src={`data:image/png;base64,${merchant.businessLogo}`}
                            ></img>
                          </td>
                          <td>{merchant.businessName}</td>
                          <td>{merchant.merchantPhone}</td>
                          <td>{merchant.merchantNid}</td>
                          <td>
                            {
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                  onClick={() => handleUpdate(merchant?._id)}
                                  {...register("merchants")}
                                  type="submit"
                                  value="approve"
                                  className="btn-bg fw-bold btn rounded-pill"
                                />
                              </form>
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approve;