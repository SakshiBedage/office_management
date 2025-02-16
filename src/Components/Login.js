import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
import axiosPublic from "../serviceUtil/axiosPublic";
import axiosInstance from "../serviceUtil/AxiosInterceptor";

//import { response } from "express";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const { userDetails, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({ email: "", password: "" }); // State variable to hold the error message

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({
      ...formData,
      [name]: value, // Use the input's name as the key
    });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(newErrors);
      return;
    }

    // axios.post("http://localhost:8000/api/login", data).then((res) => {
    //   console.log("Response recieved ", res);

    //   if (res.data.status === 200) {
    // setUserDetails({
    //   isAuthenticated: true,
    //   token: res.data.token,
    //   workspace: res.data.workspace,
    // });
    // localStorage.setItem("userSession", JSON.stringify(res.data.token));
    // sessionStorage.setItem("token", res.data.token);
    // sessionStorage.setItem("email", res.data.email);
    // sessionStorage.setItem("userId", res.data.userId);
    // navigate("/superadmin");
    // } else {
    //   // setUserDetails({ isAuthenticated: false, token: null });
    //   setError("Eiher Email or password is invalid");
    // }
    // });

    try {
      // const response = await axios.post("http://localhost:8000/api/login", formData);
      // console.log("Login successful:", response.data);
      navigate("/superadmin");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setFormErrors({ ...formErrors, email: "Invalid email or password." });
    }
  };

  return (
    <div className="mn-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="card">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <h4 className="mb-6 font-20" style={{ textAlign: "center" }}>
                Welcome To
              </h4>
              <img
                src="../../../assets/img/barcadly main1.png"
                className="rounded mx-auto d-block"
                alt="..."
                style={{ paddingBottom: "35px", marginTop: "15px" }}
              />

              <form onSubmit={handleLogin}>
                <div className="form-group mb-20">
                  <label htmlFor="email" className="mb-2 font-14 bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="theme-input-style"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && (
                    <div className="error">{formErrors.email}</div>
                  )}
                </div>
                <div className="form-group mb-20">
                  <label htmlFor="password" className="mb-2 font-14 bold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="theme-input-style"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {formErrors.password && (
                    <div className="error">{formErrors.password}</div>
                  )}
                </div>
                {/* {!userDetails.isAuthenticated && <div>invalid user</div>}{" "} */}
                {/* Display server-side error */}
                <div className="d-flex align-items-center">
                  <button type="submit" className="btn long mr-20">
                    Log In
                  </button>
                  <span className="font-12 d-block">
                    <Link to="/register" className="bold">
                      Sign Up
                    </Link>
                    ,If you have no account.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
