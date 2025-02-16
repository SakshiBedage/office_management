import { useState } from "react";

function AddNewClient() {
  const [activePackage, setActivePackage] = useState("quarterly");

  const showPackage = (packageType) => {
    setActivePackage(packageType);
  };
  return (
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="form-element py-30 mb-30">
              <h4 class="font-20 mb-4">Client Info</h4>
              <form id="clientInfoForm" action="#">
                <div class="row">
                  <div class="form-group col-lg-6">
                    <label for="inputName3">Client Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputName3"
                      name="clientName"
                      placeholder="Type Client Name"
                      required
                    />
                  </div>
                  <div class="form-group col-lg-6">
                    <label for="inputMobile2">Mobile</label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputMobile2"
                      name="mobile"
                      placeholder="Contact Number"
                      required
                    />
                  </div>

                  <div class="form-group col-lg-6">
                    <label for="inputEmail2">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                      name="email"
                      placeholder="Enter Your Address"
                    />
                  </div>

                  <div class="form-group col-lg-6">
                    <label for="inputEmail2">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail2"
                      name="email"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </div>

                <div class="form-group col-lg-6">
                  <label for="clientInterests">Client Interests</label>
                  <select
                    multiple
                    class="form-control"
                    id="clientInterests"
                    name="clientInterests"
                    required
                  >
                    <option value="null">None</option>
                    <option value="Social Media Management">
                      Social Media Management
                    </option>
                    <option value="SEM">SEM</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Branding">Branding</option>
                    <option value="Video Animation">Video Animation</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </select>
                </div>

                <div class="form-group col-lg-6">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={showClientInfo}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="pt-40 px-3 px-sm-4 px-md-5 pb-3">
              <div class="row mb-5">
                <div class="col-xl-9">
                  <h2
                    class="mb-3"
                    style={{ textAlign: "center", paddingLeft: "280px" }}
                  >
                    Choose a Plan
                  </h2>
                </div>
              </div>

              <div class="row justify-content-center pt-2">
                <div className="mb-3" style={{ paddingBottom: "20px" }}>
                  <button
                    onClick={() => showPackage("quarterly")}
                    className={`btn ${
                      activePackage === "quarterly" ? "active" : ""
                    }`}
                  >
                    Quarterly Package
                  </button>
                  <button
                    onClick={() => showPackage("halfYear")}
                    className={`btn ${
                      activePackage === "halfYear" ? "active" : ""
                    }`}
                  >
                    Half Year Package
                  </button>
                  <button
                    onClick={() => showPackage("yearly")}
                    className={`btn ${
                      activePackage === "yearly" ? "active" : ""
                    }`}
                  >
                    Yearly Package
                  </button>
                </div>
                {activePackage === "quarterly" && (
                  <div
                    class="col-xl-11"
                    id="quarterlyPackage"
                    style={{ display: "contents" }}
                  >
                    <div class="row justify-content-center">
                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-20">
                          <div class="price-header d-flex flex-wrap bg-primary">
                            <div class="p_header-img">
                              <img src="../../../assets/img/gold1.png" alt="" />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                Quarterly Gold
                              </h4>
                              <p style={{ color: "black" }}>For 3 Months</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>5 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (3 platforms)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Dedicated account
                                manager
                              </li>
                              <li>
                                <i class="icofont-check"></i>50+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>5000 Monthly Reach
                                (Social Media Profile)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Quarterly Reports
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(7Day)
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Basic
                                SEO
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Blogs
                                (1/quatre){" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>GMB
                                Update (3/month){" "}
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box active mb-20">
                          <div class="price-header d-flex flex-wrap">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Dimond (1).png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                QuarterlyDiamond
                              </h4>
                              <p style={{ color: "black" }}>For 3 Months</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>10 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (4 platforms)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>75+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>10,000 Monthly
                                Reach (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Monthly Reports{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(3Day)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Basic SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blogs (1/quatre){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (3/month)
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-30">
                          <div class="price-header d-flex flex-wrap enterprise">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Platinum.png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                QuarterlyPlatinum
                              </h4>
                              <p style={{ color: "black" }}>For 3 Month</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>15 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (5 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events + International Events{" "}
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
                                <i class="icofont-check"></i>20,000 Monthly
                                Reach (Social Media Profile){" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>15 days Reports{" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(Same Day){" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>Advance SEO{" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>Blogs (3/quatre){" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (5/month)
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <br />

                {activePackage === "halfYear" && (
                  <div class="col-xl-11" id="halfYearPackage">
                    <div class="row justify-content-center">
                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-30">
                          <div class="price-header d-flex flex-wrap bg-primary">
                            <div class="p_header-img">
                              <img src="../../../assets/img/gold1.png" alt="" />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                Half Year Gold
                              </h4>

                              <p style={{ color: "black" }}>For 6 Months</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>5 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (3 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting
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
                                <i class="icofont-check"></i>5000 Monthly Reach
                                (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Quarterly Reports{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(7Day)
                              </li>

                              <li>
                                <i class="icofont-close text-danger"></i>Website
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Basic
                                SEO
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Blogs
                                (3 in 6 months)
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>GMB
                                Update (5/month)
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Blog
                                Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances ORM
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box active mb-30">
                          <div class="price-header d-flex flex-wrap">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Dimond (1).png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                Half Year Diamond
                              </h4>

                              <p style={{ color: "black" }}>For 6 Month</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>10 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (4 platforms)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>150+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>10,000 Monthly
                                Reach (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Monthly Reports{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(3Day)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Website{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Basic SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blogs (3 in 6
                                months)
                              </li>
                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (5/month)
                              </li>

                              <li>
                                <i class="icofont-close text-danger"></i>Blog
                                Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances ORM{" "}
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-30">
                          <div class="price-header d-flex flex-wrap enterprise">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Platinum.png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                Half YearPlatinum
                              </h4>

                              <p style={{ color: "black" }}>For 6 Months</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>15 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (5 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events + International Events{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>200+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>20,000 Monthly
                                Reach (Social Media Profile{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>15 days Reports{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer Support
                                (Same Day){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Website{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Advance SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blogs (1/month){" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (10/month)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blog Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Advances ORM
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePackage === "yearly" && (
                  <div class="col-xl-11" id="yearlyPackage">
                    <div class="row justify-content-center">
                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-30">
                          <div class="price-header d-flex flex-wrap bg-primary">
                            <div class="p_header-img">
                              <img src="../../../assets/img/gold1.png" alt="" />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}> Yearly Gold</h4>

                              <p style={{ color: "black" }}>For 1 Year</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>5 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (3 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>120+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>5000 Monthly Reach
                                (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(7Day)
                              </li>

                              <li>
                                <i class="icofont-close text-danger"></i>Website
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Basic
                                SEO
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Blogs
                                (6/year){" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>GMB
                                Update (5/month){" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Blogs
                                Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances ORM{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>Monthly
                                Reports{" "}
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box active mb-30">
                          <div class="price-header d-flex flex-wrap">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Dimond (1).png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                Yearly Diamond
                              </h4>
                              <p style={{ color: "black" }}>For 1 Year</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>10 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (4 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>200+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>10,000 Monthly
                                Reach (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Monthly Reports{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Customer
                                Support(3Day)
                              </li>
                              <li>
                                <i class="icofont-check"></i>Website{" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>Basic SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blogs (6/Year){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (5/month)
                              </li>

                              <li>
                                <i class="icofont-close text-danger"></i>Blogs
                                Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-close text-danger"></i>
                                Advances ORM{" "}
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              {" "}
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-md-6">
                        <div class="price-box mb-30">
                          <div class="price-header d-flex flex-wrap enterprise">
                            <div class="p_header-img">
                              <img
                                src="../../../assets/img/Platinum.png"
                                alt=""
                              />
                            </div>
                            <div class="p_header-content">
                              <h4 style={{ color: "black" }}>
                                {" "}
                                YearlyPlatinum
                              </h4>

                              <p style={{ color: "black" }}>For 1 Year</p>
                            </div>
                          </div>

                          <div class="price-body">
                            <h5 class="mb-3">Package Detail</h5>
                            <ul class="list-unstyled mb-4">
                              <li>
                                <i class="icofont-check"></i>15 post/month{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Social Media
                                Management (5 platforms){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Annual Festival
                                Posting + National Events + International
                                Events){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Google My Business
                                Optimization{" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>300+ GMB Reviews{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Local Classifieds /
                                Citation{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>20,000 Monthly
                                Reach (Social Media Profile){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>15 days Reports{" "}
                              </li>

                              <li>
                                <i class="icofont-check"></i>Website{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Advance SEO{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Blogs (12/year){" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>GMB Update
                                (10/month)
                              </li>

                              <li>
                                <i class="icofont-check"></i>Blogs Promotion{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Business Listing{" "}
                              </li>
                              <li>
                                <i class="icofont-check"></i>Advances ORM{" "}
                              </li>
                            </ul>

                            <a href="#" class="btn mt-10">
                              Subscribe
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function showClientInfo() {
    // Get form values
    var clientName = document.getElementById("inputName3").value;
    var mobile = document.getElementById("inputMobile2").value;
    var email = document.getElementById("inputEmail2").value;
    var address = document.getElementById("inputAddress2").value;

    var clientInterests = Array.from(
      document.getElementById("clientInterests").selectedOptions
    ).map((option) => option.value);

    // Create popup content
    var popupContent = `
    Client Name:- ${clientName}\n
    Mobile:- ${mobile}\n
    Email:- ${email}\n
    Address:-${address}\n
    Client Interests:- ${clientInterests.join(", ")}
`;

    // Show popup
    window.alert(popupContent);
  }

  //   function showPackage(packageType) {
  //     // Hide all packages
  //     document.getElementById("quarterlyPackage").style.display = "none";
  //     document.getElementById("halfYearPackage").style.display = "none";
  //     document.getElementById("yearlyPackage").style.display = "none";

  //     // Show the selected package
  //     document.getElementById(`${packageType}Package`).style.display = "block";
  //   }
}
export default AddNewClient;
