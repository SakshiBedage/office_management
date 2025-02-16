import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

function MiniWorkspace() {
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
  const [miniWorkspaces, setMiniWorkspaces] = useState([]); // State to store mini workspaces data

  useEffect(() => {
    // Function to fetch mini workspaces data from API
    const fetchMiniWorkspaces = async () => {
      try {
        // Make API call to fetch mini workspaces data
        const response = await axios.get(
          "https://example.com/api/miniworkspaces"
        );

        // Set the fetched data in the state
        setMiniWorkspaces(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching mini workspaces:", error);
      }
    };

    // Call the function to fetch mini workspaces when the component mounts
    fetchMiniWorkspaces();
  }, []);

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
                      class="btn-circle"
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
                <h3>Mini workspace</h3>
              </div>
            </div>

            {miniWorkspaces.map((workspace) => (
              <div key={workspace.id} className="col-lg-4 col-sm-4">
                <div className="project-box two mb-30">
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div className="">
                      <Link to={`/analysis/${workspace.id}`}>
                        <h4>{workspace.name}</h4>
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
                      <a href="#">
                        <i
                          className="ti-user"
                          style={{
                            fontWeight: "bolder",
                            color: "black",
                          }}
                        >
                          &nbsp; {workspace.usersCount}
                        </i>
                      </a>
                    </div>

                    <div className="member">
                      {workspace.members.map((member, index) => (
                        <a key={index} href="#">
                          <img src={member.avatar} alt="" />
                        </a>
                      ))}
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
export default MiniWorkspace;
