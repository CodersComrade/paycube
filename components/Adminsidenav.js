import Link from 'next/link'
import useAuth from './hooks/useAuth';

const Adminsidenav = () => {
    const { user } = useAuth();
    return (
        <>
            <div className='container-fluid p-3 sidenav sticky-top'>
                <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo mb-2" alt="logo" /></Link>
                <hr />
                <div className='identity py-2'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={user.photoURL} className="img-fluid profile-pic" alt="profile-pic" />
                        </div>
                        <div className='col-md-8'>
                            <p className='fw-bold id-name'>{user.displayName}</p>
                        </div>
                    </div>
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