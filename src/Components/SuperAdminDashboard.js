import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../assets/css/style.css";

import "../assets/fonts/themify-icons/themify-icons.css";
import "../assets/fonts/icofont/icofont.min.css";
import "../assets/js/script";
import "../assets/js/jquery.min.js";

import SuperAdminMainContent from "./SuperAdminDashboardPages/MainContent/SuperAdminMainContent.js";
import Header from "./SuperAdminDashboardPages/Header/Header.js";
import Sidebar from "./SuperAdminDashboardPages/Sidebar.js";

function SuperAdminDashboard() {
  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <Header />

        <div className="main-wrapper">
          <Sidebar />

          <SuperAdminMainContent />
        </div>
      </div>
    </>
  );
}
export default SuperAdminDashboard;
