import { Link } from "react-router-dom";

function NewsFeed() {
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="user-profile-img">
                <div className="cover-img">
                  <img
                    src="../../../assets/img/media/cover.jpg"
                    className="w-100"
                    alt=""
                  />

                  <div className="upload-button">
                    <img
                      src="../../../assets/img/svg/gallery.svg"
                      alt=""
                      className="svg mr-2"
                    />
                    <span>Upload Photo</span>
                    <input
                      className="file-input"
                      type="file"
                      id="fileUpload3"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2 mx-lg-4 mx-xl-5">
              <div className="card mt-1">
                <div className="user-profile-nav d-flex justify-content-xl-between align-items-xl-center flex-column flex-xl-row">
                  <div className="profile-info d-flex align-items-center">
                    <div className="profile-pic mr-3">
                      <img
                        src="../../../assets/img/media/profile-pic.jpg"
                        alt=""
                      />

                      <div className="upload-button">
                        <img
                          src="../../../assets/img/svg/gallery.svg"
                          alt=""
                          className="svg mr-2"
                        />
                        <span>Upload Photo</span>
                        <input
                          className="file-input"
                          type="file"
                          id="fileUpload2"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div>
                      <h3>Abrilay Khatun</h3>
                      <p className="font-14">Head Of Business Development</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-3 mt-xl-0">
                    <ul className="nav profile-nav-tabs">
                      <li>
                        <a
                          className="active pr-0 pl-2 pl-xl-30"
                          href="profile-chat.html"
                        >
                          <span className="chat">
                            <img
                              src="../../../assets/img/svg/chat-icon.svg"
                              alt=""
                              className="svg"
                            />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="conncetion" href="connection.html">
                          <div className="btn-circle mr-20">
                            <img
                              src="../../../assets/img/svg/user-check.svg"
                              alt=""
                              className="svg"
                            />
                          </div>
                          <div className="font-14">
                            <h4>154</h4>
                            <p className="font-14 text_color">Connections</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/aboutuserprofile"
                          className="p_nav-link has-before"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" className="p_nav-link">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsfeed" className="p_nav-link active">
                          News Feed
                        </Link>
                      </li>
                    </ul>

                    <div className="px-3">
                      <div className="dropdown-button">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon style--two w-auto justify-content-center mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link to="/editprofile">Edit Profile</Link>
                          <Link to="/userdashboard">User Dashboard</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-30">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-5">
                    <div className="todays-evnet">
                      <div className="bg-3rd profile-widget-header">
                        <h4 className="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/calender-color.svg"
                            alt=""
                            className="svg mr-3"
                          />
                          Today's Events
                        </h4>
                      </div>
                      <div className="card">
                        <ul className="list-unstyled">
                          <li className="border-bottom">
                            <h5>Ligula rhoncus euismod pretium</h5>
                            <div className="event-meta font-14 d-flex align-items-center">
                              <img
                                src="../../../assets/img/svg/watch2.svg"
                                alt=""
                                className="svg"
                              />
                              <span className="time d-inline-block ml-2">
                                7.20pm
                              </span>
                              <span className="date d-inline-block ml-2">
                                12 October 2019
                              </span>
                            </div>
                            <p className="mt-2">
                              Duis porta, ligula rhoncus euismod pretium, nisi
                              tellus eleifend odio, luctus viverra sem dolor id
                              sem. Maecenas a venenatis enim, quis porttitor
                              magna.
                            </p>
                          </li>
                          <li className="border-bottom">
                            <h5>
                              Phasellus finibus enim nulla, quis ornare odio
                              facilisiseu
                            </h5>
                            <div className="event-meta font-14 d-flex align-items-center">
                              <img
                                src="../../../assets/img/svg/watch2.svg"
                                alt=""
                                className="svg"
                              />
                              <span className="time d-inline-block ml-2">
                                7.20pm
                              </span>
                              <span className="date d-inline-block ml-2">
                                12 October 2019
                              </span>
                            </div>
                          </li>
                          <li className="border-bottom">
                            <h5>Aenean sed nibh a magna posuere tempor.</h5>
                            <div className="event-meta font-14 d-flex align-items-center">
                              <img
                                src="../../../assets/img/svg/watch2.svg"
                                alt=""
                                className="svg"
                              />
                              <span className="time d-inline-block ml-2">
                                7.20pm
                              </span>
                              <span className="date d-inline-block ml-2">
                                12 October 2019
                              </span>
                            </div>
                          </li>
                          <li>
                            <h5>
                              Aenean sed lorem ested quis neque ut nibh suscipit
                              imperdiet
                            </h5>
                            <div className="event-meta font-14 d-flex align-items-center">
                              <img
                                src="../../../assets/img/svg/watch2.svg"
                                alt=""
                                className="svg"
                              />
                              <span className="time d-inline-block ml-2">
                                7.20pm
                              </span>
                              <span className="date d-inline-block ml-2">
                                12 October 2019
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="news mt-30">
                      <div className="bg-3rd profile-widget-header">
                        <h5 className="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/notification-icon.svg"
                            alt=""
                            className="svg mr-3"
                          />
                          News
                        </h5>
                      </div>
                      <div className="card news-card">
                        <a
                          href="#"
                          className="item-single border-bottom d-flex align-items-center"
                        >
                          <div className="content">
                            <p className="mb-1">
                              Good to get ahead of the problem and use "Code
                              Splitting"
                            </p>
                            <span className="source font-14 bold c4">
                              Daily Star
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="item-single border-bottom d-flex align-items-center"
                        >
                          <div className="content">
                            <p className="mb-1">
                              Advantages boisterous day excellence boy. Out
                              between our two waiting wishing
                            </p>
                            <span className="source font-14 bold c4">
                              Dashmin
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="item-single border-bottom d-flex align-items-center"
                        >
                          <div className="content">
                            <p className="mb-1">
                              Advantages boisterous day excellence boy. Out
                              between our two waiting wishing
                            </p>
                            <span className="source font-14 bold c4">
                              Dashmin
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="item-single border-bottom d-flex align-items-center"
                        >
                          <div className="content">
                            <p className="mb-1">
                              Advantages boisterous day excellence boy. Out
                              between our two waiting wishing
                            </p>
                            <span className="source font-14 bold c4">
                              Dashmin
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="item-single d-flex align-items-center"
                        >
                          <div className="content">
                            <p className="mb-1">
                              Advantages boisterous day excellence boy. Out
                              between our two waiting wishing
                            </p>
                            <span className="source font-14 bold c4">
                              Dashmin
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="info mt-30">
                      <div className="bg-3rd profile-widget-header">
                        <h5 className="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/info3.svg"
                            alt=""
                            className="svg mr-3"
                          />
                          Info
                        </h5>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <ul className="p_info-list list-unstyled">
                            <li>
                              UX Designer at{" "}
                              <a href="https://www.google.com">google</a>
                            </li>
                            <li>
                              Former UI Designer at <a href="#">CBI</a>
                            </li>
                            <li>
                              Studied <a href="#">IT science</a> at{" "}
                              <a href="#">Torronto</a>
                            </li>
                            <li>
                              Studied at <a href="E">College of new Jersey</a>
                            </li>
                            <li>
                              Followed by <a href="#">338 people</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="bg-3rd profile-widget-header">
                        <h5 className="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/info3.svg"
                            alt=""
                            className="svg mr-3"
                          />
                          Top Followers
                        </h5>
                      </div>

                      <table className="style--five">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Kary Threlkeld</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Kizzy Savoy</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f3.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Tonette Baumgarten</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f4.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Luella Brumit</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f5.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Dionne Rosser</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="img">
                                  <img
                                    src="../../../assets/img/avatar/f6.png"
                                    alt=""
                                  />
                                </div>
                                <div className="name">Earl Penton</div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="follow-btn">
                                Follow <i className="icofont-arrow-right"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card mt-30">
                      <div className="bg-3rd profile-widget-header">
                        <h5 className="d-flex align-items-center">
                          <img
                            src="../../../assets/img/svg/gallery2.svg"
                            alt=""
                            className="svg mr-3"
                          />
                          Gallery
                        </h5>
                      </div>
                      <div className="wedget-gallery pb-1 pl-1 pr-2 pt-2">
                        <div className="row ml-0 mr-0">
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p1.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p2.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p3.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p4.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p5.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p6.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p7.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p8.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                          <div className="col-md-4 col-6 pl-1 pr-0 pb-1">
                            <img
                              src="../../../assets/img/media/p9.png"
                              className="img-fluid"
                              alt="gallery avtar img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-7">
                    <div className="card mt-30 mt-md-0">
                      <div className="card-body">
                        <div className="form-group media">
                          <div className="figure position-relative mr-20">
                            <img
                              src="../../../assets/img/avatar/user.png"
                              className="img-50"
                              alt=""
                            />
                            <span className="avatar-status bg-teal"></span>
                          </div>

                          <div className="media-body">
                            <textarea className="theme-input-style style--two">
                              Duis pretium gravida enim, vel maximus ligula
                              fermentum a. Sed rhoncus eget ex id egestas. Nam
                              nec nisl placerat, tempus erat a, condimentum
                              metus. Curabitur nulla nisia
                            </textarea>
                          </div>
                        </div>

                        <div className="post-controls d-flex justify-content-end align-items-center">
                          <div className="voice-msg mr-10">
                            <a href="#">
                              <img
                                src="../../../assets/img/svg/voice-message.svg"
                                alt=""
                                className="svg"
                              />
                            </a>
                          </div>

                          <div className="attach bg-pink-light mr-10">
                            <a href="#">
                              <img
                                src="../../../assets/img/svg/post-attach.svg"
                                alt=""
                                className="svg"
                              />
                            </a>
                          </div>

                          <div className="emoji bg-success-light mr-10">
                            <a href="#">
                              <img
                                src="../../../assets/img/svg/emoji.svg"
                                alt=""
                                className="svg"
                              />
                            </a>
                          </div>

                          <div className="location bg-warning-light">
                            <a href="#">
                              <img
                                src="../../../assets/img/svg/l.svg"
                                alt=""
                                className="svg"
                              />
                            </a>
                          </div>

                          <button type="button" className="btn">
                            Post Now
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="card-body">
                        <div className="post-head d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="figure position-relative mr-20">
                              <img
                                src="../../../assets/img/avatar/m12.png"
                                className="img-50"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content">
                              <h4 className="mb-1">Martha Williamson</h4>
                              <p>2 Hours ago</p>
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">save post</a>
                              <a href="#">turn on notification for this post</a>
                              <a href="#">embed</a>
                              <a href="#">hide post</a>
                              <a href="#">unfollow</a>
                              <a href="#">find support or report post</a>
                            </div>
                          </div>
                        </div>

                        <div className="post-body">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam.
                          </p>

                          <div className="img">
                            <img
                              src="../../../assets/img/media/post1.jpg"
                              className="w-100"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="post-footer d-flex mt-20">
                          <div className="love d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/love.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">22</span>Loved
                            </div>

                            <div className="member d-xl-flex d-none align-items-center ml-4">
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m27.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m12.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m2.png"
                                  alt=""
                                />
                              </a>
                              <span className="ml-10 font-12">+10 more</span>
                            </div>
                          </div>

                          <div className="comment d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/comment.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Comments
                            </div>
                          </div>

                          <div className="share d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/share2.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Share
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="card-body">
                        <div className="post-head d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="figure position-relative mr-20">
                              <img
                                src="../../../assets/img/avatar/m13.png"
                                className="img-50"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content">
                              <h4 className="mb-1">Jonathan Clark</h4>
                              <p>2 Hours ago</p>
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">save post</a>
                              <a href="#">turn on notification for this post</a>
                              <a href="#">embed</a>
                              <a href="#">hide post</a>
                              <a href="#">unfollow</a>
                              <a href="#">find support or report post</a>
                            </div>
                          </div>
                        </div>

                        <div className="post-body">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam.
                          </p>
                        </div>

                        <div className="post-footer d-flex mt-20">
                          <div className="love d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/love.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">22</span>Loved
                            </div>

                            <div className="member d-xl-flex d-none align-items-center ml-4">
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m27.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m12.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m2.png"
                                  alt=""
                                />
                              </a>
                              <span className="ml-10 font-12">+10 more</span>
                            </div>
                          </div>

                          <div className="comment d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/comment.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Comments
                            </div>
                          </div>

                          <div className="share d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/share2.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Share
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="card-body">
                        <div className="post-head d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="figure position-relative mr-20">
                              <img
                                src="../../../assets/img/avatar/m14.png"
                                className="img-50"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content">
                              <h4 className="mb-1">Christine Gilbert</h4>
                              <p>2 Hours ago</p>
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">save post</a>
                              <a href="#">turn on notification for this post</a>
                              <a href="#">embed</a>
                              <a href="#">hide post</a>
                              <a href="#">unfollow</a>
                              <a href="#">find support or report post</a>
                            </div>
                          </div>
                        </div>

                        <div className="post-body">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam. Enter each item on a new line,
                            choose the amount of groups unders settings, and
                            click the button to generate your randomized list.
                            Don't like the first team? Just click again until
                            you do.
                          </p>
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam.
                          </p>
                        </div>

                        <div className="post-footer d-flex mb-20 mt-20">
                          <div className="love d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/love.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">22</span>Loved
                            </div>

                            <div className="member d-xl-flex d-none align-items-center ml-4">
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m27.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m12.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m2.png"
                                  alt=""
                                />
                              </a>
                              <span className="ml-10 font-12">+10 more</span>
                            </div>
                          </div>

                          <div className="comment d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/comment.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Comments
                            </div>
                          </div>

                          <div className="share d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/share2.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Share
                            </div>
                          </div>
                        </div>

                        <div className="comments-area">
                          <ul className="comment-list pt-20">
                            <li className="comment">
                              <article className="single-comment media">
                                <div className="comment-author-image position-relative mr-20">
                                  <img
                                    src="../../../assets/img/avatar/m13.png"
                                    className="img-50"
                                    alt=""
                                  />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="comment-content media-body">
                                  <div className="">
                                    <h5 className="author_name">
                                      Christine Alvarado
                                    </h5>
                                    <span className="commented-on font-12">
                                      2 Hours ago
                                    </span>
                                  </div>
                                  <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the moment
                                  </p>
                                  <a
                                    className="comment-reply-link font-14 bold text_color"
                                    href="#"
                                  >
                                    <img
                                      src="../../../assets/img/svg/reply.svg"
                                      alt=""
                                      className="svg mr-2"
                                    />
                                    Reply
                                  </a>
                                </div>
                              </article>
                              `
                            </li>
                            <li className="comment">
                              <article className="single-comment media">
                                <div className="comment-author-image position-relative mr-20">
                                  <img
                                    src="../../../assets/img/avatar/m12.png"
                                    className="img-50"
                                    alt=""
                                  />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="comment-content media-body">
                                  <div className="">
                                    <h5 className="author_name">
                                      Terry Wallace
                                    </h5>
                                    <span className="commented-on font-12">
                                      2 Hours ago
                                    </span>
                                  </div>
                                  <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure of the moment
                                  </p>
                                  <a
                                    className="comment-reply-link font-14 bold text_color"
                                    href="#"
                                  >
                                    <img
                                      src="../../../assets/img/svg/reply.svg"
                                      alt=""
                                      className="svg mr-2"
                                    />
                                    Reply
                                  </a>
                                </div>
                              </article>
                              <ul className="children">
                                <li className="comment">
                                  <article className="single-comment media">
                                    <div className="comment-author-image position-relative mr-20">
                                      <img
                                        src="../../../assets/img/avatar/m1.png"
                                        className="img-50"
                                        alt=""
                                      />
                                      <span className="avatar-status bg-teal"></span>
                                    </div>
                                    <div className="comment-content media-body">
                                      <div className="">
                                        <h5 className="author_name">
                                          Tom Holmes
                                        </h5>
                                        <span className="commented-on font-12">
                                          2 Hours ago
                                        </span>
                                      </div>
                                      <p>
                                        On the other hand, we denounce with
                                        righteous indignation and dislike men
                                        who are so beguiled and demoralized by
                                        the charms of pleasure of the moment
                                      </p>
                                      <a
                                        className="comment-reply-link font-14 bold text_color"
                                        href="#"
                                      >
                                        <img
                                          src="../../../assets/img/svg/reply.svg"
                                          alt=""
                                          className="svg mr-2"
                                        />
                                        Reply
                                      </a>
                                    </div>
                                  </article>
                                  <ul className="children">
                                    <li className="comment">
                                      <article className="single-comment media">
                                        <div className="comment-author-image position-relative mr-20">
                                          <img
                                            src="../../../assets/img/avatar/m2.png"
                                            className="img-50"
                                            alt=""
                                          />
                                          <span className="avatar-status bg-teal"></span>
                                        </div>
                                        <div className="comment-content media-body">
                                          <div className="">
                                            <h5 className="author_name">
                                              Kendra Ratzlayff
                                            </h5>
                                            <span className="commented-on font-12">
                                              2 Hours ago
                                            </span>
                                          </div>
                                          <p>
                                            On the other hand, we denounce with
                                            righteous indignation and dislike
                                            men who are so beguiled and
                                            demoralized by the charms of
                                            pleasure of the moment
                                          </p>
                                          <a
                                            className="comment-reply-link font-14 bold text_color"
                                            href="#"
                                          >
                                            <img
                                              src="../../../assets/img/svg/reply.svg"
                                              alt=""
                                              className="svg mr-2"
                                            />
                                            Reply
                                          </a>
                                        </div>
                                      </article>
                                    </li>
                                    <li className="comment">
                                      <article className="single-comment media">
                                        <div className="comment-author-image position-relative mr-20">
                                          <img
                                            src="../../../assets/img/avatar/m13.png"
                                            className="img-50"
                                            alt=""
                                          />
                                          <span className="avatar-status bg-teal"></span>
                                        </div>
                                        <div className="comment-content media-body">
                                          <div className="">
                                            <h5 className="author_name">
                                              Christine Alvarado
                                            </h5>
                                            <span className="commented-on font-12">
                                              2 Hours ago
                                            </span>
                                          </div>
                                          <p>
                                            On the other hand, we denounce with
                                            righteous indignation and dislike
                                            men who are so beguiled and
                                            demoralized by the charms of
                                            pleasure of the moment
                                          </p>
                                          <a
                                            className="comment-reply-link font-14 bold text_color"
                                            href="#"
                                          >
                                            <img
                                              src="../../../assets/img/svg/reply.svg"
                                              alt=""
                                              className="svg mr-2"
                                            />
                                            Reply
                                          </a>
                                        </div>
                                      </article>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="comment-respond">
                          <form
                            action="#"
                            method="post"
                            className="comment-form"
                          >
                            <div className="form-group media">
                              <div className="figure position-relative mr-20">
                                <img
                                  src="../../../assets/img/avatar/user.png"
                                  className="img-50"
                                  alt=""
                                />
                                <span className="avatar-status bg-teal"></span>
                              </div>

                              <div className="media-body">
                                <textarea className="theme-input-style style--three">
                                  Duis pretium gravida enim, vel maximus ligula
                                  fermentum a. Sed rhoncus eget ex id egestas.
                                  Nam nec nisl placerat, tempus erat a,
                                  condimentum metus. Curabitur nulla nisia
                                </textarea>
                                <button
                                  type="button"
                                  className="btn btn-fill mt-20"
                                >
                                  Post Your Comment
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="card-body">
                        <div className="post-head d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="figure position-relative mr-20">
                              <img
                                src="../../../assets/img/avatar/m15.png"
                                className="img-50"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content">
                              <h4 className="mb-1">Martha Carpenter</h4>
                              <p>2 Hours ago</p>
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">save post</a>
                              <a href="#">turn on notification for this post</a>
                              <a href="#">embed</a>
                              <a href="#">hide post</a>
                              <a href="#">unfollow</a>
                              <a href="#">find support or report post</a>
                            </div>
                          </div>
                        </div>

                        <div className="post-body">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam.
                          </p>

                          <div className="img collage d-flex flex-wrap">
                            <div className="big mr-20">
                              <img
                                src="../../../assets/img/media/post2.jpg"
                                className="w-100"
                                alt=""
                              />
                            </div>

                            <div className="small">
                              <img
                                src="../../../assets/img/media/post3.jpg"
                                className="w-100 mb-20"
                                alt=""
                              />
                              <img
                                src="../../../assets/img/media/post4.jpg"
                                className="w-100"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="post-footer d-flex mt-20">
                          <div className="love d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/love.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">22</span>Loved
                            </div>

                            <div className="member d-xl-flex d-none align-items-center ml-4">
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m27.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m12.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m2.png"
                                  alt=""
                                />
                              </a>
                              <span className="ml-10 font-12">+10 more</span>
                            </div>
                          </div>

                          <div className="comment d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/comment.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Comments
                            </div>
                          </div>

                          <div className="share d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/share2.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Share
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-30">
                      <div className="card-body">
                        <div className="post-head d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="figure position-relative mr-20">
                              <img
                                src="../../../assets/img/avatar/m23.png"
                                className="img-50"
                                alt=""
                              />
                              <span className="avatar-status bg-teal"></span>
                            </div>
                            <div className="content">
                              <h4 className="mb-1">Frank Jackson</h4>
                              <p>2 Hours ago</p>
                            </div>
                          </div>

                          <div className="dropdown-button">
                            <a
                              href="#"
                              className="d-flex align-items-center"
                              data-toggle="dropdown"
                            >
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">save post</a>
                              <a href="#">turn on notification for this post</a>
                              <a href="#">embed</a>
                              <a href="#">hide post</a>
                              <a href="#">unfollow</a>
                              <a href="#">find support or report post</a>
                            </div>
                          </div>
                        </div>

                        <div className="post-body">
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam. Enter each item on a new line,
                            choose the amount of groups unders settings, and
                            click the button to generate your randomized list.
                            Don't like the first team? Just click again until
                            you do.
                          </p>
                          <p>
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies fringilla massa. Ut
                            congue, elit non tempus elementum, sem risus
                            tincidunt diam.
                          </p>
                        </div>

                        <div className="post-footer d-flex mt-20">
                          <div className="love d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/love.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">22</span>Loved
                            </div>

                            <div className="member d-xl-flex d-none align-items-center ml-4">
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m27.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m12.png"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="../../../assets/img/avatar/m2.png"
                                  alt=""
                                />
                              </a>
                              <span className="ml-10 font-12">+10 more</span>
                            </div>
                          </div>

                          <div className="comment d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/comment.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Comments
                            </div>
                          </div>

                          <div className="share d-flex align-items-center">
                            <div className="icon">
                              <img
                                src="../../../assets/img/svg/share2.svg"
                                alt=""
                                className="svg"
                              />
                            </div>
                            <div className="content">
                              <span className="mr-1">3</span>Share
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
