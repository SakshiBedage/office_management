import $ from "jquery";
import swal from "sweetalert";
import "datatables.net"; // Import DataTables library
import "datatables.net-bs4"; // Import DataTables Bootstrap 4 integration

$(function () {
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
