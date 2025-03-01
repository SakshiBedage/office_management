import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WorkspaceList = ({ user }) => {
  const navigate = useNavigate();
  const workspace = user?.workspace || [];

  useEffect(() => {
    if (workspace.length === 1) {
      navigate("/operations");
    }
  }, [workspace, navigate]);

  return (
    <>
      {workspace.includes("team 1") && (
        <div className="col-lg-4 col-sm-4">
          <div className="project-box two mb-30">
            <div className="d-flex justify-content-between align-items-center mb-20">
              <div className="">
                <Link to="/operations">
                  <h4>Team 1</h4>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <div className="star">
                  <a href="#">
                    <img src="assets/img/svg/star.svg" alt="" className="svg" />
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
                    &nbsp; 15
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {workspace.includes("team 2") && (
        <div className="col-lg-4 col-sm-4">
          <div className="project-box two mb-30">
            <div className="d-flex justify-content-between align-items-center mb-20">
              <div className="">
                <Link to="/operations">
                  <h4>Team 2</h4>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <div className="star">
                  <a href="#">
                    <img src="assets/img/svg/star.svg" alt="" className="svg" />
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
                    &nbsp; 15
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkspaceList;
