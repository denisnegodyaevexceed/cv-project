import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import DragItem from './DragItem';
const DragBody = () => {
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

    React.useEffect(() => {
    let options = {
        disableOneColumnMode: true,
        float: false,
    };
    GridStack.init(options, ".grid-stack-body");
    }, []);

    return (
        <div className="grid-stack grid-stack-body">
            <DragItem id={4} gsh={4} gsw={4} renderContent={
                <span>
                    <div className="">
                        <div className="">TECH STACK</div>
                        <div className="">
                            {frontend.length > 0 && <div className="h4-1">Frontend</div>}
                            <div>
                                {frontend.map((item, index) => {
                                return <div key={index}>{item.title}</div>;
                                })}
                            </div>
                        <div className="">
                            <div>
                            {backend.length > 0 && <div className="h4-1">Backend</div>}
                            <div>
                                {backend.map((item, index) => {
                                return <div key={index}>{item.title}</div>;
                                })}
                            </div>
                            </div>
                        </div>
                        <div className="">
                            {dbs.length > 0 && <div className="h4-1">DBS</div>}
                            <div>
                                {dbs.map((item, index) => {
                                return <div key={index}>{item.title}</div>;
                                })}
                            </div>
                        </div>
                        <div className="">
                            {other.length > 0 && <div className="h4-1">Other</div>}
                            <div>
                                {other.map((item, index) => {
                                return <div key={index}>{item.title}</div>;
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                </span>} 
            />
            <DragItem id={5} gsh={4} gsw={4} renderContent={
                <span>
                    {userInfo.education && (
                        <>
                        <div className="">EDUCATION</div>
                        <div className="">{userInfo.education}</div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={6} gsh={4} gsw={4} renderContent={
                <span>
                    {userInfo.aboutMeInfo && (
                        <>
                        <div className="">PERSONAL PROFILE</div>
                        <div className="">{userInfo.aboutMeInfo}</div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={7} gsh={4} gsw={4} renderContent={
                <span>
                    {((firstCompany && firstPosition && firstDescription) ||
                        (secondCompany && secondPosition && secondDescription)) && (
                        <>
                        <div className="">
                            WORK HISTORY
                        </div>
                        <div className="">
                            <div className="">
                            {firstCompany}
                            </div>
                            <div className="">
                            {firstPosition}
                            </div>
                            <div className="">
                            {firstDescription}
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            {secondCompany}
                            </div>
                            <div className="">
                            {secondPosition}
                            </div>
                            <div className="">
                            {secondDescription}
                            </div>
                        </div>
                        </>
                    )}
                </span>} 
            />
            <DragItem id={8} gsh={4} gsw={4} renderContent={
                <span>
                    <>
                        <div className=''>CONTACTS</div>
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



// <div className="grid-stack-item" gs-w="2" gs-h="2">
// <div className="grid-stack-item-content">

// </div>
// </div>
// <div className="grid-stack-item" gs-w="2" gs-h="2">
// <div className="grid-stack-item-content">

// </div>
// </div>
// <div className="grid-stack-item" gs-w="2" gs-h="2">
// <div className="grid-stack-item-content">
  
// </div>
// </div>
// <div className="grid-stack-item" gs-w="2" gs-h="2">
// <div className="grid-stack-item-content">
  
// </div>
// </div>
// <div className="grid-stack-item" gs-w="2" gs-h="2">
// <div className="grid-stack-item-content">

// </div>
// </div>