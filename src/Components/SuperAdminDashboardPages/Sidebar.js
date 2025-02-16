import { Link } from "react-router-dom";
import React, { useState } from "react";

function Sidebar({ setActiveComponent }) {
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
              <i className="icofont-chart-histogram"></i>
              <span className="link-title">Work Analytics</span>
            </li>
            <li className="nav-category">apps</li>

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
export default Sidebar;
