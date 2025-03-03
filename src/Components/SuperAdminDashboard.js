import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/style.css";

import "../assets/fonts/themify-icons/themify-icons.css";
import "../assets/fonts/icofont/icofont.min.css";
import "../assets/js/script";
import "../assets/js/jquery.min.js";

import SuperAdminMainContent from "./SuperAdminDashboardPages/MainContent/SuperAdminMainContent.js";
import Header from "./SuperAdminDashboardPages/Header/Header.js";
import Sidebar from "./SuperAdminDashboardPages/Sidebar.js";
import Chat from "./Chat.js";
import SuperAdminCalendar from "./SuperAdminCalendar.js";

function SuperAdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const location = useLocation();

  const user = location.state?.user;

  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <Header />

        <div className="main-wrapper">
          <Sidebar setActiveComponent={setActiveComponent} />

          <div className="content-area">
            {activeComponent === "dashboard" && (
              <SuperAdminMainContent user={user} />
            )}
            {activeComponent === "chat" && <Chat />}
            {activeComponent === "calendar" && <SuperAdminCalendar />}
          </div>
        </div>
      </div>
    </>
  );
}
export default SuperAdminDashboard;
