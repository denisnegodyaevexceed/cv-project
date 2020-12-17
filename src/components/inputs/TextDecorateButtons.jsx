import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from "react-redux";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import { CompactPicker } from 'react-color';
import Slider from '@material-ui/core/Slider';
import {
    Grid,
    Divider,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    TextField,
} from '@material-ui/core';
import allCustomizedTemplateActions from '../../actions/customizedTemplateActions'


const useStyles = makeStyles((theme) => ({
    root: {
      width: 'fit-content',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1),
        // fontSize:15,
        padding:4,
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
  }));
  

const TextDecorateButtons = () => {
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
    } = useSelector(state => state.customizedTemplateReducer);
    const [valueSize, setValueSize] = useState(nameSize);
    const [valueColor, setValueColor] = useState(nameColor);
    const {setVerticalPosAction, setTextAlignAction, setAvaBorderRadiusAction, setActiveTextTypeAction, setTypeSizeAction, setTypeColorAction} = allCustomizedTemplateActions;
    const classes = useStyles();
    const dispatch = useDispatch();

    const setVertical = (type) => {
        dispatch(setVerticalPosAction(type))
    }

    const setAlign = (type) => {
        dispatch(setTextAlignAction(type))
    }

    const setRadius = (_, value) => {
        dispatch(setAvaBorderRadiusAction(value))
        
    }

    const handlerChangeTypeText = (e) => {
        dispatch(setActiveTextTypeAction(e.target.value))
        switch(e.target.value){
            case 'nameSize':
                setValueSize(nameSize);
                setValueColor(nameColor);
                break;
                
            case 'posSize':
                setValueSize(posSize);
                setValueColor(posColor);
                break;

            case 'titleSize':
                setValueSize(titleSize);
                setValueColor(titleColor);
                break;

            case 'subTitleSize':
                setValueSize(subTitleSize);
                setValueColor(subTitleColor);
                break;

            case 'textSize':
                setValueSize(textSize);
                setValueColor(textColor);
                break;

            case 'smallTextSize':
                setValueSize(smallTextSize);
                setValueColor(smallTextColor);
                break;

            default :
                return null
        
        }
    }
    const handlerChangeSize = (e) => {
        setValueSize(e.target.value);
        dispatch(setTypeSizeAction({'name': activeTextType, 'value': e.target.value}));
    }

    const handleChangeColor = (color) => {
        setValueColor(color.hex);
        dispatch(setTypeColorAction({'name': activeTextType, 'value': color.hex}));
    }

    return (
            <Grid container alignItems="center" className={classes.root}>

                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="nameSize" onChange={(e) => handlerChangeTypeText(e)}>
                        <FormControlLabel
                            value="nameSize"
                            control={<Radio color="primary" />}
                            label="Name"
                            labelPlacement="top"
                        />  
                        <FormControlLabel
                            value="posSize"
                            control={<Radio color="primary" />}
                            label="Position"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="titleSize"
                            control={<Radio color="primary" />}
                            label="Title"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="subTitleSize"
                            control={<Radio color="primary" />}
                            label="SubTitle"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="textSize"
                            control={<Radio color="primary" />}
                            label="Text"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="smallTextSize"
                            control={<Radio color="primary" />}
                            label="Small Text"
                            labelPlacement="top"
                        />
                    </RadioGroup>
                    <TextField type='number' id="outlined-basic" label="font size" variant="outlined" onChange={(e) => handlerChangeSize(e)}  value={valueSize}/>
                    <CompactPicker 
                        color={valueColor} 
                        onChangeComplete={handleChangeColor}
                    />
                </FormControl>


                <Button onClick={() => {setAlign('left')}}>
                    <FormatAlignLeftIcon />
                </Button>
                <Button onClick={() => {setAlign('center')}}>
                    <FormatAlignCenterIcon />
                </Button>
                <Button onClick={() => {setAlign('right')}}>
                    <FormatAlignRightIcon />
                </Button>
                <Divider orientation="vertical" flexItem />
                <Button onClick={() => {setVertical('flex-start')}}>
                    <VerticalAlignTopIcon />
                </Button>
                <Button onClick={() => {setVertical('center')}}>
                    <VerticalAlignCenterIcon />
                </Button>
                <Button onClick={() => {setVertical('flex-end')}}>
                    <VerticalAlignBottomIcon />
                </Button>
                <div className="slider-border">
                    <h4>Border radius avatar</h4>
                <Slider
                    defaultValue={0}
                    onChangeCommitted={setRadius}
                    step={5}
                    marks
                    min={0}
                    max={500}
                    aria-labelledby="non-linear-slider"
                />
                </div>
            </Grid>
    );
};

export default TextDecorateButtons;