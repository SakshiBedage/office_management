function TasksTodoListHeader() {
  return (
    <header className="header white-bg fixed-top d-flex align-content-center flex-wrap">
      <div className="logo">
        <a href="#" className="default-logo">
          <img src="../../../assets/img/barcadly main1.png" alt="" />
        </a>
        <a href="#" className="mobile-logo">
          <img src="../../../assets/img/barcadly mob1.png" alt="" />
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
                    <div className="menu-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="user-profile d-xl-flex align-items-center d-none">
                      <div className="user-avatar">
                        <img src="../../../assets/img/avatar/user.png" alt="" />
                      </div>
                      <div className="user-info">
                        <h4 className="user-name">Mudit Surana</h4>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="main-header-pin d-block d-lg-none">
                  <div className="header-toogle-menu">
                    <img src="../../../assets/img/menu.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 col-lg-11 col-xl-8">
              <div className="main-header-right d-flex justify-content-end">
                <ul className="nav">
                  <li className="ml-0"></li>

                  <li className="d-none d-lg-flex">
                    <div className="main-header-date-time text-right">
                      <h3 className="time">
                        <span id="hours">12</span>
                        <span id="point">:</span>
                        <span id="min">06</span>
                      </h3>
                      <span className="date">
                        <span id="date">Tue, 12 October 2019</span>
                      </span>
                    </div>
                  </li>
                  <li className="d-none d-lg-flex">
                    <div className="main-header-btn ml-md-1">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#qcModal"
                      >
                        Export
                      </button>
                    </div>
                  </li>
                  <li className="order-2 order-sm-0">
                    <div className="main-header-search">
                      <form action="#" className="search-form">
                        <div className="theme-input-group header-search">
                          <input
                            type="text"
                            className="theme-input-style"
                            placeholder="Search Here"
                          />

                          <button type="submit">
                            <img
                              src="../../../assets/img/svg/search-icon.svg"
                              alt=""
                              className="svg"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li>
                    <div className="main-header-message">
                      <a
                        href="#"
                        className="header-icon"
                        data-toggle="dropdown"
                      >
                        <img
                          src="../../../assets/img/svg/message-icon.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>3 Unread messages</h5>
                          <a href="#" className="text-mute d-inline-block">
                            Clear all
                          </a>
                        </div>
                        <div className="dropdown-body">
                          <a
                            href="#"
                            className="item-single d-flex media align-items-center"
                          >
                            <div className="figure">
                              <img
                                src="../../../assets/img/avatar/m1.png"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content media-body">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="name">Sender Name</h6>
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex media align-items-center"
                          >
                            <div className="figure">
                              <img
                                src="../../../assets/img/avatar/m2.png"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content media-body">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="name">Tonya Lee</h6>
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex media align-items-center"
                          >
                            <div className="figure">
                              <img
                                src="../../../assets/img/avatar/m3.png"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content media-body">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="name">Cathy Nichols</h6>
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex media align-items-center"
                          >
                            <div className="figure">
                              <img
                                src="../../../assets/img/avatar/m4.png"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content media-body">
                              <div className="d-flex align-items-center mb-2">
                                <h6 className="name">Hubert Griffith</h6>
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
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
                    <div className="main-header-notification">
                      <a
                        href="#"
                        className="header-icon notification-icon"
                        data-toggle="dropdown"
                      >
                        <span
                          className="count"
                          data-bg-img="../../../assets/img/count-bg.png"
                        >
                          22
                        </span>
                        <img
                          src="../../../assets/img/svg/notification-icon.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                      <div className="dropdown-menu style--two dropdown-menu-right">
                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>5 New notifications</h5>
                          <a href="#" className="text-mute d-inline-block">
                            Clear all
                          </a>
                        </div>
                        <div className="dropdown-body">
                          <a
                            href="#"
                            className="item-single d-flex align-items-center"
                          >
                            <div className="content">
                              <div className="mb-2">
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus amet.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex align-items-center"
                          >
                            <div className="content">
                              <div className="mb-2">
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex align-items-center"
                          >
                            <div className="content">
                              <div className="mb-2">
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
                                Donec dapibus mauris id odio ornare tempus. Duis
                                sit amet accumsan justo.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="item-single d-flex align-items-center"
                          >
                            <div className="content">
                              <div className="mb-2">
                                <p className="time">2 min ago</p>
                              </div>
                              <p className="main-text">
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
                <div className="main-header-user">
                  <a
                    href="#"
                    className="d-flex align-items-center"
                    data-toggle="dropdown"
                  >
                    <div className="user-profile d-xl-flex align-items-center d-none">
                      <div
                        className="user-avatar"
                        style={{ alignContent: "center" }}
                      >
                        <img
                          src="../../../assets/img/avatar/avatar-user.png"
                          style={{
                            width: "32px",
                            height: "32px",
                            marginTop: "25px",
                            marginLeft: "22px",
                          }}
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu">
                    <a href="pages/pages/user-profile/user-dashboard.html">
                      My Profile
                    </a>
                    <a href="#">task</a>
                    <a href="#">Settings</a>
                    <a href="pages/pages/authentication/login.html">Log Out</a>
                    <a href="pages/form&table/form-wizard.html">
                      New Workspace
                    </a>

                    <hr style={{ backgroundColor: "white" }} />
                    <center>
                      <h6>Switch Workspace</h6>
                    </center>
                    <br />

                    <div>
                      <a href="#">
                        {" "}
                        <img
                          src="../../../assets/img/avatar/avatar-user.png"
                          alt=""
                          style={{
                            height: "30px",
                            width: "30px",
                            padding: "5px",
                          }}
                        />
                        Atharv's Workspace
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TasksTodoListHeader;
