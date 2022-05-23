import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";

const order = () => {
  const { user } = useAuth();

  const [currentUsers, setCurrentUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://stormy-fortress-30009.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setCurrentUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://calm-fjord-73469.herokuapp.com/myorders?email=arr24321@gmail.com")
      .then((res) => res.json())
      .then((data) => setOrders(data));
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
            <div>
                <h1>Our Offer</h1>
            </div>
        <div>
          <h1>  Your order history with PayCube</h1>
            {currentUsers.map(
              (currentUser) => user.email == currentUser.email && <div key={currentUser._id}>
               
                     
                        <div >
                              <table className="table">
                  <thead>
                    <tr>
                   
                      <th scope="col">Seriel</th>
                      <th scope="col">Product Image</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Price</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                  {
                    orders.map(
                        (order , index)=> <tr>
                        <th scope="row" key={order._id}>
                        {index + 1}
                        </th>
                        <td>
                          <img
                            className="img-fluid approve-img"
                            src={order.image}
                          ></img>
                        </td>
                        <td>{order.name}</td>
                      
                        <td>
                        {order.price}
                        </td>
                      </tr>)
                    }
                  </tbody>
                </table>

                        </div>
                    
                


              </div>
            )}
        </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default order;
