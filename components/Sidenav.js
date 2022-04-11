import Link from 'next/link'

const Sidenav = () => {
    return (
        <>
            <div className='container-fluid p-3 sidenav sticky-top'>
                <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo" alt="logo" /></Link>
                <hr />
                <div className='identity'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src="/profile.svg" className="img-fluid profile-pic" alt="profile-pic" />
                        </div>
                        <div className='col-md-8'>
                            <p className='fw-bold id-name'>Arfin Priom</p>
                        </div>
                    </div>
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
                        <Link href="/accounts"><span>Add Money</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/budgetplans"><span>Budget Plans</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/expensetracker"><span>expensetracker</span></Link>
                    </p>
                    <p className='menu'>
                        <Link href="/analytics"><span>Analytics</span></Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidenav;