import React, { useEffect } from "react";
import { useState } from "react";

function ReadEmail() {
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
              <a href="compose.html" class="btn-circle style--two">
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
                <div class="mail-header d-flex align-items-md-center media flex-column flex-md-row justify-content-md-between">
                  <div class="mail-header-right mb-3 mb-md-0">
                    <h4 class="font-20 mr-md-2 l-height1">
                      <span class="text_color">Subject: </span>Why Do All
                      Websites Look the Same? by Boris Müller
                    </h4>
                  </div>

                  <div class="mail-header-left d-flex align-items-center">
                    <div class="star">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/star.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </div>

                    <div class="print">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/print-icon.svg"
                          class="svg"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="unread">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/mail.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </div>

                    <div class="tag_mail">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/tag.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </div>

                    <div class="delete_mail mr-1">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/delete.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </div>

                    <div class="dropdown-button m-0">
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
                  </div>
                </div>
              </div>

              <div class="main-mail">
                <div class="d-flex flex-column flex-sm-row border-bottom pb-3">
                  <div class="avatar mb-2 mb-sm-0">
                    <img src="../../../assets/img/avatar/m5.png" alt="" />
                  </div>
                  <div class="content">
                    <div class="d-flex justify-content-sm-between align-items-sm-center flex-column flex-sm-row">
                      <div class="mb-2 mb-sm-0 mr-sm-2">
                        <h4 class="name mt-1 mb-2">
                          Sandra Jones{" "}
                          <span class="font-14 c4 ml-2">
                            (sandra@gmail.com)
                          </span>
                        </h4>

                        <div class="font-14">
                          <span class="c4">
                            to <span class="bold text_color">me</span>
                          </span>
                          <span class="ml-3 c4">
                            at{" "}
                            <span class="bold text_color">15 October 2019</span>
                          </span>
                          <span class="ml-3">11:43 pm</span>
                        </div>
                      </div>

                      <div class="mail-right d-flex align-items-center ml-0">
                        <div class="star">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/star2.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="replay p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/reply.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="forward mr-1 p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/forward.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="dropdown-button m-0">
                          <a
                            href="#"
                            class="d-flex align-items-center"
                            data-toggle="dropdown"
                          >
                            <div class="menu-icon style--two w-14 mr-0">
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
                      </div>
                    </div>

                    <div class="mail-body mt-3 mt-sm-2 pr-0 pr-sm-4">
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim, quis porttitor magna. Etiam nec rhoncus
                      neque. Sed quis ultrices eros. Curabitur sit amet eros eu
                      arcu consectetur pulvinar....
                    </div>
                  </div>
                </div>

                <div class="d-flex border-bottom pt-3 pb-3 flex-column flex-sm-row">
                  <div class="avatar mb-2 mb-sm-0">
                    <img src="../../../assets/img/avatar/m7.png" alt="" />
                  </div>
                  <div class="content">
                    <div class="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row">
                      <div class="mb-2 mb-sm-0 mr-sm-2">
                        <h4 class="name mt-1 mb-2">
                          Abrilay Khatun{" "}
                          <span class="font-14 c4 ml-2">
                            abrilakh@gmail.com
                          </span>
                        </h4>

                        <div class="font-14">
                          <span class="c4">
                            to <span class="bold text_color">Sandra</span>
                          </span>
                          <span class="ml-3 c4">
                            at{" "}
                            <span class="bold text_color">15 October 2019</span>
                          </span>
                          <span class="ml-3">11:43 pm</span>
                        </div>
                      </div>

                      <div class="mail-right d-flex align-items-center ml-0">
                        <div class="star">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/star2.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="replay p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/reply.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="forward mr-1 p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/forward.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="dropdown-button m-0">
                          <a
                            href="#"
                            class="d-flex align-items-center"
                            data-toggle="dropdown"
                          >
                            <div class="menu-icon style--two w-14 mr-0">
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
                      </div>
                    </div>

                    <div class="mail-body mt-3 mt-sm-2 pr-0 pr-sm-4">
                      Duis porta, ligula rhoncus euismod pretium, nisi tellus
                      eleifend odio, luctus viverra sem dolor id sem. Maecenas a
                      venenatis enim, quis porttitor magna. Etiam nec rhoncus
                      neque. Sed quis ultrices eros. Curabitur sit amet eros eu
                      arcu consectetur pulvinar....
                    </div>
                  </div>
                </div>

                <div class="d-flex pt-3 flex-column flex-sm-row">
                  <div class="avatar mb-2 mb-sm-0">
                    <img src="../../../assets/img/avatar/m5.png" alt="" />
                  </div>
                  <div class="content">
                    <div class="d-flex justify-content-between align-items-sm-center mb-10 flex-column flex-sm-row">
                      <div class="mb-2 mb-sm-0 mr-sm-2">
                        <h4 class="name mt-1 mb-2">
                          Sandra Jones{" "}
                          <span class="font-14 c4 ml-2">
                            (sandra@gmail.com)
                          </span>
                        </h4>

                        <div class="font-14">
                          <span class="c4">
                            to <span class="bold text_color">me</span>
                          </span>
                          <span class="ml-3 c4">
                            at{" "}
                            <span class="bold text_color">15 October 2019</span>
                          </span>
                          <span class="ml-3">11:43 pm</span>
                        </div>
                      </div>

                      <div class="mail-right d-flex align-items-center ml-0">
                        <div class="star">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/star.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="replay p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/reply2.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="forward mr-1 p-0 bg-transparent">
                          <a href="#">
                            <img
                              src="../../../assets/img/svg/forward2.svg"
                              alt=""
                              class="svg"
                            />
                          </a>
                        </div>

                        <div class="dropdown-button m-0">
                          <a
                            href="#"
                            class="d-flex align-items-center"
                            data-toggle="dropdown"
                          >
                            <div class="menu-icon style--two w-14 mr-0">
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
                      </div>
                    </div>

                    <div class="mail-body mt-3 mt-sm-2 pr-0 pr-sm-4">
                      <p>
                        Hi, <br />
                        The guide price is based on today's prices instore.
                        However as we shop for your order on the day you want it
                        delivered, some of the prices may have changed. Weighed
                        products: the guide price on the website uses an
                        estimate weight for weighed products such as grapes or
                        cheese. But what you pay will be based on the exact
                        weight of your product, so the price may vary slightly.
                        i must disagree with Mr.Zinsser. We all know the most
                        part of important part of any article is the
                        title.Without a compelleing title, your reader won't
                        even get to the first syntence.After the title, however
                      </p>
                      <p>
                        Best regards,
                        <br />
                        Jason Muller
                      </p>
                    </div>

                    <div class="mail-attachments mt-20 pb-3">
                      <h6 class="attachment_title mb-3">
                        Attachments <span>(2 files, 5mb)</span>
                      </h6>
                      <div class="d-flex flex-column flex-sm-row">
                        <div class="attachment file-pdf mr-5 mb-3 mb-sm-0">
                          <div class="media align-items-center">
                            <div class="mr-2">
                              <img
                                src="../../../assets/img/png-icon/file.png"
                                alt=""
                              />
                            </div>

                            <div class="media-body ie-flex-basis pl-1">
                              <p class="file-name font-14 mb-0">
                                Attached_File.psd
                              </p>
                              <p class="file-size font-13 bold c4 m-0">2.5mb</p>
                            </div>
                          </div>
                        </div>

                        <div class="attachment file-folder">
                          <div class="media align-items-center">
                            <div class="mr-2">
                              <img
                                src="../../../assets/img/png-icon/file2.png"
                                alt=""
                              />
                            </div>
                            <div class="media-body ie-flex-basis pl-1">
                              <p class="file-name font-14 mb-0">
                                Attached_File.zip
                              </p>
                              <p class="file-size font-13 bold c4 m-0">2.5mb</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="compose-wrap mt-5">
                <div class="mail-compose">
                  <form action="#" method="post">
                    <div class="replay-cc-bcc media flex-column flex-xl-row">
                      <div class="d-flex align-items-center mr-xl-5 mr-4">
                        <div class="avatar mr-3">
                          <img src="../../../assets/img/avatar/m7.png" alt="" />
                        </div>
                        <div class="content">
                          <h4 class="name mb-1">Abrilay Khatun</h4>
                          <p>abrilakh@gmail.com</p>
                        </div>
                      </div>
                      <div class="media-body w-100 mt-3 mt-xl-0">
                        <div class="form-group align-items-md-center media flex-column flex-md-row">
                          <label for="sending_to" class="font-14">
                            Replying to
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
                            <h4
                              class="d-block mr-3 cc cc-btn"
                              onClick={toggleCcForm}
                            >
                              Cc
                            </h4>
                            <h4
                              class="d-block bcc cc-btn"
                              onClick={toggleBccForm}
                            >
                              Bcc
                            </h4>
                          </div>
                        </div>

                        <div class="cc-bcc">
                          {showCcForm && (
                            <div class="form-group cc-form-group media align-items-md-center flex-column flex-md-row">
                              <label for="cc" class="font-14">
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
                              <label for="bcc" class="font-14">
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
                      </div>
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
    </div>
  );
}

export default ReadEmail;
