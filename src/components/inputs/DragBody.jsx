import React from "react";
import { useSelector } from "react-redux";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";

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
  const {bodyBackground} = useSelector(state=>state.customizedTemplateReducer)

  React.useEffect(() => {
    let options = {
      disableOneColumnMode: true,
      float: false,
    };
    GridStack.init(options, ".grid-stack-body");
  }, []);

  return (
    <div className="grid-stack grid-stack-body" style={{backgroundColor: `${bodyBackground}`}}>
      <div className="grid-stack-item" gs-w="2" gs-h="2">
        <div className="grid-stack-item-content">
          <div className="">
            <div className="">TECH STACK</div>
            <div className="">
              <div className="">
                <div>
                  {frontend.length > 0 && <div className="h4-1">Frontend</div>}
                  <div>
                    {frontend.map((item, index) => {
                      return <div key={index}>{item.title}</div>;
                    })}
                  </div>
                </div>
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
                <div>
                  {dbs.length > 0 && <div className="h4-1">DBS</div>}
                  <div>
                    {dbs.map((item, index) => {
                      return <div key={index}>{item.title}</div>;
                    })}
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  {other.length > 0 && <div className="h4-1">Other</div>}
                  <div>
                    {other.map((item, index) => {
                      return <div key={index}>{item.title}</div>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-stack-item" gs-w="2" gs-h="2">
        <div className="grid-stack-item-content">
          {userInfo.education && (
            <div className="">
              <div className="">EDUCATION</div>
              <div className="">{userInfo.education}</div>
            </div>
          )}
        </div>
      </div>
      <div className="grid-stack-item" gs-w="2" gs-h="2">
        <div className="grid-stack-item-content">
          {userInfo.aboutMeInfo && (
            <div className="">
              <div className="">PERSONAL PROFILE</div>
              <div className="">{userInfo.aboutMeInfo}</div>
            </div>
          )}
        </div>
      </div>
      <div className="grid-stack-item" gs-w="2" gs-h="2">
        <div className="grid-stack-item-content">
          {((firstCompany && firstPosition && firstDescription) ||
            (secondCompany && secondPosition && secondDescription)) && (
            <div className="">
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
            </div>
          )}
        </div>
      </div>
      <div className="grid-stack-item" gs-w="2" gs-h="2">
        <div className="grid-stack-item-content">
        <div className=''>
                                    <div className=''>CONTACTS</div>
                                        <div>Email: {userInfo.email}</div>
                                        {userInfo.facebook && <div>Facebook: {userInfo.facebook}</div>}
                                        {userInfo.skype && <div>Skype: {userInfo.skype}</div>}
                                        {userInfo.github && <div>Github: {userInfo.github}</div>}
                                        {userInfo.vkontakte && <div>Vkontakte: {userInfo.vkontakte}</div>}
                                        {userInfo.phoneNumber && <div>Phone number: {userInfo.phoneNumber}</div>}
                                </div>
        </div>
      </div>
    </div>
  );
};

export default DragBody;
