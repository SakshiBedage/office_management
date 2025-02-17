import React, { useState, useEffect } from "react";
import axios from "axios";
import Username from "./Username";
import Invite from "./Invite";
import Message from "./Message";
import Notification from "./Notification";
import Settings from "./Settings";

function ServicesHeader() {
  //for displaying workspace
  const [workspaces, setWorkspaces] = useState([]);

  // useEffect(() => {
  //   async function fetchWorkspaces() {
  //     try {
  //       const response = await axios.get("/api/workspaces"); // Adjust the URL to match your backend endpoint
  //       setWorkspaces(response.data.workspaces); // Assuming your response contains a 'workspaces' property with an array of workspace names
  //     } catch (error) {
  //       console.error("Error fetching workspaces:", error);
  //     }
  //   }

  //   fetchWorkspaces();
  // }, []);

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update the current time and date every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const day = now.toLocaleString("en", { weekday: "short" });
      const month = now.toLocaleString("en", { month: "short" });
      const date = now.getDate();
      const year = now.getFullYear();

      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDate(`${day}, ${date} ${month} ${year}`);
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="header white-bg fixed-top d-flex align-content-center flex-wrap">
        <div className="logo">
          <a href="#" className="default-logo">
            <img src="assets/img/barcadly main1.png" alt="" />
          </a>
          <a href="#" className="mobile-logo">
            <img src="assets/img/barcadly mob1.png" alt="" />
          </a>
        </div>

        <div className="main-header">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-3 col-lg-1 col-xl-4">
                <div className="main-header-left h-100 d-flex align-items-center">
                  <div className="main-header-user">
                    <a
                      href="#"
                      className="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div className="user-profile d-xl-flex align-items-center d-none">
                        <div className="user-avatar">
                          <img src="assets/img/avatar/user.png" alt="" />
                        </div>

                        <div className="user-info">
                          <h4 className="user-name">Mudit Surana</h4>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="main-header-pin d-block d-lg-none">
                    <div className="header-toogle-menu">
                      <img src="assets/img/menu.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8 col-lg-11 col-xl-8">
                <div className="main-header-right d-flex justify-content-end">
                  <ul className="nav">
                    <li className="ml-0">
                      <Username />
                    </li>
                    <li className="d-none d-lg-flex">
                      <Invite />
                    </li>
                    <li>
                      <Message />
                    </li>
                    <li>
                      <Notification />
                    </li>
                  </ul>

                  <Settings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ServicesHeader;
