import { useState } from "react";
import axios from "axios";
function AccountSettings() {
  //for account settings
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    name: "",
    company: "",
    photo: null, // to store the user provided image
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      // Convert file to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  //for password change
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPasswordData({ ...passwordData, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend to validate old password and change password
      const response = await axios.post("/api/change-password", {
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword,
        retypePassword: passwordData.retypePassword,
      });

      console.log(response.data); // Log the response from the backend

      // Password updated successfully
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        retypePassword: "",
      });
      setErrorMsg("");
    } catch (error) {
      // Handle errors from the backend
      console.error("Error:", error.response.data);
      setErrorMsg(error.response.data.message);
    }
  };

  //for personal info
  const [infoData, setInfoData] = useState({
    bio: "",
    dateOfBirth: "",
    country: "bangladesh",
    languages: [],
    phone: "",
    website: "",
  });

  const handleInfoChange = (e) => {
    const { id, value } = e.target;
    setInfoData({ ...infoData, [id]: value });
  };

  const handleInfoLanguagesChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setInfoData({ ...infoData, languages: selectedOptions });
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/save-info", infoData);
      console.log("Response:", response.data);
      // You can handle success response here, e.g., show a success message
    } catch (error) {
      console.error("Error:", error.response.data);
      // You can handle error response here, e.g., show an error message
    }
  };

  //for socal links
  const [socialLinksData, setSocialLinksData] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    pinterest: "",
    quora: "",
    instagram: "",
  });

  const handleSocialInputChange = (e) => {
    const { id, value } = e.target;
    setSocialLinksData({ ...socialLinksData, [id]: value });
  };

  const handleSocialLinksSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/save-social-links",
        socialLinksData
      );
      console.log("Response:", response.data);
      // You can handle success response here, e.g., show a success message
    } catch (error) {
      console.error("Error:", error.response.data);
      // You can handle error response here, e.g., show an error message
    }
  };

  //for notifications
  const [notificationData, setNotificationData] = useState({
    emailComments: false,
    emailAnswers: false,
    coOwnMoodboard: false,
    emailSummary: false,
    liveEventNotifications: false,
    blockUsers: false,
    emailSummary1: false,
    errorSaving: false,
  });

  const toggleNotification = (key) => {
    setNotificationData({ ...notificationData, [key]: !notificationData[key] });
  };

  const handleNotificationsSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/save-notifications",
        notificationData
      );
      console.log("Response:", response.data);
      // You can handle success response here, e.g., show a success message
    } catch (error) {
      console.error("Error:", error.response.data);
      // You can handle error response here, e.g., show an error message
    }
  };

  const [emailComments, setEmailComments] = useState(true);
  const [emailAnswers, setEmailAnswers] = useState(true);
  const [coOwnMoodboard, setCoOwnMoodboard] = useState(false);
  const [emailSummary, setEmailSummary] = useState(true);
  const [liveEventNotifications, setLiveEventNotifications] = useState(false);
  const [blockUsers, setBlockUsers] = useState(true);
  const [errorSaving, setErrorSaving] = useState(false);
  const [emailSummary1, setEmailSummary1] = useState(true);

  return (
    <div className="main-content d-flex flex-column flex-md-row">
      <div className="mb-4 mb-md-0">
        <div className="aside">
          <nav className="aside-body">
            <h4 className="mb-3">Account Settings</h4>

            <ul className="nav flex-column">
              <li>
                <a className="active" data-toggle="tab" href="#general">
                  General
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#c_pass">
                  Change Password
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#info">
                  Info
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#social">
                  Social links
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#notifications">
                  Notifications
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 mb-30 mb-xl-0">
            <div className="card h-100">
              <div className="card-body p-30">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="general">
                    <h4 className="mb-4">Account Settings</h4>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-xl-4 col-lg-6">
                          <div className="form-group mb-20">
                            <label for="userName" className="mb-2 font-14 bold">
                              User Name
                            </label>
                            <input
                              type="text"
                              id="userName"
                              className="theme-input-style"
                              placeholder="Type Here"
                              value={formData.userName}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group mb-20">
                            <label for="email" className="mb-2 font-14 bold">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="theme-input-style"
                              placeholder="Type Here"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                          <div className="form-group mb-20">
                            <label for="name" className="mb-2 font-14 bold">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="theme-input-style"
                              placeholder="Type Here"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group mb-20">
                            <label for="company" className="mb-2 font-14 bold">
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              className="theme-input-style"
                              placeholder="Type Here"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="upload-avatar d-xl-flex align-items-center flex-column">
                            <div>
                              <div className="attach-file style--two rounded-0 align-items-end mb-3">
                                {formData.photo && (
                                  <img
                                    src={formData.photo}
                                    className="profile-avatar"
                                    alt="User provided"
                                  />
                                )}
                                <div className="upload-button mb-20">
                                  <img
                                    src={
                                      require("../assets/img/svg/gallery.svg")
                                        .default
                                    }
                                    alt=""
                                    className="svg mr-2"
                                  />
                                  <span>Upload Photo</span>
                                  <input
                                    className="file-input"
                                    type="file"
                                    id="fileUpload"
                                    accept="image/*"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>

                              <div className="content">
                                <h4 className="mb-2">Upload a Photo</h4>
                                <p className="font-12 c4">
                                  Allowed JPG, GIF or PNG. Max size <br /> of
                                  800kB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="button-group mt-30 mt-xl-n5">
                            <button type="submit" className="btn">
                              Save Changes
                            </button>
                            <button
                              type="button"
                              className="link-btn bg-transparent ml-3 soft-pink"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="c_pass">
                    <h4 className="mb-4">Change Password</h4>
                    {errorMsg && (
                      <div className="error-message">{errorMsg}</div>
                    )}

                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group mb-20">
                        <label for="oldPassword" className="mb-2 font-14 bold">
                          Old Password
                        </label>
                        <input
                          type="password"
                          id="oldPassword"
                          className="theme-input-style"
                          placeholder="Type Here"
                          value={passwordData.oldPassword}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="newPassword" className="mb-2 font-14 bold">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="theme-input-style"
                          placeholder="Type Here"
                          value={passwordData.newPassword}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label
                          for="retypePassword"
                          className="mb-2 font-14 bold"
                        >
                          Retype Password
                        </label>
                        <input
                          type="password"
                          id="retypePassword"
                          className="theme-input-style"
                          placeholder="Type Here"
                          value={passwordData.retypePassword}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="button-group mt-30">
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="link-btn bg-transparent ml-3 soft-pink"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="info">
                    <h4 className="mb-4">Informations</h4>

                    <form onSubmit={handleInfoSubmit}>
                      <div className="form-group mb-20">
                        <label for="bio" className="mb-2 font-14 bold">
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          className="theme-input-style style--two"
                          placeholder="Type Your Bio"
                          value={infoData.bio}
                          onChange={handleInfoChange}
                        ></textarea>
                      </div>

                      <div className="form-group mb-20">
                        <label for="default-date" className="mb-2 font-14 bold">
                          Date Of Birth
                        </label>
                        <input
                          type="text"
                          id="default-date"
                          className="theme-input-style"
                          placeholder="05 September 1998"
                          value={infoData.dateOfBirth}
                          onChange={handleInfoChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label className="mb-2 font-14 bold">Country</label>
                        <select
                          id="country"
                          className="form-control"
                          value={infoData.country}
                          onChange={handleInfoChange}
                        >
                          <option value="bangladesh">Bangladesh</option>
                          <option value="india">India</option>
                          <option value="nepal">Nepal</option>
                          <option value="pakistan">Pakistan</option>
                        </select>
                      </div>

                      <div className="form-group mb-20">
                        <label className="mb-2 font-14 bold">Language</label>

                        <select
                          className="language-select"
                          name="languages"
                          multiple={true}
                          value={infoData.languages}
                          onChange={handleInfoLanguagesChange}
                        >
                          <option value="english">English</option>
                          <option value="bangla">Bangla</option>
                          <option value="arabic">Arabic</option>
                          <option value="french">French</option>
                        </select>
                      </div>

                      <div className="form-group mb-20">
                        <label for="phone" className="mb-2 font-14 bold">
                          Phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          className="theme-input-style"
                          placeholder="(+656) 254 2568"
                          value={infoData.phone}
                          onChange={handleInfoChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="webSite" className="mb-2 font-14 bold">
                          Website
                        </label>
                        <input
                          type="url"
                          id="webSite"
                          className="theme-input-style"
                          placeholder="Type Here"
                          value={infoData.website}
                          onChange={handleInfoChange}
                        />
                      </div>
                      <div className="button-group mt-30">
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="link-btn bg-transparent ml-3 soft-pink"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="social">
                    <h4 className="mb-4">Social Links</h4>

                    <form onSubmit={handleSocialLinksSubmit}>
                      <div className="form-group mb-20">
                        <label for="facebook" className="mb-2 font-14 bold">
                          Facebook
                        </label>
                        <input
                          type="url"
                          id="facebook"
                          className="theme-input-style"
                          placeholder="Add Links"
                          value={socialLinksData.facebook}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="twitter" className="mb-2 font-14 bold">
                          Twitter
                        </label>
                        <input
                          type="url"
                          id="twitter"
                          className="theme-input-style"
                          placeholder="Add Links"
                          value={socialLinksData.twitter}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="linkedin" className="mb-2 font-14 bold">
                          Linkedin
                        </label>
                        <input
                          type="url"
                          id="linkedin"
                          className="theme-input-style"
                          placeholder="Add Links"
                          alue={socialLinksData.linkedin}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="pinterest" className="mb-2 font-14 bold">
                          Pinterest
                        </label>
                        <input
                          type="url"
                          id="pinterest"
                          className="theme-input-style"
                          placeholder="Add Links"
                          value={socialLinksData.pinterest}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="quora" className="mb-2 font-14 bold">
                          Quora
                        </label>
                        <input
                          type="url"
                          id="quora"
                          className="theme-input-style"
                          placeholder="Add Links"
                          value={socialLinksData.quora}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="form-group mb-20">
                        <label for="instagram" className="mb-2 font-14 bold">
                          Instagram
                        </label>
                        <input
                          type="url"
                          id="instagram"
                          className="theme-input-style"
                          placeholder="Add Links"
                          value={socialLinksData.instagram}
                          onChange={handleSocialInputChange}
                        />
                      </div>

                      <div className="button-group mt-30">
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="link-btn bg-transparent ml-3 soft-pink"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade" id="notifications">
                    <h4 className="mb-5">Notification Settings</h4>

                    <form action="#">
                      <h5 className="text_color mb-4">Account Settings</h5>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={emailComments}
                              onChange={() => setEmailComments(!emailComments)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>Email me when someone comments onmy article</span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={emailComments}
                              onChange={() => setEmailComments(!emailComments)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>Email me when someone answers on my form</span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={coOwnMoodboard}
                              onChange={() =>
                                setCoOwnMoodboard(!coOwnMoodboard)
                              }
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>Invites me to co-own a moodboard</span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={emailSummary}
                              onChange={() => setEmailSummary(!emailSummary)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>
                          Receive an email summary of notifications instead of
                          individual emails
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={liveEventNotifications}
                              onChange={() =>
                                setLiveEventNotifications(
                                  !liveEventNotifications
                                )
                              }
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>Notifications about upcoming live events</span>
                      </div>

                      <h5 className="text_color pt-3 mb-4">Activity</h5>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={blockUsers}
                              onChange={() => setBlockUsers(!blockUsers)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>
                          Blocked users will no longer be allowed to: follow
                          you, see your work in their feed.
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={emailSummary1}
                              onChange={() => setEmailSummary1(!emailSummary1)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>

                        <span>
                          Receive an email summary of notifications instead of
                          individual emails
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="switch-wrap">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={errorSaving}
                              onChange={() => setErrorSaving(!errorSaving)}
                            />
                            <span className="control"></span>
                          </label>
                        </div>
                        <span>Error saving: please try again later</span>
                      </div>

                      <div className="button-group mt-30">
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="link-btn bg-transparent ml-3 soft-pink"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
