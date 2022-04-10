import Link from "next/link";
import useAuth from "../pages/hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <div className="main-nav sticky-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo" alt="logo" /></Link>
                        <div className='ms-auto'>
                            {!user?.email && <>
                                <Link href="/login">
                                    <button className='btn btn-outline me-2 btn-bg fw-bold rounded-pill'>Sign In</button>
                                </Link>
                                <Link href="/register">
                                    <button className='btn btn-bg fw-bold rounded-pill'>Sign Up</button>
                                </Link>
                            </>}
                            {user?.email && <btn onClick={logOut} className="btn-bg m-2 fw-bold btn">Logout</btn>}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;