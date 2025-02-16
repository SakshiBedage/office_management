const Setting = () => {
  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center"
        role="button"
        id="userDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div className="user-profile d-xl-flex align-items-center d-none">
          <div className="user-avatar" style={{ alignContent: "center" }}>
            <img
              src="assets/img/avatar/avatar-user.png"
              style={{
                width: "32px",
                height: "32px",
                marginTop: "25px",
                marginLeft: "22px",
              }}
              alt=""
            />
          </div>
        </div>
      </a>

      <div className="dropdown-menu">
        <a href="pages/pages/user-profile/user-dashboard.html">My Profile</a>
        <a href="#">Task</a>
        <a href="#">Settings</a>
        <a href="pages/pages/authentication/login.html">Log Out</a>
        <a href="pages/form&table/form-wizard.html">New Workspace</a>

        <hr style={{ backgroundColor: "white" }} />

        <center>
          <h6>Switch Workspace</h6>
        </center>
        <br />

        <div>
          <a href="#">
            <img
              src="assets/img/avatar/avatar-user.png"
              alt=""
              style={{
                height: "30px",
                width: "30px",
                padding: "5px",
              }}
            />
            Atharv's Workspace
          </a>
        </div>
      </div>
    </div>
  );
};

export default Setting;
