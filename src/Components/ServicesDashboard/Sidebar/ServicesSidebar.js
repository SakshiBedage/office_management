import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ServicesSidebar({ setActiveComponent }) {
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
                    <span
                      className="link-title"
                      onClick={() => setActiveComponent("inbox")}
                    >
                      Inbox
                    </span>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <span
                      className="link-title"
                      onClick={() => setActiveComponent("read")}
                    >
                      Read
                    </span>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <span
                      className="link-title"
                      onClick={() => setActiveComponent("compose")}
                    >
                      Compose
                    </span>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <i className="icofont-wechat"></i>
              <span
                className="link-title"
                onClick={() => setActiveComponent("chat")}
              >
                Chat
              </span>
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
                    <span
                      className="link-title"
                      onClick={() => setActiveComponent("tasks")}
                    >
                      All tasks
                    </span>
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <i className="ti-minus"></i>
                    <span
                      className="link-title"
                      onClick={() => setActiveComponent("addtask")}
                    >
                      Add task
                    </span>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <i className="icofont-calendar"></i>
              <span
                className="link-title"
                onClick={() => setActiveComponent("calendar")}
              >
                Calendar
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default ServicesSidebar;
