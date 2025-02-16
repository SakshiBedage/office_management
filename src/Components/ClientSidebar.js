import { useState } from "react";
import { Link } from "react-router-dom";

function ClientSidebar() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [clientManagementOpen, setClientManagementOpen] = useState(true);

  function handleEmailToggle() {
    setEmailOpen((isOpen) => {
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

  function handleClientManagementToggle() {
    setClientManagementOpen((isOpen) => {
      const newIsOpen = !isOpen;
      return newIsOpen;
    });
  }

  return (
    <nav class="sidebar" data-trigger="scrollbar">
      <div class="sidebar-header d-none d-lg-block">
        <div class="sidebar-toogle-pin">
          <i class="icofont-tack-pin"></i>
        </div>
      </div>

      <div class="sidebar-body">
        <ul class="nav">
          <li class="nav-category" style={{ fontSize: "large" }}>
            Client Portal
          </li>
          <li>
            <a href="#">
              <i class="icofont-pie-chart"></i>
              <span class="link-title">Dashboard</span>
            </a>
          </li>

          <li class="nav-category">apps</li>
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
            <a href="apps/chat.html">
              <i class="icofont-wechat"></i>
              <span class="link-title">Chat</span>
            </a>
          </li>

          <li>
            <a href="../../apps/calendar.html">
              <i class="icofont-calendar"></i>
              <span class="link-title">Calendar</span>
            </a>
          </li>

          <li class="active sub-menu-opened">
            <a href="#" onClick={handleClientManagementToggle}>
              <i className="icofont-calendar"></i>
              <span className="link-title  ">Client Management</span>
              <span
                className="icon"
                style={{
                  marginLeft: "40px",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                }}
              >
                {clientManagementOpen ? "–" : "+"}
              </span>
            </a>
            {clientManagementOpen && (
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li className="active" style={{ listStyle: "none" }}>
                  <i className="ti-minus"></i>
                  <Link to="/client/clientPortalIndex">Client Status</Link>
                </li>
                <li style={{ listStyle: "none" }}>
                  <i className="ti-minus"></i>
                  <Link to="/client/addnewclient">Add New Client</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="../../pages/timeline.html">
              <i class="icofont-clock-time"></i>
              <span class="link-title">Pipeline</span>
            </a>
          </li>

          <li class="nav-category">pages</li>
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
            <a href="../../pages/account-setting.html">
              <i class="icofont-settings-alt"></i>
              <span class="link-title">Account Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default ClientSidebar;
