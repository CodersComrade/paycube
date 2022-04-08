import Link from "next/link";
import useAuth from "../pages/hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <nav className="navbar navbar-expand-lg main-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/"><h1 className='logo fw-bold'><span className='logo-color'>Pay</span>Cube</h1></Link>
                    <div className='ms-auto'>
                        {!user?.email && <Link href="/register">
                            <button className='btn btn-bg fw-bold rounded-pill'>Login / Register</button>
                        </Link>}
                        {user?.email && <btn onClick={logOut} className="btn-bg m-2 fw-bold btn">Logout</btn>}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;