import React, { useEffect } from "react";
import { useState } from "react";

function ComposeEmail() {
  const [showCcForm, setShowCcForm] = useState(false);
  const [showBccForm, setShowBccForm] = useState(false);

  const toggleCcForm = () => {
    setShowCcForm(!showCcForm);
  };

  const toggleBccForm = () => {
    setShowBccForm(!showBccForm);
  };

  const closeCcForm = () => {
    setShowCcForm(false);
  };

  const closeBccForm = () => {
    setShowBccForm(false);
  };
  useEffect(() => {
    // Load Summernote scripts dynamically
    const summernoteScript1 = document.createElement("script");
    summernoteScript1.src =
      "../../../assets/plugins/summernote/summernote-bs4.min.js";
    summernoteScript1.async = true;
    document.body.appendChild(summernoteScript1);

    const summernoteScript2 = document.createElement("script");
    summernoteScript2.src =
      "../../../assets/plugins/summernote/summernote-bs4-init.js";
    summernoteScript2.async = true;
    document.body.appendChild(summernoteScript2);

    // Cleanup the scripts when the component is unmounted
    return () => {
      document.body.removeChild(summernoteScript1);
      document.body.removeChild(summernoteScript2);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div class="main-content d-flex flex-column flex-md-row">
      <div class="mb-4 mb-md-0">
        <nav class="tasks_aside">
          <div class="aside-header pr-0">
            <div class="aside-header-btn d-flex justify-content-end position-relative">
              <h4 class="aside-btn-text c1 d-xl-flex align-items-center">
                Compose New
              </h4>
              <a href="#" class="btn-circle style--two">
                <img
                  src="../../../assets/img/svg/plus_white.svg"
                  alt=""
                  class="svg"
                />
              </a>
            </div>
          </div>
          <div class="aside-body">
            <ul class="nav flex-column">
              <li class="active">
                <a href="#">
                  Inbox{" "}
                  <span class="c3 bold font-14 ml-1 float-right">(5)</span>
                </a>
              </li>
              <li>
                <a href="#">Sent</a>
              </li>
              <li>
                <a href="#">
                  Draft{" "}
                  <span class="c3 bold font-14 ml-1 float-right">(3)</span>
                </a>
              </li>
              <li>
                <a href="#">Starred</a>
              </li>
              <li>
                <a href="#">Snoozed</a>
              </li>

              <li
                class="nav-category less bold font-14 mt-4"
                data-toggle="collapse"
                data-target="less-dropdown"
              >
                Less
              </li>
            </ul>
            <ul id="less-dropdown" class="list-unstyled">
              <li class="lavel">
                <a href="#">Important</a>
              </li>
              <li class="lavel">
                <a href="#">Scheduled</a>
              </li>
              <li class="lavel">
                <a href="#">Trash</a>
              </li>
              <li class="lavel">
                <a href="#">Spam</a>
              </li>

              <li class="nav-category bold font-14 mt-4">Lavels</li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color products"></span>
                  Products
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color works"></span>
                  Works
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color family"></span>
                  Family
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color friends"></span>
                  Friends
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color design"></span>
                  Design{" "}
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span class="tag_color others"></span>
                  Others{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card bg-transparent">
              <div class="card-body card_color-bg mb-30">
                <div class="mail-header ">
                  <h4>New Message</h4>
                </div>
              </div>

              <div class="mail-compose">
                <form action="#" method="post">
                  <div class="form-group align-items-md-center media flex-column flex-md-row">
                    <label for="sending_to" class="font-14 bold">
                      Sending To
                    </label>
                    <div class="input-wrap d-flex align-items-center media-body flex-wrap">
                      <span>
                        Sandra Jones{" "}
                        <img
                          src="../../../assets/img/svg/table-colse.svg"
                          alt=""
                          class="svg"
                        />
                      </span>
                      <span>
                        Tyler Woodkin{" "}
                        <img
                          src="../../../assets/img/svg/table-colse.svg"
                          alt=""
                          class="svg"
                        />
                      </span>
                      <div>
                        <input
                          class="theme-input-style style--two"
                          type="email"
                          id="sending_to"
                        />
                      </div>
                    </div>
                    <div class="d-flex align-items-center cc-btns">
                      <h4 class="d-block mr-3 cc cc-btn" onClick={toggleCcForm}>
                        Cc
                      </h4>
                      <h4 class="d-block bcc cc-btn" onClick={toggleBccForm}>
                        Bcc
                      </h4>
                    </div>
                  </div>

                  <div class="cc-bcc">
                    {showCcForm && (
                      <div class="form-group cc-form-group media align-items-md-center flex-column flex-md-row">
                        <label for="cc" class="font-14 bold">
                          Cc
                        </label>
                        <div class="input-wrap d-flex align-items-center media-body flex-wrap">
                          <span>
                            Ruth James{" "}
                            <img
                              src="../../../assets/img/svg/table-colse.svg"
                              alt=""
                              class="svg"
                            />
                          </span>
                          <div>
                            <input
                              class="theme-input-style style--two"
                              type="email"
                              id="cc"
                            />
                          </div>
                        </div>
                        <div class="close-btn" onClick={closeCcForm}>
                          <img
                            src="../../../assets/img/svg/close.svg"
                            alt=""
                            class="svg"
                          />
                        </div>
                      </div>
                    )}
                    {showBccForm && (
                      <div class="form-group bcc-form-group media align-items-md-center flex-column flex-md-row">
                        <label for="bcc" class="font-14 bold">
                          Bcc
                        </label>
                        <div class="input-wrap d-flex align-items-center media-body flex-wrap">
                          <span>
                            Craig Lynch{" "}
                            <img
                              src="../../../assets/img/svg/table-colse.svg"
                              alt=""
                              class="svg"
                            />
                          </span>
                          <span>
                            Francine Barrett{" "}
                            <img
                              src="../../../assets/img/svg/table-colse.svg"
                              alt=""
                              class="svg"
                            />
                          </span>
                          <div>
                            <input
                              class="theme-input-style style--two"
                              type="email"
                              id="bcc"
                            />
                          </div>
                        </div>
                        <div class="close-btn" onClick={closeBccForm}>
                          <img
                            src="../../../assets/img/svg/close.svg"
                            alt=""
                            class="svg"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div class="form-group align-items-md-center media flex-column flex-md-row">
                    <label for="subject" class="font-14 bold">
                      Subject
                    </label>
                    <div class="media-body w-100">
                      <input
                        class="theme-input-style style--two"
                        type="text"
                        id="subject"
                      />
                    </div>
                    <div class="cc-btns"></div>
                  </div>

                  <div class="summernote">
                    <textarea
                      name="editordata"
                      data-trigger="summernote"
                    ></textarea>

                    <div class="note-editor-bottom d-flex justify-content-between align-content-center">
                      <div class="d-flex align-items-center">
                        <button type="submit" class="btn mr-3">
                          Send now
                        </button>
                        <div class="attach-file">
                          <i class="icofont-clip"></i>
                          <span class="fake-btn"></span>
                          <input
                            class="file-input"
                            type="file"
                            id="fileUpload"
                            multiple
                          />
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="dropdown-button mr-3">
                          <a
                            href="#"
                            class="d-flex align-items-center"
                            data-toggle="dropdown"
                          >
                            <div class="menu-icon style--two justify-content-center mr-0">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="#">Daily</a>
                            <a href="#">Sort By</a>
                            <a href="#">Monthly</a>
                          </div>
                        </div>

                        <a href="" class="delete">
                          <img
                            src="../../../assets/img/svg/delete.svg"
                            alt=""
                            class="svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComposeEmail;
