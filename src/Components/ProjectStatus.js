import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function ProjectStatus() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project names from the Laravel backend when the component mounts
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };
  return (
    <div className="main-content d-flex flex-column flex-md-row">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="project-header d-flex align-items-sm-center media flex-column flex-sm-row card_color-bg mb-30">
              <div className="project-header-left media-body d-flex align-items-center w-100 mr-sm-4">
                <div className="add-new-contact mr-20">
                  <a href="create-new.html" className="btn-circle">
                    <img
                      src="../../../assets/img/svg/plus_white.svg"
                      alt=""
                      style={imgStyle}
                    />
                  </a>
                </div>
                <form action="#" className="search-form flex-grow">
                  <div className="theme-input-group style--two">
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

              <div className="project-header-right d-flex align-items-center justify-content-end mt-3 mt-sm-0">
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
          </div>

          {projects.map((project) => (
            <div key={project.id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-box one mb-30">
                <div className="d-flex justify-content-between align-items-center mb-20">
                  <div className="">
                    <Link to={`/analysis/managertasklist/${project.id}`}>
                      <h4>{project.name}</h4>
                    </Link>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="star">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/star.svg"
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
                    <p className="mb-0 l-height">Last update</p>
                    <p className="bold black">{project.lastUpdate}</p>
                  </div>

                  <div className="member">
                    {project.members.map((member, index) => (
                      <a key={index} href="#">
                        <img src={member.avatar} alt="" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* create new project */}
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="project-box d-flex align-items-center justify-content-center mb-30">
              <Link
                to="/analysis/createclient"
                className="bold font-14 black d-flex align-items-center"
              >
                <img
                  src="../../../assets/img/svg/plus.svg"
                  alt=""
                  className="svg mr-2"
                />
                Create New Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectStatus;
