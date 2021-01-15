import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allCustomizedTemplateActions from "../../actions/customizedTemplateActions";
import { GridPortfolio } from "./Drag";

function DragItem({
  id,
  renderContent,
  gsw = 12,
  gsh = 42,
  gsx = 0,
  gsy = 750,
  type = null,
}) {
  const { posVertical, textAlign, activeBlock } = useSelector(
    (state) => state.customizedTemplateReducer
  );
  const [newStyle, setNewStyle] = useState({
    display: "flex",
    textAlign: textAlign,
    alignItems: posVertical,
  });
  const {
    setActiveBlockAction,
    setVerticalPosAction,
    setTextAlignAction,
  } = allCustomizedTemplateActions;
  const dispatch = useDispatch();

  const updateStyleVer = () => {
    if (id === activeBlock) {
      setNewStyle({
        ...newStyle,
        alignItems: posVertical,
      });
    }
  };

  const updateStyleText = () => {
    if (id === activeBlock) {
      setNewStyle({
        ...newStyle,
        textAlign: textAlign,
      });
    }
  };

  useEffect(() => {
    updateStyleVer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posVertical]);

  useEffect(() => {
    updateStyleText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textAlign]);

  const handleClickItem = () => {
    dispatch(setActiveBlockAction(id));
    dispatch(setVerticalPosAction(newStyle.alignItems));
    dispatch(setTextAlignAction(newStyle.textAlign));
  };

  useEffect(() => {
    if (type === "portfolio") {
      GridPortfolio?.makeWidget(`#grid-${id}`);
    }

    return () => {
      GridPortfolio?.removeAll(false);
      document.querySelectorAll(".itemPortfolio").forEach((item, index) => {
        GridPortfolio?.makeWidget(`#${item.getAttribute("id")}`);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-id-matrix={id}
      id={`grid-${id}`}
      className={`grid-stack-item ${type === "portfolio" && "itemPortfolio"}`}
      gs-w={gsw}
      gs-h={gsh}
      gs-x={gsx}
      gs-y={gsy}
      onMouseDown={() => handleClickItem()}
    >
      <div
        data-id={id}
        style={{
          display: "flex",
          textAlign: newStyle.textAlign,
          alignItems: newStyle.alignItems,
        }}
        className={`${
          activeBlock === id ? "active-block" : ""
        } grid-stack-item-content`}
      >
        {renderContent}
      </div>
    </div>
  );
};

export default DragItem;
