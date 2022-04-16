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
    fetch(`http://localhost:5000/merchants/${merchantsId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
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
              <h1>Approve{merchants.length}</h1>
              {merchants.map((merchant) => (
                <div key={merchant._id}>
                  <p> {merchant.businessName}</p>
                  <img
                    style={{ width: "200px" }}
                    src={`data:image/png;base64,${merchant.businessLogo}`}
                  ></img>
                  <p>Phone: {merchant.merchantPhone}</p>
                  <p>Nid: {merchant.merchantNid}</p>
                  {
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        onClick={() => handleUpdate(merchant?._id)}
                        {...register("merchants")}
                        type="submit"
                        value="approve"
                      />
                    </form>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approve;
