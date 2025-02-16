import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
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

  //for usert information
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

  //for events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from your database using an API endpoint
    axios
      .get("/api/events") // Replace with your actual API endpoint
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  //for news
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Fetch news article data from your database using an API endpoint
    axios
      .get("/api/news") // Replace with your actual API endpoint
      .then((response) => {
        setNewsArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news articles:", error);
      });
  }, []);

  //for info
  const [userProfile, setUserProfile] = useState({
    currentJob: "",
    currentJobLink: "",
    formerJob: "",
    formerJobLink: "",
    studiedSubject: "",
    studiedSubjectLink: "",
    studiedAt: "",
    followedBy: "",
  });

  useEffect(() => {
    // Define the URL for your back-end API endpoint to fetch user profile data
    const apiUrl = "http://your-backend-api-url.com/userProfile"; // Replace with your actual API endpoint

    // Make an asynchronous GET request to your back-end API
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the userProfile state with the received data
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  //for top follower
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Define the URL for your backend API endpoint to fetch user profiles
    const apiUrl = "http://your-backend-api-url.com/userprofiles"; // Replace with your actual API endpoint

    // Make an asynchronous GET request to your backend API
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the received user profiles
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profiles:", error);
      });
  }, []);

  //for gallery under top gallery
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Define the URL for your backend API endpoint to fetch gallery images
    const apiUrl = "http://your-backend-api-url.com/gallery"; // Replace with your actual API endpoint

    // Make an asynchronous GET request to your backend API
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the received gallery images
        setGalleryImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error);
      });
  }, []);

  //for main gallery
  const [galleryData, setGalleryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Define the URL for your backend API endpoint to fetch gallery data
    const apiUrl = `http://your-backend-api-url.com/gallery?page=${currentPage}`; // Replace with your actual API endpoint

    // Make an asynchronous GET request to your backend API
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the state with the received gallery data
        setGalleryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
      });
  }, [currentPage]);

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
              <div class="card mt-1">
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
                        <a
                          class="active pr-0 pl-2 pl-xl-30"
                          href="profile-chat.html"
                        >
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
                        <Link to="/analysis/gallery" class="p_nav-link active">
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

              <div class="mt-30">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="todays-evnet">
                      <div class="bg-3rd profile-widget-header">
                        <h4 class="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/calender-color.svg"
                            alt=""
                            class="svg mr-3"
                          />
                          Today's Events
                        </h4>
                      </div>
                      <div class="card">
                        <ul class="list-unstyled">
                          {events.map((event, index) => (
                            <li
                              className={`border-bottom ${
                                index === events.length - 1 ? "" : "mb-3"
                              }`}
                              key={event.id}
                            >
                              <h5>{event.title}</h5>
                              <div class="event-meta font-14 d-flex align-items-center">
                                <img
                                  src="../../../assets/img/svg/watch2.svg"
                                  alt=""
                                  class="svg"
                                />
                                <span class="time d-inline-block ml-2">
                                  {event.time}
                                </span>
                                <span class="date d-inline-block ml-2">
                                  {event.date}
                                </span>
                              </div>
                              <p class="mt-2">{event.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div class="news mt-30">
                      <div class="bg-3rd profile-widget-header">
                        <h5 class="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/notification-icon.svg"
                            alt=""
                            class="svg mr-3"
                          />
                          News
                        </h5>
                      </div>
                      <div class="card news-card">
                        {newsArticles.map((article, index) => (
                          <a
                            href="#"
                            className={`item-single border-bottom d-flex align-items-center ${
                              index === newsArticles.length - 1 ? "" : "mb-3"
                            }`}
                            key={article.id}
                          >
                            <div class="content">
                              <p class="mb-1">{article.content}</p>
                              <span class="source font-14 bold c4">
                                {article.source}{" "}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div class="info mt-30">
                      <div class="bg-3rd profile-widget-header">
                        <h5 class="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/info3.svg"
                            alt=""
                            class="svg mr-3"
                          />
                          Info
                        </h5>
                      </div>
                      <div class="card">
                        <div class="card-body">
                          <ul class="p_info-list list-unstyled">
                            <li>
                              {userProfile.currentJob && (
                                <>
                                  UX Designer at{" "}
                                  <a href={userProfile.currentJobLink}>
                                    {userProfile.currentJob}
                                  </a>
                                </>
                              )}
                            </li>
                            <li>
                              {userProfile.formerJob && (
                                <>
                                  Former UI Designer at{" "}
                                  <a href={userProfile.formerJobLink}>
                                    {userProfile.formerJob}
                                  </a>
                                </>
                              )}
                            </li>
                            <li>
                              {userProfile.studiedSubject && (
                                <>
                                  Studied{" "}
                                  <a href={userProfile.studiedSubjectLink}>
                                    {userProfile.studiedSubject}
                                  </a>{" "}
                                  at <a href="#">Torronto</a>
                                </>
                              )}
                            </li>
                            <li>
                              {userProfile.followedBy && (
                                <>
                                  Followed by{" "}
                                  <a href="#">{userProfile.followedBy}</a>
                                </>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="card mt-30">
                      <div class="bg-3rd profile-widget-header">
                        <h5 class="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/info3.svg"
                            alt=""
                            class="svg mr-3"
                          />
                          Top Followers
                        </h5>
                      </div>

                      <table class="style--five">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {profiles.map((profile, index) => (
                            <tr key={index}>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="img">
                                    <img src={profile.avatar} alt="" />
                                  </div>
                                  <div class="name">{profile.name}</div>
                                </div>
                              </td>
                              <td>
                                <a href="#" class="follow-btn">
                                  Follow <i class="icofont-arrow-right"></i>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div class="card mt-30">
                      <div class="bg-3rd profile-widget-header">
                        <h5 class="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/gallery2.svg"
                            alt=""
                            class="svg mr-3"
                          />
                          Gallery
                        </h5>
                      </div>
                      <div class="wedget-gallery pb-1 pl-1 pr-2 pt-2">
                        <div class="row ml-0 mr-0">
                          {galleryImages.map((image, index) => (
                            <div class="col-md-4 col-6 pl-1 pr-0 pb-1">
                              <img
                                src={image.imageUrl}
                                class="img-fluid"
                                alt={`gallery avtar img ${index + 1}`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-7">
                    <div class="card mt-30 mt-md-0">
                      <div class="card-body">
                        <div class="profile-gallery">
                          <div class="row">
                            {galleryData.map((dateAndTime, index) => (
                              <div key={index} class="col-12">
                                <div class="d-flex align-items-center justify-content-between pt-2 mb-20">
                                  <h4>{dateAndTime.date}</h4>
                                  <span class="font-14 bold c4">
                                    {dateAndTime.itemsCount} Items
                                  </span>
                                </div>

                                <div class="col-xl-3 col-lg-4 col-sm-6">
                                  {dateAndTime.images.map(
                                    (imageUrl, imageIndex) => (
                                      <div
                                        key={imageIndex}
                                        class="p_gallery-img mb-30"
                                      >
                                        <img
                                          src={imageUrl}
                                          class="w-100"
                                          alt={`gallery avtar img ${
                                            imageIndex + 1
                                          }`}
                                        />
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}

                            {galleryData.length > 0 && (
                              <div class="col-xl-12">
                                <div class="pagination d-flex flex-column align-items-center mb-10">
                                  <ul class="list-inline d-inline-flex align-items-center mb-2">
                                    <li>
                                      <a href="#">
                                        <img
                                          src="../../../assets/img/svg/left-angle.svg"
                                          alt=""
                                          class="svg"
                                        />
                                      </a>
                                    </li>
                                    <li class="current">
                                      <span class="current">{currentPage}</span>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        onClick={() =>
                                          setCurrentPage(currentPage + 1)
                                        }
                                        disabled={
                                          galleryData.length <= currentPage * 4
                                        }
                                      >
                                        <img
                                          src="../../../assets/img/svg/right-angle.svg"
                                          alt=""
                                          class="svg"
                                        />
                                      </a>
                                    </li>
                                  </ul>
                                  <p class="font-12">
                                    Showing{" "}
                                    {galleryData.reduce(
                                      (totalItems, dateAndTime) =>
                                        totalItems + dateAndTime.images.length,
                                      0
                                    )}{" "}
                                    items of {galleryData.totalItems}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Gallery;
