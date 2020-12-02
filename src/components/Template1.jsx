
import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";

class Template1 extends React.Component {
  pdfExportComponent;

  render() {
    return (
      <div>
        <div className="example-config">
          <button
            className="k-button"
            onClick={() => {
              this.pdfExportComponent.save();
            }}
          >
            Export PDF
          </button>
        </div>

        <PDFExport
          forcePageBreak=".page-break"
          ref={(component) => (this.pdfExportComponent = component)}
        >
   
          <div style={{ width: "595px", height: "420px" }}>
            <h3>Page 1</h3>
            <div class="head-1">
              <div className="head-name-1">
                <div className="first-name-1">Igor</div>
                <div className="last-name-1">Pestov</div>
              </div>
              <div className="post-1">FULLS-STACK DEVELOPER</div>
              <img className="avatar-1" src="./user.png" alt="" />
            </div>

            <h3 className="page-break">Page 2</h3>
            <div class="head-1">
              <div className="head-name-1">
                <div className="first-name-1">Igor</div>
                <div className="last-name-1">Pestov</div>
              </div>
              <div className="post-1">FULLS-STACK DEVELOPER</div>
              <img className="avatar-1" src="./user.png" alt="" />
            </div>
            
          </div>
        </PDFExport>
      </div>
    );
  }
}

export default Template1;
