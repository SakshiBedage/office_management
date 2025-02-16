import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/HR/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/HR/vendor/sweetalert/sweetalert.css";
import "../assets/HR/vendor/jquery-datatable/dataTables.bootstrap4.min.css";
import "../assets/HR/bundles/datatablescripts.bundle";
import "../assets/HR/vendor/sweetalert/sweetalert.min.js";
import "../assets/HR/js/pages/tables/jquery-datatable.js";
import Swal from "sweetalert2";
import $ from "jquery";

import swal from "sweetalert2";

function TasksTodoList() {
  const [tasks, setTasks] = useState([]);
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

  useEffect(() => {
    // Fetch data from Laravel backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("your-backend-api-endpoint");
        setTasks(response.data); // Assuming the response data is an array of tasks
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle delete action here
        Swal.fire("Deleted!", "Your user has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your user is safe :)", "error");
      }
    });
  };
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

  const imgStyle = {
    position: "relative",
    zIndex: "1",
  };

  return (
    <>
      <style>{styles}</style>
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

                <li class="nav-category bold font-14 mt-4">Lavels</li>
                <li class="lavel">
                  <a href="#">
                    <span class="tag_color urgent"></span>
                    Urgent
                  </a>
                </li>
                <li class="lavel">
                  <a href="#">
                    <span class="tag_color important"></span>
                    High
                  </a>
                </li>
                <li class="lavel">
                  <a href="#">
                    <span class="tag_color average"></span>
                    Normal{" "}
                  </a>
                </li>

                <li class="lavel">
                  <a href="#">
                    <span class="tag_color not_urgent"></span>
                    Low
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div id="main-content">
          <div class="container-fluid">
            <div class="row clearfix">
              <div class="row">
                <div class="col-12">
                  <div class="header" style={{ padding: "20px" }}>
                    <h3>Task List</h3>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="card">
                    <div class="body">
                      <div class="table-responsive">
                        <table class="table table-hover js-basic-example dataTable table-custom table-striped m-b-0 c_list">
                          <thead class="thead-dark">
                            <tr>
                              <th>
                                <label class="fancy-checkbox">
                                  <input
                                    class="select-all"
                                    type="checkbox"
                                    name="checkbox"
                                  />
                                  <span></span>
                                </label>
                              </th>
                              <th>Task Name</th>
                              <th>Task Location</th>
                              <th>Task Creator</th>
                              <th>Date</th>
                              <th>Assigned</th>
                              <th>Priority</th>
                              <th>Due Date</th>
                              <th>Details</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tasks.map((task, index) => (
                              <tr key={index}>
                                <td class="width45">
                                  <label class="fancy-checkbox">
                                    <input
                                      class="checkbox-tick"
                                      type="checkbox"
                                      name="checkbox"
                                    />
                                    <span></span>
                                  </label>
                                  <img
                                    src="../../../assets/HR/images/xs/avatar1.jpg"
                                    class="rounded-circle avatar"
                                    alt=""
                                  />
                                </td>
                                <td>{task.taskName}</td>
                                <td>{task.taskLocation}</td>
                                <td>{task.taskCreator}</td>
                                <td>{task.date}</td>
                                <td>{task.assigned}</td>
                                <td>{task.priority}</td>
                                <td>{task.dueDate}</td>
                                <td>
                                  <a
                                    href="../todolist/task-details.html"
                                    class="details-btn"
                                  >
                                    View Details{" "}
                                    <i class="icofont-arrow-right"></i>
                                  </a>
                                </td>

                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-secondary"
                                    title="Edit"
                                  >
                                    <i class="fa fa-edit"></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-danger js-sweetalert"
                                    title="Delete"
                                    onClick={handleDelete}
                                  >
                                    <i class="fa fa-trash-o"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                            {/* <tr>
                              <td class="width45">
                                <label class="fancy-checkbox">
                                  <input
                                    class="checkbox-tick"
                                    type="checkbox"
                                    name="checkbox"
                                  />
                                  <span></span>
                                </label>
                                <img
                                  src="../../../assets/HR/images/xs/avatar2.jpg"
                                  class="rounded-circle avatar"
                                  alt=""
                                />
                              </td>
                              <td>`festival Posts</td>
                              <td>Thriving Technologies</td>
                              <td>Amey Bhosle</td>
                              <td>26/09/2023</td>
                              <td>Ruksana</td>
                              <td style={{ color: "red", fontWeight: "bold" }}>
                                Urgent
                              </td>
                              <td>07/01/2024</td>

                              <td>
                                <a
                                  href="../todolist/task-details.html"
                                  class="details-btn"
                                >
                                  View Details{" "}
                                  <i class="icofont-arrow-right"></i>
                                </a>
                              </td>

                              <td>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-outline-secondary"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-outline-danger js-sweetalert"
                                  title="Delete"
                                  onClick={handleDelete}
                                >
                                  <i class="fa fa-trash-o"></i>
                                </button>
                              </td>
                            </tr> */}
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

      <div
        class="modal fade"
        id="qcModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="qcModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="qcModalLabel">
                Export File
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="add_task-Assignee mb-40">
                  <label for="task_Assignee" class="label-text">
                    Export as
                  </label>
                  <select class="theme-input-style" id="exampleSelect1">
                    <option value="null"></option>
                    <option value="pdf">PDF</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>

                <div class="pb-4">
                  <label for=""> Select File Path :</label>
                  <input type="file" id="fileInput" />
                  <input
                    type="text"
                    id="filePathDisplay"
                    readonly
                    placeholder="Selected file path will be displayed here"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button onclick="saveFile()" class="btn btn-primary">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function displayFilePath() {
    const fileInput = document.getElementById("fileInput");
    const filePathDisplay = document.getElementById("filePathDisplay");

    if (fileInput.files.length > 0) {
      const filePath = fileInput.files[0].name;
      filePathDisplay.value = filePath;
    } else {
      filePathDisplay.value = "No file selected";
    }
  }
}

export default TasksTodoList;
