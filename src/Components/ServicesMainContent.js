import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ServicesMainContent({ projects }) {
  const buttonStyle = {
    width: "40px",
    height: "40px",
    position: "relative",
    zIndex: "1",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 10px rgba(96, 69, 226, 0.5)",
    borderRadius: "50%",
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

  const [subWorkspaces, setSubWorkspaces] = useState({});

  useEffect(() => {
    // Fetch sub-workspaces for each project
    projects.forEach((project) => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/projects/${project.id}/subworkspaces`
        )
        .then((response) => {
          // Store sub-workspaces in state using project ID as key
          setSubWorkspaces((prevSubWorkspaces) => ({
            ...prevSubWorkspaces,
            [project.id]: response.data,
          }));
        })
        .catch((error) => {
          console.error(
            `Error fetching sub-workspaces for project ${project.id}:`,
            error
          );
        });
    });
  }, [projects]);

  return (
    <>
      <div class="main-content d-flex flex-column flex-md-row">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="project-header d-flex align-items-sm-center media flex-column flex-sm-row card_color-bg mb-30">
                <div class="project-header-left media-body d-flex align-items-center w-100 mr-sm-4">
                  <div class="add-new-contact mr-20">
                    <a
                      href="pages/apps/project-manager/create-new.html"
                      style={{ ...buttonStyle, ...afterStyle }}
                    >
                      <img
                        src="assets/img/svg/plus_white.svg"
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
                          src="assets/img/svg/search-icon.svg"
                          alt=""
                          class="svg"
                        />
                      </button>
                    </div>
                  </form>
                </div>

                <div class="project-header-right d-flex align-items-center justify-content-end mt-3 mt-sm-0">
                  {/* <label class="custom-checkbox position-relative">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label> */}

                  <div class="star">
                    <a href="#">
                      <img src="assets/img/svg/star.svg" alt="" class="svg" />
                    </a>
                  </div>
                  <div class="delete_mail">
                    <a href="#">
                      <img src="assets/img/svg/delete.svg" alt="" class="svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="row" style={{ padding: "20px" }}>
                <h3>Barcadly Services</h3>
              </div>
            </div>

            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-sm-4">
                <div className="project-box two mb-30">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="">
                      <Link to={`/project/${project.id}`}>
                        {" "}
                        {/* Assuming you want to link to a project page */}
                        <h4>{project.name}</h4>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="star">
                        <a href="#">
                          <img
                            src="assets/img/svg/star.svg"
                            alt=""
                            className="svg"
                          />
                        </a>
                      </div>
                      <div className="dropdown-button ml-3">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon mr-0">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <div className="color-balls">
                            <span className="color color1"></span>
                            <span className="color color2"></span>
                            <span className="color color3"></span>
                            <span className="color color4"></span>
                            <span className="color color5"></span>
                            <span className="color color6"></span>
                            <span className="color color7"></span>
                            <span className="color color8"></span>
                          </div>
                          <a href="create-new.html" className="edit">
                            Edit
                          </a>
                          <a href="#" className="select">
                            Select
                          </a>
                          <a href="#" className="delete">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end pt-1">
                    <div className="font-12">
                      <a href="">
                        <i
                          className="ti-user"
                          style={{
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          &nbsp; 14
                        </i>
                      </a>
                    </div>

                    <div className="member">
                      <a href="#">
                        <img src="assets/img/avatar/m27.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/avatar/m12.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/avatar/m2.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div class="col-xl-6 col-lg-4 col-sm-6">
              <div class="project-box d-flex align-items-center justify-content-center mb-30">
                <Link
                  to="/workspacepage"
                  class="bold font-14 black d-flex align-items-center"
                >
                  <img src="assets/img/svg/plus.svg" alt="" class="svg mr-2" />
                  Create New Board
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesMainContent;
