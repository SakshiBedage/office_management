import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const OperationsSidebar = React.memo(() => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const sidebarScrollbar = new PerfectScrollbar(sidebarRef.current);

    return () => {
      sidebarScrollbar.destroy();
    };
  }, []);

  const [emailOpen, setEmailOpen] = useState(false);
  const [toDoListOpen, setToDoListOpen] = useState(false);
  const [projectManagerOpen, setProjectManagerOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  function handleEmailToggle() {
    setEmailOpen((isOpen) => {
      const newIsOpen = !isOpen;
      return newIsOpen;
    });
  }

  function handleToDoListToggle() {
    setToDoListOpen((isOpen) => {
      const newIsOpen = !isOpen;
      return newIsOpen;
    });
  }

  function handleProjectManagerToggle() {
    setProjectManagerOpen((isOpen) => {
      const newIsOpen = !isOpen;
      return newIsOpen;
    });
  }

  function handleUserToggle() {
    setUserProfileOpen((isOpen) => {
      const newIsOpen = !isOpen;
      return newIsOpen;
    });
  }

  return (
    <>
      <nav className="sidebar" data-trigger="scrollbar" ref={sidebarRef}>
        <div className="sidebar-header d-none d-lg-block">
          <div className="sidebar-toogle-pin">
            <i className="icofont-tack-pin"></i>
          </div>
        </div>

        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-category">Main</li>
            <li className="active">
              <Link to="/analysis/operationsmaincontent">
                <i className="icofont-pie-chart"></i>
                <span className="link-title">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/analysis/analysis">
                <i className="icofont-chart-histogram"></i>
                <span className="link-title">Work Analytics</span>
              </Link>
            </li>
            <li className="nav-category">apps</li>
            <li>
              <a href="#" onClick={handleEmailToggle}>
                <i className="icofont-mail-box"></i>
                <span className="link-title">Email</span>
                <span
                  className="icon"
                  style={{
                    marginLeft: "130px",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  {emailOpen ? "–" : "+"}
                </span>
              </a>
              {emailOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/inboxemail">Inbox</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/reademail">Read</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/composeemail">Compose</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/analysis/chat">
                <i className="icofont-wechat"></i>
                <span className="link-title">Chat</span>
              </Link>
            </li>
            <li>
              <Link to="/analysis/notepad">
                <i class="icofont-edit"></i>
                <span class="link-title">Notepad</span>
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleToDoListToggle}>
                <i className="icofont-listing-box"></i>
                <span className="link-title">To Do List</span>
                <span
                  className="icon"
                  style={{
                    marginLeft: "103px",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  {toDoListOpen ? "–" : "+"}
                </span>
              </a>
              {toDoListOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/taskstodolist">All Task</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/addnewtask">Add task</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/analysis/calendar">
                <i className="icofont-calendar"></i>
                <span className="link-title">Calendar</span>
              </Link>
            </li>

            <li>
              <a href="#" onClick={handleProjectManagerToggle}>
                <i className="icofont-calendar"></i>
                <span className="link-title">Client manager</span>
                <span
                  className="icon"
                  style={{
                    marginLeft: "60px",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  {projectManagerOpen ? "–" : "+"}
                </span>
              </a>

              {projectManagerOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/projectstatus">Client status</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/createclient">Create Client</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/analysis/calendar">
                <i className="icofont-calendar"></i>
                <span className="link-title">Member</span>
              </Link>
            </li>

            <li>
              <Link to="/analysis/pipeline">
                <i className="icofont-clock-time"></i>
                <span className="link-title">pipeline</span>
              </Link>
            </li>
            <li>
              <Link to="/analysis/qcmodule">
                <i className="icofont-clock-time"></i>
                <span className="link-title">QC Module</span>
              </Link>
            </li>

            <li className="nav-category">pages</li>
            <li>
              <a href="#" onClick={handleUserToggle}>
                <i className="icofont-ui-user"></i>
                <span className="link-title">User Profile</span>
                <span
                  className="icon"
                  style={{
                    marginLeft: "90px",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                  }}
                >
                  {userProfileOpen ? "–" : "+"}
                </span>
              </a>

              {userProfileOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/aboutuserprofile">about</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/editprofile">Edit Profile</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/analysis/userdashboard">User Dashboard</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/analysis/accountsettings">
                <i className="icofont-settings-alt"></i>
                <span className="link-title">Account Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
});
export default OperationsSidebar;
