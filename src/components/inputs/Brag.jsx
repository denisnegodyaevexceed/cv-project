import React, { useState } from 'react';
// import './App.css';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import allElementPositionActions from '../../actions/elementPositionActions';
import Slider from '@material-ui/core/Slider';



const MovableItem = ({ setIsFirstColumn }) => {
    

    let {top, left} = useSelector(state => state.elementPositionReducer)

    


    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Any custom name', type: 'Our first type' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.name === 'Column 1') {
                setIsFirstColumn(true)
            } else {
                setIsFirstColumn(false);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (

        <div ref={drag} className='movable-item' style={{ opacity, position: 'relative', top: `${top}px`, left: `${left}px` }}>
            We will move this item
        </div>
    )
}
const MovableItem2 = ({ setIsFirstColumn2 }) => {
    const [{ isDragging2 }, drag2] = useDrag({
        item: { name: 'Any custom name', type: 'Our first type' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult && dropResult.name === 'Column 1') {
                setIsFirstColumn2(true)
            } else {
                setIsFirstColumn2(false);
            }
        },
        collect: (monitor) => ({
            isDragging2: monitor.isDragging(),
        }),
    });

    const opacity = isDragging2 ? 0.4 : 1;

    return (

        <div ref={drag2} className='movable-item2' style={{ opacity }}>
            123
        </div>
    )
}

const Column = ({ children, className, title }) => {
    const [, drop] = useDrop({
        accept: 'Our first type',
        drop: () => ({ name: title }),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        '& > *': {
            margin: theme.spacing(0),
            
        },
    },
}))

function valuetext(value) {
    return `${value}°C`;
  }

const Brag = () => {
    let pdfExportComponent;

    let {top, left} = useSelector(state => state.elementPositionReducer)

    const dispatch = useDispatch()

    console.log(top, left, 'coordinatrs')

    const classes = useStyles();

    const [isFirstColumn, setIsFirstColumn] = useState(true);
    const [isFirstColumn2, setIsFirstColumn2] = useState(true);


    const Item = <MovableItem className='itemInRightColumn' setIsFirstColumn={setIsFirstColumn} />;
    const Item2 = <MovableItem2 setIsFirstColumn2={setIsFirstColumn2} />;

    return (
        <div className="container">
            <Button

                variant="contained"
                color="secondary"
                className="k-button"
                onClick={() => {
                    pdfExportComponent.save();
                }}
            >
                Скачать PDF
      </Button>
            {/* Wrap components that will be "draggable" and "droppable" */}
            <DndProvider backend={HTML5Backend}>
                <Column title='Column 1' className='column first-column'>
                    {isFirstColumn && Item}
                    {isFirstColumn2 && Item2}

                </Column>
                <PDFExport
                    forcePageBreak=".page-break"
                    ref={(component) => (pdfExportComponent = component)}
                // fileName={`${userInfo.firstName + userInfo.secondName}`+`${userInfo.careerObjective}`}
                // paperSize="A4"
                >
                    <div title='Column 2' className='column second-column'>
                        {!isFirstColumn && Item}
                        {!isFirstColumn2 && Item2}

                    </div>
                </PDFExport>

            </DndProvider>
            <div className='customizeWindow'>
                <div className={classes.root}>
                    <Button onClick={() => dispatch(allElementPositionActions.setElementXAction(+left - 15))} variant="outlined" className='leftControlButton' size='large' color="primary" href="#outlined-buttons">
                        Left
                    </Button>
                    <ButtonGroup  orientation="vertical"
                        color="primary"
                        aria-label="vertical outlined primary button group" size='small'>
                        <Button onClick={() =>dispatch(allElementPositionActions.setElementYAction(+top - 15))}>Up</Button>
                        <Button onClick={() =>dispatch(allElementPositionActions.setElementYAction(+top + 15))}>Down</Button>


                    </ButtonGroup>
                    <Button onClick={() => dispatch(allElementPositionActions.setElementXAction(+left + 15))} className='rightControlButton' variant="outlined" color="primary" href="#outlined-buttons">
                        Right
                    </Button>
                    <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
                </div>
            </div>
        </div>
    );
}
export default Brag