import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MainContentHeader from "./MainContentHeader";
import BoardList from "./BoardList";
import CreateNewWorkspace from "./CreateNewWorkspace";

function ServicesMainContent({ user }) {
  console.log("user", user);
  // useEffect(() => {
  //   // Fetch sub-workspaces for each project
  //   projects.forEach((project) => {
  //     axios
  //       .get(
  //         `https://jsonplaceholder.typicode.com/projects/${project.id}/subworkspaces`
  //       )
  //       .then((response) => {
  //         // Store sub-workspaces in state using project ID as key
  //         setSubWorkspaces((prevSubWorkspaces) => ({
  //           ...prevSubWorkspaces,
  //           [project.id]: response.data,
  //         }));
  //       })
  //       .catch((error) => {
  //         console.error(
  //           `Error fetching sub-workspaces for project ${project.id}:`,
  //           error
  //         );
  //       });
  //   });
  // }, [projects]);

  return (
    <>
      <div class="main-content d-flex flex-column flex-md-row">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <MainContentHeader />
              <div class="row" style={{ padding: "20px" }}>
                <h3>Barcadly Services</h3>
              </div>
            </div>

            <BoardList user={user} />

            <div class="col-xl-6 col-lg-4 col-sm-6">
              <CreateNewWorkspace />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesMainContent;
