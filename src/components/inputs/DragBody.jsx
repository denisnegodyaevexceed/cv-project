import React from 'react';
import { useSelector} from "react-redux";
import 'gridstack/dist/gridstack.min.css';
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/jq/gridstack-dd-jqueryui';

const DragBody = () => {
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
    const userInfo = useSelector((state) => state.aboutMeReducer);

    const {bodyBackground} = useSelector(state=>state.customizedTemplateReducer)

    React.useEffect(() => {
        let options = { 
            disableOneColumnMode: true,
            float: false,
        };
        GridStack.init(options, '.grid-stack-body');
        
    }, [])

    return (
        <div className='grid-stack grid-stack-body' style={{backgroundColor: `${bodyBackground}`}}>
            <div className="grid-stack-item" gs-w="2" gs-h='2'>
                <div className="grid-stack-item-content">Item 2 wider</div>
            </div>
            <div className="grid-stack-item" gs-w="2" gs-h='2'>
                <div className="grid-stack-item-content">Item 2 wider</div>
            </div>
            <div className="grid-stack-item" gs-w="2" gs-h='2'>
                <div className="grid-stack-item-content">Item 2 wider</div>
            </div>
        </div> 
    )
}

export default DragBody;