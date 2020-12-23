import React from "react";
import "../grid.scss";

const Load = () => {
  return (
    <div className="loadPage">
      <div className="load">
        <div id="cube-loader">
          <div class="caption">
            <div class="cube-loader">
              <div class="cube loader-1"></div>
              <div class="cube loader-2"></div>
              <div class="cube loader-4"></div>
              <div class="cube loader-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Load;
