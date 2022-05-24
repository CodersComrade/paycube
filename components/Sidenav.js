import Link from 'next/link'
import useAuth from './hooks/useAuth';
import { useEffect, useState } from "react";

const Sidenav = () => {
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
                        <Link href="/dashboard"><span>Dashboard</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/profile"><span>Profile</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/accounts"><span>My Wallet</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/sendmoney"><span>Send Money</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/order"><span>PayCube Offer</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/makepayment"><span>Make Payment</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/order"><span>Payment History</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/budgetplans"><span>Budget Plans</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/expensetracker"><span>Expense Tracker</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/exchangerates"><span>Exchange Rates</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/analytics"><span>Analytics</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/merchant"><span>Be A Merchant</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/feedback"><span>Feedback</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/needhelp"><span>Need Help ?</span></Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidenav;