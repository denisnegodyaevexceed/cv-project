import React, { useEffect, useState } from "react";
import Switch from "@material-ui/core/Switch";
import allTemplateActions from "../actions/templateActions";
import { useDispatch } from "react-redux";


function SwitchTheme () {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);
  const check = localStorage.getItem("checkedA") === "true" ? true : false;

  const handleChangeChecked = () => {
    setChecked(!checked);
    localStorage.setItem("checkedA", checked);
  };

  useEffect(() => {
    if (check) {
      dispatch(allTemplateActions.setThemeDark());
     

    } else {
      dispatch(allTemplateActions.setThemeLight());
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);
  return (
    <div className="switch">
      <h2 className={check ? "theme1" : "theme2"}>
        {check ? "Dark theme" : "Light theme"}
      </h2>
      <Switch
        color="primary"
        checked={check}
        onChange={handleChangeChecked}
        name="checked"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

export default SwitchTheme;
