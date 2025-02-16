/*---------------------------------------------
Template name :  Dashmin
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com


** Custom Repetar JS

----------------------------------------------*/
import $ from "jquery";

$(function () {
  "use strict";

  $(document).ready(function () {
    $(".file-repeater, .contact-repeater, .repeater-default").repeater({
      show: function () {
        $(this).slideDown();
      },
      hide: function (deleteElement) {
        // Use a variable to store the result of the confirm dialog
        var confirmed = confirmed(
          "Are you sure you want to delete this element?"
        );

        // If user confirms, delete the element
        if (confirmed) {
          $(this).slideUp(deleteElement);
        }
      },
    });
  });
});
