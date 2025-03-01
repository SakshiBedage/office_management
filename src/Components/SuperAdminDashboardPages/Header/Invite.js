import React, { useState, useEffect } from "react";
import axios from "axios";

const Invite = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // useEffect(() => {
  //   async function fetchWorkspaces() {
  //     try {
  //       const response = await axios.get("/api/workspaces");
  //       setWorkspaces(response.data.workspaces);
  //     } catch (error) {
  //       console.error("Error fetching workspaces:", error);
  //     }
  //   }
  //   fetchWorkspaces();
  // }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const selectRole = (role) => {
    setSelectedRole(role);
    setDropdownOpen(false);
  };

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
    position: "fixed",
    zIndex: 1050,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflow: "auto",
  };

  return (
    <>
      <div className="main-header-btn ml-md-1">
        <button type="button" className="btn" onClick={openModal}>
          Invite
        </button>
      </div>

      <div className="modal" style={modalStyle} role="dialog">
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ zIndex: 1100, position: "relative" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Invite People</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p style={{ fontSize: "small" }}>
                New members will gain access to public spaces, docs, and the
                dashboard.
              </p>
              <form>
                <div className="form-group mb-4">
                  <label className="mb-2 font-14 bold">Invite By Email</label>
                  <div className="theme-input-group style--two">
                    <input
                      type="text"
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
                  <label className="label-text">Select Workspace</label>
                  <select className="theme-input-style">
                    <option value="null">Select Workspace</option>
                    {workspaces.map((workspace, index) => (
                      <option key={index} value={workspace.value}>
                        {workspace.label}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
