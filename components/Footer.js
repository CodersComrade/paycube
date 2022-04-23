import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="divider"></div>
            <div className="container-fluid footer py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="input-group subscribe-part">
                                <h2 className="follow-us-title mb-4 fs-3 fw-bold">Get <span className="fu-color">Newsletter</span></h2>
                                <div className="subscribe-items">
                                    <input type="text" className="input-box border-0 p-2" placeholder="Enter Your Email" aria-label="Recipient's username" />
                                    <button className="btn btn-bg fw-bold rounded-pill mt-3" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container footer-items">
                                <Link className="navbar-brand" href="/"><img src="/logo.png" className="img-fluid logo" alt="logo" /></Link>
                                <p className="text-muted">Your Money Manager</p>
                                <h2 className="follow-us-title fs-3 mt-3 fw-bold">Follow <span className="fu-color">Us</span></h2>
                                <div className="social-icons mt-3 p-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-muted copyright mt-5 text-center">&#9400; Created By <span className="company-name">CodersComrade</span> || All Rights Resurved</h6>
            </div>
        </>
    );
};

export default Footer;