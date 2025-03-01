import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
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

    try {
      const response = await fetch("/Users.json");
      if (!response.ok) throw new Error("Failed to load user data.");
      const users = await response.json();

      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        if (user.role === "superadmin")
          navigate("/superadmin", { state: { user } });
        else if (user.role === "admin")
          navigate("/services", { state: { user } });
        else if (user.role === "member") navigate("/mini", { state: { user } });
      } else {
        setFormErrors({ ...formErrors, email: "Invalid email or password." });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setFormErrors({ email: "Error connecting to the server." });
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
                src="/assets/img/barcadly main1.png"
                className="rounded mx-auto d-block"
                alt="Barcadly Logo"
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

                <div className="d-flex align-items-center">
                  <button type="submit" className="btn long mr-20">
                    Log In
                  </button>
                  <span className="font-12 d-block">
                    <Link to="/register" className="bold">
                      Sign Up
                    </Link>
                    , If you have no account.
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
