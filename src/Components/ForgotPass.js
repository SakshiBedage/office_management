import React, { useState } from "react";
import axios from "axios";

function ForgotPass({ onLoginClick }) {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://your-laravel-api/reset-password",
        {
          email,
        }
      );

      // Handle successful password reset request, e.g., display success message to the user
      console.log("Password reset request successful:", response.data);
    } catch (error) {
      // Handle password reset request error, e.g., display error message to the user
      console.error("Password reset request failed:", error.response.data);
    }
  };

  return (
    <div className="mn-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="card justify-content-center auth-card">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <h4 className="mb-5 font-20">Forget Password</h4>

                  <form onSubmit={handleResetPassword}>
                    <div className="form-group mb-30">
                      <label htmlFor="email" className="mb-2 font-14 bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="theme-input-style"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="d-flex align-items-center">
                      <button type="submit" className="btn long mr-20">
                        Send
                      </button>
                      <span className="font-12 d-block">
                        Go back to ,
                        <a href="#" onClick={onLoginClick} className="bold">
                          Log In
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
