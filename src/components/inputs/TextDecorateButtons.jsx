import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from "react-redux";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import Slider from '@material-ui/core/Slider';
import {
    Grid,
    Divider,
    Button
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
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
  }));
  


const TextDecorateButtons = () => {
    const {setVerticalPosAction, setTextAlignAction, setAvaBorderRadiusAction} = allCustomizedTemplateActions;
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

    return (
            <Grid container alignItems="center" className={classes.root}>
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
                <Slider
                    defaultValue={0}
                    onChangeCommitted={setRadius}
                    step={5}
                    marks
                    min={0}
                    max={500}
                    aria-labelledby="non-linear-slider"
                />
            </Grid>
    );
};

export default TextDecorateButtons;