import React, { useEffect, useRef, useState } from "react"; // Import React and useRef
import $ from "jquery";
import axios from "axios";
// Import SmartWizard CSS
import "smartwizard/dist/js/jquery.smartWizard.min.js";
import "../assets/plugins/jquery-smartwizard/smart_wizard_all.min.css"; // Import SmartWizard JS
import "../assets/plugins/jquery-smartwizard/custom-smartWizard.js";

function SuperAdminWorkspace() {
  const wizardRef = useRef(null); // Create a ref for the SmartWizard instance
  const [selectedRole, setSelectedRole] = useState("Member");
  const [workspaceName, setWorkspaceName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [emails, setEmails] = useState("");

  useEffect(() => {
    if (wizardRef.current) {
      $(wizardRef.current).smartWizard({
        theme: "arrows",
        transitionEffect: "slide",
      });
    }
  }, []);

  function toggleDropdown() {
    var dropdown = document.querySelector(".role-dropdown");
    dropdown.classList.toggle("show");
  }

  function selectRole(role) {
    var selectedRoleText = document.getElementById("selectedRoleText");
    selectedRoleText.textContent = role;
    setSelectedRole(role);
    toggleDropdown(); // Close the dropdown after selecting a role
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/workspace", {
        workspaceName,
        teamSize,
        emails,
        selectedRole,
      });
      console.log("Backend response:", response.data);
      // Handle successful response from the backend
    } catch (error) {
      console.error("Error:", error);
      // Handle error from the backend
    }
  };

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card mb-40">
              <form action="#">
                <h4 className="font-20 mb-30 mt-30 mx-4">Form Wizard</h4>
                <div id="smartwizard" ref={wizardRef}>
                  <ul className="nav">
                    <li>
                      <a className="nav-link" href="#step-1">
                        Workspace Details
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#step-2">
                        Team Size
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#step-3">
                        Invite
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#step-4">
                        <i className="icofont-check-alt"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="step-1" className="tab-pane" role="tabpanel">
                      <div className="card-body">
                        <h4 className="font-20 mb-20">Workspace Details</h4>

                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="font-14 bold mb-2">
                                Workspace Name
                              </label>
                              <input
                                type="text"
                                className="theme-input-style"
                                placeholder="Name Your Workspace"
                                value={workspaceName}
                                onChange={(e) =>
                                  setWorkspaceName(e.target.value)
                                }
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="step-2" className="tab-pane" role="tabpanel">
                      <div className="card-body">
                        <h4 className="font-20 mb-20">Team Size</h4>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-group">
                                <label className="font-14 bold mb-2">
                                  How Many People will you be working with?
                                </label>
                                <select
                                  className="form-control"
                                  value={teamSize}
                                  onChange={(e) => setTeamSize(e.target.value)}
                                >
                                  <option value="just me">Just Me</option>
                                  <option value="2-5">2-5</option>
                                  <option value="6-10">6-10</option>
                                  <option value="11-25">11-25</option>
                                  <option value="26-50">26-50</option>
                                  <option value="51-200">51-200</option>
                                  <option value="201-500">201-500</option>
                                  <option value="500+">500+</option>
                                  <option value="I don't Know">
                                    I don't Know
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="step-3" className="tab-pane" role="tabpanel">
                      <div className="card-body" style={{ padding: "20px" }}>
                        <h4 className="font-20 mb-20">Invite People</h4>
                        <div className="row">
                          <div className="col-10">
                            <div className="form-group mb-4">
                              <label
                                htmlFor="addonEmail3"
                                className="mb-2 font-14 bold"
                              >
                                Invite people to your workspace
                              </label>

                              <div className="theme-input-group style--two">
                                <input
                                  type="text"
                                  id="addonEmail3"
                                  className="form-control"
                                  placeholder="Enter emails separated by commas"
                                  value={emails}
                                  onChange={(e) => setEmails(e.target.value)}
                                />
                                <small className="form-text text-muted">
                                  Separate multiple emails with commas.
                                </small>

                                <div className="input-group-append role-dropdown">
                                  <button
                                    type="button"
                                    className="btn style--two dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    <span id="selectedRoleText">
                                      {selectedRole}
                                    </span>{" "}
                                    <i className="icofont-simple-down"></i>
                                  </button>

                                  <div className="dropdown-menu">
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      onClick={() => selectRole("Member")}
                                    >
                                      Member
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      onClick={() => selectRole("Admin")}
                                    >
                                      Admin
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="step-4" className="tab-pane" role="tabpanel">
                      <div className="step-done">
                        <span className="btn-circle done">
                          <i className="icofont-check"></i>
                        </span>
                        <h2 className="text_color font-30 mb-20">
                          Done Successfully!
                        </h2>
                        <p>Workspace is Successfully Created</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminWorkspace;
