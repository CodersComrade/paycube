import Dashboardnav from "../components/Dashboardnav";
import Adminsidenav from '../components/Adminsidenav';
import Mobileadminnav from '../components/Mobileadminnav';
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://stormy-fortress-30009.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <Mobileadminnav></Mobileadminnav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Adminsidenav></Adminsidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                        <h1 className="merchant-title fw-bold my-4 ms-3">All Users: <span className="merchant-title-color">{users.length}</span></h1>
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"># ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => <tr>
                                            <th scope="row" key={user._id}>{user._id}</th>
                                            <td>{user.userName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.balance}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Users;