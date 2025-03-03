import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MainContentHeader from "./MainContentHeader";
import CreateNewBoard from "./CreateNewBoard";
import DisplayBoardList from "./DisplayBoardList";

function SuperAdminMainContent({ user }) {
  const [workspaces, setWorkspaces] = useState([]);

  return (
    <>
      <div className="main-content d-flex flex-column flex-md-row">
        <div className="container-fluid">
          <div className="row">
            <MainContentHeader />

            <div className="col-6">
              <DisplayBoardList user={user} />
            </div>

            <div className="col-xl-6 col-lg-4 col-sm-6">
              <CreateNewBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperAdminMainContent;
