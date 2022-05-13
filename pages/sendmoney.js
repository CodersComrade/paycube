import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";

import { useEffect, useState } from "react";
import useAuth from "../components/hooks/useAuth";
import { useForm } from "react-hook-form";

const Cashin = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const [sendMoneyUsers, setSendMoneyUsers] = useState([]);

  const onSubmit = (data) => {
    data.senderEmail = user.email;

    fetch("https://stormy-fortress-30009.herokuapp.com/sendmoney", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    alert("Added");
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
            <div className="container p-3">
              <div className="card p-5 border-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h5>
                    <label>Receiver Number </label>
                  </h5>
                  <input {...register("receiver")} required /> <br /> <br />
                  <h5>
                    <label>Send Amount</label>
                  </h5>
                  <input {...register("sendAmount")} required /> <br /> <br />
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashin;
