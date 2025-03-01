const Filters = () => {
  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };
  return (
    <div className="mb-4 mb-md-0">
      <nav className="tasks_aside">
        <div className="aside-header pr-0">
          <div className="aside-header-btn d-flex justify-content-end position-relative">
            <h4 className="aside-btn-text c1 d-xl-flex align-items-center">
              Compose New
            </h4>
            <a href="compose.html" className="btn-circle style--two">
              <img
                src="../../../assets/img/svg/plus_white.svg"
                alt=""
                style={imgStyle}
              />
            </a>
          </div>
        </div>
        <div className="aside-body">
          <ul className="nav flex-column">
            <li className="active">
              <a href="#">
                Inbox{" "}
                <span className="c3 bold font-14 ml-1 float-right">(5)</span>
              </a>
            </li>
            <li>
              <a href="#">Sent</a>
            </li>
            <li>
              <a href="#">
                Draft{" "}
                <span className="c3 bold font-14 ml-1 float-right">(3)</span>
              </a>
            </li>
            <li>
              <a href="#">Starred</a>
            </li>
            <li>
              <a href="#">Snoozed</a>
            </li>

            <li
              className="nav-category less bold font-14 mt-4"
              data-toggle="collapse"
              data-target="less-dropdown"
            >
              Less
            </li>
          </ul>
          <ul id="less-dropdown" className="list-unstyled">
            <li className="lavel">
              <a href="#">Important</a>
            </li>
            <li className="lavel">
              <a href="#">Scheduled</a>
            </li>
            <li className="lavel">
              <a href="#">Trash</a>
            </li>
            <li className="lavel">
              <a href="#">Spam</a>
            </li>

            <li className="nav-category bold font-14 mt-4">Lavels</li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color products"></span>
                Products
              </a>
            </li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color works"></span>
                Works
              </a>
            </li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color family"></span>
                Family
              </a>
            </li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color friends"></span>
                Friends
              </a>
            </li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color design"></span>
                Design{" "}
              </a>
            </li>
            <li className="lavel">
              <a href="#">
                <span className="tag_color others"></span>
                Others{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Filters;
