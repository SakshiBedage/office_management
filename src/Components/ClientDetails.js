function ClientDetails() {
  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };
  return (
    <div class="main-content d-flex flex-column flex-md-row">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="invoice-details-header card_color-bg d-flex align-items-sm-center flex-column flex-sm-row mb-30 justify-content-sm-between">
              <div class="d-flex align-items-center">
                <a href="#" class="mr-2">
                  <img
                    src="../../../assets/img/svg/angle-left.svg"
                    alt=""
                    class="svg"
                  />
                </a>
                <h2 class="regular mr-3 font-30">Thriving Technology</h2>
              </div>

              <div class="invoice-header-right d-flex align-items-center justify-content-around justify-content-sm-end mt-3 mt-sm-0">
                <div class="star mr-20">
                  <a href="#">
                    <img
                      src="../../../assets/img/svg/star.svg"
                      alt=""
                      class="svg"
                    />
                  </a>
                </div>

                <div class="delete_mail mr-20">
                  <a href="#">
                    <img
                      src="../../../assets/img/svg/delete.svg"
                      alt=""
                      class="svg"
                    />
                  </a>
                </div>

                <div class="edit-invoice-btn pr-1">
                  <a href="invoice-add-new.html" class="btn-circle">
                    <img
                      src="../../../assets/img/svg/writing.svg"
                      alt=""
                      style={imgStyle}
                    />
                  </a>
                </div>

                <div class="pagination style--two d-flex flex-column align-items-center ml-2">
                  <ul class="list-inline d-inline-flex align-items-center">
                    <li>
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/left-angle.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="current">
                        <img
                          src="../../../assets/img/svg/right-angle.svg"
                          alt=""
                          class="svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="invoice-pd c2-bg"
              data-bg-img="../../../assets/img/media/invoice-pattern.png"
              style={{ backgroundColor: "rgb(30, 116, 187)" }}
            >
              <div class="row">
                <div class="col-md-8">
                  <div class="invoice-left">
                    <div class="logo mb-3">
                      <img src="../../../assets/img/whiteInvoice.png" alt="" />
                    </div>

                    <ul class="list-invoice">
                      <li class="location">
                        plot 233/A, Ruikar Colony, Yashodha Apartment Kolhapur.{" "}
                        <br />
                      </li>
                      <li class="call">
                        <a href="tel:+0231 456 7891">+0231 456 7891</a> <br />
                        <a href="tel:++91 8010747165">+91 8010747165</a>
                      </li>
                      <li class="mail">
                        <a href="mailto:adamhud@email.com">
                          Thrivingtech99@email.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="invoice-right mt-5 mt-md-0">
                    <h3 class="white font-20 mb-3">Client</h3>

                    <ul class="status-list">
                      <li>
                        <span class="key font-14">Client No:</span>{" "}
                        <span class="white bold font-17">#256987</span>
                      </li>
                      <li>
                        <span class="key font-14">Project No:</span>{" "}
                        <span class="white bold font-17">#0165</span>
                      </li>
                      <li>
                        <span class="key font-14">Date:</span>{" "}
                        <span class="white bold font-17">08/12/2023</span>
                      </li>
                      <li>
                        <span class="key font-14">Due Date:</span>{" "}
                        <span class="white bold font-17">07/02/2024</span>
                      </li>
                      <li>
                        <span class="key font-14">Status:</span>{" "}
                        <span class="white status-btn btn-primary">
                          {" "}
                          In Progress
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="card_color-bg invoice-pd">
              <div
                class="row"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h3>Services/Packages</h3>
              </div>
            </div>

            <div class="card_color-bg details-list-wrap">
              <div class="table-responsive">
                <table class="invoice-list-table style-two some-center text-nowrap">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Service Name</th>
                      <th>Service Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody class="card_color-bg">
                    <tr>
                      <td class="bold">#01</td>
                      <td>Quarterly Gold Package</td>
                      <td style={{ color: "rgb(0, 255, 51)" }}>On Track</td>
                      <td>
                        <a
                          href=""
                          style={{ color: "rgb(90, 90, 239)" }}
                          data-toggle="modal"
                          data-target=".bd-example-modal-lg"
                        >
                          {" "}
                          <u>
                            View Details <i class="icofont-swoosh-right"></i>
                          </u>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="bold">#02</td>
                      <td>Blog Promotion</td>
                      <td style={{ color: "rgb(255, 17, 0)" }}>Scheduled </td>
                      <td>
                        <a href=""> -</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="bold">#03</td>
                      <td>Advaned SEO</td>
                      <td style={{ color: "rgb(255, 17, 0)" }}>Scheduled </td>
                      <td>
                        <a href=""> -</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="price-body">
                    <h5 class="mb-3">Package Detail</h5>
                    <ul class="list-unstyled mb-4">
                      <li>
                        <i class="icofont-check"></i>5 post/month{" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>Social Media Management (3
                        platforms){" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>Annual Festival Posting
                      </li>
                      <li>
                        <i class="icofont-check"></i>Google My Business
                        Optimization{" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>100+ GMB Reviews{" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>Local Classifieds /
                        Citation{" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>5000 Monthly Reach (Social
                        Media Profile){" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>Quarterly Reports{" "}
                      </li>
                      <li>
                        <i class="icofont-check"></i>Customer Support(7Day)
                      </li>

                      <li>
                        <i class="icofont-close text-danger"></i>Website
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Basic SEO
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Blogs (3 in 6
                        months)
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>GMB Update
                        (5/month)
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Blog Promotion{" "}
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Advances SEO{" "}
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Business
                        Listing{" "}
                      </li>
                      <li>
                        <i class="icofont-close text-danger"></i>Advances ORM
                      </li>
                    </ul>

                    <a href="#" class="btn mt-10">
                      Closes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientDetails;
