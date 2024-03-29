import React, { useState } from "react"
import "../index.css"
import "../assests/style.css"
import { useNavigate } from "react-router-dom"
// import axios from "axios";
// import { toast } from 'react-toastify';
// import { stafflogin } from "../utility/request";

function Login() {
  const navigate = useNavigate();
  const [username,setusername] = useState("");
  const [password ,setpassword] = useState("");

//   const handleclick = async(event) => {
//     event.preventDefault();
//     if(username && password)
//     {
//       stafflogin(username,password);
//     }
//     else 
//     {
//       toast.error("Fill the required details",{
//         position: toast.POSITION.TOP_CENTER
//       });
//     }
//   }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="image-section"></div>
          <div className="content-section">
            <section className="section register d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="d-flex justify-content-center py-4">
                      <a href="/" className="logo d-flex align-items-center w-auto">
                        <img src="logo.png" alt="" />
                        <span className="d-none d-lg-block">AYUSH</span>
                      </a>
                    </div>
                    {/* <!-- End Logo --> */}

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                          <p className="text-center small">Enter your email & password to login</p>
                        </div>

                        <form className="row g-3 needs-validation" novalidate>
                          <div className="col-12">
                            <label for="yourUsername" className="form-label">
                              <b>Email</b>
                            </label>
                            <div className="input-group has-validation">
                              {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                              <input type="text" name="username" className="form-control" onChange = {(e) => setusername(e.target.value)} required />
                            </div>
                          </div>

                          <div className="col-12">
                            <label for="yourPassword" className="form-label">
                              <b>Password</b>
                            </label>
                            <input type="password" name="password" className="form-control" onChange = {(e) => setpassword(e.target.value)} required />
                          </div>

                          {/* <div className="col-12">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                              <label className="form-check-label" for="rememberMe">
                                Remember me
                              </label>
                            </div>
                          </div> */}

                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit" >
                              Login
                            </button>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have an account? <a href="pages-register.html">Create an account</a>
                            </p>
                          </div>
                          <div style={{ display: "flex", justifyContent: "center", columnGap: "1rem", width: "100%", marginTop: "1rem" }}>
                            <button className="actionbutton" onClick={() => navigate("/")}>
                              Admin
                            </button>
                            {/* <button className="actionbutton" onClick={() => navigate("/receptionist/dashboard")}>
                              Receptionist
                            </button> */}
                            <button className="actionbutton" onClick={() => navigate("/")}>
                              Doctor
                            </button>
                          </div>
                          {/* <div style={{ display: "flex", justifyContent: "center", columnGap: "1rem", width: "100%", marginTop: "1rem" }}>
                            <button className="actionbutton" onClick={() => navigate("/assistant/dashboard")}>
                              Assistant 
                            </button>
                            <button className="actionbutton" onClick={() => navigate("/billing/dashboard")}>
                              Billing
                            </button>
                          </div> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
