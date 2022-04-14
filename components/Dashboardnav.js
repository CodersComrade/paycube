<<<<<<< HEAD
import useAuth from "../pages/hooks/useAuth";
=======
import useAuth from "./hooks/useAuth";
>>>>>>> 999d732c204fb56ffba5ddecb6f7e1113290253f

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
                            <btn onClick={logOut} className="btn-bg fw-bold btn rounded-pill">Logout</btn>
                        </>}
                    </div>
                </nav>
            </div>
            <hr />
        </>
    );
};

export default Dashboardnav;