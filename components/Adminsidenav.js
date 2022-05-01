import Link from 'next/link'
import useAuth from './hooks/useAuth';
import { useEffect, useState } from "react";

const Adminsidenav = () => {
    const { user } = useAuth();
    const [currentUsers, setCurrentUsers] = useState([]);

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setCurrentUsers(data));
    }, []);
    return (
        <>
            <div className='container-fluid p-3 sidenav sticky-top'>
                <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo mb-2" alt="logo" /></Link>
                <hr />
                <div className='identity py-2'>
                    {currentUsers.map(
                        (currentUser) =>

                            user.email == currentUser.email && (
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src="/profilepic.svg" className="img-fluid profile-pic" alt="profile-pic" />
                                    </div>
                                    <div className='col-md-8'>
                                        <p className='fw-bold id-name'>{currentUser.userName}</p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
                <hr />
                <div className='sidenav-items mt-4'>
                    <p className='menu'>
                        <Link href="/admindashboard"><span>Dashboard</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/users"><span>All Users</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/adminanalytics"><span>Analytics</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/approvemerchant"><span>Approve Merchant</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/approvereview"><span>Approve Review</span></Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Adminsidenav;