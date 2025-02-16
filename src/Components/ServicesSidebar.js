import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/fonts/themify-icons/themify-icons.css";

const ServicesSidebar = React.memo(() => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [toDoListOpen, setToDoListOpen] = useState(false);

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

  return (
    <>
      <nav className="sidebar" data-trigger="scrollbar">
        <div className="sidebar-header d-none d-lg-block">
          <div className="sidebar-toogle-pin">
            <i className="icofont-tack-pin"></i>
          </div>
        </div>
        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-category">Main</li>
            <li>
              <Link to="/services/operationsmaincontent">
                <i className="icofont-pie-chart"></i>
                <span className="link-title">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/services/analysis">
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
                    <Link to="/services/inboxemail">Inbox</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/services/reademail">Read</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/services/composeemail">Compose</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/services/chat">
                <i className="icofont-wechat"></i>
                <span className="link-title">Chat</span>
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
                    <Link to="/services/taskstodolist">All tasks</Link>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <Link to="/services/addnewtask">Add task</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/services/calendar">
                <i className="icofont-calendar"></i>
                <span className="link-title">Calendar</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
});

export default ServicesSidebar;
