import { Link } from "react-router-dom";

const DisplayBoardList = () => {
  return (
    <div className="project-box one mb-30">
      <div className="d-flex justify-content-between align-items-center mb-20">
        <div className="">
          <div className="">
            <Link to="">
              <h4>Barcadly Services</h4>
            </Link>
          </div>
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

            <a href="#" className="edit">
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
  );
};

export default DisplayBoardList;
