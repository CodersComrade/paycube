import Link from 'next/link'

const Sidenav = () => {
    return (
        <>
            <div className='container-fluid mb-3'>
                <div className='row g-3'>
                    <div className='col-md-12'>
                        <div className='sidenav-header m-2 p-3'>
                            <img src='profile.svg' className='img-fluid my-3' alt='profilepic' />
                            <p className='id-name fs-4 fw-bold'>Arfin Priom</p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='sidenav-items m-2 p-3'>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/dashboard" className="menu"><span className="menu">Dashboard</span></Link>
                            </p>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/profile"><span className="menu">Profile</span></Link>
                            </p>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/accounts"><span className="menu">My Wallet</span></Link>
                            </p>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/budgetplans"><span className="menu">My Plans</span></Link>
                            </p>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/expensetracker"><span className="menu">Tracker</span></Link>
                            </p>
                            <p className='sidenav-menu py-2 px-3 my-2 text-white'>
                                <Link href="/Analytics"><span className="menu">Analytics</span></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidenav;