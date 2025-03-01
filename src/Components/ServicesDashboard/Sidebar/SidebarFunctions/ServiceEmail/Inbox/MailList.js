import { useState } from "react";

const MailList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInitiallyChecked, setIsInitiallyChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <ul className="list-unstyled mail-list">
        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m5.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Drishti Shah</h4>
                  <p className="msg">
                    {" "}
                    offer letter release for newly joined employees
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 8:35am </div>
              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isInitiallyChecked && isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m6.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Sarvadnya kamble</h4>
                  <p className="msg">Need new graphic card for </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 9:35am </div>
              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m7.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Amey Pisal</h4>
                  <p className="msg">Packaging of diwali gifts</p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 7:17am </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m8.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Mansi kulkarni</h4>
                  <p className="msg">
                    Why Do All Websites Look the Same? by Boris Müller
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m9.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Sayali Velhal</h4>
                  <p className="msg">RELunch of the new product</p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input type="checkbox" checked />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m10.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Amit Kulkarni</h4>
                  <p className="msg">
                    Why Do All Websites Look the Same? by Boris Müller
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m11.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Riya Vaswani</h4>
                  <p className="msg">
                    Why Do All Websites Look the Same? by Boris Müller
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m12.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Vandana Ranglani</h4>
                  <p className="msg">Content Varifiacation and approval</p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>

              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m13.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Komal Mule</h4>
                  <p className="msg">
                    Why Do All Websites Look the Same? by Boris Müller
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>

        <li className={`mail-list-item ${isChecked ? "selected" : ""}`}>
          <div className="d-flex justify-content-between align-items-sm-center media flex-column flex-sm-row">
            <div className="d-flex align-items-center media-body position-relative">
              <label className="custom-checkbox style--three">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>
              <div className="dropdown-button ml-4">
                <a
                  href="#"
                  className="d-flex align-items-center"
                  data-toggle="dropdown"
                >
                  <div className="menu-icon style--two w-14 mr-0">
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

              <a
                href="read.html"
                className="d-flex align-items-center mail-text"
              >
                <div className="avatar">
                  <img src="../../../assets/img/avatar/m7.png" alt="" />
                </div>
                <div className="content">
                  <h4 className="name mb-1">Atharv Pise</h4>
                  <p className="msg">
                    new design of superadmin dashboard for approval
                  </p>
                </div>
              </a>
            </div>

            <div className="mail-list-item-right d-flex align-items-center">
              <div className="mail-date bold"> 26 Sep </div>

              <div className="star">
                <a href="#">
                  <img
                    src="../../../assets/img/svg/star2.svg"
                    alt=""
                    className="svg"
                  />
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
          </div>
        </li>
      </ul>
    </>
  );
};

export default MailList;
