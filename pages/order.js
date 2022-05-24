import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import useAuth from "../components/hooks/useAuth";
import { useEffect, useState } from "react";

const Order = () => {
    const { user } = useAuth();

    const [currentUsers, setCurrentUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setCurrentUsers(data));
    }, []);

    useEffect(() => {
        fetch(`https://calm-fjord-73469.herokuapp.com/myorders?email=${user.email}`)
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
                            <h1 className="merchant-title fw-bold my-5 text-center">Your Order History <span className="merchant-title-color">With PayCube</span></h1>
                 


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
                                                        (order, index) =>  user.email == order.email && <tr>
                                                            <th scope="row" key={order._id}>
                                                                {index + 1}
                                                            </th>
                                                            <td>
                                                                <img
                                                                    className="img-fluid approve-img"
                                                                    src={order.image}
                                                                ></img>
                                                            </td>
                                                            <td className="fs-5">{order.name}</td>

                                                            <td>
                                                                <span className="merchant-title-color fw-bold fs-4">{order.price}</span>
                                                            </td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </table>

                                    </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Order;
