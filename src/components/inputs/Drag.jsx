import React, { useState } from 'react';
// import './App.css';
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";

const MovableItem = ({setIsFirstColumn}) => {
    const [{isDragging}, drag] = useDrag({
        item: {name: 'Any custom name', type: 'Our first type'},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
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
        
        <div ref={drag} className='movable-item' style={{opacity}}>
            We will move this item
        </div>
    )
}
const MovableItem2 = ({setIsFirstColumn2}) => {
    const [{isDragging2}, drag2] = useDrag({
        item: {name: 'Any custom name', type: 'Our first type'},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult && dropResult.name === 'Column 1'){
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
        
        <div ref={drag2} className='movable-item' style={{opacity}}>
           123
        </div>
    )
}


const Column = ({children, className, title}) => {
    const [, drop] = useDrop({
        accept: 'Our first type',
        drop: () => ({name: title}),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}

const Drag = () => {
  let pdfExportComponent;

    const [isFirstColumn, setIsFirstColumn] = useState(true);
    const [isFirstColumn2, setIsFirstColumn2] = useState(true);


    const Item = <MovableItem setIsFirstColumn={setIsFirstColumn}/>;
    const Item2 = <MovableItem2 setIsFirstColumn2={setIsFirstColumn2}/>;

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
        </div>
    );
}
export default Drag