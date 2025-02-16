import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register({ onSuperAdminClick, onLoginClick, setLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    // Remove non-numeric characters from the input
    const numericInput = input.replace(/\D/g, "");
    // Limit the input to 10 characters
    const limitedInput = numericInput.slice(0, 10);

    setFormData({ ...formData, phoneNumber: limitedInput });
  };

  const validateEmail = (email) => {
    // Use a regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Use a regular expression for password validation
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate phone number, email, and password
    let isValid = true;
    const newFormErrors = { ...formErrors };

    for (const key in formData) {
      if (!formData[key]) {
        isValid = false;
        newFormErrors[key] = "This field is required.";
      } else {
        newFormErrors[key] = "";
      }
    }

    if (formData.phoneNumber.length !== 10) {
      isValid = false;
      newFormErrors.phoneNumber = "Phone number must be 10 digits.";
    } else {
      setLoggedIn(true);
      newFormErrors.phoneNumber = "";
    }

    if (!validateEmail(formData.email)) {
      isValid = false;
      newFormErrors.email = "Invalid email address.";
    } else {
      newFormErrors.email = "";
    }

    if (!validatePassword(formData.password)) {
      isValid = false;
      newFormErrors.password =
        "Password must be at least 8 characters with 1 digit and 1 special character.";
    } else {
      newFormErrors.password = "";
    }

    if (formData.password !== formData.retypePassword) {
      isValid = false;
      newFormErrors.retypePassword = "Passwords do not match.";
    } else {
      newFormErrors.retypePassword = "";
    }

    if (!isValid) {
      // Update the form errors and prevent registration
      setFormErrors(newFormErrors);
      return;
    }
    console.log(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password,
      formData.retypePassword,
      formData.phoneNumber
    );
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );

      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle registration error, e.g., display error message to the user
      console.error("Registration failed:", error.response.data);

      const errorMessage = error.response.data.error;
      setFormErrors({ ...formErrors, email: errorMessage });
    }
  };

  const handleSuperAdminClick = () => {
    onSuperAdminClick();
  };

  return (
    <div class="mn-vh-100 d-flex align-items-center">
      <div class="container">
        <div class="card justify-content-center auth-card">
          <div class="row justify-content-center">
            <div class="col-xl-11" style={{ justifyContent: "center" }}>
              <img
                src="../../../assets/img/barcadly main1.png
                    "
                class="rounded mx-auto d-block"
                alt="..."
              />
              <form action="#" onSubmit={handleRegister}>
                <div class="row">
                  <div class="col-lg-6" style={{ marginTop: "40px" }}>
                    <div class="form-group mb-20">
                      <label for="f_name" class="mb-2 font-14 bold">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="f_name"
                        name="f_name"
                        class="theme-input-style"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div id="f_name_error" class="error">
                      {formErrors.firstName}
                    </div>
                  </div>

                  <div class="col-lg-6" style={{ marginTop: "40px" }}>
                    <div class="form-group mb-20">
                      <label for="l_name" class="mb-2 font-14 bold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="l_name"
                        name="l_name"
                        class="theme-input-style"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                    <div id="l_name_error" class="error">
                      {formErrors.lastName}
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-20">
                      <label for="u_name" class="mb-2 font-14 bold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="u_name"
                        name="u_name"
                        class="theme-input-style"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                    </div>
                    <div id="u_name_error" class="error">
                      {formErrors.phoneNumber}
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-20">
                      <label for="email" class="mb-2 font-14 bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="theme-input-style"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div id="enail_error" class="error">
                      {formErrors.email}
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-20">
                      <label for="password" class="mb-2 font-14 bold">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="theme-input-style"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                    <div id="password_error" class="error">
                      {formErrors.password}
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-20">
                      <label for="r_password" class="mb-2 font-14 bold">
                        Retype Password
                      </label>
                      <input
                        type="password"
                        id="r_password"
                        name="r_password"
                        class="theme-input-style"
                        placeholder="Password"
                        value={formData.retypePassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            retypePassword: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div id="r_password_error" class="error">
                      {formErrors.retypePassword}
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center pt-4">
                  <button
                    type="submit"
                    class="btn long mr-20"
                    onSubmit={(e) => handleRegister()}
                  >
                    Register
                  </button>
                  <span class="font-12 d-block">
                    <a href="/" onClick={onLoginClick} className="bold">
                      Log In
                    </a>
                    ,If you already have an account.
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
export default Register;
