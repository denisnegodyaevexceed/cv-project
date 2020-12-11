import * as React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import './Template5Styles.css'


const Template5 = () => {
    let pdfExportComponent;

    const userInfo = useSelector((state) => state.aboutMeReducer);

    const { firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription } = useSelector(state => state.aboutWorkHistoryReducer)

    const { frontend, backend, dbs, other } = useSelector(state => state.aboutHardSkillsReducer)

    const { firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject } = useSelector(state => state.portfolioReducer)

    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]

    const isHavePortfolio = ((firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack) ||
        (secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack) ||
        (thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack) ||
        (fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack))

    return(
        <div className='page'>
        <div className='container-pdf'>
            <div className="button">
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
                <Button
                    to="/steps"
                    component={Link}
                    variant="contained"
                    color="secondary">
                    Изменить
                </Button>
            </div>
            <PDFExport
                    forcePageBreak=".page-break"
                    ref={(component) => (pdfExportComponent = component)}
                // paperSize="A4"
                >
                    <div className='template5'>
                        <div className='template5__fistPage'>
                            <div className='template5__header'>
                                <div className='template5__avatar' style={{backgroundImage: `url('./user.png')`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 150,
                        height: 150,
                        }} >

                                </div>
                                <div className='template5__userInfo'>
                    <div className='template5__fullName'>{userInfo.firstName.toUpperCase() + ' ' + userInfo.secondName.toUpperCase()}</div>
                                    <div className='template5__posistion'>{userInfo.careerObjective.toUpperCase()}</div>
                                </div>
                            </div>
                            <div className='template5__body'>
                                <div className='template5__leftColumn'>
                                    <div className='template5__stack'>
                                        <div className='template5__stack_header template5__title'>
                                            TECH STACK
                                            </div>
                                        <div className='template5__stack_body'>
                                            <div className='template5__frontend'>
                                            <div >
                                            {(frontend.length > 0) && <div className='h4-1'>Frontend</div>}
                                            <div>{frontend.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                            </div>
                                            <div className='template5__backend'>
                                            <div>
                                            {(backend.length > 0) && <div className='h4-1'>Backend</div>}
                                            <div>{backend.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                            </div>
                                            <div className='template5__dbs'>
                                            <div>
                                            {(dbs.length > 0) && <div className='h4-1'>DBS</div>}
                                            <div>{dbs.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                            </div>
                                            <div className='template5__other'>
                                            <div>
                                            {(other.length > 0) && <div className='h4-1'>Other</div>}
                                            <div>{other.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                    {userInfo.education && <div className='template5__education'>
                                    <div className='template5__education_header template5__title'>
                                            EDUCATION
                                            </div>
                                            <div className='template5__education_body'>
                                           {userInfo.education}
                                            </div>
                                    </div>}
                                </div>
                                <div className='template5__rightColumn'>
                                    {userInfo.aboutMeInfo&&<div className='template5__personalProfile'>
                                    <div className='template5__personalProfile_header template5__title'>
                                        PERSONAL PROFILE
                                    </div>
                                    <div className='template5__personalProfile_body'>
                                    {userInfo.aboutMeInfo}
                                    </div>
                                </div>}
                                {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&&<div className='template5__workHistory'>
                                    <div className='template5__workHistory_header template5__title'>WORK HISTORY</div>
                                    <div className='template5__workPlace'>
                                        <div className='template5__workplace_company'>{firstCompany}</div>
                                        <div className='template5__workplace_position'>{firstPosition}</div>
                                        <div className='template5__workplace_description'>
                                            {firstDescription}</div>
                                    </div>
                                    <div className='template5__workPlace'>
                                        <div className='template5__workplace_company'>{secondCompany}</div>
                    <div className='template5__workplace_position'>{secondPosition}</div>
                                        <div className='template5__workplace_description'>
                                        {secondDescription}
                                        </div>
                                    </div>
                                </div>}
                                <div className='template5__conctacts'>
                                    <div className='template5__cotacts_header template5__title'>CONTACTS</div>
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
                       { isHavePortfolio && <div className='template5__secondPage page-break'>
                       <div className='template5__projects'>
                                {projects.map((item, index)=>{
                                    let {name, link, summary, whatYouDo, stack} = item
                                    return(name && summary && whatYouDo && stack && <div key={index}className='template5__project'>
                                        <div className='template5__project_title template5__title'>{name.toUpperCase()}{link && <div className='template5__project_link '>{link}</div>}</div>
                                        {link && <div className='template5__project_link '>{link}</div>}
                                        <div className='template5__project_summary'>
                                        <div>Summary:</div>
                                        {summary}
                                        </div>
                                        <div className='template5__project_whatYouDo'>
                                        <div>What i did here</div>
                                        {whatYouDo}

                                    </div>
                                        <div className='template5__project_stack'>
                                        {stack.map((item, index)=>{
                              return <span key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
                            })}
                                        </div>
                                    </div>

                                    )
                                })}
                                
                            </div>
                        </div>}
                    </div>
                </PDFExport>
            </div>
            </div>
    )
}


export default Template5