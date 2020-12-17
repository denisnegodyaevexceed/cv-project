import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import DragItem from './DragItem';

const DragPortfolio = () => {
  const {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);
  const { frontend, backend, dbs, other } = useSelector(
    (state) => state.aboutHardSkillsReducer
  );
  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  } = useSelector((state) => state.portfolioReducer);
  const projects = [
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  ];
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const {bodyBackground,bodyImage, bodyImagePosition} = useSelector(state=>state.customizedTemplateReducer)


  const backgroundControll = bodyImage? bodyImagePosition === 'cover' ? {backgroundImage: `url(${bodyImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'}:{backgroundImage: `url(${bodyImage})`, backgroundRepeat: "repeat",}:{backgroundColor: `${bodyBackground}`}


    React.useEffect(() => {
    let options = {
        disableOneColumnMode: true,
        float: false,
    };
    GridStack.init(options, ".grid-stack-page2");
    }, []);

    return (
        <div className="grid-stack grid-stack-page2 page-break " style={backgroundControll}>
            {projects.map((item, index) => {
                let {name, link, summary, whatYouDo, stack} = item
                return ( name && link && summary && whatYouDo && stack && 
                    <DragItem key={index} id={index + 9} gsh={4} gsw={12} renderContent={
                        <span>
                            <div className='' key={index}>
                                <div className=''>{name.toUpperCase()+' - '+link}</div>
                                <div className="">
                                    <div className=''>Summary:</div> 
                                    {summary}
                                </div>
                                <div className="">
                                <div className=''>What i did here: </div>
                                {whatYouDo}
                                </div>
                                <div className="">
                                    <div className=''>Stack:</div> 
                                    {stack.map((item, index)=>{
                                    return <span key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
                                    })}
                                </div>
                            </div>
                        </span>
                    }/>
            )})}
        </div>
    );
};

export default DragPortfolio;