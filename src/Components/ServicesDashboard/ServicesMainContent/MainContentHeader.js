const MainContentHeader = () => {
  const buttonStyle = {
    width: "40px",
    height: "40px",
    position: "relative",
    zIndex: "1",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 10px rgba(96, 69, 226, 0.5)",
    borderRadius: "50%",
  };

  const afterStyle = {
    backgroundColor: "#6f51ff",
    background: "-moz-linear-gradient(left, #6f51ff 0%, #6045e2 100%)",
    background: "-webkit-linear-gradient(left, #6f51ff 0%, #6045e2 100%)",
    background: "linear-gradient(to right, #6f51ff 0%, #6045e2 100%)",
    filter:
      'progid:DXImageTransform.Microsoft.gradient( startColorstr="#6F51FF", endColorstr="#6045E2",GradientType=1)',
  };

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div class="project-header d-flex align-items-sm-center media flex-column flex-sm-row card_color-bg mb-30">
      <div class="project-header-left media-body d-flex align-items-center w-100 mr-sm-4">
        <div class="add-new-contact mr-20">
          <a
            href="pages/apps/project-manager/create-new.html"
            style={{ ...buttonStyle, ...afterStyle }}
          >
            <img src="assets/img/svg/plus_white.svg" alt="" style={imgStyle} />
          </a>
        </div>
        <form action="#" class="search-form flex-grow">
          <div class="theme-input-group style--two">
            <input
              type="text"
              class="theme-input-style"
              placeholder="Search Here"
            />

            <button type="submit">
              <img src="assets/img/svg/search-icon.svg" alt="" class="svg" />
            </button>
          </div>
        </form>
      </div>

      <div class="project-header-right d-flex align-items-center justify-content-end mt-3 mt-sm-0">
        {/* <label class="custom-checkbox position-relative">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label> */}

        <div class="star">
          <a href="#">
            <img src="assets/img/svg/star.svg" alt="" class="svg" />
          </a>
        </div>
        <div class="delete_mail">
          <a href="#">
            <img src="assets/img/svg/delete.svg" alt="" class="svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContentHeader;
