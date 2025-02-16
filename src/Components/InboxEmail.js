import React, { useState } from "react";
function IndoxEmail() {
  const buttonStyle = {
    width: "60px", // Adjusted width based on the provided CSS
    height: "60px", // Adjusted height based on the provided CSS
    position: "relative",
    zIndex: "1",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 10px rgba(96, 69, 226, 0.5)",
    borderRadius: "50%", // Added to make it circular
    marginLeft: "10px",
  };

  const afterStyle = {
    backgroundColor: "#6f51ff",
    background: "-moz-linear-gradient(left, #6f51ff 0%, #6045e2 100%)",
    background: "-webkit-linear-gradient(left, #6f51ff 0%, #6045e2 100%)",
    background: "linear-gradient(to right, #6f51ff 0%, #6045e2 100%)",
    filter:
      'progid:DXImageTransform.Microsoft.gradient( startColorstr="#6F51FF", endColorstr="#6045E2",GradientType=1)',
  };

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isInitiallyChecked, setIsInitiallyChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="main-content d-flex flex-column flex-md-row">
      <div className="mb-4 mb-md-0">
        <nav className="tasks_aside">
          <div className="aside-header pr-0">
            <div className="aside-header-btn d-flex justify-content-end position-relative">
              <h4 className="aside-btn-text c1 d-xl-flex align-items-center">
                Compose New
              </h4>
              <a href="compose.html" className="btn-circle style--two">
                <img
                  src="../../../assets/img/svg/plus_white.svg"
                  alt=""
                  style={imgStyle}
                />
              </a>
            </div>
          </div>
          <div className="aside-body">
            <ul className="nav flex-column">
              <li className="active">
                <a href="#">
                  Inbox{" "}
                  <span className="c3 bold font-14 ml-1 float-right">(5)</span>
                </a>
              </li>
              <li>
                <a href="#">Sent</a>
              </li>
              <li>
                <a href="#">
                  Draft{" "}
                  <span className="c3 bold font-14 ml-1 float-right">(3)</span>
                </a>
              </li>
              <li>
                <a href="#">Starred</a>
              </li>
              <li>
                <a href="#">Snoozed</a>
              </li>

              <li
                className="nav-category less bold font-14 mt-4"
                data-toggle="collapse"
                data-target="less-dropdown"
              >
                Less
              </li>
            </ul>
            <ul id="less-dropdown" className="list-unstyled">
              <li className="lavel">
                <a href="#">Important</a>
              </li>
              <li className="lavel">
                <a href="#">Scheduled</a>
              </li>
              <li className="lavel">
                <a href="#">Trash</a>
              </li>
              <li className="lavel">
                <a href="#">Spam</a>
              </li>

              <li className="nav-category bold font-14 mt-4">Lavels</li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color products"></span>
                  Products
                </a>
              </li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color works"></span>
                  Works
                </a>
              </li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color family"></span>
                  Family
                </a>
              </li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color friends"></span>
                  Friends
                </a>
              </li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color design"></span>
                  Design{" "}
                </a>
              </li>
              <li className="lavel">
                <a href="#">
                  <span className="tag_color others"></span>
                  Others{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card bg-transparent">
              <div className="card-body card_color-bg mb-30">
                <div className="mail-header d-flex align-items-sm-center media flex-column flex-sm-row">
                  <div className="mail-header-left d-flex align-items-center position-relative">
                    <label className="custom-checkbox style--two">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--two justify-content-center mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>

                    <div className="star">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/star.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="unread">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/mail.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="tag_mail">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/tag.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="delete_mail">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/delete.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="mail-header-right d-flex align-items-center justify-content-end media-body mt-3 mt-sm-0">
                    <form action="#" className="search-form">
                      <div className="theme-input-group">
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

                    <div className="pagination style--two d-flex flex-column align-items-center ml-3">
                      <ul className="list-inline d-inline-flex align-items-center">
                        <li>
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/left-angle.svg"
                              alt=""
                              className="svg"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="current">
                            <img
                              src="../../../assets/img/svg/right-angle.svg"
                              alt=""
                              className="svg"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-unstyled mail-list">
                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m5.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Drishti Shah</h4>
                          <p className="msg">
                            {" "}
                            offer letter release for newly joined employees
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 8:35am </div>
                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isInitiallyChecked && isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m6.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Sarvadnya kamble</h4>
                          <p className="msg">Need new graphic card for </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 9:35am </div>
                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m7.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Amey Pisal</h4>
                          <p className="msg">Packaging of diwali gifts</p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 7:17am </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m8.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Mansi kulkarni</h4>
                          <p className="msg">
                            Why Do All Websites Look the Same? by Boris Müller
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m9.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Sayali Velhal</h4>
                          <p className="msg">RELunch of the new product</p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img
                            src="../../../assets/img/avatar/m10.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Amit Kulkarni</h4>
                          <p className="msg">
                            Why Do All Websites Look the Same? by Boris Müller
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img
                            src="../../../assets/img/avatar/m11.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Riya Vaswani</h4>
                          <p className="msg">
                            Why Do All Websites Look the Same? by Boris Müller
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img
                            src="../../../assets/img/avatar/m12.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Vandana Ranglani</h4>
                          <p className="msg">
                            Content Varifiacation and approval
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img
                            src="../../../assets/img/avatar/m13.png"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Komal Mule</h4>
                          <p className="msg">
                            Why Do All Websites Look the Same? by Boris Müller
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  cclassName={`mail-list-item ${isChecked ? "selected" : ""}`}
                >
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>

                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m6.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Ashish Patil</h4>
                          <p className="msg">
                            Why Do All Websites Look the Same? by Boris Müller
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>

                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
                  <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
                    <div className="d-flex align-items-center media-body position-relative">
                      <label className="custom-checkbox style--three">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <div className="dropdown-button ml-4">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-14 mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu">
                          <a href="#">Daily</a>
                          <a href="#">Sort By</a>
                          <a href="#">Monthly</a>
                        </div>
                      </div>

                      <a
                        href="read.html"
                        className="d-flex align-items-center mail-text"
                      >
                        <div className="avatar">
                          <img src="../../../assets/img/avatar/m7.png" alt="" />
                        </div>
                        <div className="content">
                          <h4 className="name mb-1">Atharv Pise</h4>
                          <p className="msg">
                            new design of superadmin dashboard for approval
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mail-list-item-right d-flex align-items-center">
                      <div className="mail-date bold"> 26 Sep </div>

                      <div className="star">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/star2.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                      <div className="delete_mail">
                        <a href="#">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            className="svg"
                          />
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
  );
}

export default IndoxEmail;
