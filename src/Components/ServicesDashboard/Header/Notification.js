const Notification = () => {
  return (
    <div className="main-header-notification">
      <a
        href="#"
        className="header-icon notification-icon"
        data-toggle="dropdown"
      >
        <span className="count" data-bg-img="assets/img/count-bg.png">
          22
        </span>
        <img
          src="assets/img/svg/notification-icon.svg"
          alt=""
          className="svg"
        />
      </a>
      <div className="dropdown-menu style--two dropdown-menu-right">
        <div className="dropdown-header d-flex align-items-center justify-content-between">
          <h5>5 New notifications</h5>
          <a href="#" className="text-mute d-inline-block">
            Clear all
          </a>
        </div>

        <div className="dropdown-body">
          <a href="#" className="item-single d-flex align-items-center">
            <div className="content">
              <div className="mb-2">
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus amet.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex align-items-center">
            <div className="content">
              <div className="mb-2">
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex align-items-center">
            <div className="content">
              <div className="mb-2">
                <p className="time">2 min ago</p>
              </div>
              <p className="main-text">
                Donec dapibus mauris id odio ornare tempus. Duis sit amet
                accumsan justo.
              </p>
            </div>
          </a>

          <a href="#" className="item-single d-flex align-items-center">
            <div className="content">
              <div className="mb-2">
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

export default Notification;
