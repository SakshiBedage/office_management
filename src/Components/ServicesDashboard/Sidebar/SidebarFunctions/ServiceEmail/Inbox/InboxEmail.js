import React, { useState } from "react";
import Filters from "./Filters";
import MailHeader from "./MailHeader";
import MailList from "./MailList";
function IndoxEmail() {
  return (
    <div className="main-content d-flex flex-column flex-md-row">
      <Filters />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card bg-transparent">
              <div className="card-body card_color-bg mb-30">
                <MailHeader />
              </div>

              <MailList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndoxEmail;
