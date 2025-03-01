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
} from "../../assets/plugins/apex/custom-apexcharts";

function OperationsMainContent() {
  useEffect(() => {
    const area_Chart = new ApexCharts(
      document.querySelector("#apex_area-chart"),
      area_options
    );

    area_Chart.render();
    const area2_Chart = new ApexCharts(
      document.querySelector("#apex_area2-chart"),
      area2_options
    );

    area2_Chart.render();

    const area3_Chart = new ApexCharts(
      document.querySelector("#apex_area3-chart"),
      area3_options
    );
    area3_Chart.render();

    const area4_Chart = new ApexCharts(
      document.querySelector("#apex_area4-chart"),
      area4_options
    );
    area4_Chart.render();

    const column_Chart = new ApexCharts(
      document.querySelector("#apex_column-chart"),
      column_options
    );
    column_Chart.render();

    const line_Chart = new ApexCharts(
      document.querySelector("#apex_line-chart"),
      line_options
    );

    line_Chart.render();

    const line2_Chart = new ApexCharts(
      document.querySelector("#apex_line2-chart"),
      line2_options
    );
    line2_Chart.render();
  }, []);
  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-8">
            <div className="card mb-30">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="increase">
                    <div className="card-title d-flex align-items-end mb-2">
                      <h2>
                        86<sup>%</sup>
                      </h2>
                      <p className="font-14">Increased</p>
                    </div>
                    <h3 className="card-subtitle mb-2">Congratulation!</h3>
                    <p className="font-16">
                      You've finished all of your tasks for this week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-4 col-sm-6">
            <div className="card area-chart-box mb-30">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h4 className="mb-1">Income</h4>
                    <p className="font-14 c3">Increase in Average</p>
                  </div>
                  <div className="">
                    <h2>
                      50<sup>%</sup>
                    </h2>
                  </div>
                </div>
              </div>
              <div id="apex_area-chart" className="chart"></div>
            </div>
          </div>

          <div className="col-xl-2 col-md-4 col-sm-6">
            <div className="card area-chart-box mb-30">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h4 className="mb-1">Profit Report</h4>
                    <p className="font-14 soft-pink">Decrease in Average</p>
                  </div>
                  <div className="">
                    <h2>
                      15<sup>%</sup>
                    </h2>
                  </div>
                </div>
              </div>
              <div id="apex_area2-chart" className="chart"></div>
            </div>
          </div>

          <div className="col-xl-2 col-md-4 col-sm-6">
            <div className="card area-chart-box mb-30">
              <div className="card-body">
                <div className="">
                  <h4 className="mb-1">Impression</h4>
                  <p className="font-14 text_color">Hover to see detail</p>
                </div>
              </div>
              <div id="apex_area3-chart" className="chart"></div>
            </div>
          </div>

          <div className="col-xl-2 col-md-4 col-sm-6">
            <div className="card area-chart-box mb-30">
              <div className="card-body">
                <div className="">
                  <h4 className="mb-1">Activity</h4>
                  <p className="font-14 text_color">Hover to see detail</p>
                </div>
              </div>
              <div id="apex_area4-chart" className="chart"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-12">
                <div className="card mb-30">
                  <div className="card-body d-flex justify-content-between mb-n72">
                    <div className="position-relative index-9">
                      <h4 className="mb-1">Task Analytics</h4>
                      <p className="font-14">
                        Check out each column for more details
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
                  <div id="apex_column-chart" className="chart"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-12">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-30">
                  <div className="card-body">
                    <div id="apex_line-chart" className="chart"></div>

                    <div className="d-flex align-items-end justify-content-between mt-4">
                      <div className="">
                        <h4 className="mb-1">Task Analytics</h4>
                        <p className="font-14">
                          Check out each column for more details
                        </p>
                      </div>

                      <div className="dropdown-button">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon justify-content-end pb-1 style--two mr-0">
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
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-30">
                  <div className="card-body">
                    <div id="apex_line2-chart" className="chart"></div>

                    <div className="d-flex align-items-end justify-content-between mt-4">
                      <div className="">
                        <h4 className="mb-1">Company Growth</h4>
                        <p className="font-14">
                          Company is growing 20% in average
                        </p>
                      </div>

                      <div className="dropdown-button">
                        <a
                          href="#"
                          className="d-flex align-items-center"
                          data-toggle="dropdown"
                        >
                          <div className="menu-icon justify-content-end pb-1 style--two mr-0">
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

export default OperationsMainContent;
