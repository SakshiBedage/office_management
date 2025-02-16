import React, { useEffect } from "react";
import $ from "jquery";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../assets/plugins/fullcalendar/fullcalendar.min.css";

const SuperAdminCalendar = () => {
  useEffect(() => {
    const loadFullCalendar = () => {
      // Initialize FullCalendar here
      const calendarEl = document.getElementById("fullcalendar");
      new FullCalendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        events: [
          { title: "Event 1", date: "2024-01-21" },
          { title: "Event 2", date: "2024-01-22" },
          // Add more events as needed
        ],
        eventContent: function (arg) {
          // Custom styling for each day cell
          return {
            html: `<div class="custom-day-box">${arg.dayNumberText}</div>`,
          };
        },
      });
    };

    loadFullCalendar();
  }, []);

  return (
    <div className="main-content d-flex flex-column flex-md-row">
      <div className="d-none d-md-block">
        <div className="tasks_aside calendar_aside">
          <div className="card">
            <div className="aside-header">
              <div className="add-event-btn">
                <a
                  href="#"
                  className="btn w-100"
                  data-toggle="modal"
                  data-target="#createEventModal"
                >
                  <img
                    src="../../assets/img/svg/plus_white.svg"
                    alt=""
                    className="svg mr-1"
                  />
                  Add New Event
                </a>
              </div>
            </div>

            <div id="external-events" className="aside-body external-events">
              <ul id="external-events-listing" className="nav flex-column">
                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color birthday"></span>Birthday
                  </a>
                </li>
                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color event"></span>Event
                  </a>
                </li>

                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color work"></span>Work
                  </a>
                </li>
                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color new_project"></span>New Project
                  </a>
                </li>

                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color meeting"></span>Meeting
                  </a>
                </li>
                <li className="lavel fc-event">
                  <a href="#">
                    <span className="tag_color travel"></span>Travel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                {
                  title: "Birthday",
                  start: "2022-01-22",
                  className: "birthday",
                },
                {
                  title: "Event",
                  start: "2022-01-25",
                  className: "event",
                },
                // Add more events as needed
              ]}
              style={{
                color: "black", // Set the color of the arrows to black
              }}
            />
          </div>
        </div>
      </div>

      <div id="fullCalModal" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header flex-column border-bottom-0 pt-2 pb-0">
              <h6 id="modalTitle1">Required his you </h6>
              <p id="modalDate" className="font-14">
                17 . 10 . 2019
              </p>
            </div>
            <div
              id="modalBody1"
              className="modal-body border-bottom-0 pt-0 mt-10"
            >
              <div className="calendar-modal-location d-flex align-items-center">
                <span className="icon">
                  <img
                    src="../../assets/img/svg/popup-location.svg"
                    className="svg"
                    alt=""
                  />
                </span>
                <span id="modalLocation" className="content">
                  Po Box 931, Sterling City, Malta
                </span>
              </div>
              <div className="calendar-modal-visibility d-flex align-items-center">
                <span className="icon">
                  <img
                    src="../../assets/img/svg/popup-user.svg"
                    className="svg"
                    alt=""
                  />
                </span>
                <span id="modalVisibility" className="content">
                  Anyone
                </span>
              </div>
              <div className="calendar-modal-Event d-flex align-items-center">
                <span className="color"></span>
                <span id="modalEvent" className="content">
                  Anniversary
                </span>
              </div>
            </div>
            <div className="modal-footer justify-content-around pb-2 border-top-0">
              <button
                className="edit-btn"
                data-toggle="modal"
                data-target="#createEventModal"
                data-dismiss="modal"
              >
                <i className="icofont-ui-edit"></i> Edit
              </button>
              <button type="button" className="delete-btn" data-dismiss="modal">
                <i className="icofont-ui-delete"></i> Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="createEventModal" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header pb-0 border-bottom-0 flex-column">
              <div className="custom-select-box d-inline-flex align-items-center m_style">
                <label for="formGroupExampleInput6">
                  <img
                    src="../../assets/img/svg/color.svg"
                    alt=""
                    className="svg"
                  />
                </label>
                <select id="formGroupExampleInput6">
                  <option value="travel">Travel</option>
                  <option value="calendar">Calendar</option>
                  <option value="birthday">Birthday</option>
                  <option value="holyday">Holyday</option>
                  <option value="discovered">Discovered</option>
                  <option value="meetup">Meetup</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>

              <div className="calendar-modal-title-wrap w-100 d-flex mt-10">
                <div className="calendar-modal-title m_style flex-grow">
                  <label for="formGroupExampleInput">
                    <i className="icofont-tag"></i>
                  </label>
                  <input
                    type="text"
                    id="formGroupExampleInput"
                    placeholder="Ewe fuc dudbared."
                  />
                </div>

                <div className="calendar-modal-private m_style">
                  <i className="icofont-unlock"></i>
                </div>
              </div>

              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
                <span className="sr-only">close</span>
              </button>
            </div>

            <div
              id="modalBody2"
              className="modal-body border-bottom-0 pt-0 pb-0"
            >
              <form>
                <div className="calendar-modal-location m_style mt-10">
                  <label for="formGroupExampleInput1">
                    <i className="icofont-location-pin"></i>
                  </label>
                  <input
                    type="text"
                    id="formGroupExampleInput1"
                    placeholder="502 Ozisa Heights"
                  />
                </div>

                <div className="calendar-modal-dates mt-10 d-flex">
                  <div className="calendar-modal-start-date m_style mr-2">
                    <label for="formGroupExampleInput2">
                      <i className="icofont-calendar"></i>
                    </label>
                    <input
                      type="text"
                      id="formGroupExampleInput2"
                      placeholder="2020-01-13"
                    />
                  </div>

                  <div className="calendar-modal-end-date m_style mr-2">
                    <label for="formGroupExampleInput3">
                      <i className="icofont-calendar"></i>
                    </label>
                    <input
                      type="text"
                      id="formGroupExampleInput3"
                      placeholder="2020-01-13"
                    />
                  </div>

                  <div className="calendar-modal-checkbox d-flex align-items-center">
                    <input type="checkbox" id="formGroupExampleInput4" />
                    <label for="formGroupExampleInput4">All Day</label>
                  </div>
                </div>

                <div className="calendar-modal-state d-inline-flex align-items-center mt-10 m_style">
                  <label for="formGroupExampleInput5">
                    <i className="icofont-bag-alt"></i>
                  </label>
                  <select id="formGroupExampleInput5" className="m-state">
                    <option value="busy">Busy</option>
                    <option value="free">Free</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer border-top-0 pt-10">
              <button className="btn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuperAdminCalendar;
