import { Link } from "react-router-dom";
import React, { useState } from "react";

function Sidebar() {
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
              <Link to="/superadmin">
                <i className="icofont-chart-histogram"></i>
                <span className="link-title">Work Analytics</span>
              </Link>
            </li>
            <li className="nav-category">apps</li>

            <li>
              <Link to="/chat">
                <i className="icofont-wechat"></i>
                <span className="link-title">Chat</span>
              </Link>
            </li>

            <li>
              <Link to="/calendar">
                <i className="icofont-calendar"></i>
                <span className="link-title">Calendar</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Sidebar;
