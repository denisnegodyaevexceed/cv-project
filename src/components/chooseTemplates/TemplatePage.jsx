import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import allTemplateActions from "../../actions/templateActions";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import allCustomizedTemplateActions from "../../actions/customizedTemplateActions";
import Load from "../loader/Load";
import SwitchTheme from "../SwitchTheme";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
  },
}));

function CenteredGrid() {
  const exc1 = `('./public_images/exceed.png')`;
  const exc2 = `('./public_images/exceed2.png')`;

  let history = useHistory();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [isLoad, setIsLoad] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [savedTemplates, setSavedTemplates] = React.useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    let cleanupFunction = false;
    const fetchData = () => {
      let itemList = [];
      firebase
        .database()
        .ref(`templates/`)
        .on("value", (snapshot) => {
          const data = snapshot.val();
          let i = 0;
          const resp = data;
          for (let key in resp) {
            itemList[i] = {
              uid: key,
              name: resp[key].info.firstName,
            };
            i++;
          }
          setSavedTemplates(itemList);
          setIsLoad(false);
        });
    };

    if (!cleanupFunction) {
      fetchData();
    }
    return () => (cleanupFunction = true);
  }, []);

  const loadTemplate = (uid) => {
    history.push(`/resumeLoad/${uid}`);
  };

  const check = localStorage.getItem("checkedA") === "true" ? true : false;

  const handlerDeleteSavedTemplate = (uid) => {
    firebase
      .database()
      .ref(`templates/${uid}/`)
      .remove()
      .then((e) => {
        const fetchData = () => {
          let itemList = [];
          firebase
            .database()
            .ref(`templates/`)
            .on("value", (snapshot) => {
              const data = snapshot.val();
              let i = 0;
              const resp = data;
              for (let key in resp) {
                itemList[i] = {
                  uid: key,
                  name: resp[key].info.firstName,
                };
                i++;
              }
              setSavedTemplates(itemList);
              setIsLoad(false);
            });
        };
        fetchData();
      });
  };

  return (
    <>
      <div className="page">
        {isLoad ? <Load text={"Loading..."} /> : null}
        <div className="container-pdf">
          <h2 className="h2-template">Choose a template</h2>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-1-1.png"
                    alt="logo"
                  />
                  <img
                    id="1"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-1-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="1"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 1
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-2-1.png"
                    alt="logo"
                  />
                  <img
                    id="2"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-2-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="2"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 2
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-3-1.png"
                    alt="logo"
                  />
                  <img
                    id="3"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-3-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="3"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 3
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-4-1.png"
                    alt="logo"
                  />
                  <img
                    id="4"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-4-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="4"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 4
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-5-1.png"
                    alt="logo"
                  />
                  <img
                    id="5"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-5-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="5"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 5
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-7-1.png"
                    alt="logo"
                  />
                  <img
                    id="7"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-7-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="7"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 6
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-8-1.png"
                    alt="logo"
                  />
                  <img
                    id="8"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-8-2.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="8"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Template 7
                    </h3>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} className="template-1">
                <div
                  onClick={() => {
                    dispatch(
                      allCustomizedTemplateActions.setCustomTemplateUidAction(
                        null
                      )
                    );
                    history.push("/resume");
                  }}
                  className="cont-temp"
                >
                  <img
                    className="img-1-1"
                    src="./public_images/template-6-1.png"
                    alt="logo"
                  />
                  <img
                    id="6"
                    onClick={(e) => {
                      dispatch(
                        allTemplateActions.setTemplateAction(e.target.id)
                      );
                    }}
                    className="img-1-2"
                    src="./public_images/template-6-1.png"
                    alt="logo"
                  />

                  <div className="cont-item">
                    <h3
                      id="6"
                      onClick={(e) => {
                        dispatch(
                          allTemplateActions.setTemplateAction(e.target.id)
                        );
                      }}
                      className="h3-template"
                    >
                      Create template
                    </h3>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div>
              <div className="title-block-customs">Loaded templates</div>

              <div className="cont-custom" style={{ color: "white" }}>
                {savedTemplates.map((item, index) => (
                  <div className="load-page" key={index}>
                    <div
                      className="customs"
                      style={{
                        background: `url${check ? exc1 : exc2}no-repeat`,
                      }}
                      onClick={() => loadTemplate(item.uid)}
                    >
                      <div className="custom-items">
                        <div className="title-customs">Custom template</div>

                        <div className="center">{item.name}</div>
                      </div>
                    </div>
                    <div
                      className="delte-container"
                      onClick={() => {
                        handlerDeleteSavedTemplate(item.uid);
                      }}
                    >
                      <DeleteIcon
                        variant="contained"
                        color="secondary"
                      ></DeleteIcon>
                      <div className="delete">Delete</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
      <SwitchTheme />
    </>
  );
}

export default CenteredGrid