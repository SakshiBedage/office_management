import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import swal from "sweetalert2";
function QCApproved() {
  const [data, setData] = useState([]);
  const [entries, setEntries] = useState([]); // State to store entries
  useEffect(() => {
    // Your code here

    $(document).ready(function () {
      $(".js-basic-example").DataTable();

      //Exportable table
      $(".js-exportable").DataTable({
        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print"],
      });
    });

    /* Formatting function for row details - modify as you need */
    function format(d) {
      // `d` is the original data object for the row
      return (
        '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        "<tr>" +
        "<td>Full name:</td>" +
        "<td>" +
        d.name +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Extension number:</td>" +
        "<td>" +
        d.extn +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>Extra info:</td>" +
        "<td>And any further details here (images etc)...</td>" +
        "</tr>" +
        "</table>"
      );
    }

    $(document).ready(function () {
      var table = $("#example").DataTable({
        ajax: "assets/data/objects.txt",
        columns: [
          {
            className: "details-control",
            orderable: false,
            data: null,
            defaultContent: "",
          },
          { data: "name" },
          { data: "position" },
          { data: "office" },
          { data: "salary" },
        ],
        order: [[1, "asc"]],
      });

      // Add event listener for opening and closing details
      $("#example tbody").on("click", "td.details-control", function () {
        var tr = $(this).closest("tr");
        var row = table.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass("shown");
        } else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass("shown");
        }
      });

      // Add row into table
      var addRowTable = {
        options: {
          addButton: "#addToTable",
          table: "#addrowExample",
          dialog: {},
        },
        initialize: function () {
          this.setVars().build().events();
        },
        setVars: function () {
          this.$table = $(this.options.table);
          this.$addButton = $(this.options.addButton);
          this.dialog = {};
          this.dialog.$wrapper = $(this.options.dialog.wrapper);
          this.dialog.$cancel = $(this.options.dialog.cancelButton);
          this.dialog.$confirm = $(this.options.dialog.confirmButton);
          return this;
        },
        build: function () {
          this.datatable = this.$table.DataTable({
            aoColumns: [
              null,
              null,
              null,
              {
                bSortable: false,
              },
            ],
          });
          window.dt = this.datatable;
          return this;
        },
        events: function () {
          var object = this;
          this.$table
            .on("click", "button.button-save", function (e) {
              e.preventDefault();
              object.rowSave($(this).closest("tr"));
            })
            .on("click", "button.button-discard", function (e) {
              e.preventDefault();
              object.rowCancel($(this).closest("tr"));
            })
            .on("click", "button.button-edit", function (e) {
              e.preventDefault();
              object.rowEdit($(this).closest("tr"));
            })
            .on("click", "button.button-remove", function (e) {
              e.preventDefault();
              var $row = $(this).closest("tr");
              swal(
                {
                  title: "Are you sure?",
                  text: "You will not be able to recover this imaginary file!",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#dc3545",
                  confirmButtonText: "Yes, delete it!",
                  closeOnConfirm: false,
                },
                function () {
                  object.rowRemove($row);
                  swal(
                    "Deleted!",
                    "Your imaginary file has been deleted.",
                    "success"
                  );
                }
              );
            });
          this.$addButton.on("click", function (e) {
            e.preventDefault();
            object.rowAdd();
          });
          this.dialog.$cancel.on("click", function (e) {
            e.preventDefault();
            $.magnificPopup.close();
          });
          return this;
        },
        rowAdd: function () {
          this.$addButton.attr("disabled", "disabled");
          var actions = [
            '<button class="btn btn-sm btn-icon btn-pure btn-default on-editing button-save" data-toggle="tooltip" data-original-title="Save" hidden><i class="icon-drawer" aria-hidden="true"></i></button>',
            '<button class="btn btn-sm btn-icon btn-pure btn-default on-editing button-discard" data-toggle="tooltip" data-original-title="Discard" hidden><i class="icon-close" aria-hidden="true"></i></button>',
            '<button class="btn btn-sm btn-icon btn-pure btn-default on-default button-edit" data-toggle="tooltip" data-original-title="Edit"><i class="icon-pencil" aria-hidden="true"></i></button>',
            '<button class="btn btn-sm btn-icon btn-pure btn-default on-default button-remove" data-toggle="tooltip" data-original-title="Remove"><i class="icon-trash" aria-hidden="true"></i></button>',
          ].join(" ");
          var data = this.datatable.row.add(["", "", "", actions]);
          var $row = this.datatable.row(data[0]).nodes().to$();
          $row.addClass("adding").find("td:last").addClass("actions");
          this.rowEdit($row);
          this.datatable.order([0, "asc"]).draw();
        },
        rowCancel: function ($row) {
          if ($row.hasClass("adding")) {
            this.rowRemove($row);
          } else {
            var $actions = $row.find("td.actions");
            $actions.find(".button-discard").tooltip("hide");
            if ($actions.get(0)) {
              this.rowSetActionsDefault($row);
            }
            var data = this.datatable.row($row.get(0)).data();
            this.datatable.row($row.get(0)).data(data);
            this.handleTooltip($row);
            this.datatable.draw();
          }
        },
        rowEdit: function ($row) {
          var data = this.datatable.row($row.get(0)).data();
          $row.children("td").each(function (i) {
            var $this = $(this);
            if ($this.hasClass("actions")) {
              this.rowSetActionsEditing($row);
            } else {
              $this.html(
                '<input type="text" class="form-control input-block" value="' +
                  data[i] +
                  '"/>'
              );
            }
          });
        },
        rowSave: function ($row) {
          if ($row.hasClass("adding")) {
            this.$addButton.removeAttr("disabled");
            $row.removeClass("adding");
          }
          var values = $row.find("td").map(function () {
            var $this = $(this);
            if ($this.hasClass("actions")) {
              this.rowSetActionsDefault($row);
              return this.datatable.cell(this).data();
            } else {
              return $.trim($this.find("input").val());
            }
          });
          var $actions = $row.find("td.actions");
          $actions.find(".button-save").tooltip("hide");
          this.rowSetActionsDefault($row);
          this.datatable.row($row.get(0)).data(values);
          this.handleTooltip($row);
          this.datatable.draw();
        },
        rowRemove: function ($row) {
          if ($row.hasClass("adding")) {
            this.$addButton.removeAttr("disabled");
          }
          this.datatable.row($row.get(0)).remove().draw();
        },
        rowSetActionsEditing: function ($row) {
          $row.find(".on-editing").removeAttr("hidden");
          $row.find(".on-default").attr("hidden", true);
        },
        rowSetActionsDefault: function ($row) {
          $row.find(".on-editing").attr("hidden", true);
          $row.find(".on-default").removeAttr("hidden");
        },
        handleTooltip: function ($row) {
          $row.find('[data-toggle="tooltip"]').tooltip();
        },
      };

      addRowTable.initialize();
    });
  }, []);
  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
    }

    .main-content {
      overflow-x: auto;
      overflow-y: auto;
      white-space: nowrap;
    }

    .table-responsive {
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: max-content;
      white-space: nowrap;
    }

    th,
    td {
      padding: 10px;
      text-align: left;
    }
  `;
  useEffect(() => {
    // Define the URL of your Laravel API endpoint
    const apiUrl = "https://your-laravel-api-url.com/your-endpoint";

    // Make an HTTP GET request to fetch the data
    axios
      .get(apiUrl)
      .then((response) => {
        // Update the 'data' state with the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        // Replace with your Laravel API endpoint to fetch entries
        const response = await axios.get("https://your-laravel-api/entries");

        // Set the fetched entries in the state
        setEntries(response.data);
      } catch (error) {
        // Handle any errors
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);
  return (
    <>
      <style>{styles}</style>
      <div class="main-content d-flex flex-column flex-md-row">
        <div class="mb-4 mb-md-0">
          <nav class="tasks_aside" style={{ width: "200px" }}>
            <div class="aside-header pr-1">
              <div class="aside-header-btn d-flex justify-content-end position-relative">
                <h4 class="aside-btn-text c1 d-xl-flex align-items-center">
                  Quality Check
                </h4>
              </div>
            </div>

            <div class="aside-body">
              <ul class="nav flex-column">
                <li>
                  <Link to="/analysis/qcmodule">All</Link>
                </li>
                <li class="active">
                  <Link to="/analysis/qcapproved">Approved</Link>
                </li>
                <li>
                  <Link to="/analysis/qcdissapproved">Disapproved</Link>
                </li>
                <li>
                  <Link to="/analysis/qcpending">Pending</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div id="main-content">
          <div class="container">
            <div class="card">
              <div class="row">
                <div class="col-12">
                  <div class="header" style={{ padding: "20px" }}>
                    <h3>Quality Check List</h3>
                  </div>
                </div>
                <div class="container">
                  <div class="col-12">
                    <div class="card">
                      <div class="body">
                        <div class="table-responsive">
                          <table class="table table-hover js-basic-example dataTable table-custom table-striped m-b-0 c_list">
                            <thead class="thead-dark">
                              <tr>
                                <th>Name</th>
                                <th>Attachment</th>
                                <th>Status</th>
                                <th>Comment Track</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.name}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-outline-secondary"
                                      title="Download"
                                    >
                                      Download
                                      <i
                                        class="fa fa-arrow-down"
                                        style={{ padding: "0.5vh" }}
                                      ></i>
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                      title="Approve"
                                    >
                                      <i class="fa fa-check-square"></i>
                                    </button>
                                  </td>

                                  <td>
                                    <u>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#commentsModal"
                                      >
                                        Comments
                                      </a>
                                    </u>

                                    <div
                                      class="modal"
                                      id="commentsModal"
                                      tabindex="-1"
                                      role="dialog"
                                      aria-labelledby="commentsModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h4
                                              class="modal-title"
                                              id="commentsModalLabel"
                                            >
                                              Comments
                                            </h4>
                                            <button
                                              type="button"
                                              class="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">
                                                &times;
                                              </span>
                                            </button>
                                          </div>

                                          <div class="modal-body">
                                            <div class="body">
                                              <div class="table-responsive">
                                                <table class="table table-hover js-basic-example dataTable table-custom table-striped m-b-0 c_list">
                                                  <thead class="thead-dark">
                                                    <tr>
                                                      <th>Comment</th>
                                                      <th>Commented By</th>
                                                      <th>Date</th>
                                                      <th>Time</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {entries.map(
                                                      (entry, index) => (
                                                        <tr key={index}>
                                                          <td>{entry.entry}</td>
                                                          <td>
                                                            {entry.submittedBy}
                                                          </td>
                                                          <td>{entry.date}</td>
                                                          <td>{entry.time}</td>
                                                        </tr>
                                                      )
                                                    )}
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="modal-footer">
                                            <button
                                              type="button"
                                              class="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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
    </>
  );
}
export default QCApproved;
