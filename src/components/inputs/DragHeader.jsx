import React from 'react';
import { useSelector} from "react-redux";
import 'gridstack/dist/gridstack.min.css';
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/jq/gridstack-dd-jqueryui';

const DragHeader = () => {
    
    
    
    
    const userInfo = useSelector((state) => state.aboutMeReducer);

    const {headerBackground , headerImage, headerImagePosition} = useSelector(state=>state.customizedTemplateReducer)

     

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
            <div className="grid-stack-item" gs-w="4" gs-h='4'>
                <div className="grid-stack-item-content">
                    <div  style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box',
                        margin: "auto"}} 
                    />
                </div>
            </div>
            <div className="grid-stack-item" gs-w="6" gs-h='1'>
                <div className="grid-stack-item-content">{userInfo.firstName}{userInfo.secondName}</div>
            </div>
            <div className="grid-stack-item" gs-w="2" gs-h='2'>
                <div className="grid-stack-item-content">{userInfo.careerObjective}</div>
            </div>
        </div> 
    )
}

export default DragHeader;