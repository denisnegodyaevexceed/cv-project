import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";

import DragItem from "./DragItem";

export let gridHeader = null;

function DragHeader ({ styleName, stylePosition }) {
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const { avaBorderRadius, matrixBlock } = useSelector(
    (state) => state.customizedTemplateReducer
  );
  const { headerBackground, headerImage, headerImagePosition } = useSelector(
    (state) => state.customizedTemplateReducer
  );

  const backgroundControll = headerImage
    ? headerImagePosition === "cover"
      ? {
          backgroundImage: `url(${headerImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }
      : { backgroundImage: `url(${headerImage})`, backgroundRepeat: "repeat" }
    : { backgroundColor: `${headerBackground}` };

  return (
    <div className="grid-stack grid-stack-header" style={backgroundControll}>
      <DragItem
        idDrag={1}
        gsh={matrixBlock[0].h}
        gsw={matrixBlock[0].w}
        gsx={matrixBlock[0].x}
        gsy={matrixBlock[0].y}
        renderContent={
          <div
            style={{
              backgroundImage: `url(${
                userInfo.avatar ? userInfo.avatar : "/public_images/user.png"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              borderRadius: avaBorderRadius,
              margin: "auto",
            }}
          />
        }
      />
      <DragItem
        idDrag={2}
        gsh={matrixBlock[1].h}
        gsw={matrixBlock[1].w}
        gsx={matrixBlock[1].x}
        gsy={matrixBlock[1].y}
        renderContent={
          <span style={styleName}>
            {userInfo.firstName} {userInfo.secondName}
          </span>
        }
      />
      <DragItem
        idDrag={3}
        gsh={matrixBlock[2].h}
        gsw={matrixBlock[2].w}
        gsx={matrixBlock[2].x}
        gsy={matrixBlock[2].y}
        renderContent={
          <span style={stylePosition}>{userInfo.careerObjective}</span>
        }
      />
    </div>
  );
};

export default DragHeader;
