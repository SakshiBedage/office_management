/* global Quill */

import React, { useEffect } from "react";
import "quill/dist/quill.snow.css"; // Import Quill CSS

function Notepad() {
  useEffect(() => {
    // Dynamically create script elements and add them to the document
    const loadScript = (src, onLoad) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.body.appendChild(script);
    };

    // Load the Quill script
    loadScript("https://cdn.quilljs.com/1.3.6/quill.js", () => {
      // Initialize Quill with the specified configuration
      new Quill(".editor", {
        modules: {
          formula: true,
          syntax: true,
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
        placeholder: "Start typing...",
        theme: "snow",
      });
    });

    // Clean up the dynamically added script element when the component is unmounted
    return () => {
      document
        .querySelector('script[src^="https://cdn.quilljs.com/1.3.6/quill.js"]')
        .remove();
    };
  }, []);

  return (
    <div className="main-content">
      <div className="container-fluid">
        <section className="full-editor">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header card_color-bg border-0 py-3">
                  <h4 className="card-title">Notepad</h4>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-sm-12">
                        <div id="full-wrapper">
                          <div id="full-container">
                            <div className="editor"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Notepad;
