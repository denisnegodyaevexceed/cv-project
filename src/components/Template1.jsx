import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
class Template1 extends React.Component {
  pdfExportComponent;

  render() {
    return (
      <div>
        <div className="button">
          <Button
            variant="contained"
            color="secondary"
            className="k-button"
            onClick={() => {
              this.pdfExportComponent.save();
            }}
          >
            Скачать PDF
          </Button>
          <Button
            variant="contained"
            color="secondary"
            
          >
            Изменить
          </Button>
          
        </div>

        <PDFExport
          forcePageBreak=".page-break"
          ref={(component) => (this.pdfExportComponent = component)}
        >
          <div style={{ width: "595px", height: "420px" }}>
            <div className="template-1">
              <div class="head-1">
                <div className="content-head-1">
                  <div className="head-name-1">
                    <div className="first-name-1">Name</div>
                    <div className="last-name-1">Last Name</div>
                  </div>
                  <div className="post-1">POST</div>
                </div>
                <img className="avatar-1" src="./user.png" alt="" />
              </div>
              <div className="main-info-1">
                <div className="left-info-1">
                  <div className="first-info-left-1">
                    <h4>Technical skills</h4>
                    <div className="first">
                      <h5>Frontend</h5>
                      <div>lorem ipsum</div>
                    </div>
                    <div>
                      <h5>Backend</h5>
                      <div>lorem ipsum</div>
                    </div>
                    <div>
                      <h5>DBS</h5>
                      <div>lorem ipsum</div>
                    </div>
                    <div>
                      <h5>Other</h5>
                      <div>lorem ipsum</div>
                    </div>
                    <div>
                      <h4>Contact details</h4>
                      <div>Email</div>
                      <div>Skype ...</div>
                    </div>
                  </div>
                </div>
                <div className="right-info-1">
                  <div className="first-info-right-1">
                    <div>
                      <h4>Personal Profile</h4>
                      <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium illum adipisci similique quas omnis
                        nesciunt deserunt.
                      </div>
                    </div>

                    <div>
                      <h4>Work History</h4>
                      <h5>REMOTE WORK</h5>
                      <h6>full stack developer | 2019-present</h6>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident sit veniam doloremque fugit cum molestias nisi
                        modi distinctio!
                      </div>
                    </div>
                    <div>
                      <h5>OLIMP IT</h5>
                      <h6>full stack developer | 2019-present</h6>
                      <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident sit veniam doloremque fugit cum molestias nisi
                        modi distinctio!
                      </div>
                    </div>

                    <div>
                      <h4>Education History</h4>
                      <h5>BACHELOR OF COMPUTER SCIENCE</h5>
                      <h6>University</h6>
                      <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium illum adipisci similique quas omnis
                        nesciunt deserunt.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="template-1 page-break">
              <div class="head-1">
                <div className="content-head-1">
                  <div className="head-name-1">
                    <div className="first-name-1">Name</div>
                    <div className="last-name-1">Last Name</div>
                  </div>
                  <div className="post-1">POST</div>
                </div>
                <img className="avatar-1" src="./user.png" alt="" />
              </div>

              <div className="other-info">
                <h2 className="context">PORTFOLIO</h2>

                <div className="other-left-info-1">
                  <div>
                    <h4>Name project</h4>
                    <h5>Link project</h5>
                    <div className="other-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium illum adipisci similique quas omnis nesciunt
                      deserunt.
                    </div>
                  </div>
                  <div>
                    <h4>Name project</h4>
                    <h5>Link project</h5>
                    <div className="other-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium illum adipisci similique quas omnis nesciunt
                      deserunt.
                    </div>
                  </div>
                </div>
                <div className="other-right-info-1">
                  <div>
                    <h4>Name project</h4>
                    <h5>Link project</h5>
                    <div className="other-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium illum adipisci similique quas omnis nesciunt
                      deserunt.
                    </div>
                  </div>
                  <div>
                    <h4>Name project</h4>
                    <h5>Link project</h5>
                    <div className="other-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium illum adipisci similique quas omnis nesciunt
                      deserunt.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PDFExport>
      </div>
    );
  }
}

export default Template1;
