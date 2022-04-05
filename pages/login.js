import Link from "next/link";

const Login = () => {
    return (
        <>
            <div className="container-fluid login-page py-5  ">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <h2 className="rl-title text-white mb-5">Log In <span className="rl-title-color">Your Account</span></h2>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" autoComplete="off" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label text-white">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" autoComplete="off" />
                                </div>
                                <div className="col-md-3">
                                    <input type="submit" className="btn btn-bg fw-bold mt-3 mb-5" value="Sign In" />
                                </div>
                                <div className="col-md-9">
                                    <p className="redirect-text mt-4">Do Not Have An Account? <Link href="/register"><span className="text-white fw-bold go-login">Register Now</span></Link> </p>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="login.svg" className="img-fluid" alt="register" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;