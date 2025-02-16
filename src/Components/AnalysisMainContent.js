import React from "react";
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import $ from "jquery";
import {
  area_options,
  area2_options,
  area3_options,
  area4_options,
  area5_options,
  area6_options,
  column2_options,
  column_options,
  column3_options,
  column4_options,
  column5_options,
  column6_options,
  line_options,
  line2_options,
  line3_options,
  line4_options,
  line5_options,
  radar_options,
  bar_options,
  pie_options,
  pie2_options,
  pie3_options,
  donut_options,
  column7_options,
  column8_options,
  column9_options,
  column10_options,
} from "../assets/plugins/apex/custom-apexcharts";
const AnalysisMainContent = () => {
  useEffect(() => {
    // Initialize and Render Column6 Chart
    const column6_chart = new ApexCharts(
      document.querySelector("#apex_column6-chart"),
      column6_options
    );
    column6_chart.render();

    const column7_chart = new ApexCharts(
      document.querySelector("#apex_column7-chart"),
      column7_options
    );
    column7_chart.render();
    const pie2_chart = new ApexCharts(
      document.querySelector("#apex_pie2-chart"),
      pie2_options
    );
    pie2_chart.render();
    const area6_chart = new ApexCharts(
      document.querySelector("#apex_area6-chart"),
      area6_options
    );
    area6_chart.render();
    const column8_chart = new ApexCharts(
      document.querySelector("#apex_column8-chart"),
      column8_options
    );
    column8_chart.render();
    const column9_chart = new ApexCharts(
      document.querySelector("#apex_column9-chart"),
      column9_options
    );
    column9_chart.render();
    const column10_chart = new ApexCharts(
      document.querySelector("#apex_column10-chart"),
      column10_options
    );
    column10_chart.render();
    const donut_chart = new ApexCharts(
      document.querySelector("#apex_donut-chart"),
      donut_options
    );
    donut_chart.render();
    const pie3_chart = new ApexCharts(
      document.querySelector("#apex_pie3-chart"),
      pie3_options
    );
    pie3_chart.render();
  }, []);

  useEffect(() => {
    // Run the progress bar initialization when the component mounts
    $(".process-bars").bekeyProgressbar({ animateText: true });
    $(".ProgressBar_20").bekeyProgressbar({ animateText: true });

    // Update individual progress bars
    $(".process-bar-wrapper .process-bar").each(function () {
      const width = $(this).data("process-width");
      $(this).css("width", `${width}%`);
    });
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="row">
                <div className="col-xl-6 col-md-3 col-sm-6">
                  <div className="card mb-30">
                    <div className="state2">
                      <p className="font-14 mb-1">Followers</p>
                      <h2>51k</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-sm-6">
                  <div className="card mb-30">
                    <div className="state2 style--two">
                      <p className="font-14 mb-1">Impression</p>
                      <h2>&#36;215k</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-sm-6">
                  <div className="card mb-30">
                    <div className="state2 style--three">
                      <p className="font-14 mb-1">Engagement</p>
                      <h2>14k</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-sm-6">
                  <div className="card mb-30">
                    <div className="state2 style--four">
                      <p className="font-14 mb-1">Visitors</p>
                      <h2>36k</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="card mb-30">
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-end justify-content-between mb-3">
                    <div className="">
                      <h4 className="mb-1">Live Campaign</h4>
                      <p className="font-14">
                        {" "}
                        Tell use paid law ever yet new to learn.
                      </p>
                    </div>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>

                  <div id="apex_column6-chart" className="chart"></div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6">
              <div className="card mb-30">
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-end justify-content-between mb-3">
                    <div className="">
                      <h4 className="mb-1">Performance</h4>
                      <p className="font-14">
                        Tell use paid law ever yet new to learn.
                      </p>
                    </div>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>

                  <div id="apex_column7-chart" className="chart"></div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="card pb-2 mb-30">
                <div className="card-body mb-4 mb-xl-0 pb-0">
                  <div className="d-flex justify-content-between">
                    <div className="title-content">
                      <h4>Spent</h4>
                    </div>

                    <ul className="list-inline list-button m-0">
                      <li className="active">Monthly</li>
                      <li>Yearly</li>
                    </ul>
                  </div>
                </div>
                <div id="apex_pie2-chart" className="chart"></div>

                <div className="process-bars">
                  <div className="process-bar-wrapper">
                    <span className="process-name">Impression</span>
                    <span className="process-width">35%</span>
                    <span
                      className="process-bar style--three"
                      data-process-width="35"
                    ></span>
                  </div>

                  <div className="process-bar-wrapper">
                    <span className="process-name">Engagement</span>
                    <span className="process-width">67%</span>
                    <span
                      className="process-bar style--four"
                      data-process-width="67"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-6">
              <div className="card mb-30">
                <div className="card-body mb-n5">
                  <div className="title-content mb-4 mb-md-0">
                    <h4>Statistics</h4>
                  </div>
                </div>
                <div id="apex_area6-chart" className="chart"></div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4">
              <div className="card mb-30">
                <div className="social-statics">
                  <h4 className="statics-title">Twitter</h4>

                  <div className="d-flex justify-content-between align-items-center followers">
                    <div className="icon">
                      <img
                        src="../assets/img/svg/twitter.svg"
                        alt=""
                        className="svg"
                      />
                    </div>
                    <div className="content">
                      <p className="font-14 mb-2 l-height1">Followers</p>
                      <h3>261.6k</h3>
                    </div>
                  </div>

                  <div className="statics-bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="content">
                          <div className="mb-4">
                            <p className="font-14 mb-1">Engagement</p>
                            <h3>245k</h3>
                          </div>
                          <div className="mt-n1">
                            <p className="font-14 mb-1">Impression</p>
                            <h3>654k</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div id="apex_column8-chart" className="chart"></div>
                        <span className="d-block text-center mt-1">
                          Last 5days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4">
              <div className="card mb-30">
                <div className="social-statics style--two">
                  <h4 className="statics-title">Facebook</h4>

                  <div className="d-flex justify-content-between align-items-center followers">
                    <div className="icon">
                      <img
                        src="../assets/img/svg/facebook.svg"
                        alt=""
                        className="svg"
                      />
                    </div>
                    <div className="content">
                      <p className="font-14 mb-2 l-height1">Followers</p>
                      <h3>695k</h3>
                    </div>
                  </div>

                  <div className="statics-bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="content">
                          <div className="mb-4">
                            <p className="font-14 mb-1">Engagement</p>
                            <h3>245k</h3>
                          </div>
                          <div className="mt-n1">
                            <p className="font-14 mb-1">Impression</p>
                            <h3>654k</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div id="apex_column9-chart" className="chart"></div>
                        <span className="d-block text-center mt-1">
                          Last 5days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4">
              <div className="card mb-30">
                <div className="social-statics style--three">
                  <h4 className="statics-title">Linkedin</h4>

                  <div className="d-flex justify-content-between align-items-center followers">
                    <div className="icon">
                      <img
                        src="../assets/img/svg/linkedin.svg"
                        alt=""
                        className="svg"
                      />
                    </div>
                    <div className="content">
                      <p className="font-14 mb-2 l-height1">Followers</p>
                      <h3>246k</h3>
                    </div>
                  </div>

                  <div className="statics-bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="content">
                          <div className="mb-4">
                            <p className="font-14 mb-1">Engagement</p>
                            <h3>245k</h3>
                          </div>
                          <div className="mt-n1">
                            <p className="font-14 mb-1">Impression</p>
                            <h3>654k</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div id="apex_column10-chart" className="chart"></div>
                        <span className="d-block text-center mt-1">
                          Last 5days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="card mb-30">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <h4>Source Of Users</h4>
                    </div>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>

                  <div id="apex_donut-chart" className="chart"></div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6">
              <div className="card mb-30">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="">
                      <h4>Wallet</h4>
                    </div>

                    <div className="dropdown-button">
                      <a
                        href="#"
                        className="d-flex align-items-center"
                        data-toggle="dropdown"
                      >
                        <div className="menu-icon style--two mr-0">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#">Daily</a>
                        <a href="#">Sort By</a>
                        <a href="#">Monthly</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-14 mb-1">Available Balance</p>
                    <h2>$246</h2>
                  </div>

                  <div className="process-bar-wrapper style--three">
                    <span className="process-name mb-2">Used</span>
                    <span className="process-width mb-2">35%</span>
                    <span
                      className="process-bar style--two"
                      data-process-width="35"
                    ></span>
                  </div>
                  <p className="font-14 mt-10 c4 mb-30">
                    *Keep minimum balance of $100
                  </p>

                  <a href="#" className="btn mb-10">
                    pay now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card mb-30 mb-xl-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between media">
                        <div className="d-flex justify-content-start justify-content-sm-between flex-column flex-sm-row mb-sm-n3  media-body">
                          <div className="title-content mb-4 mb-sm-0">
                            <h4>Users Activity</h4>
                          </div>

                          <ul className="list-inline list-button m-0">
                            <li className="active">Monthly</li>
                            <li>Yearly</li>
                          </ul>
                        </div>

                        <div className="dropdown-button">
                          <a href="#" data-toggle="dropdown">
                            <div className="menu-icon style--two mt-0 mt-md-1 mr-0">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#">Report</a>
                            <a href="#">FAQ</a>
                            <a href="#">Charts</a>
                            <a href="#">Chat</a>
                            <a href="#">Settings</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="style--four table-striped  text-nowrap">
                        <thead>
                          <tr>
                            <th>Countries</th>
                            <th>Users</th>
                            <th>Likes</th>
                            <th>Followers</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f1.png" alt="" />
                                </div>
                                <div className="country-name">USA</div>
                              </div>
                            </td>
                            <td>265878</td>
                            <td>5878</td>
                            <td>878</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f2.png" alt="" />
                                </div>
                                <div className="country-name">China</div>
                              </div>
                            </td>
                            <td>265878</td>
                            <td>64578</td>
                            <td>4578</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f3.png" alt="" />
                                </div>
                                <div className="country-name">Russia</div>
                              </div>
                            </td>
                            <td>658745</td>
                            <td>8745</td>
                            <td>745</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f4.png" alt="" />
                                </div>
                                <div className="country-name">Spain</div>
                              </div>
                            </td>
                            <td>365985</td>
                            <td>65478</td>
                            <td>5478</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f5.png" alt="" />
                                </div>
                                <div className="country-name">Brazil</div>
                              </div>
                            </td>
                            <td>265478</td>
                            <td>65478</td>
                            <td>5478</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f6.png" alt="" />
                                </div>
                                <div className="country-name">France</div>
                              </div>
                            </td>
                            <td>123654</td>
                            <td>23654</td>
                            <td>3654</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f7.png" alt="" />
                                </div>
                                <div className="country-name">Algeria</div>
                              </div>
                            </td>
                            <td>654987</td>
                            <td>54987</td>
                            <td>4987</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f8.png" alt="" />
                                </div>
                                <div className="country-name">Andora</div>
                              </div>
                            </td>
                            <td>659874</td>
                            <td>59874</td>
                            <td>9874</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img src="../assets/img/flag/f9.png" alt="" />
                                </div>
                                <div className="country-name">Australia</div>
                              </div>
                            </td>
                            <td>564123</td>
                            <td>64123</td>
                            <td>4123</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f10.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Austria</div>
                              </div>
                            </td>
                            <td>625498</td>
                            <td>25498</td>
                            <td>5498</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f11.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Canada</div>
                              </div>
                            </td>
                            <td>365412</td>
                            <td>65412</td>
                            <td>5412</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f12.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Colombia</div>
                              </div>
                            </td>
                            <td>265878</td>
                            <td>65878</td>
                            <td>5878</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f13.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Egypt</div>
                              </div>
                            </td>
                            <td>264578</td>
                            <td>64578</td>
                            <td>4578</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f14.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Finland</div>
                              </div>
                            </td>
                            <td>658745</td>
                            <td>8745</td>
                            <td>745</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f15.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Germany</div>
                              </div>
                            </td>
                            <td>365985</td>
                            <td>65985</td>
                            <td>5985</td>
                          </tr>

                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="country-flag">
                                  <img
                                    src="../assets/img/flag/f16.png"
                                    alt=""
                                  />
                                </div>
                                <div className="country-name">Iecland</div>
                              </div>
                            </td>
                            <td>265478</td>
                            <td>5478</td>
                            <td>478</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="card mb-30 progress_20">
                        <div className="card-body">
                          <div className="d-flex justify-content-between pb-2 mb-4">
                            <div className="progress-title">
                              <h4 className="mb-1">Country Performances</h4>
                              <p className="font-14">
                                Tell use paid law ever yet new. Meant to learn
                                of{" "}
                              </p>
                            </div>

                            <div className="dropdown-button">
                              <a
                                href="#"
                                className="d-flex align-items-center"
                                data-toggle="dropdown"
                              >
                                <div className="menu-icon style--two mr-0">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#">Daily</a>
                                <a href="#">Sort By</a>
                                <a href="#">Monthly</a>
                              </div>
                            </div>
                          </div>

                          <div className="ProgressBar-wrap position-relative mb-3">
                            <div
                              className="ProgressBar ProgressBar_20"
                              data-progress="70"
                            >
                              <svg
                                className="ProgressBar-contentCircle"
                                viewBox="0 0 200 200"
                              >
                                <circle
                                  transform="rotate(135, 100, 100)"
                                  className="ProgressBar-background"
                                  cx="100"
                                  cy="100"
                                  r="8"
                                />
                                <circle
                                  transform="rotate(135, 100, 100)"
                                  className="ProgressBar-circle"
                                  cx="100"
                                  cy="100"
                                  r="85"
                                />
                              </svg>
                              <span className="ProgressBar-percentage--text">
                                Increase
                              </span>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                            </div>
                          </div>

                          <div className="country-performance pt-3">
                            <div className="process-bar-wrapper">
                              <span className="process-name">Members Grow</span>
                              <span className="process-width">35%</span>
                              <span
                                className="process-bar"
                                data-process-width="35"
                              ></span>
                            </div>

                            <div className="process-bar-wrapper style--two">
                              <span className="process-name">
                                Targeted Order
                              </span>
                              <span className="process-width">68%</span>
                              <span
                                className="process-bar"
                                data-process-width="68"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="card mb-30">
                        <div className="card-body">
                          <div className="d-flex justify-content-between media">
                            <div className="d-flex justify-content-start justify-content-sm-between flex-column flex-sm-row mb-sm-n3  media-body">
                              <div className="title-content mb-4 mb-sm-0">
                                <h4>Top Countries</h4>
                              </div>

                              <ul className="list-inline list-button m-0">
                                <li className="active">Monthly</li>
                                <li>Yearly</li>
                              </ul>
                            </div>

                            <div className="dropdown-button">
                              <a href="#" data-toggle="dropdown">
                                <div className="menu-icon style--two mt-0 mt-md-1 mr-0">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#">Report</a>
                                <a href="#">FAQ</a>
                                <a href="#">Charts</a>
                                <a href="#">Chat</a>
                                <a href="#">Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="apex_pie3-chart" className="chart"></div>

                        <div className="apex_pie3-chart-legend card-body mt-n5 font-14">
                          <div className="d-flex mb-10 align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="color-box"></div>
                              <div className="c_name">United States</div>
                            </div>

                            <div className="d-flex align-items-center">
                              <div>
                                <span className="bold mr-2">269k</span>Users
                              </div>
                            </div>
                          </div>

                          <div className="d-flex mb-10 align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="color-box two"></div>
                              <div className="c_name">Australia</div>
                            </div>

                            <div className="d-flex align-items-center">
                              <div>
                                <span className="bold mr-2">156k</span>Users
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mb-10 align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="color-box three"></div>
                              <div className="c_name">Canada</div>
                            </div>

                            <div className="d-flex align-items-center">
                              <div>
                                <span className="bold mr-2">57k</span>Users
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="color-box four"></div>
                              <div className="c_name">China</div>
                            </div>

                            <div className="d-flex align-items-center">
                              <div>
                                <span className="bold mr-2">43k</span>Users
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="card mb-30 mb-lg-0">
                        <div className="card-body">
                          <div className="title-content mb-4 mb-sm-0">
                            <h4>Top Followers</h4>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="style--five text-nowrap">
                            <thead>
                              <tr>
                                <th>Profile</th>
                                <th>Country</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f1.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">Kary Threlkeld</div>
                                  </div>
                                </td>
                                <td>USA</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f2.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">Kizzy Savoy</div>
                                  </div>
                                </td>
                                <td>China</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f3.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">
                                      Tonette Baumgarten
                                    </div>
                                  </div>
                                </td>
                                <td>Russia</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f4.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">Luella Brumit</div>
                                  </div>
                                </td>
                                <td>Spain</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f5.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">Dionne Rosser</div>
                                  </div>
                                </td>
                                <td>Brazil</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="img">
                                      <img
                                        src="../assets/img/avatar/f6.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="name">Earl Penton</div>
                                  </div>
                                </td>
                                <td>France</td>
                                <td>
                                  <a href="#" className="follow-btn">
                                    Follow{" "}
                                    <i className="icofont-arrow-right"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card">
                        <div className="card-body">
                          <div className="title-content mb-4">
                            <h4>Browser Status</h4>
                          </div>

                          <div className="browser-status font-14 bold mt-n1">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name font-12 regular text_color">
                                Browser Name
                              </div>
                              <div className="using-rate font-12 regular text_color">
                                Using Rate
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Google Chrome</div>
                              <div className="using-rate">74%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Firefox</div>
                              <div className="using-rate">54%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">
                                Internet Explorer
                              </div>
                              <div className="using-rate">46%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Opera Mini</div>
                              <div className="using-rate">23%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Android</div>
                              <div className="using-rate">15%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Microsoft Edge</div>
                              <div className="using-rate">36%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Safari</div>
                              <div className="using-rate">65%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Google Chrome</div>
                              <div className="using-rate">74%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">Firefox</div>
                              <div className="using-rate">54%</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="browser-name">
                                Internet Explorer
                              </div>
                              <div className="using-rate">46%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisMainContent;
