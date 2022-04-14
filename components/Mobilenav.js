import Link from 'next/link'
import useAuth from "./hooks/useAuth";

const Mobilenav = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div className='container-fluid sticky-top mobile-nav'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo" alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item menu mt-2 m-1">
                                    <Link href="/dashboard"><span>Dashboard</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/profile"><span>Profile</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/accounts"><span>Add Money</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/budgetplans"><span>Budget Plans</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/expensetracker"><span>expensetracker</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/analytics"><span>Analytics</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/merchant"><span>Be A Merchant</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    <Link href="/approve"><span>Approve Request</span></Link>
                                </li>
                                <li className="nav-item menu m-1">
                                    {user?.email && <>
                                        <btn onClick={logOut} className="btn-bg fw-bold btn rounded-pill">Logout</btn>
                                    </>}
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="input-box border-0 p-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-bg fw-bold rounded-pill ms-2" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Mobilenav;