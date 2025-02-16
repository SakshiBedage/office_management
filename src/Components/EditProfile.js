import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import "../assets/js/script";

function EditProfile() {
  //for cover profile
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(""); // State to store the profile image URL

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("profileImage", file);

    // Send the file to the server
    axios
      .post("/uploadProfileImage", formData)
      .then((response) => {
        // Handle the response from the server, which might include the URL of the uploaded image
        console.log("File uploaded successfully:", response.data);

        // Set the profile image URL in the state
        setProfileImageUrl(response.data.imageUrl); // Update imageUrl with the actual key from the response
      })
      .catch((error) => {
        // Handle errors, such as validation errors or server issues
        console.error("Error uploading file:", error);
      });
  };

  //for user profile
  const [selectedProfileFile, setSelectedProfileFile] = useState(null);
  const [profileImageUrl1, setProfileImageUrl1] = useState("");

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setSelectedProfileFile(file);

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("profileImage", file);

    // Send the file to the server
    axios
      .post("/uploadProfileImage", formData)
      .then((response) => {
        // Handle the response from the server, which might include the URL of the uploaded image
        console.log("File uploaded successfully:", response.data);

        // Set the profile image URL in the state
        setProfileImageUrl1(response.data.imageUrl); // Update imageUrl with the actual key from the response
      })
      .catch((error) => {
        // Handle errors, such as validation errors or server issues
        console.error("Error uploading file:", error);
      });
  };

  //for user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
  });

  useEffect(() => {
    // Define the API endpoint for fetching user profile information
    const apiUrl = "/api/userprofile"; // Replace with your actual API endpoint

    // Make an asynchronous GET request to the API
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        // Update the userInfo state with the received data
        setUserInfo({
          name: response.data.name,
          role: response.data.role,
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  //for updating user info
  const [formData, setFormData] = useState({
    aboutmyself: "",
    firstName: "",
    lastName: "",
    age: "",
    position: "",
    address: "",
    phone: "",
    email: "",
    // Add more fields as needed
  });

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      const userData = response.data; // Assuming your backend returns user data
      setFormData(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/user/profile", formData);
      console.log(response.data); // Assuming backend returns some response
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [skills, setSkills] = useState([
    { label: "UI Design", value: "68%" },
    { label: "UX Design", value: "85%" },
    { label: "HTML", value: "35%" },
    { label: "CSS", value: "50%" },
    { label: "Wordpress", value: "50%" },
  ]);

  const getColorClass = (label) => {
    // Add conditions based on your requirements
    if (label === "UX Design") {
      return "pink";
    } else if (label === "HTML") {
      return "green";
    } else if (label === "CSS") {
      return "blue";
    } else if (label === "Wordpress") {
      return "c2";
    } else {
      return ""; // Default color class
    }
  };

  useEffect(() => {
    $(".process-bar-wrapper").each(function () {
      let skillLabel = $(this)
        .closest(".form-group")
        .find("label")
        .text()
        .trim();
      let colorClass = getColorClass(skillLabel);
      console.log("Color Class:", colorClass);
      $(this).addClass(colorClass); // Add color class to the wrapper

      let processBarWidth = $(this)
        .children(".process-bar")
        .data("process-width");

      $(this)
        .children(".process-bar")
        .css({
          width: processBarWidth + "%",
          transition: "2.25s",
        });
    });
  }, [skills]);

  const handleInputChange = (index, newValue) => {
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].value = newValue;
      return updatedSkills;
    });
  };

  // State variables for toggle settings
  const [emailComments, setEmailComments] = useState(true);
  const [emailAnswers, setEmailAnswers] = useState(true);
  const [coOwnMoodboard, setCoOwnMoodboard] = useState(false);
  const [emailSummary, setEmailSummary] = useState(true);
  const [liveEventNotifications, setLiveEventNotifications] = useState(false);
  const [blockUsers, setBlockUsers] = useState(true);
  const [errorSaving, setErrorSaving] = useState(false);
  const [emailSummary1, setEmailSummary1] = useState(true);

  const saveSettingsToBackend = async () => {
    try {
      const response = await axios.post("/api/user/settings", {
        emailComments,
        emailAnswers,
        coOwnMoodboard,
        emailSummary,
        liveEventNotifications,
        blockUsers,
        errorSaving,
        emailSummary1,
      });
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  // Fetch settings from backend when component mounts
  useEffect(() => {
    fetchSettingsFromBackend();
  }, []);

  // Function to fetch settings from backend
  const fetchSettingsFromBackend = async () => {
    try {
      const response = await axios.get("/api/user/settings");
      const settingsData = response.data;
      // Update state variables with settings data from backend
      setEmailComments(settingsData.emailComments);
      setEmailAnswers(settingsData.emailAnswers);
      setCoOwnMoodboard(settingsData.coOwnMoodboard);
      setEmailSummary(settingsData.emailSummary);
      setLiveEventNotifications(settingsData.liveEventNotifications);
      setBlockUsers(settingsData.blockUsers);
      setErrorSaving(settingsData.errorSaving);
      setEmailSummary1(settingsData.emailSummary1);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  //for password change
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeRetypePassword = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    try {
      const dbOldPassword = await getPasswordFromDatabase();
      if (oldPassword === dbOldPassword) {
        if (newPassword === retypePassword) {
          await updatePasswordInDatabase(newPassword);
          console.log("Password updated successfully!");
        } else {
          setPasswordError("New password and retype password do not match.");
        }
      } else {
        setPasswordError("Old password is incorrect.");
      }
    } catch (error) {
      console.error("Error:", error);
      setPasswordError("An error occurred while updating the password.");
    }
  };

  const getPasswordFromDatabase = async () => {
    try {
      const response = await axios.get("/api/getPassword");
      return response.data.password; // Assuming the response contains the user's password
    } catch (error) {
      console.error("Error fetching password:", error);
      throw error; // You can handle the error based on your application's requirements
    }
  };

  const updatePasswordInDatabase = async (password) => {
    try {
      const response = await axios.post("/api/updatePassword", { password });
      console.log("Password updated successfully:", response.data);
      // Optionally, you can handle the response or perform additional actions
    } catch (error) {
      console.error("Error updating password:", error);
      throw error; // You can handle the error based on your application's requirements
    }
  };

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  return (
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="user-profile-img">
                <div class="cover-img">
                  <img
                    src={
                      profileImageUrl || "../../../assets/img/media/cover.jpg"
                    }
                    class="w-100"
                    alt=""
                  />

                  <div class="upload-button">
                    <img src={profileImageUrl} alt="" class="svg mr-2" />
                    <span>Upload Photo</span>
                    <input
                      class="file-input"
                      type="file"
                      id="fileUpload3"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mx-2 mx-lg-4 mx-xl-5">
              <div class="card mb-30 mt-1">
                <div class="user-profile-nav d-flex justify-content-xl-between align-items-xl-center flex-column flex-xl-row">
                  <div class="profile-info d-flex align-items-center">
                    <div class="profile-pic mr-3">
                      <img
                        src={
                          profileImageUrl1 ||
                          "../../../assets/img/media/profile-pic.jpg"
                        }
                        alt=""
                      />

                      <div class="upload-button">
                        <img src={profileImageUrl1} alt="" class="svg mr-2" />
                        <span>Upload Photo</span>
                        <input
                          class="file-input"
                          type="file"
                          id="fileUpload2"
                          accept="image/*"
                          onChange={handleFileChange1}
                        />
                      </div>
                    </div>

                    <div>
                      <h3>{userInfo.name}</h3>
                      <p class="font-14">{userInfo.role}</p>
                    </div>
                  </div>

                  <div class="d-flex align-items-center mt-3 mt-xl-0">
                    <ul class="nav profile-nav-tabs">
                      <li>
                        <a class="active pr-0 pl-2 pl-xl-30">
                          <span class="chat">
                            <img
                              src="../../../assets/img/svg/chat-icon.svg"
                              alt=""
                              class="svg"
                            />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a class="conncetion" href="connection.html">
                          <div class="btn-circle mr-20">
                            <img
                              src="../../../assets/img/svg/user-check.svg"
                              alt=""
                              style={imgStyle}
                            />
                          </div>
                          <div class="font-14">
                            <h4>154</h4>
                            <p class="font-14 text_color">Connections</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/analysis/aboutuserprofile"
                          class="p_nav-link has-before"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/analysis/gallery" class="p_nav-link">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link to="/analysis/userdashboard" class="p_nav-link">
                          User Dashboard
                        </Link>
                      </li>
                    </ul>

                    <div class="px-3">
                      <div class="dropdown-button">
                        <a
                          href="#"
                          class="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div class="menu-icon style--two w-auto justify-content-center mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <Link to="/analysis/editprofile">Edit Profile</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col-xl-6">
                    <div class="card">
                      <div class="card-body p-30">
                        <div class="about-myself mb-5">
                          <h4 class="mb-3">About Myself</h4>
                          <textarea
                            class="theme-input-style style--two"
                            value={formData.aboutmyself}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div class="edit-personal-info mb-5">
                          <div class="row">
                            <div class="col-12">
                              <h4 class="mb-3">Personal Information</h4>
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-fname">First Name</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-fname"
                                class="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-lname">Last Name</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-lname"
                                class="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-age">Age</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-age"
                                class="form-control"
                                value={formData.age}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-position">Position</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-position"
                                class="form-control"
                                value={formData.position}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-address">Address</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-address"
                                class="form-control"
                                value={formData.address}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-phone">Phone</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="text"
                                id="edit-phone"
                                class="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                              <span class="font-12 c4">
                                **We'll never share your phone no with anyone
                                else.
                              </span>
                            </div>
                          </div>

                          <div class="form-group row align-items-center">
                            <div class="col-3">
                              <label for="edit-email">Email</label>
                            </div>
                            <div class="col-9">
                              <input
                                type="email"
                                id="edit-email"
                                class="form-control"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              <span class="font-12 c4">
                                **We'll never share your email with anyone else.
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="edit-skill">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="mb-3">Skill</h4>
                            </div>
                          </div>
                          {skills.map((skill, index) => (
                            <div
                              className={`form-group mb-20 row align-items-center ${getColorClass(
                                skill.label
                              )}`}
                              key={index}
                            >
                              <div className="col-3">
                                <label htmlFor={`edit-${skill.label}`}>
                                  {skill.label}
                                </label>
                              </div>
                              <div className="col-9">
                                <div className="d-flex align-items-center">
                                  <input
                                    type="text"
                                    id={`edit-${skill.label}`}
                                    className="form-control"
                                    value={skill.value}
                                    onChange={(e) =>
                                      handleInputChange(index, e.target.value)
                                    }
                                  />
                                  <div
                                    id={`process-bar-${skill.label}`}
                                    className="process-bar-wrapper style--five"
                                  >
                                    <span
                                      className="process-bar"
                                      style={{ width: skill.value }}
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="card mb-30">
                      <div class="card-body p-30">
                        <div class="account-setting">
                          <div>
                            <h4 class="mb-20 pt-2">Account Setting</h4>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={emailComments}
                                  onChange={() =>
                                    setEmailComments(!emailComments)
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>
                              Email me when someone comments onmy article
                            </div>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={emailAnswers}
                                  onChange={() =>
                                    setEmailAnswers(!emailAnswers)
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>Email me when someone answers on my form</div>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={coOwnMoodboard}
                                  onChange={() =>
                                    setCoOwnMoodboard(!coOwnMoodboard)
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>Invites me to co-own a moodboard</div>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={emailSummary}
                                  onChange={() =>
                                    setEmailSummary(!emailSummary)
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>
                              Receive an email summary of notifications instead
                              of individual emails
                            </div>
                          </div>

                          <div class="form-group mb-20 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={liveEventNotifications}
                                  onChange={() =>
                                    setLiveEventNotifications(
                                      !liveEventNotifications
                                    )
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>Notifications about upcoming live events</div>
                          </div>

                          <div>
                            <h4 class="mb-20 pt-3">Activity</h4>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={blockUsers}
                                  onChange={() => setBlockUsers(!blockUsers)}
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>
                              Blocked users will no longer be allowed to: follow
                              you, see your work in their feed.
                            </div>
                          </div>

                          <div class="form-group mb-4 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={emailSummary1}
                                  onChange={() =>
                                    setEmailSummary1(!emailSummary1)
                                  }
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>
                              Receive an email summary of notifications instead
                              of individual emails
                            </div>
                          </div>

                          <div class="form-group mb-10 d-flex align-items-center">
                            <div class="mr-3">
                              <label class="switch">
                                <input
                                  type="checkbox"
                                  checked={errorSaving}
                                  onChange={() => setErrorSaving(!errorSaving)}
                                />
                                <span class="control"></span>
                              </label>
                            </div>
                            <div>Error saving: please try again later</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card mb-30">
                      <div class="card-body p-30">
                        <div class="change-password">
                          <div>
                            <h4 class="mb-4 pt-2">Change Password</h4>
                          </div>

                          <form onSubmit={handleSubmitPassword}>
                            <div class="form-group mb-4">
                              <label for="old-pass" class="bold font-14 mb-2">
                                Old Password
                              </label>
                              <input
                                type="password"
                                class="theme-input-style"
                                id="old-pass"
                                placeholder="********"
                                value={oldPassword}
                                onChange={handleChangeOldPassword}
                              />
                            </div>

                            <div class="form-group mb-4">
                              <label for="new-pass" class="bold font-14 mb-2">
                                New Password
                              </label>
                              <input
                                type="password"
                                class="theme-input-style"
                                id="new-pass"
                                placeholder="********"
                                value={newPassword}
                                onChange={handleChangeNewPassword}
                              />
                            </div>

                            <div class="form-group mb-10">
                              <label
                                for="retype-pass"
                                class="bold font-14 mb-2"
                              >
                                Retype Password
                              </label>
                              <input
                                type="password"
                                class="theme-input-style"
                                id="retype-pass"
                                placeholder="********"
                                value={retypePassword}
                                onChange={handleChangeRetypePassword}
                              />
                            </div>
                            {passwordError && (
                              <div class="text-danger">{passwordError}</div>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 text-right">
                    <div class="button-group pt-1">
                      <button
                        type="reset"
                        class="link-btn bg-transparent mr-3 soft-pink"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="btn"
                        onClick={saveSettingsToBackend}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
