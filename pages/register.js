import Link from "next/link";

const Register = () => {
    return (
        <>
            <div className="container-fluid registration-page py-5  ">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <img src="register.svg" className="img-fluid" alt="register" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="rl-title text-white mb-5">Sign Up <span className="rl-title-color">For Free</span></h2>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" autoComplete="off" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label text-white">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" autoComplete="off" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputConfirmPassword4" className="form-label text-white">Confirm Password</label>
                                    <input type="password" className="form-control" id="inputConfirmPassword4" autoComplete="off" />
                                </div>
                                <div className="col-md-3">
                                    <input type="submit" className="btn btn-bg fw-bold mt-3 mb-5" value="Register" />
                                </div>
                                <div className="col-md-9">
                                    <p className="redirect-text mt-4">Already Have An Account? <Link href="/login"><span className="text-white fw-bold go-login">Login Now</span></Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;