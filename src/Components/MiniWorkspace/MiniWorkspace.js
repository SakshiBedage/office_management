import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateNewWorkspace from "../ServicesDashboard/ServicesMainContent/CreateNewWorkspace";
import MainContentHeader from "../ServicesDashboard/ServicesMainContent/MainContentHeader";
import WorkspaceList from "./WorkspaceList";

function MiniWorkspace({ user }) {
  return (
    <>
      <div class="main-content d-flex flex-column flex-md-row">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <MainContentHeader />
              <div class="row" style={{ padding: "20px" }}>
                <h3>Mini workspace</h3>
              </div>
            </div>

            <WorkspaceList user={user} />

            <CreateNewWorkspace />
          </div>
        </div>
      </div>
    </>
  );
}
export default MiniWorkspace;
