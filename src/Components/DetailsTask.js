import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
function DetailsTask() {
  const [selectedUser, setSelectedUser] = useState("Nikhil"); // Set the initial value
  const [selectedPriority, setSelectedPriority] = useState("Low"); // Set the initial value
  const [taskDetails, setTaskDetails] = useState(null);

  useEffect(() => {
    // Fetch task details from the backend when the component mounts
    axios
      .get("/api/task/details") // Replace with your actual backend endpoint
      .then((response) => {
        setTaskDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, []);

  // Function to handle user selection
  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  // Function to handle priority selection
  const handlePrioritySelection = (priority) => {
    setSelectedPriority(priority);
  };

  const handleReassign = (newAssignee) => {
    axios
      .post("/api/task/reassign", { taskId: taskDetails.id, newAssignee })
      .then((response) => {
        // Handle successful reassign
      })
      .catch((error) => {
        console.error("Error reassigning task:", error);
      });
  };

  const handleSendForQC = (qcAssignee, filename, attachments) => {
    axios
      .post("/api/task/send-for-qc", {
        taskId: taskDetails.id,
        qcAssignee,
        attachments,
      })
      .then((response) => {
        // Handle successful send for QC
      })
      .catch((error) => {
        console.error("Error sending task for QC:", error);
      });
  };

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
    <>
      <div className="main-content d-flex flex-column flex-md-row">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="card h-100">
                <div className="card-body">
                  <div className="task-details">
                    <h4 className="add-new-title style--two mt-1">
                      {taskDetails.title}
                    </h4>

                    <div className="todo_actions d-flex align-items-center flex-wrap mb-2">
                      <div className="todo_assaign d-flex align-items-center">
                        <p className="label-text mb-0 mr-2">Assigned To</p>

                        <div className="assign-tag front-end">
                          <div className="tag-text font-12">
                            {" "}
                            {taskDetails.assignedTo}
                          </div>
                          <img
                            src="../../../assets/img/avatar/info-avatar.png"
                            alt=""
                            className="assign-avatar"
                          />
                        </div>
                        <div className="assign-tag back-end">
                          <div className="tag-text font-12">
                            {" "}
                            {taskDetails.assignedTo}
                          </div>
                          <img
                            src="../../../assets/img/avatar/m3.png"
                            alt=""
                            className="assign-avatar"
                          />
                        </div>
                      </div>

                      <div className="todo_date d-flex align-items-center">
                        <p className="label-text mb-0 mr-3">Date</p>
                        <span className="show-date">
                          <img
                            src="../../../assets/img/svg/calender.svg"
                            alt=""
                            className="svg"
                          />{" "}
                          {taskDetails.date}
                        </span>
                      </div>

                      <div className="todo_priority d-flex align-items-center">
                        <p className="label-text mb-0 mr-3">Priority Level</p>

                        <div className="priority">
                          <p className="assign-menu bold font-14">
                            {taskDetails.priority}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="description mb-4">
                      <p className="label-text mb-2">Description</p>
                      <p>{taskDetails.description}</p>
                    </div>

                    <div className="add_comment pt-1 mb-4">
                      <p className="label-text mb-2">
                        <span className="regular">Created By</span> &nbsp;
                        Drishti shah
                      </p>
                      <p>{taskDetails.comment}</p>
                    </div>

                    <div className="edit-task-btn pt-2 mb-3">
                      <Link to="/services/addnewtask" className="btn">
                        Edit Tasks
                      </Link>
                      &nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#reassignModal"
                        data-whatever="@mdo"
                      >
                        Reassign
                      </button>
                      &nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#qcModal"
                      >
                        Send for QC
                      </button>
                      <div
                        className="modal fade"
                        id="reassignModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="reassignModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="reassignModalLabel"
                              >
                                Reassign Task
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>

                            <div className="modal-body">
                              <p style={{ fontSize: "small" }}>
                                New members will gain access to the public
                                spaces,docs and dashboard
                              </p>
                              <form>
                                <div className="add_task-Assignee mb-40">
                                  <label
                                    for="task_Assignee"
                                    className="label-text"
                                  >
                                    Task Assignee
                                  </label>
                                  <select
                                    className="theme-input-style"
                                    id="exampleSelect1"
                                  >
                                    <option value="null">
                                      Select Task Assignee{" "}
                                    </option>
                                    <option value="Genus">Drishti</option>
                                    <option value="Foodela">Amey</option>
                                    <option value="Kalapuri">Sayli</option>
                                    <option value="Florazo">Mansi</option>
                                    <option value="Gatak">Vandana</option>
                                    <option value="Entity">Sachin</option>
                                    <option value="HTBS">Riya</option>
                                    <option value="Genus">Mudit</option>
                                  </select>
                                </div>

                                <div className="todo_actions d-flex align-items-center flex-wrap">
                                  <div
                                    className="todo_assaign d-flex align-items-center"
                                    style={{ paddingBottom: "50px" }}
                                  >
                                    <p className="label-text mb-0 mr-2">
                                      Assigned To
                                    </p>

                                    <div className="assign-tag">
                                      <div className="tag-text font-12">
                                        {selectedUser}
                                      </div>
                                      <img
                                        src="../../../assets/img/avatar/info-avatar.png"
                                        alt=""
                                        className="assign-avatar"
                                      />
                                    </div>
                                    <div className="assigned-to">
                                      <a
                                        href="#"
                                        className="assign-btn ml-2"
                                        data-toggle="dropdown"
                                      >
                                        <img
                                          src="../../../assets/img/svg/plus.svg"
                                          alt=""
                                          className="svg"
                                        />
                                      </a>
                                      <div className="dropdown-menu style--four">
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Sarvadnya")
                                          }
                                        >
                                          Sarvadnya
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection(" Drishti")
                                          }
                                        >
                                          Drishti
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Vandana")
                                          }
                                        >
                                          Vandana
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Sayali")
                                          }
                                        >
                                          Sayali
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection(" Komal")
                                          }
                                        >
                                          Komal
                                        </a>
                                        <a
                                          href="#"
                                          classNameName={
                                            selectedUser === "Nikhil"
                                              ? "selected"
                                              : ""
                                          }
                                          onClick={() =>
                                            handleUserSelection("Nikhil")
                                          }
                                        >
                                          Nikhil
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Riya")
                                          }
                                        >
                                          Riya
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Sachin")
                                          }
                                        >
                                          Sachin
                                        </a>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleUserSelection("Ashish")
                                          }
                                        >
                                          Ashish
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleReassign(selectedUser)}
                              >
                                Send invite
                              </button>
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
      </div>

      <div
        className="modal fade"
        id="qcModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="qcModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="qcModalLabel">
                Send for QC
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="add_task-Assignee mb-40">
                  <label for="task_Assignee" className="label-text">
                    Send To
                  </label>
                  <select className="theme-input-style" id="exampleSelect1">
                    <option value="null"></option>
                    <option value="Genus">Drishti</option>
                    <option value="Foodela">Amey</option>
                    <option value="Kalapuri">Sayli</option>
                    <option value="Florazo">Mansi</option>
                    <option value="Gatak">Vandana</option>
                    <option value="Entity">Sachin</option>
                    <option value="HTBS">Riya</option>
                    <option value="Genus">Mudit</option>
                  </select>
                </div>

                <div class="add_task-name mb-40">
                  <label for="task_name" class="label-text">
                    File Name
                  </label>
                  <input
                    type="text"
                    id="task_name"
                    class="theme-input-style"
                    placeholder="Type here"
                  />
                </div>

                <div className="file-attachments pb-4">
                  <h6 className="attachment_title mb-3">
                    Attachments <span></span>
                  </h6>

                  <div className="attach-file style--three mb-4">
                    <div className="upload-button">
                      Add an attachment
                      <input
                        className="file-input"
                        type="file"
                        id="file_upload2"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  handleSendForQC("Drishti", "ABC", "example_attachment.pdf")
                }
              >
                Submit for QC
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsTask;
