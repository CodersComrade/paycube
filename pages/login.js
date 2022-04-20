import Link from "next/link";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";
import useAuth from "../components/hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, Error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    console.log(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
    e.target.value
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid login-page py-5  ">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <h2 className="rl-title fw-bold my-5">
                Log In <span className="rl-title-color">Your Account</span>
              </h2>
              <form onSubmit={handleLoginSubmit} className="row g-3">
                <div className="col-md-12">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label text-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="inputEmail4"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-12">
                  <label
                    htmlFor="inputPassword4"
                    className="form-label text-dark"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    className="form-control"
                    id="inputPassword4"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-3">
                  <button
                    variant="primary"
                    type="submit"
                    className="mb-3 btn-bg btn fw-bold rounded-pill"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-9">
                  <p className="redirect-text mt-2">
                    Do Not Have An Account?{" "}
                    <Link href="/register">
                      <span className="fw-bold go-login">
                        Register Now
                      </span>
                    </Link>{" "}
                  </p>
                </div>
                {user?.email && (
                  <div className="w-50 alert alert-success alert-dismissible fade show">
                    <strong>Success!</strong> User Login Successfully
                  </div>
                )}
              </form>
            </div>
            <div className="col-md-6">
              <img src="login.svg" className="img-fluid" alt="register" />
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
