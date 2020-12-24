import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import DragItem from './DragItem';

const DragPortfolio = ({
  styleTitle,
  styleSubTitle,
  styleText,
  styleSmallText
}) => {
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
  const {bodyBackground,bodyImage, bodyImagePosition, matrixBlock} = useSelector(state=>state.customizedTemplateReducer)


  const backgroundControll = bodyImage? bodyImagePosition === 'cover' ? {backgroundImage: `url(${bodyImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'}:{backgroundImage: `url(${bodyImage})`, backgroundRepeat: "repeat",}:{backgroundColor: `${bodyBackground}`}

    // let superCorrectMatrix = [].concat(matrixBlock)

    return (
        <div className="grid-stack grid-stack-page2 page-break grid-stack-portfolio " style={backgroundControll}>
            
            {
            projects.map((item, index) => {
                let {name, link, summary, whatYouDo, stack, id} = item
                let newMatrix = [...matrixBlock];
                let f = newMatrix.find(itemq => +itemq.id === +id+8)
                return ( name && summary && whatYouDo && stack && 
                    <DragItem type='portfolio' key={index} id={id + 8} gsh={f?.h} gsw={f?.w} gsx={f?.x} gsy={f?.y} renderContent={
                        <span>
                            <div>
                                <div className="mar-bot" style={styleTitle} >{name.toUpperCase()+' - '+link}</div>
                                <div className="mar-bot">
                                    <div style={styleSubTitle}>Summary:</div> 
                                    <span style={styleText}>{summary}</span>
                                </div>
                                <div className="mar-bot">
                                <div style={styleSubTitle}>What i did here: </div>
                                  <span style={styleText}>{whatYouDo}</span>
                                </div>
                                <div >
                                    <div style={styleSubTitle}>Stack:</div> 
                                    {stack.map((item, index)=>{
                                      return <span style={styleSmallText} key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
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