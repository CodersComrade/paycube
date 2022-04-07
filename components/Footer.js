import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="divider"></div>
            <div className="container-fluid footer py-5">
                <div className="container footer-items">
                    <Link className="navbar-brand" href="/"><h1 className='logo fw-bold text-center'><span className='logo-color'>Pay</span>Cube</h1></Link>
                    <p className="text-muted">Your Money Manager</p>
                    <h2 className="follow-us-title">Follow <span className="text-white">Us</span></h2>
                    <div className="social-icons mt-3 p-3">
                        <img src="/social.png" className="img-fluid social-img" alt="social" />
                    </div>
                    <h6 className="text-muted copyright mt-5">&#9400; Created By <span className="text-white">CodersComrade</span> || 2022 All Rights Resurved</h6>
                </div>
            </div>
        </>
    );
};

export default Footer;