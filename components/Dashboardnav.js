import useAuth from "./hooks/useAuth";

const Dashboardnav = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <div className="container-fluid ps-5 bg-white dashboard-nav sticky-top">
                <nav className="navbar navbar-light additional-nav">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="input-box border-0 p-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-bg fw-bold rounded-pill ms-2" type="submit">Search</button>
                        </form>
                        {user?.email && <>
                            <button onClick={logOut} className="btn-bg fw-bold btn rounded-pill">Logout</button>
                        </>}
                    </div>
                </nav>
            </div>
            <hr />
        </>
    );
};

export default Dashboardnav;