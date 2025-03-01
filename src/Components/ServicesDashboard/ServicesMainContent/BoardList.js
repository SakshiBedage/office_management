import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BoardList = ({ user }) => {
  const navigate = useNavigate();
  const managementBoard = user?.managementBoard || [];

  useEffect(() => {
    if (managementBoard.length === 1) {
      if (managementBoard.includes("operations")) {
        navigate("/mini", { state: { user } });
      } else if (managementBoard.includes("hr")) {
        navigate("/mini", { state: { user } });
      }
    }
  }, [managementBoard, navigate]);

  return (
    <>
      {managementBoard.includes("operations") && (
        <div className="col-lg-4 col-sm-4">
          <div className="project-box two mb-30">
            <div className="d-flex justify-content-between align-items-center mb-20">
              <div className="">
                <Link to="/mini" state={{ user }}>
                  <h4>Operations Management Board</h4>
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
      )}

      {managementBoard.includes("hr") && (
        <div className="col-lg-4 col-sm-4">
          <div className="project-box two mb-30">
            <div className="d-flex justify-content-between align-items-center mb-20">
              <div className="">
                <Link to="/mini" state={{ user }}>
                  <h4>HR Management Board</h4>
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
      )}
    </>
  );
};

export default BoardList;
