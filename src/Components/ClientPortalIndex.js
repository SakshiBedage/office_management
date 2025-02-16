import { Link } from "react-router-dom";
function ClientPortalIndex() {
  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };
  return (
    <div class="main-content d-flex flex-column flex-md-row">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="project-header d-flex align-items-sm-center media flex-column flex-sm-row card_color-bg mb-30">
              <div class="project-header-left media-body d-flex align-items-center w-100 mr-sm-4">
                <div class="add-new-contact mr-20">
                  <a href="create-new.html" class="btn-circle">
                    <img
                      src="../../../assets/img/svg/plus_white.svg"
                      alt=""
                      style={imgStyle}
                    />
                  </a>
                </div>

                <form action="#" class="search-form flex-grow">
                  <div class="theme-input-group style--two">
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

              <div class="project-header-right d-flex align-items-center justify-content-end mt-3 mt-sm-0">
                <div class="star">
                  <a href="#">
                    <img
                      src="../../../assets/img/svg/star.svg"
                      alt=""
                      class="svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box one mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <Link to="/client/clientdetails">
                    <h4>Thriving Technologies</h4>
                  </Link>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">21 Jan 2022</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box two mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Foodella</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">2 feb 2012</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box three mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Kalapuri</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">9 march 2022</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box four mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Florazo</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">12 April 2022</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box five mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Gatak</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">7 dec 2022</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box six mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Entity</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">18 Jan 2023</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box seven mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>HTBS</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">22 feb 2023</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box eight mb-30">
              <div class="d-flex justify-content-between align-items-center mb-20">
                <div class="">
                  <a href="task-list.html">
                    <h4>Genus</h4>
                  </a>
                </div>

                <div class="d-flex align-items-center">
                  <div class="star">
                    <a href="#">
                      <img
                        src="../../../assets/img/svg/star.svg"
                        alt=""
                        class="svg"
                      />
                    </a>
                  </div>

                  <div class="dropdown-button ml-3">
                    <a
                      href="#"
                      class="d-flex align-items-center"
                      data-toggle="dropdown"
                    >
                      <div class="menu-icon mr-0">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="color-balls">
                        <span class="color color1"></span>
                        <span class="color color2"></span>
                        <span class="color color3"></span>
                        <span class="color color4"></span>
                        <span class="color color5"></span>
                        <span class="color color6"></span>
                        <span class="color color7"></span>
                        <span class="color color8"></span>
                      </div>
                      <a href="create-new.html" class="edit">
                        Edit
                      </a>
                      <a href="#" class="select">
                        Select
                      </a>
                      <a href="#" class="delete">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-end pt-1">
                <div class="font-12">
                  <p class="mb-0 l-height">Last update</p>
                  <p class="bold black">17 march 2023</p>
                </div>

                <div class="member">
                  <a href="#">
                    <img src="../../../assets/img/avatar/m27.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="../../../assets/img/avatar/m2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="project-box d-flex align-items-center justify-content-center mb-30">
              <a
                href="pages/apps/client-manager/AddClient.html"
                class="bold font-14 black d-flex align-items-center"
              >
                <img
                  src="../../../assets/img/svg/plus.svg"
                  alt=""
                  class="svg mr-2"
                />
                Add New Client
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPortalIndex;
