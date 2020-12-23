import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import "../grid.scss"
import DragItem from './DragItem';

const DragBody = ({
    styleTitle,
    styleSubTitle,
    styleText,
    styleSmallText
}) => {
    const {
        firstCompany,
        firstPosition,
        firstDescription,
        secondCompany,
        secondPosition,
        secondDescription,
    } = useSelector((state) => state.aboutWorkHistoryReducer);
    const { frontend, backend, dbs, other } = useSelector((state) => state.aboutHardSkillsReducer);
    
    const userInfo = useSelector((state) => state.aboutMeReducer);
    const {bodyBackground,bodyImage, bodyImagePosition, matrixBlock} = useSelector(state=>state.customizedTemplateReducer)

    const backgroundControll = bodyImage? bodyImagePosition === 'cover' ? {backgroundImage: `url(${bodyImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'}:{backgroundImage: `url(${bodyImage})`, backgroundRepeat: "repeat",}:{backgroundColor: `${bodyBackground}`}

    // React.useEffect(() => {
    //     let options = {
    //         disableOneColumnMode: true,
    //         float: false,
    //         cellHeight: 5,
    // };
    // GridStack.init(options, ".grid-stack-body");
    // }, []);

    return (
        <div className="grid-stack grid-stack-body" style={backgroundControll} gs-current-row={0} id='gridBody'>
            <DragItem id={4}  gsh={matrixBlock[3].h} gsw={matrixBlock[3].w} gsx={matrixBlock[3].x} gsy={matrixBlock[3].y} renderContent={
                <span>
                    <div className="">
                        <div className="" style={styleTitle}>TECH STACK</div>
                        <div className="">
                            {frontend?.length > 0 && <div  style={styleSubTitle}>Frontend</div>}
                            
                            <div className="mar-bot"> 
                                {frontend.map((item, index) => {
                                return<div  style={styleText} key={index}>{item.title}</div>;

                                })}
                                </div>
                                
                        <div className="mar-bot">
                            <div>
                            {backend?.length > 0 && <div className="" style={styleSubTitle}>Backend</div>}
                            <div>
                                {backend.map((item, index) => {
                                return <div style={styleText} key={index}>{item.title}</div>;
                                })}
                            </div>
                            </div>
                        </div>
                        <div className="mar-bot">
                            {dbs?.length > 0 && <div className="" style={styleSubTitle}>DBS</div>}
                            <div>
                                {dbs.map((item, index) => {
                                return <div style={styleText} key={index}>{item.title}</div>;
                                })}
                            </div>
                        </div>
                        <div className="">
                            {other?.length > 0 && <div className="" style={styleSubTitle}>Other</div>}
                            <div>
                                {other.map((item, index) => {
                                return <div style={styleText} key={index}>{item.title}</div>;
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                </span>} 
            />
            <DragItem id={5}  gsh={matrixBlock[4].h} gsw={matrixBlock[4].w} gsx={matrixBlock[4].x} gsy={matrixBlock[4].y} renderContent={
                <span>
                    {userInfo.education && (
                        <>
                        <div className="" style={styleTitle}>EDUCATION</div>
                        <div className=""style={styleText}>{userInfo.education}</div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={6}  gsh={matrixBlock[5].h} gsw={matrixBlock[5].w} gsx={matrixBlock[5].x} gsy={matrixBlock[5].y} renderContent={
                <span>
                    {userInfo.aboutMeInfo && (
                        <>
                        <div className="" style={styleTitle}>PERSONAL PROFILE</div>
                        <div className=""style={styleText}  >{userInfo.aboutMeInfo}</div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={7}  gsh={matrixBlock[6].h} gsw={matrixBlock[6].w} gsx={matrixBlock[6].x} gsy={matrixBlock[6].y} renderContent={
                <span>
                    {((firstCompany && firstPosition && firstDescription) ||
                        (secondCompany && secondPosition && secondDescription)) && (
                        <>
                        <div className="" style={styleTitle}>
                            WORK HISTORY
                        </div>
                        <div className="mar-bot">
                            <div className="mar-bot" style={styleSubTitle}>
                            {firstCompany}
                            </div>
                            <div className="mar-bot" style={styleSubTitle}>
                            {firstPosition}
                            </div>
                            <div className="mar-bot" style={styleText}>
                            {firstDescription}
                            </div>
                        </div>
                        <div className="mar-bot">
                            <div className="mar-bot" style={styleSubTitle}>
                            {secondCompany}
                            </div>
                            <div className="mar-bot" style={styleSubTitle}>
                            {secondPosition}
                            </div>
                            <div className="" style={styleText}>
                            {secondDescription}
                            </div>
                        </div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={8}  gsh={matrixBlock[7].h} gsw={matrixBlock[7].w} gsx={matrixBlock[7].x} gsy={matrixBlock[7].y} renderContent={
                <span style={styleSmallText}>
                    <>
                        <div className='' style={styleTitle}>CONTACTS</div>
                        <div>Email: {userInfo.email}</div>
                        {userInfo.facebook && <div>Facebook: {userInfo.facebook}</div>}
                        {userInfo.skype && <div>Skype: {userInfo.skype}</div>}
                        {userInfo.github && <div>Github: {userInfo.github}</div>}
                        {userInfo.vkontakte && <div>Vkontakte: {userInfo.vkontakte}</div>}
                        {userInfo.phoneNumber && <div>Phone number: {userInfo.phoneNumber}</div>}
                    </>
                </span>}
            />
        </div>
    );
};

export default DragBody;