import React, { useEffect, useState } from "react";
import axios from "axios";

function AddNewTask() {
  const [task, setTask] = useState({
    name: "",
    location: "",
    assignee: "",
    assigneedto: "",
    dueDate: "",
    priority: "",
    attachment: "",
    description: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the Laravel API
      const response = await axios.post(
        "http://your-laravel-api-endpoint.com/api/tasks",
        task
      );

      // Handle success
      console.log("Task added:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error adding task:", error);
    }
  };

  const [selectedUser, setSelectedUser] = useState("Nikhil"); // Set the initial value

  // Function to handle user selection
  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  const [selectedPriority, setSelectedPriority] = useState("Low"); // Set the initial value

  // Function to handle priority selection
  const handlePrioritySelection = (priority) => {
    setSelectedPriority(priority);
  };
  const getPriorityColorStyle = () => {
    switch (selectedPriority) {
      case "Urgent":
        return { backgroundColor: "#ff0000", color: "#fff" };
      case "High":
        return { backgroundColor: "#ff9900", color: "#fff" };
      case "Normal":
        return { backgroundColor: "#3366cc", color: "#fff" };
      case "Low":
        return { backgroundColor: "#D3D3D3", color: "#000" };
      default:
        return {};
    }
  };
  useEffect(() => {
    // Load external scripts when the component mounts
    const script1 = document.createElement("script");
    script1.src = "assets/plugins/datepicker/datepicker.min.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "assets/plugins/datepicker/i18n/datepicker.en.js";
    script2.async = true;
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "assets/plugins/datepicker/custom-form-datepicker.js";
    script3.async = true;
    document.head.appendChild(script3);

    // Clean up when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

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
    <div class="main-content d-flex flex-column flex-md-row">
      <div class="mb-4 mb-md-0">
        <nav class="tasks_aside">
          <div class="aside-header pr-0">
            <div class="aside-header-btn d-flex justify-content-end position-relative">
              <h4 class="aside-btn-text c1 d-xl-flex align-items-center">
                Add New Task
              </h4>
              <a href="add-new.html" class="btn-circle style--two">
                <img
                  src="../../../assets/img/svg/plus_white.svg"
                  alt=""
                  style={imgStyle}
                />
              </a>
            </div>
          </div>

          <div class="aside-body">
            <ul class="nav flex-column">
              <li class="active">
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Favourites</a>
              </li>
              <li>
                <a href="#">Done</a>
              </li>
              <li>
                <a href="#">Urgent</a>
              </li>
              <li>
                <a href="#">Important</a>
              </li>

              <li class="nav-category bold font-14 mt-4">Levels</li>
              <li class="lavel">
                <a href="#">
                  <span
                    class="tag_color urgent"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                  Urgent
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span
                    class="tag_color important"
                    style={{ backgroundColor: "#ff9900" }}
                  ></span>
                  High
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span
                    class="tag_color average"
                    style={{ backgroundColor: "#3366cc" }}
                  ></span>
                  Normal{" "}
                </a>
              </li>
              <li class="lavel">
                <a href="#">
                  <span
                    class="tag_color not_urgent"
                    style={{ backgroundColor: "#D3D3D3" }}
                  ></span>
                  Low
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-fluid">
        <div class="row h-100">
          <div class="col-12 h-100">
            <div class="card h-100">
              <div class="card-body">
                <form onSubmit={handleSubmit} class="add-new_task">
                  <h4 class="add-new-title mt-1">Add New Task</h4>

                  <div class="add_task-name mb-40">
                    <label for="task_name" class="label-text">
                      Task Name
                    </label>
                    <input
                      type="text"
                      id="task_name"
                      class="theme-input-style"
                      placeholder="Type here"
                      value={task.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="add_task-location mb-40">
                    <label for="task_location" class="label-text">
                      Task Location
                    </label>
                    <select
                      class="theme-input-style"
                      id="exampleSelect1"
                      value={task.location}
                      onChange={handleChange}
                    >
                      <option value="null">Select Task Location</option>
                      <option value="Thriving Technologies">
                        Thriving Technologies
                      </option>
                      <option value="Foodela">Foodela</option>
                      <option value="Kalapuri">Kalapuri</option>
                      <option value="Florazo">Florazo</option>
                      <option value="Gatak">Gatak</option>
                      <option value="Entity">Entity</option>
                      <option value="HTBS">HTBS</option>
                      <option value="Genus">Genus</option>
                    </select>
                  </div>

                  <div class="add_task-Assignee mb-40">
                    <label
                      for="task_Assignee"
                      class="label-text"
                      value={task.assignee}
                      onChange={handleChange}
                    >
                      Task Assignee
                    </label>
                    <select class="theme-input-style" id="exampleSelect1">
                      <option value="null">Select Task Assignee </option>
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

                  <div class="todo_actions d-flex align-items-center flex-wrap">
                    <div class="todo_assaign d-flex align-items-center">
                      <p class="label-text mb-0 mr-2">Assigned To</p>

                      <div class="assign-tag">
                        <div class="tag-text font-12">{selectedUser}</div>
                        <img
                          src="../../../assets/img/avatar/info-avatar.png"
                          alt=""
                          class="assign-avatar"
                        />
                      </div>

                      <div class="assigned-to">
                        <a
                          href="#"
                          class="assign-btn ml-2"
                          data-toggle="dropdown"
                        >
                          <img
                            src="../../../assets/img/svg/plus.svg"
                            alt=""
                            class="svg"
                          />
                        </a>
                        <div class="dropdown-menu style--four">
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Sarvadnya")}
                          >
                            Sarvadnya
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Drishti")}
                          >
                            Drishti
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Vandana")}
                          >
                            Vandana
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Sayali")}
                          >
                            Sayali
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Komal")}
                          >
                            Komal
                          </a>
                          <a
                            href="#"
                            className={
                              selectedUser === "Nikhil" ? "selected" : ""
                            }
                            onClick={() => handleUserSelection("Nikhil")}
                          >
                            Nikhil
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Riya")}
                          >
                            Riya
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Sachin")}
                          >
                            Sachin
                          </a>
                          <a
                            href="#"
                            onClick={() => handleUserSelection("Ashish")}
                          >
                            Ashish
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="todo_date d-flex align-items-center">
                      <p class="label-text mb-0 mr-3"> Due Date</p>

                      <div class="dashboard-date style--three">
                        <span class="input-group-addon">
                          <img
                            src="../../../assets/img/svg/calender.svg"
                            alt=""
                            class="svg"
                          />
                        </span>

                        <input
                          type="text"
                          id="default-date"
                          placeholder="28 October 2019"
                          value={task.duedate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="todo_priority d-flex align-items-center">
                      <p class="label-text mb-0 mr-3">Priority Level</p>

                      <div class="priority">
                        <a
                          href="#"
                          class="assign-menu bold font-14"
                          data-toggle="dropdown"
                          style={getPriorityColorStyle()}
                        >
                          {selectedPriority}
                        </a>
                        <div class="dropdown-menu style--five">
                          <a
                            href="#"
                            onClick={() => handlePrioritySelection("Urgent")}
                          >
                            <span
                              class="tag_color urgent"
                              style={{ backgroundColor: "#ff0000" }}
                            ></span>
                            Urgent
                          </a>
                          <a
                            href="#"
                            onClick={() => handlePrioritySelection("High")}
                          >
                            <span
                              class="tag_color important"
                              style={{ backgroundColor: "#ff9900" }}
                            ></span>
                            high
                          </a>
                          <a
                            href="#"
                            onClick={() => handlePrioritySelection("Normal")}
                          >
                            <span
                              class="tag_color average"
                              style={{ backgroundColor: "#3366cc" }}
                            ></span>
                            Normal
                          </a>
                          <a
                            href="#"
                            onClick={() => handlePrioritySelection("Low")}
                          >
                            <span
                              class="tag_color not_urgent"
                              style={{ backgroundColor: "#D3D3D3" }}
                            ></span>
                            Low
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="file-attachments pb-4">
                    <h6 class="attachment_title mb-3">
                      Attachments <span></span>
                    </h6>

                    <div class="attach-file style--three mb-4">
                      <div class="upload-button">
                        Add an attachment
                        <input
                          class="file-input"
                          type="file"
                          id="file_upload2"
                          value={task.attachment}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-column flex-md-row align-items-md-center"></div>
                  </div>

                  <div class="add_description mb-4">
                    <label for="task_description" class="label-text">
                      Description
                    </label>
                    <textarea
                      name="task_description"
                      id="task_description"
                      class="theme-input-style"
                      placeholder="Type here"
                      value={task.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div class="add_comment pt-1 mb-4">
                    <label for="task_comment" class="label-text">
                      <span class="regular">Created By</span>
                      &nbsp; Drishti
                    </label>
                    <textarea
                      name="task_comment"
                      id="task_comment"
                      class="theme-input-style style--two"
                      placeholder="Write your comment here"
                      value={task.comment}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div class="add-task-btn pt-2 mb-3">
                    <button class="btn" type="submit">
                      Add Tasks
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTask;
