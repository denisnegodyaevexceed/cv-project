import React from "react";
import "./loaderStyles.scss";
import { useSelector } from "react-redux";
import styleTheme from "../../constants/styleTheme";
function Load ({ text }) {
  const { theme } = useSelector((state) => state.templateReducer);
  return (
    <div className="loadPage" style={{ backgroundColor: theme }}>
      <div className="load">
        <div id="cube-loader">
          <div className="caption">
            <div className="cube-loader">
              <div className="cube loader-1"></div>
              <div className="cube loader-2"></div>
              <div className="cube loader-4"></div>
              <div className="cube loader-3"></div>
            </div>
            {theme === "black" ? (
              <div
                style={{
                  color: styleTheme.styleThemeDark.textColorLoader,
                  margin: 40,
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                {text}
              </div>
            ) : (
              <div
                style={{
                  color: styleTheme.styleThemeLight.textColorLoader,
                  margin: 40,
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                {text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Load;
