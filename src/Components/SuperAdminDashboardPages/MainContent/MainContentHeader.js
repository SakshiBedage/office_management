import { Link } from "react-router-dom";

const MainContentHeader = () => {
  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  return (
    <>
      <div className="col-12">
        <div className="project-header d-flex align-items-sm-center media flex-column flex-sm-row card_color-bg mb-30">
          <div className="project-header-left media-body d-flex align-items-center w-100 mr-sm-4">
            <div className="add-new-contact mr-20">
              <Link to="/createsuperadmin">
                <div className="btn-circle">
                  <img
                    src="assets/img/svg/plus_white.svg"
                    alt=""
                    style={imgStyle}
                  />
                </div>
              </Link>
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
                    src="assets/img/svg/search-icon.svg"
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
                <img src="assets/img/svg/star.svg" alt="" className="svg" />
              </a>
            </div>

            <div className="delete_mail">
              <a href="#">
                <img src="assets/img/svg/delete.svg" alt="" className="svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContentHeader;
