import React from 'react';
import { useSelector} from "react-redux";
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/jq/gridstack-dd-jqueryui';

import DragItem from './DragItem';

const DragHeader = ({styleName, stylePosition}) => {
    
    
    
    
    const userInfo = useSelector((state) => state.aboutMeReducer);
    const {avaBorderRadius} = useSelector(state=>state.customizedTemplateReducer);
    const {headerBackground , headerImage, headerImagePosition} = useSelector(state=>state.customizedTemplateReducer)

     

    React.useEffect(() => {
        let options = { 
            cellHeight: 5,
            disableOneColumnMode: true,
            float: false,
        };
        GridStack.init(options, '.grid-stack-header');
    }, [])

    const backgroundControll = headerImage? headerImagePosition === 'cover' ? {backgroundImage: `url(${headerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'}:{backgroundImage: `url(${headerImage})`, backgroundRepeat: "repeat",}:{backgroundColor: `${headerBackground}`}


    return (
        <div className='grid-stack grid-stack-header' style={backgroundControll}>
            <DragItem id={1} gsh={48} gsw={4} renderContent={
                <div  style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    borderRadius: avaBorderRadius,
                    margin: "auto"}} 
                />} 
            />
            <DragItem id={2} gsh={24} gsw={8} renderContent={<span style={styleName}>{userInfo.firstName} {userInfo.secondName}</span>}/>
            <DragItem id={3} gsh={24} gsw={8} renderContent={<span style={stylePosition}>{userInfo.careerObjective}</span>} />
        </div> 
    )
}

export default DragHeader;