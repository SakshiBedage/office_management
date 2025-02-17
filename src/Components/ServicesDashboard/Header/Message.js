const Message = () => {
  return (
    <div className="main-header-message">
      <a href="#" className="header-icon" data-toggle="dropdown">
        <img src="assets/img/svg/message-icon.svg" alt="" className="svg" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-header d-flex align-items-center justify-content-between">
          <h5>3 Unread messages</h5>
          <a href="#" className="text-mute d-inline-block">
            Clear all
          </a>
        </div>

        <div className="dropdown-body">
          <a href="#" className="item-single d-flex media align-items-center">
            <div className="figure">
              <img src="assets/img/avatar/m1.png" alt="" />
              <span className="avatar-status bg-teal"></span>
            </div>
            <div className="content media-body">
              <div className="d-flex align-items-center mb-2">
                <h6 className="name">Sender Name</h6>
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex media align-items-center">
            <div className="figure">
              <img src="assets/img/avatar/m2.png" alt="" />
              <span className="avatar-status bg-teal"></span>
            </div>
            <div className="content media-body">
              <div className="d-flex align-items-center mb-2">
                <h6 className="name">Tonya Lee</h6>
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex media align-items-center">
            <div className="figure">
              <img src="assets/img/avatar/m3.png" alt="" />
              <span className="avatar-status bg-teal"></span>
            </div>
            <div className="content media-body">
              <div className="d-flex align-items-center mb-2">
                <h6 className="name">Cathy Nichols</h6>
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex media align-items-center">
            <div className="figure">
              <img src="assets/img/avatar/m4.png" alt="" />
              <span className="avatar-status bg-teal"></span>
            </div>
            <div className="content media-body">
              <div className="d-flex align-items-center mb-2">
                <h6 className="name">Hubert Griffith</h6>
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Message;
