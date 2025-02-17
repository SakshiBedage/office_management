/* eslint-disable */
/*---------------------------------------------
Template name :  Dashmin
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com


** Custom Quill JS

----------------------------------------------*/

!(function (o, e, n) {
  "use strict";
  var t = Quill.import("formats/font");
  (t.whitelist = ["sofia", "slabo", "roboto", "inconsolata", "ubuntu"]),
    Quill.register(t, !0);

  new Quill("#bubble-container .editor", {
    bounds: "#bubble-container .editor",
    modules: { formula: !0, syntax: !0 },
    theme: "bubble",
  }),
    new Quill("#snow-container .editor", {
      bounds: "#snow-container .editor",
      modules: {
        formula: !0,
        syntax: !0,
        toolbar: "#snow-container .quill-toolbar",
      },
      theme: "snow",
    }),
    new Quill("#full-container .editor", {
      bounds: "#full-container .editor",
      modules: {
        formula: !0,
        syntax: !0,
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "super" }, { script: "sub" }],
          [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["direction", { align: [] }],
          ["link", "image", "video", "formula"],
          ["clean"],
        ],
      },
      theme: "snow",
    });
})(window, document, jQuery);
