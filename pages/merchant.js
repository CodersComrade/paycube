import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
// import { useForm } from "react-hook-form";
import { useState } from "react";

const Merchant = () => {
  // const { register, handleSubmit } = useForm();
  const [businessName, setBusinessName] = useState("");
  const [businessLogo, setBusinessLogo] = useState(null);
  const [merchantPhone, setMerchantPhone] = useState("");
  const [merchantNid, setMerchantNid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("businessName", businessName);
    formData.append("businessLogo", businessLogo);
    formData.append("merchantPhone", merchantPhone);
    formData.append("merchantNid", merchantNid);

    fetch("https://stormy-fortress-30009.herokuapp.com/merchants", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.insertedId) {
            alert("success")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log(formData);
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
            <div className="card border-0 merchant-form p-5 mt-3">
            <h1 className="merchant-title mb-3 fw-bold">Merchant Register</h1>
              <form onSubmit={handleSubmit}>
              <h6 className="label mb-3">Name of Business </h6>
                <input
                  type="text"
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="input-box border-0 p-2"
                />{" "}
                <br />
                <h6 className="label my-3">Upload Company logo </h6>
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => setBusinessLogo(e.target.files[0])}
                  className="input-box border-0 p-2"
                />
                <br />
                <h6 className="label my-3">Phone Number </h6>
                <input
                  onChange={(e) => setMerchantPhone(e.target.value)}
                  required
                  type="number"
                  className="input-box border-0 p-2"
                />
                <br />
                <h6 className="label my-3">NID Number </h6>
                <input
                  onChange={(e) => setMerchantNid(e.target.value)}
                  required
                  type="number"
                  className="input-box border-0 p-2"
                />
                <br />
                <input type="submit" className="btn-bg fw-bold btn rounded-pill mt-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merchant;