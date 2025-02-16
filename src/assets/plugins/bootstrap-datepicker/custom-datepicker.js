import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    $.fn.datepicker.defaults.format = "dd MM yyyy";
    if ($("#datePickerExample").length) {
      var date = new Date();
      var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      var today2 = new Date(date.getFullYear(), date.getMonth());
      $("#datePickerExample").datepicker({
        format: "dd MM yyyy",
        todayHighlight: true,
        autoclose: true,
      });
      $("#datePickerExample").datepicker("setDate", today);
      $("#datePickerExample2").datepicker("setDate", today);
    }
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <h1>Date Picker Example</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd MMMM yyyy"
        todayButton="Today"
        id="datePickerExample"
      />
    </div>
  );
}

export default MyComponent;
