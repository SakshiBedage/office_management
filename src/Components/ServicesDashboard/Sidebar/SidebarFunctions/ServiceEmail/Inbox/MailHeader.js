import { useState } from "react";

const MailHeader = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInitiallyChecked, setIsInitiallyChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mail-header d-flex align-items-sm-center media flex-column flex-sm-row">
      <div className="mail-header-left d-flex align-items-center position-relative">
        <label className="custom-checkbox style--two">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
        </label>

        <div className="dropdown-button">
          <a
            href="#"
            className="d-flex align-items-center"
            data-toggle="dropdown"
          >
            <div className="menu-icon style--two justify-content-center mr-0">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <div className="dropdown-menu">
            <a href="#">Daily</a>
            <a href="#">Sort By</a>
            <a href="#">Monthly</a>
          </div>
        </div>

        <div className="star">
          <a href="#">
            <img
              src="../../../assets/img/svg/star.svg"
              alt=""
              className="svg"
            />
          </a>
        </div>

        <div className="unread">
          <a href="#">
            <img
              src="../../../assets/img/svg/mail.svg"
              alt=""
              className="svg"
            />
          </a>
        </div>

        <div className="tag_mail">
          <a href="#">
            <img src="../../../assets/img/svg/tag.svg" alt="" className="svg" />
          </a>
        </div>

        <div className="delete_mail">
          <a href="#">
            <img
              src="../../../assets/img/svg/delete.svg"
              alt=""
              className="svg"
            />
          </a>
        </div>
      </div>

      <div className="mail-header-right d-flex align-items-center justify-content-end media-body mt-3 mt-sm-0">
        <form action="#" className="search-form">
          <div className="theme-input-group">
            <input
              type="text"
              className="theme-input-style"
              placeholder="Search Here"
            />

            <button type="submit">
              <img
                src="../../../assets/img/svg/search-icon.svg"
                alt=""
                className="svg"
              />
            </button>
          </div>
        </form>

        <div className="pagination style--two d-flex flex-column align-items-center ml-3">
          <ul className="list-inline d-inline-flex align-items-center">
            <li>
              <a href="#">
                <img
                  src="../../../assets/img/svg/left-angle.svg"
                  alt=""
                  className="svg"
                />
              </a>
            </li>
            <li>
              <a href="#" className="current">
                <img
                  src="../../../assets/img/svg/right-angle.svg"
                  alt=""
                  className="svg"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MailHeader;
