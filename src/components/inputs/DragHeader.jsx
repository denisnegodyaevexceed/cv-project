import React from 'react';
import { useSelector} from "react-redux";
import 'gridstack/dist/gridstack.min.css';
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/jq/gridstack-dd-jqueryui';

import DragItem from './DragItem';

const DragHeader = () => {
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const userInfo = useSelector((state) => state.aboutMeReducer);
    const {avaBorderRadius} = useSelector(state=>state.customizedTemplateReducer);

    const {headerBackground , headerImage, headerImagePosition} = useSelector(state=>state.customizedTemplateReducer)

    console.log(headerImage , 'gfhfh')

    React.useEffect(() => {
        let options = { 
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
            <DragItem id={1} gsh={4} gsw={4} renderContent={
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
            <DragItem id={2} gsh={2} gsw={2} renderContent={<span>{userInfo.firstName} {userInfo.secondName}</span>}/>
            <DragItem id={3} gsh={1} gsw={6} renderContent={<span>{userInfo.careerObjective}</span>} />
        </div> 
    )
}

export default DragHeader;