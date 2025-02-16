import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import ApexCharts from "apexcharts";
import { column2_options } from "../assets/plugins/apex/custom-apexcharts";

function UserDashboard() {
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

  //for salary and task
  const [statistics, setStatistics] = useState({
    salary: null,
    tasksAllotted: null,
    incompleteTasks: null,
    tasksCompleted: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salaryResponse = await axios.get("/api/salary");
        const tasksAllottedResponse = await axios.get("/api/tasksAllotted");
        const incompleteTasksResponse = await axios.get("/api/incompleteTasks");
        const tasksCompletedResponse = await axios.get("/api/tasksCompleted");

        setStatistics({
          salary: salaryResponse.data,
          tasksAllotted: tasksAllottedResponse.data,
          incompleteTasks: incompleteTasksResponse.data,
          tasksCompleted: tasksCompletedResponse.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //for updates
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/latestUpdates");
        setUpdates(response.data);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchData();
  }, []);

  //for notification
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchData();
  }, []);

  //for events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  //for tasks
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks"); // Replace '/api/tasks' with your backend endpoint
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  //for pipline
  const [timelineEvents, setTimelineEvents] = useState([]);

  useEffect(() => {
    const fetchTimelineEvents = async () => {
      try {
        const response = await axios.get("/api/timeline-events"); // Replace '/api/timeline-events' with your backend endpoint
        setTimelineEvents(response.data);
      } catch (error) {
        console.error("Error fetching timeline events:", error);
      }
    };

    fetchTimelineEvents();
  }, []);

  //for  transcation history
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/transactions"); // Replace '/api/transactions' with your actual backend endpoint
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const column2_chart = new ApexCharts(
      document.querySelector("#apex_column2-chart"),
      column2_options
    );
    column2_chart.render();
    // Run the progress bar initialization when the component mounts
    $(".ProgressBar_23").bekeyProgressbar({ animateText: true });
    $(".ProgressBar_4").bekeyProgressbar({ animateText: true });
    $(".ProgressBar_5").bekeyProgressbar({ animateText: true });
    $(".ProgressBar_20").bekeyProgressbar({ animateText: true });
    $(".process-bar-wrapper .process-bar").each(function () {
      const width = $(this).data("process-width");
      $(this).css("width", `${width}%`);
    });
  }, []);

  const [isChecked, setChecked] = useState(true);
  const [isLineVisible, setLineVisible] = useState(true);

  const [isChecked1, setChecked1] = useState(true);
  const [isLineVisible1, setLineVisible1] = useState(true);

  const [isChecked2, setChecked2] = useState(false);
  const [isLineVisible2, setLineVisible2] = useState(false);

  const [isChecked3, setChecked3] = useState(false);
  const [isLineVisible3, setLineVisible3] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setLineVisible(false);
  };

  const handleCheckboxChange1 = () => {
    setChecked1(!isChecked1);
    setLineVisible1(false);
  };

  const handleCheckboxChange2 = () => {
    setChecked2(!isChecked2);
    setLineVisible2(false);
  };

  const handleCheckboxChange3 = () => {
    setChecked3(!isChecked3);
    setLineVisible3(false);
  };

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  return (
    <>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="user-profile-img">
                  <div className="cover-img">
                    <img
                      src={
                        profileImageUrl || "../../../assets/img/media/cover.jpg"
                      }
                      className="w-100"
                      alt=""
                    />

                    <div className="upload-button">
                      <img src={profileImageUrl} alt="" class="svg mr-2" />

                      <span>Upload Photo</span>
                      <input
                        className="file-input"
                        type="file"
                        id="fileUpload3"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-2 mx-lg-4 mx-xl-5">
                <div className="card mt-1">
                  <div className="user-profile-nav d-flex justify-content-xl-between align-items-xl-center flex-column flex-xl-row">
                    <div className="profile-info d-flex align-items-center">
                      <div className="profile-pic mr-3">
                        <img
                          src={
                            profileImageUrl1 ||
                            "../../../assets/img/media/profile-pic.jpg"
                          }
                          alt=""
                        />

                        <div className="upload-button">
                          <img
                            src={profileImageUrl1}
                            alt=""
                            className="svg mr-2"
                          />
                          <span>Upload Photo</span>
                          <input
                            className="file-input"
                            type="file"
                            id="fileUpload2"
                            accept="image/*"
                            onChange={handleFileChange1}
                          />
                        </div>
                      </div>

                      <div>
                        <h3>{userInfo.name}</h3>
                        <p className="font-14">{userInfo.role}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3 mt-xl-0">
                      <ul className="nav profile-nav-tabs">
                        <li>
                          <a
                            href="profile-chat.html"
                            className="pr-0 pl-2 pl-xl-30"
                          >
                            <span className="chat">
                              <img
                                src="../../../assets/img/svg/chat-icon.svg"
                                alt=""
                                className="svg"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="conncetion" href="connection.html">
                            <div className="btn-circle mr-20">
                              <img
                                src="../../../assets/img/svg/user-check.svg"
                                alt=""
                                style={imgStyle}
                              />
                            </div>
                            <div className="font-14">
                              <h4>154</h4>
                              <p className="font-14 text_color">Connections</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <Link to="/analysis/aboutuserprofile">About</Link>
                        </li>
                        <li>
                          <Link to="/analysis/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/analysis/userdashboard">
                            {" "}
                            User Dashboard
                          </Link>
                        </li>
                      </ul>

                      <div className="px-3">
                        <div className="dropdown-button">
                          <a
                            href="#"
                            className="d-flex align-items-center"
                            data-toggle="dropdown"
                          >
                            <div className="menu-icon style--two w-auto justify-content-center mr-0">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/analysis/editprofile">Edit Profile</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-30">
            <div className="row">
              <div className="col-xl-2 col-lg-4 col-sm-6">
                <div className="card mb-30">
                  <div className="statistics-bounce-rate d-flex align-items-center justify-content-between">
                    <div className="state-content">
                      <p className="font-14 mb-2">Salary Till Date</p>
                      <h3>
                        {statistics.salary
                          ? `$${statistics.salary.amount}`
                          : "Loading..."}
                      </h3>
                    </div>
                    <div className="state-icon">
                      <img src="../../../assets/img/png-icon/bar.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-sm-6">
                <div className="card mb-30">
                  <div className="statistics-bounce-rate order style--two d-flex align-items-center justify-content-between">
                    <div className="state-content">
                      <p className="font-14 mb-2">Task Alloted till date</p>
                      <h3>
                        {statistics.tasksAllotted
                          ? statistics.tasksAllotted.count
                          : "Loading..."}
                      </h3>
                    </div>
                    <div className="state-icon">
                      <img
                        src="../../../assets/img/png-icon/badge.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-sm-6">
                <div className="card mb-30">
                  <div className="statistics-bounce-rate report d-flex align-items-center justify-content-between">
                    <div className="state-content">
                      <p className="font-14 mb-2">incomplete Tasks</p>
                      <h3>
                        {statistics.incompleteTasks
                          ? statistics.incompleteTasks.count
                          : "Loading..."}
                      </h3>
                    </div>
                    <div className="state-icon">
                      <img
                        src="../../../assets/img/png-icon/report.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-4 col-sm-6">
                <div className="card mb-30">
                  <div className="statistics-bounce-rate support d-flex align-items-center justify-content-between">
                    <div className="state-content">
                      <p className="font-14 mb-2">Tasks Completed Till Date</p>
                      <h3>
                        {statistics.tasksCompleted
                          ? statistics.tasksCompleted.count
                          : "Loading..."}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-8">
                <div className="project-deadline d-flex align-items-center c2-bg mb-30">
                  <div className="progress_23 mr-3">
                    <div className="ProgressBar-wrap2 position-relative">
                      <div
                        className="ProgressBar ProgressBar_23"
                        data-progress="75"
                      >
                        <svg
                          className="ProgressBar-contentCircle"
                          viewBox="0 0 200 200"
                        >
                          <circle
                            transform="rotate(-90, 100, 100)"
                            className="ProgressBar-background"
                            cx="100"
                            cy="100"
                            r="85"
                          />
                          <circle
                            transform="rotate(-90, 100, 100)"
                            className="ProgressBar-circle"
                            cx="100"
                            cy="100"
                            r="85"
                          />
                        </svg>

                        <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4 className="white font-20 mb-1">Work efficiency</h4>
                    <p>
                      Your work efficiency is decided by the on-time completion
                      of the given tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card mb-30">
                  <div className="card-body latest-update">
                    <h4 className="mb-20">Latest Updates</h4>

                    <a
                      href="#"
                      className="item-single pt-0 border-bottom d-flex align-items-center"
                    >
                      <div className="content">
                        <span className="text-danger font-14 bold">
                          Changes
                        </span>
                        <p>{updates[0]?.description || "Loading..."}</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="item-single border-bottom d-flex align-items-center"
                    >
                      <div className="content">
                        <span className="text-success font-14 bold">Done</span>
                        <p className="mb-1">
                          {updates[1]?.description || "Loading..."}
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="item-single border-bottom d-flex align-items-center"
                    >
                      <div className="content">
                        <span className="text-info font-14 bold">
                          Task allotment
                        </span>
                        <p className="mb-1">
                          {updates[2]?.description || "Loading..."}
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="item-single border-bottom d-flex align-items-center"
                    >
                      <div className="content">
                        <span className="text-pink font-14 bold">Updated</span>
                        <p className="mb-1">
                          {updates[3]?.description || "Loading..."}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="card notifications mb-30 mb-xl-0">
                  <div className="card-body">
                    <h5 className="mb-4">notifications</h5>

                    {notifications.map((notification, index) => (
                      <a
                        key={index}
                        href="#"
                        className="item-single border-bottom d-flex align-items-center"
                      >
                        <div className="content">
                          <span className="time">{notification.time}</span>
                          <p>{notification.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="todays-evnet mb-30 mb-xl-0">
                  <div className="bg-3rd profile-widget-header">
                    <h4 className="d-flex align-items-center">
                      <img
                        src="../../../assets/img/svg/calender-color.svg"
                        alt=""
                        className="svg mr-3"
                      />
                      Today's Events
                    </h4>
                  </div>
                  <div className="card">
                    <ul className="list-unstyled">
                      {events.map((event, index) => (
                        <li className="border-bottom">
                          <h5>{event.title}</h5>
                          <div className="event-meta font-14 d-flex align-items-center">
                            <img
                              src="../../../assets/img/svg/watch2.svg"
                              alt=""
                              className="svg"
                            />
                            <span className="time d-inline-block ml-2">
                              {event.time}
                            </span>
                            <span className="date d-inline-block ml-2">
                              {event.date}
                            </span>
                          </div>
                          {event.description && (
                            <p className="mt-2">{event.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="card mb-30">
                  <div className="card-body">
                    <div className="row align-items-end">
                      <div className="col-5 col-sm-6 col-lg-5">
                        <div id="apex_column2-chart"></div>
                      </div>
                      <div className="col-7 col-sm-6 col-lg-7">
                        <div className="">
                          <h4 className="mb-2">Frequency</h4>
                          <p>
                            frequency depends on ontime submission of work with
                            respect to the changes occurs in corrosponding work
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card todo-list mb-30">
                  <div className="card-body">
                    <h4 className="font-20 pb-3">Tasks</h4>

                    <p>
                      {tasks.day},{tasks.date}
                    </p>
                  </div>

                  {tasks.map((task) => (
                    <div
                      key={task._id}
                      className={`single-row level-important border-bottom pt-3 pb-3 ${
                        isLineVisible3 ? "" : "hidden-line"
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex position-relative">
                          <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={handleCheckboxChange3}
                            />
                            <span className="checkmark"></span>
                          </label>

                          <a
                            href="../../apps/todolist/task-details.html"
                            className={`todo-text pr-2 pr-md-4 ${
                              isChecked3 ? "line-through" : ""
                            } pr-2 pr-md-4`}
                          >
                            <p className="card-text mb-1">{task.title}</p>
                            <p className="label-text font-12 mb-0">
                              {task.priority}
                            </p>
                          </a>
                        </div>

                        <div className="d-flex">
                          <div className="assign_to">
                            <img
                              src="../../../assets/img/svg/Info.svg"
                              alt=""
                              className="svg mb-2"
                            />
                            <div className="assign-content">
                              <div className="font-12 text-warning">
                                {task.assignee}
                              </div>
                              <img
                                src="../../../assets/img/avatar/info-avatar.png"
                                alt=""
                                className="assign-avatar"
                              />
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two w-14 mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">Edit</a>
                              <a href="#">Sort By</a>
                              <a href="#">Settings</a>
                              <a href="#">Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card mb-30">
                  <div className="card-body">
                    <div className="row align-items-end">
                      <div className="col-6">
                        <div className="d-flex justify-content-start">
                          <div className="ProgressBar-wrap2 position-relative">
                            <div
                              className="ProgressBar ProgressBar_4"
                              data-progress="67"
                            >
                              <svg
                                className="ProgressBar-contentCircle"
                                viewBox="0 0 200 200"
                              >
                                <circle
                                  transform="rotate(-90, 100, 100)"
                                  className="ProgressBar-background"
                                  cx="100"
                                  cy="100"
                                  r="85"
                                />
                                <circle
                                  transform="rotate(-90, 100, 100)"
                                  className="ProgressBar-circle"
                                  cx="100"
                                  cy="100"
                                  r="85"
                                />
                              </svg>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                              <span className="ProgressBar-percentage--text">
                                change Rate
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex justify-content-start progress_5">
                          <div className="ProgressBar-wrap2 position-relative">
                            <div
                              className="ProgressBar ProgressBar_5"
                              data-progress="48"
                            >
                              <svg
                                className="ProgressBar-contentCircle"
                                viewBox="0 0 200 200"
                              >
                                <circle
                                  transform="rotate(-90, 100, 100)"
                                  className="ProgressBar-background"
                                  cx="100"
                                  cy="100"
                                  r="85"
                                />
                                <circle
                                  transform="rotate(-90, 100, 100)"
                                  className="ProgressBar-circle"
                                  cx="100"
                                  cy="100"
                                  r="85"
                                />
                              </svg>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count style--two"></span>
                              <span className="ProgressBar-percentage--text">
                                {" "}
                                Salary Goal
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-30 progress_20">
                  <div className="card-body">
                    <div className="d-flex justify-content-between pb-2 mb-4">
                      <div className="progress-title">
                        <h4 className="mb-1">Performances</h4>
                        <p className="font-14">
                          Tell use paid law ever yet new. Meant to learn of
                          vexed he there increased.
                        </p>
                      </div>

                      <div className="dropdown-button">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>
                    </div>

                    <div className="ProgressBar-wrap position-relative mb-3">
                      <div
                        className="ProgressBar ProgressBar_20"
                        data-progress="70"
                      >
                        <svg
                          className="ProgressBar-contentCircle"
                          viewBox="0 0 200 200"
                        >
                          <circle
                            transform="rotate(135, 100, 100)"
                            className="ProgressBar-background"
                            cx="100"
                            cy="100"
                            r="8"
                          />
                          <circle
                            transform="rotate(135, 100, 100)"
                            className="ProgressBar-circle"
                            cx="100"
                            cy="100"
                            r="85"
                          />
                        </svg>
                        <span className="ProgressBar-percentage--text">
                          Increase
                        </span>
                        <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                      </div>
                    </div>

                    <div className="country-performance px-2 pt-3 pb-2">
                      <div className="process-bar-wrapper">
                        <span className="process-name">Project Success</span>
                        <span className="process-width">35%</span>
                        <span
                          className="process-bar"
                          data-process-width="35"
                        ></span>
                      </div>

                      <div className="process-bar-wrapper style--two">
                        <span className="process-name">Targeted Order</span>
                        <span className="process-width">68%</span>
                        <span
                          className="process-bar"
                          data-process-width="68"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-12">
                <div className="row">
                  <div className="col-xl-12 col-md-7">
                    <div className="timeline-wrap mb-30">
                      <div className="card pb-2">
                        <div className="card-body">
                          <h4 className="mb-3">Pipeline</h4>
                          <p>{events.heading}</p>
                        </div>
                      </div>
                      <ul className="timeline style--two">
                        {timelineEvents.map((event) => (
                          <li className="event" data-date={event.date}>
                            <span>{event.time}</span>
                            <h4>{event.title}</h4>
                            <p>{event.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-12 col-md-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-20">
                          <div className="">
                            <h4 className="mb-1">Transaction History</h4>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">Daily</a>
                              <a href="#">Sort By</a>
                              <a href="#">Monthly</a>
                            </div>
                          </div>
                        </div>

                        <div className="trans-history">
                          {transactions.map((transaction, index) => (
                            <div className="border-bottom mb-20 pb-20 d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="img mr-3">
                                  <img
                                    src="../../../assets/img/png-icon/th1.png"
                                    className="img-40"
                                    alt=""
                                  />
                                </div>
                                <div className="content">
                                  <h4>{transaction.name}</h4>
                                  <span className="font-12">
                                    {transaction.category}
                                  </span>
                                </div>
                              </div>

                              <div className="">
                                <h4>{transaction.amount}</h4>
                                <span className="font-12">
                                  {transaction.currency}
                                </span>
                              </div>
                            </div>
                          ))}
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
    </>
  );
}

export default UserDashboard;
