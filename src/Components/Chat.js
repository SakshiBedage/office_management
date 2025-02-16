import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { reference } from "@popperjs/core";

function Chat() {
  const asideScrollbarRef = useRef(null);
  const chatScrollbarRef = useRef(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const asideScrollbar = new PerfectScrollbar(asideScrollbarRef.current);
    const chatScrollbar = new PerfectScrollbar(chatScrollbarRef.current);

    return () => {
      asideScrollbar.destroy();
      chatScrollbar.destroy();
      // If 'aw' is needed, make sure to handle it in the cleanup function.
    };
  }, []);

  return (
    <>
      <div className="main-content d-flex flex-column flex-md-row">
        <div className="mb-4 mb-md-0">
          <nav className="chat_aside">
            <div className="aside-header">
              <div className="aside-header-top">
                <div className="dropdown-button">
                  <a
                    href="#"
                    className="d-flex align-items-center"
                    data-toggle="dropdown"
                  >
                    <div className="menu-icon style--three mr-0">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#">Daily</a>
                    <a href="#">Sort By</a>
                    <a href="#">Monthly</a>
                  </div>
                </div>

                <div className="d-flex align-items-center profile">
                  <div className="avatar img-60 position-relative mr-3">
                    <img src="../../assets/img/avatar/m14.png" alt="" />
                    <span className="avatar-status bg-teal c1-bg"></span>
                  </div>
                  <div className="content">
                    <h4 className="name mb-1">Mudit Surana</h4>
                    <p className="font-14">Active Now</p>
                  </div>
                </div>
              </div>

              <div className="aside-header-bottom">
                <ul className="nav nav-tabs" role="tablist">
                  <li>
                    <a
                      className="active"
                      data-toggle="tab"
                      href="#tab_messages"
                    >
                      <img
                        src="../../assets/img/svg/msg-icon.svg"
                        alt=""
                        className="svg"
                        style={{ borderRadius: 0 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab_active_user">
                      <img
                        src="../../assets/img/svg/active-user.svg"
                        alt=""
                        className="svg"
                        style={{ borderRadius: 0 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab_user">
                      <img
                        src="../../assets/img/svg/user.svg"
                        alt=""
                        className="svg"
                        style={{ borderRadius: 0 }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      href="#tab_search"
                      id="search-tab"
                      onClick={toggleSearch}
                    >
                      <img
                        src="../../assets/img/svg/search.svg"
                        alt=""
                        className="svg"
                        style={{ borderRadius: 0 }}
                      />
                    </a>
                    {isSearchOpen && (
                      <div
                        id="search-box"
                        className={isSearchOpen ? "open" : ""}
                      >
                        <input type="text" placeholder="Search" />
                        <div
                          className="search-box-close"
                          onClick={toggleSearch}
                        >
                          <img
                            src="../../assets/img/svg/search-close.svg"
                            alt=""
                            className="svg"
                          />
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="aside-body"
              ref={asideScrollbarRef}
              data-trigger="scrollbar"
            >
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_messages">
                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m4.png" alt="" />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">
                          Drashti Shah <span className="ml-2 c3">(5)</span>
                        </h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message active media align-items-center"
                  >
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m5.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Amey Pisal</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m3.png" alt="" />
                      <span className="bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Sayali Velhal</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m15.png" alt="" />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Amit kulkarni</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m16.png" alt="" />
                      <span className="bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Riya vaswani</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m17.png" alt="" />
                      <span className="bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Vandana ranglani</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m18.png" alt="" />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Komal mulye</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m9.png" alt="" />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Nikhil Kamble</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m19.png" alt="" />
                      <span className="bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Sarvadnya Kamble</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img src="../../assets/img/avatar/m4.png" alt="" />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">
                          Atharv Pise <span className="ml-2 c3">(5)</span>
                        </h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>
                </div>

                <div className="tab-pane fade" id="tab_active_user">
                  <a
                    href="#"
                    className="message active media align-items-center"
                  >
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m5.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Drashti Shah</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m15.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Komal Mulye</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m18.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Amit kulkarni</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m9.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Nikhil Kamble</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>

                  <a href="#" className="message media align-items-center">
                    <div className="figure">
                      <img
                        src="../../assets/img/avatar/m19.png"
                        className="img-50"
                        alt=""
                      />
                      <span className="avatar-status bg-teal"></span>
                    </div>
                    <div className="content media-body">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h4 className="name">Atharv Pise</h4>
                        <p className="time bold">8:35am</p>
                      </div>
                      <p className="main-text">
                        Why Do All Websites Look the Sameakei...
                      </p>
                    </div>
                  </a>
                </div>

                <div className="tab-pane fade" id="tab_user">
                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m5.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Drishti Shash</h4>
                          <p>HR Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m3.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Amey Pisal</h4>
                          <p>Team Leader</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m15.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Mansi Kulkarni</h4>
                          <p>Team Leader</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m16.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Sayali Velhal</h4>
                          <p>Graphic Designerr</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m17.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Amit kulkarni</h4>
                          <p>SEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m18.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Riya vaswani</h4>
                          <p>SEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m9.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Vandana ranglani</h4>
                          <p>Content Creator</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m19.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Komal mulye</h4>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m20.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Nikhil Kamble</h4>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="tab-pane fade" id="tab_search">
                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m16.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Sarvadnya Kamble</h4>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m17.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Nikhil Kamble</h4>
                          <p>Video Editor</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m18.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Drishti Shah</h4>
                          <p>HR Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m9.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Amey Pisal</h4>
                          <p>Team Leader</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m19.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Sayali Velhal</h4>
                          <p>Graphic Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="message d-flex align-items-center justify-content-between"
                  >
                    <div className="media align-items-center">
                      <div className="figure">
                        <img
                          src="../../assets/img/avatar/m20.png"
                          className="img-50"
                          alt=""
                        />
                      </div>
                      <div className="content media-body">
                        <div className="">
                          <h4 className="name">Amit Kulkarni</h4>
                          <p>SEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mr-20">
                        <img
                          src="../../assets/img/svg/video-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                      <div className="mr-3">
                        <img
                          src="../../assets/img/svg/audio-call-fill.svg"
                          alt=""
                          className="svg"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="chat-header d-flex align-items-center justify-content-between media border-bottom">
                  <div className="chat-header-left mb-3 mb-md-0">
                    <div className="d-flex align-items-center profile">
                      <div className="avatar position-relative mr-3">
                        <img
                          src="../../assets/img/avatar/m5.png"
                          className="img-50"
                          alt=""
                        />
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="content">
                        <h4 className="name mb-1">Drishti Shah</h4>
                        <p className="font-14">Active Now</p>
                      </div>
                    </div>
                  </div>

                  <div className="chat-header-right d-flex align-items-center">
                    <div className="video-call mr-20">
                      <a href="#">
                        <img
                          src="../../assets/img/svg/video-call.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="audio-call mr-1">
                      <a href="#">
                        <img
                          src="../../assets/img/svg/audio-call.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="dropdown-button m-0">
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
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="chat-body pb-0"
                  ref={chatScrollbarRef}
                  data-trigger="scrollbar"
                >
                  <div className="chat-messages d-flex flex-column justify-content-end">
                    <div className="message-item friend">
                      <div className="avatar mr-20">
                        <img
                          src="../../assets/img/avatar/m14.png"
                          className="img-50"
                          alt="avatar"
                        />
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="content">
                        <div className="bubble">
                          <p>
                            Well, first and foremost, I wanted to update you on
                            our recent hiring efforts. We've successfully
                            onboarded three new employees in the marketing
                            department, and they seem to be adapting well to
                            their roles.
                          </p>
                        </div>
                        <div className="bubble">
                          <p>
                            I wanted to get your perspective on our overall
                            hiring strategy and if there are any specific areas
                            you'd like us to focus on.
                          </p>
                        </div>
                        <h6 className="font-12 c4 mt-n1">
                          <span>2:35pm</span>
                        </h6>
                      </div>
                    </div>

                    <div className="message-item me">
                      <div className="avatar mr-20">
                        <img
                          src="../../assets/img/avatar/m5.png"
                          className="img-50"
                          alt="avatar"
                        />
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="content">
                        <div className="bubble">
                          <p>
                            sir, I have sent you three invoices on your mail for
                            clearance.
                          </p>
                        </div>
                        <h6 className="font-12 c4 mt-n1">
                          <span>4:05pm</span>
                        </h6>
                      </div>
                    </div>

                    <div className="message-item friend">
                      <div className="avatar mr-20">
                        <img
                          src="../../assets/img/avatar/m14.png"
                          className="img-50"
                          alt="avatar"
                        />
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="content">
                        <div className="bubble">
                          <p>Sir its Urgent please check..!</p>
                        </div>
                        <h6 className="font-12 c4 mt-n1">
                          <span>4:45pm</span>
                        </h6>
                      </div>
                    </div>

                    <div className="message-item me">
                      <div className="avatar mr-20">
                        <img
                          src="../../assets/img/avatar/m5.png"
                          className="img-50"
                          alt="avatar"
                        />
                        <span className="avatar-status bg-teal"></span>
                      </div>
                      <div className="content">
                        <div className="bubble">
                          <p>
                            Duis pretium gravida enim, vel maximus ligula
                            fermentum a. Sed rhoncus eget ex id egestas. Nam nec
                            nisl placerat, tempus erat a, condimentum metus.
                            Curabitur nulla nisia.
                          </p>
                        </div>
                        <h6 className="font-12 c4 mt-n1">
                          <span>8:35pm</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-footer d-flex align-items-end pt-1">
                  <div className="voice-msg mr-20">
                    <a href="#">
                      <img
                        src="../../assets/img/svg/voice-msg.svg"
                        alt=""
                        className="svg"
                      />
                    </a>
                  </div>

                  <div className="attach-file mr-20">
                    <a href="#">
                      <img
                        src="../../assets/img/svg/attach.svg"
                        alt=""
                        className="svg"
                      />
                    </a>
                    <input
                      className="file-input"
                      type="file"
                      id="fileUpload"
                      multiple=""
                    />
                  </div>

                  <form
                    action="#"
                    method="POST"
                    className="flex-grow mr-20 radius-10"
                  >
                    <textarea
                      name="chat_msg"
                      className="theme-input-style style--three"
                    ></textarea>
                  </form>

                  <div className="d-flex align-items-center">
                    <div className="submit mr-20">
                      <a href="#">
                        <img
                          src="../../assets/img/svg/send.svg"
                          alt=""
                          className="svg"
                        />
                      </a>
                    </div>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--three mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
