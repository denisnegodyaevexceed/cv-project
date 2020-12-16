import React, { useState } from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";
import  Muuri  from "muuri";
import { useSelector} from "react-redux";
import {
    Button,
    Container,
    Grid,
} from "@material-ui/core";


import 'gridstack/dist/gridstack.min.css';
import {GridStack} from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// OR to get legacy jquery-ui drag&drop
import 'gridstack/dist/jq/gridstack-dd-jqueryui';

const Drag = () => {
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
  const userInfo = useSelector((state) => state.aboutMeReducer);
    
    let pdfExportComponent;

    const [items, setItems] = useState([{id: '1'}, {id: '2'}, {id: '3'}, {id: '3'}, {id: '3'}, {id: '3'}, {id: '3'}, {id: '3'}, {id: '3'}, {id: '3'}]);

    var phPool = [];
    var phElem = document.createElement('div');
    React.useEffect(() => {
        var options = { // put in gridstack options here
            disableOneColumnMode: true, // for jfiddle small window size
            float: false
          };
          var grid = GridStack.init(options);
          
        //   var count = 0;
        //   var items = [
        //       {x: 0, y: 0, w: 2, h: 2},
        //       {x: 2, y: 0, w: 2},
        //     {x: 3, y: 1, h: 2},
        //     {x: 0, y: 2, w: 2},
        //   ];
          
        //   const addNewWidget = () => {
        //     var node = items[count] || {
        //       x: Math.round(12 * Math.random()),
        //       y: Math.round(5 * Math.random()),
        //       w: Math.round(1 + 3 * Math.random()),
        //       h: Math.round(1 + 3 * Math.random())
        //     };
        //     node.content = String(count++);
        //     grid.addWidget(node);
        //     return false;
        //   };

    }, [])


    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                <PDFExport
                
                    forcePageBreak=".page-break"
                    ref={(component) => (pdfExportComponent = component)}
                    fileName={`${userInfo.firstName + userInfo.secondName}`+`${userInfo.careerObjective}`}
                    // paperSize="A4"
                >
                    <div className='qqqqq'></div>

                    <div className="grid-stack">
                        <div className="grid-stack-item" gs-w="6" gs-h='6'>
                            <div className="grid-stack-item-content"><div  style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                        margin: "auto"}}></div></div>
                        </div>
                        <div className="grid-stack-item" gs-w="6" gs-h='1'>
                    <div className="grid-stack-item-content">{userInfo.firstName}{userInfo.secondName}</div>
                        </div>
                        <div className="grid-stack-item" gs-w="2" gs-h='2'>
                            <div className="grid-stack-item-content">{userInfo.careerObjective.toUpperCase()}</div>
                        </div>
                        <div className="grid-stack-item" gs-w="2" gs-h='2'>
                            <div className="grid-stack-item-content">
                                
                            </div>
                        </div>
                        <div className="grid-stack-item" gs-w="2" gs-h='2'>
                            <div className="grid-stack-item-content">Item 2 wider</div>
                        </div>
                        <div className="grid-stack-item" gs-w="2" gs-h='2'>
                            <div className="grid-stack-item-content">Item 2 wider</div>
                        </div>
                   
                    </div> 
                </PDFExport>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Drag