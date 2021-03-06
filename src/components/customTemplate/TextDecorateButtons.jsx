import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
import VerticalAlignCenterIcon from "@material-ui/icons/VerticalAlignCenter";
import { CompactPicker } from "react-color";
import Slider from "@material-ui/core/Slider";
import {
  Grid,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
} from "@material-ui/core";
import allCustomizedTemplateActions from "../../actions/customizedTemplateActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1),
      padding: 4,
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

function TextDecorateButtons () {
  const {
    activeTextType,
    nameSize,
    posSize,
    titleSize,
    subTitleSize,
    textSize,
    smallTextSize,
    nameColor,
    posColor,
    titleColor,
    subTitleColor,
    textColor,
    smallTextColor,
  } = useSelector((state) => state.customizedTemplateReducer);
  const [valueSize, setValueSize] = useState(nameSize);
  const [valueColor, setValueColor] = useState(nameColor);
  const {
    setVerticalPosAction,
    setTextAlignAction,
    setAvaBorderRadiusAction,
    setActiveTextTypeAction,
    setTypeSizeAction,
    setTypeColorAction,
  } = allCustomizedTemplateActions;
  const classes = useStyles();
  const dispatch = useDispatch();

  const setVertical = (type) => {
    dispatch(setVerticalPosAction(type));
  };

  const setAlign = (type) => {
    dispatch(setTextAlignAction(type));
  };

  const onChangeSlider = (event, value) => {
    dispatch(setAvaBorderRadiusAction(value));
  };

  useEffect(() => {
    setValueSize(nameSize);
  }, [nameSize]);

  useEffect(() => {
    setValueColor(nameColor);
  }, [nameColor]);

  const handlerChangeTypeText = (e) => {
    dispatch(setActiveTextTypeAction(e.target.value));
    switch (e.target.value) {
      case "nameActive":
        setValueSize(nameSize);
        setValueColor(nameColor);
        break;

      case "posActive":
        setValueSize(posSize);
        setValueColor(posColor);
        break;

      case "titleActive":
        setValueSize(titleSize);
        setValueColor(titleColor);
        break;

      case "subTitleActive":
        setValueSize(subTitleSize);
        setValueColor(subTitleColor);
        break;

      case "textActive":
        setValueSize(textSize);
        setValueColor(textColor);
        break;

      case "smallTextActive":
        setValueSize(smallTextSize);
        setValueColor(smallTextColor);
        break;

      default:
        return null;
    }
  };
  const handlerChangeSize = (e) => {
    setValueSize(e.target.value);
    dispatch(
      setTypeSizeAction({ name: activeTextType, value: e.target.value })
    );
  };

  const handleChangeColor = (color) => {
    setValueColor(color.hex);
    dispatch(setTypeColorAction({ name: activeTextType, value: color.hex }));
  };

  return (
    <div className="text-decor">
      <Grid container alignItems="center" className={classes.root}>
        <h3 style={{ width: "100%", textAlign: "center", margin: "10px" }}>
          Text position
        </h3>
        <Button
          onClick={() => {
            setAlign("left");
          }}
        >
          <FormatAlignLeftIcon />
        </Button>
        <Button
          onClick={() => {
            setAlign("center");
          }}
        >
          <FormatAlignCenterIcon />
        </Button>
        <Button
          onClick={() => {
            setAlign("right");
          }}
        >
          <FormatAlignRightIcon />
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => {
            setVertical("flex-start");
          }}
        >
          <VerticalAlignTopIcon />
        </Button>
        <Button
          onClick={() => {
            setVertical("center");
          }}
        >
          <VerticalAlignCenterIcon />
        </Button>
        <Button
          onClick={() => {
            setVertical("flex-end");
          }}
        >
          <VerticalAlignBottomIcon />
        </Button>
      </Grid>
      <br />
      <Grid container alignItems="center" className={classes.root}>
        <h3 style={{ width: "100%", textAlign: "center", margin: "10px" }}>
          General style
        </h3>
        <div>
          <FormControl className="forms">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="nameActive"
              onChange={(e) => handlerChangeTypeText(e)}
            >
              <FormControlLabel
                value="nameActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="Name"
                labelPlacement="top"
              />
              <FormControlLabel
                value="posActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="Position"
                labelPlacement="top"
              />
              <FormControlLabel
                value="titleActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="Title"
                labelPlacement="top"
              />
              <FormControlLabel
                value="subTitleActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="SubTitle"
                labelPlacement="top"
              />
              <FormControlLabel
                value="textActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="Text"
                labelPlacement="top"
              />
              <FormControlLabel
                value="smallTextActive"
                className="radio-small"
                control={<Radio size="small" color="primary" />}
                label="Small Text"
                labelPlacement="top"
              />
            </RadioGroup>
            <div className="font-size-picker">
              <TextField
                type="number"
                id="outlined-basic"
                label="font size"
                variant="outlined"
                onChange={(e) => handlerChangeSize(e)}
                value={valueSize}
              />
            </div>
            <h4 style={{ width: "100%", textAlign: "left", margin: "10px" }}>
              Font color
            </h4>
            <div className="color-picker">
              <CompactPicker
                className="picker"
                color={valueColor}
                onChangeComplete={handleChangeColor}
              />
            </div>
          </FormControl>
        </div>
        <div className="slider-border">
          <h4 style={{ width: "100%", textAlign: "left", margin: "10px" }}>
            Border radius avatar
          </h4>
          <div className="slider">
            <Slider
              min={0}
              max={500}
              onChangeCommitted={onChangeSlider}
              aria-labelledby="continuous-slider"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default TextDecorateButtons;
