import * as React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import './Template3Styles.css'


const Template3 = () => {
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

    return (
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
                    <div className='template3'>
                        <div className='template3__firstPage' style={{ backgroundColor: '#E7E5DA' }}>
                            <div className='template3__leftColumn' >
                                <div className='template3__avatar' style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 190,
                        height: 250,
                        margin: "auto"}}></div>
                                <div className='template3__technicalSkills'>
                                    <div className='title'>TECHNICAL SKILLS</div>
                                    <div className='template3__frontend template3__skills'>
                                        <div >
                                            {(frontend.length > 0) && <div className='h4-1'>Frontend</div>}
                                            <div>{frontend.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                    </div>
                                    <div className='template3__backend template3__skills'>
                                        <div>
                                            {(backend.length > 0) && <div className='h4-1'>Backend</div>}
                                            <div>{backend.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                    </div>
                                    <div className='template3__dbs template3__skills'>
                                        <div>
                                            {(dbs.length > 0) && <div className='h4-1'>DBS</div>}
                                            <div>{dbs.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                    </div>
                                    <div className='template3__other template3__skills'>
                                        <div>
                                            {(other.length > 0) && <div className='h4-1'>Other</div>}
                                            <div>{other.map((item, index) => {
                                                return <div key={index}>{item.title}</div>
                                            })}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='template3__languages'>
                                    <div className='template3__languages_header title'>LANGUAGES</div>
                                    <div className='template3__languages_item'>English/Spanish/Italian</div>
                                </div>
                                <div className='template3__contactDetails'>
                                    <div className='template3__contactDetails_header title'>CONTACT DETAILS</div>
                                    <div className='template3__contacts'>Email: {userInfo.email}</div>
                                    {userInfo.skype && <div className='template3__contacts'>Skype: {userInfo.skype}</div>}
                                    {userInfo.github && <div className='template3__contacts'>Github: {userInfo.github}</div>}
                                    {userInfo.facebook && <div className='template3__contacts'>Facebook: {userInfo.facebook}</div>}
                                    {userInfo.phoneNumber && <div className='template3__contacts'>Phone number: {userInfo.phoneNumber}</div>}
                                    {userInfo.vkontakte && <div className='template3__contacts'>Vkontante: {userInfo.vkontakte}</div>}
                                </div>
                            </div>
                            <div className='template3__rightColumn'>
                                <div className='template3__header'>
                                    <div className='template3__fullName'><div>{userInfo.firstName.toUpperCase()}</div><div>{userInfo.secondName.toUpperCase()}</div></div>
                                    <div className='template3__position'>{userInfo.careerObjective.toUpperCase()}</div>
                                </div>
                                <div className='template3__info'>
                                    <div className='template3__description'>
                                        <div className='template3__description_header title' >DESCRIPTION</div>
                                        <div className='template3__description_item'>
                                            {userInfo.aboutMeInfo}
                                        </div>
                                    </div>
                                    {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&&<div className='template3__workHistory'>
                                        <div className='template3__workHistory_header title'>WORK HISTORY</div>
                                        <div className='template3__workHistory_item'>
                                            <div className='template3__workHistory_title'>
                                                {firstCompany}
                                            </div>
                                            <div className='template3_workHistory_position'>{firstPosition}</div>
                                            <div className='template3__workHistory_description'>
                                               {firstDescription}
                                            </div>
                                        </div>
                                        <div className='template3__workHistory_item'>
                                            <div className='template3__workHistory_title'>
                                                {secondCompany}
                                            </div>
                                            <div className='template3_workHistory_position'>{secondPosition}</div>
                                            <div className='template3__workHistory_description'>
                                                {secondDescription}
                                            </div>
                                        </div>
                                    </div>}
                                    {userInfo.education && <div className='template3__education'>
                                        <div className='template3__education_header title'>
                                            EDUCATION
                                        </div>
                                        <div>{userInfo.education}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        {isHavePortfolio &&<div className='template3__secondPage page-break'>
                            <div className='template3__secondPage_header title'>PORTFOLIO</div>
                            <div className='template3__projects'>
                                {projects.map((item, index)=>{
                                    let {name, link, summary, whatYouDo, stack} = item
                                    return(name && summary && whatYouDo && stack && <div key={index}className='template3__project'>
                                        <div className='template3__project_title title'>{name.toUpperCase()}</div>
                                        {link && <div className='template3__project_link '>{link}</div>}
                                        <div className='template3__project_summary'>
                                        <div>Summary:</div>
                                        {summary}
                                        </div>
                                        <div className='template3__project_whatYouDo'>
                                        <div>What i did here</div>
                                        {whatYouDo}

                                    </div>
                                        <div className='template3__project_stack'>
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


export default Template3