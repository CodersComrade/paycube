import Link from "next/link";
import { useState } from "react";
import useAuth from "./hooks/useAuth";

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
  };

  return (
    <>
      <div className="container-fluid login-page py-5  ">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <h2 className="rl-title text-white mb-5">
                Log In <span className="rl-title-color">Your Account</span>
              </h2>
              <form onSubmit={handleLoginSubmit} className="row g-3">
                <div className="col-md-12">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label text-white"
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
                    className="form-label text-white"
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
                    className="mb-3 btn-bg btn fw-bold"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-9">
                  <p className="redirect-text mt-4">
                    Do Not Have An Account?{" "}
                    <Link href="/register">
                      <span className="text-white fw-bold go-login">
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
    </>
  );
};

export default Login;
