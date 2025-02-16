import React, { useState, useEffect } from "react";

import Username from "./Username";
import TimeAndDate from "./TimeAndDate";
import Invite from "./Invite";
import Message from "./Message";
import Notification from "./Notification";
import Setting from "./Setting";

function Header() {
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
                  <Username />
                </div>
              </div>
              <div className="col-8 col-lg-11 col-xl-8">
                <div className="main-header-right d-flex justify-content-end">
                  <ul className="nav">
                    <li className="ml-0">
                      <TimeAndDate />
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

                  <div className="main-header-user">
                    <Setting />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
