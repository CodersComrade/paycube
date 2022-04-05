import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg main-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/"><h1 className='logo fw-bold'><span className='logo-color'>Pay</span>Cube</h1></Link>
                    <div className='ms-auto'>
                        <Link href="/login">
                            <button className='btn btn-bg fw-bold'>Login / Register</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;