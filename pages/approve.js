import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import { useState, useEffect } from "react";



const Approve = () => {
  const [merchants, setMerchant] = useState([]);


  useEffect(() => {
    fetch('https://stormy-fortress-30009.herokuapp.com/merchants')
    .then(res => res.json())
    .then(data=>setMerchant(data))
  
  }, [])
  

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
              {
                merchants.map(merchant=>
                <div
                key={merchant._id}
                >
                <p>  {merchant.businessName}</p>
                <img style={{width: '200px'}} src={`data:image/png;base64,${merchant.businessLogo}`}></img>
                <p>Phone: {merchant.merchantPhone}</p>
                <p>Nid: {merchant.merchantNid}</p>
                <button>Approve</button>
                 
                </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approve;
