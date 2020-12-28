import React from "react";
import "../grid.scss";

const Load = ({text}) => {
  return (
    
        <div className="loadPage" >
          <div className="load">
            <div id="cube-loader">
              <div className="caption">
                <div className="cube-loader">
                  <div className="cube loader-1"></div>
                  <div className="cube loader-2"></div>
                  <div className="cube loader-4"></div>
                  <div className="cube loader-3"></div>
                </div>
              <div style={{color: 'white',margin:40,fontWeight:"bold",fontSize:40}}>{text}</div>

              </div>
            </div>
          </div>
        </div>
  );
};

export default Load;
