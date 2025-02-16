import React, { useState, useEffect } from "react";
function ClientHeader() {
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
    <header class="header white-bg fixed-top d-flex align-content-center flex-wrap">
      <div class="logo">
        <a href="../../index.html" class="default-logo">
          <img src="../../../assets/img/barcadly main1.png" alt="" />
        </a>
        <a href="../../index.html" class="mobile-logo">
          <img src="../../../assets/img/barcadly mob1.png" alt="" />
        </a>
      </div>

      <div class="main-header">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-3 col-lg-1 col-xl-4">
              <div class="main-header-left h-100 d-flex align-items-center">
                <div class="main-header-user">
                  <a
                    href="#"
                    class="d-flex align-items-center"
                    data-toggle="dropdown"
                  >
                    <div class="menu-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div class="user-profile d-xl-flex align-items-center d-none">
                      <div class="user-avatar">
                        <img src="../../../assets/img/avatar/user.png" alt="" />
                      </div>

                      <div class="user-info">
                        <h4 class="user-name">Mudit Surana</h4>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="main-header-pin d-block d-lg-none">
                  <div class="header-toogle-menu">
                    <img src="../../../assets/img/menu.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9 col-lg-11 col-xl-8">
              <div class="main-header-right d-flex justify-content-end">
                <ul class="nav">
                  <li class="ml-0 d-none d-lg-flex">
                    <div class="main-header-print">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/print-icon.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </li>
                  <li class="d-none d-lg-flex">
                    <div class="main-header-date-time text-right">
                      <h3 className="time">
                        <span id="hours">{currentTime.split(":")[0]}</span>
                        <span id="point">:</span>
                        <span id="min">{currentTime.split(":")[1]}</span>
                      </h3>
                      <span className="date">
                        <span id="date">{currentDate}</span>
                      </span>
                    </div>
                  </li>

                  <li class="order-2 order-sm-0">
                    <div class="main-header-search">
                      <form action="#" class="search-form">
                        <div class="theme-input-group header-search">
                          <input
                            type="text"
                            class="theme-input-style"
                            placeholder="Search Here"
                          />

                          <button type="submit">
                            <img
                              src="../../../assets/img/svg/search-icon.svg"
                              alt=""
                              class="svg"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li>
                    <div class="main-header-message">
                      <a href="#" class="header-icon" data-toggle="dropdown">
                        <img
                          src="../../../assets/img/svg/message-icon.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>3 Unread messages</h5>
                          <a href="#" class="text-mute d-inline-block">
                            Clear all
                          </a>
                        </div>

                        <div class="dropdown-body">
                          <a
                            href="#"
                            class="item-single d-flex media align-items-center"
                          >
                            <div class="figure">
                              <img
                                src="../../../assets/img/avatar/m1.png"
                                alt=""
                              />
                              <span class="avatar-status bg-teal"></span>
                            </div>
                            <div class="content media-body">
                              <div class="d-flex align-items-center mb-2">
                                <h6 class="name">Sender Name</h6>
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            class="item-single d-flex media align-items-center"
                          >
                            <div class="figure">
                              <img
                                src="../../../assets/img/avatar/m2.png"
                                alt=""
                              />
                              <span class="avatar-status bg-teal"></span>
                            </div>
                            <div class="content media-body">
                              <div class="d-flex align-items-center mb-2">
                                <h6 class="name">Tonya Lee</h6>
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            class="item-single d-flex media align-items-center"
                          >
                            <div class="figure">
                              <img
                                src="../../../assets/img/avatar/m3.png"
                                alt=""
                              />
                              <span class="avatar-status bg-teal"></span>
                            </div>
                            <div class="content media-body">
                              <div class="d-flex align-items-center mb-2">
                                <h6 class="name">Cathy Nichols</h6>
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            class="item-single d-flex media align-items-center"
                          >
                            <div class="figure">
                              <img
                                src="../../../assets/img/avatar/m4.png"
                                alt=""
                              />
                              <span class="avatar-status bg-teal"></span>
                            </div>
                            <div class="content media-body">
                              <div class="d-flex align-items-center mb-2">
                                <h6 class="name">Hubert Griffith</h6>
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="main-header-notification">
                      <a
                        href="#"
                        class="header-icon notification-icon"
                        data-toggle="dropdown"
                      >
                        <span
                          class="count"
                          data-bg-img="../../assets/img/count-bg.png"
                        >
                          22
                        </span>
                        <img
                          src="../../../assets/img/svg/notification-icon.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                      <div class="dropdown-menu style--two dropdown-menu-right">
                        <div class="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>5 New notifications</h5>
                          <a href="#" class="text-mute d-inline-block">
                            Clear all
                          </a>
                        </div>

                        <div class="dropdown-body">
                          <a
                            href="#"
                            class="item-single d-flex align-items-center"
                          >
                            <div class="content">
                              <div class="mb-2">
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus amet.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            class="item-single d-flex align-items-center"
                          >
                            <div class="content">
                              <div class="mb-2">
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>

                          <a
                            href="#"
                            class="item-single d-flex align-items-center"
                          >
                            <div class="content">
                              <div class="mb-2">
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="item-single d-flex align-items-center"
                          >
                            <div class="content">
                              <div class="mb-2">
                                <p class="time">2 min ago</p>
                              </div>
                              <p class="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default ClientHeader;
