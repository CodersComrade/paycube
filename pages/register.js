import Link from "next/link";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";
import useAuth from "../components/hooks/useAuth";
import { useRouter } from 'next/router'

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, signInUsingGoogle, isLoading, Error } =
    useAuth();
  const router = useRouter();

  const handleOnBlur = (e, data) => {

    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);

    console.log(newLoginData)
  };


  const handleLoginSubmit = (e, data) => {
    loginData.balance = 50;
    loginData.newAmount = 0;
    if (loginData.password !== loginData.reTypePassword) {
      alert("didnt match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, loginData.balance);

    fetch("https://stormy-fortress-30009.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(result => console.log(result))
    // console.log(data);
    console.log(loginData)
    e.preventDefault();
    router.push('/dashboard')
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid registration-page py-5  ">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <img src="register.svg" className="img-fluid" alt="register" />
            </div>
            <div className="col-md-6">
              <h2 className="rl-title mb-5">
                Sign Up <span className="rl-title-color">For Free</span>
              </h2>
              <form onSubmit={handleLoginSubmit} className="row g-3">
                <div className="col-md-12">
                  <label
                    // htmlFor="inputEmail4"
                    className="form-label text-dark"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    onBlur={handleOnBlur}
                    name="userName"
                    className="form-control"
                    required
                  // id="inputEmail4"
                  // autoComplete="off"
                  />
                </div>

                <div className="col-md-12">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label text-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onBlur={handleOnBlur}
                    name="email"
                    className="form-control"
                    required
                    id="inputEmail4"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-12">
                  <label
                    // htmlFor="inputPassword4"
                    className="form-label text-dark"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    onBlur={handleOnBlur}
                    name="phoneNumber"
                    required
                    className="form-control"
                    // id="inputPassword4"
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
                    onBlur={handleOnBlur}
                    name="password"
                    required
                    className="form-control"
                    id="inputPassword4"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-12">
                  <label
                    htmlFor="inputConfirmPassword4"
                    className="form-label text-dark"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onBlur={handleOnBlur}
                    name="reTypePassword"
                    required
                    className="form-control"
                    id="inputConfirmPassword4"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-3">
                  <button
                    variant="primary"
                    type="submit"
                    className="mb-3 btn-bg btn fw-bold rounded-pill"
                  >
                    Register
                  </button>
                </div>
                <div className="col-md-6">
                  <btn
                    className="btn-bg fw-bold btn rounded-pill"
                    onClick={signInUsingGoogle}
                  >
                    Google
                  </btn>
                </div>
                <div className="col-md-12">
                  <p className="redirect-text">
                    Already Have An Account?{" "}
                    <Link href="/login">
                      <span className="fw-bold go-login">
                        Login Now
                      </span>
                    </Link>{" "}
                  </p>
                </div>
              </form>
              {/* {user?.email && (
                <div className="w-50 alert alert-success alert-dismissible fade show">
                  <strong>Success!</strong> User Created Successfully
                </div>
              )}
               */}
              {Error && (
                <div className="w-50 alert alert-danger alert-dismissible fade show">
                  {Error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
