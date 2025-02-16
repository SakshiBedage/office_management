const Username = () => {
  return (
    <div className="main-header-user">
      <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
        <div className="user-profile d-xl-flex align-items-center d-none">
          <div className="user-avatar">
            <img src="assets/img/avatar/user.png" alt="" />
          </div>

          <div className="user-info">
            <h4 className="user-name">Mudit Surana</h4>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Username;
