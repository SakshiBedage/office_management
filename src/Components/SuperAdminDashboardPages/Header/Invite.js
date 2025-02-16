import React, { useState, useEffect } from "react";
import axios from "axios";

const Invite = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    async function fetchWorkspaces() {
      try {
        const response = await axios.get("/api/workspaces"); // Adjust the URL to match your backend endpoint
        setWorkspaces(response.data.workspaces); // Assuming your response contains a 'workspaces' property with an array of workspace names
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    }

    fetchWorkspaces();
  }, []);

  const [selectedRole, setSelectedRole] = useState("Select Role");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  function selectRole(role) {
    setSelectedRole(role);
    setDropdownOpen(false);
  }

  const [selectedRole1, setSelectedRole1] = useState("Select Role");
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  function toggleDropdown1() {
    setDropdownOpen1(!isDropdownOpen1);
  }

  function selectRole1(role) {
    setSelectedRole1(role);
    setDropdownOpen1(false);
  }
  return (
    <>
      <div className="main-header-btn ml-md-1">
        <button
          type="button"
          className="btn"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Invite
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Invite People
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
                New members will gain access to the public spaces,docs and
                dashboard
              </p>
              <form>
                <div className="form-group mb-4">
                  <label for="addonEmail3" className="mb-2 font-14 bold">
                    Invite By Email
                  </label>
                  <div className="theme-input-group style--two">
                    <input
                      type="text"
                      id="addonEmail3"
                      className="form-control"
                      placeholder="Type your email here"
                    />
                    <div className="input-group-append role-dropdown">
                      <button
                        type="button"
                        className="btn style--two dropdown-toggle"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        onClick={toggleDropdown}
                      >
                        <span id="selectedRoleText">{selectedRole}</span>
                      </button>

                      <div
                        className={`dropdown-menu${
                          isDropdownOpen ? " show" : ""
                        }`}
                      >
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => selectRole("SuperAdmin")}
                        >
                          SuperAdmin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <div className="theme-input-group style--two">
                    <div class="add_task-location mb-40">
                      <label for="task_location" class="label-text">
                        Select Workspace
                      </label>
                      <select class="theme-input-style" id="exampleSelect1">
                        <option value="null">Select Workspace</option>
                        {workspaces.map((workspace) => (
                          <option key={workspace.value} value={workspace.value}>
                            {workspace.label}
                          </option>
                        ))}
                      </select>
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
              <button type="button" className="btn btn-primary">
                Send invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
