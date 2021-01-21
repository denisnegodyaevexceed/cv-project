const isHavePortfolio = (firstProject, secondProject, thirdProject, fourthProject) => {  

    console.log(firstProject, 'first project')

    const hasPortfolio = (firstProject.name &&
      firstProject.link &&
      firstProject.summary &&
      firstProject.whatYouDo &&
      firstProject.stack) ||
    (secondProject.name &&
      secondProject.link &&
      secondProject.summary &&
      secondProject.whatYouDo &&
      secondProject.stack) ||
    (thirdProject.name &&
      thirdProject.link &&
      thirdProject.summary &&
      thirdProject.whatYouDo &&
      thirdProject.stack) ||
    (fourthProject.name &&
      fourthProject.link &&
      fourthProject.summary &&
      fourthProject.whatYouDo &&
      fourthProject.stack);
        return hasPortfolio
    
    }

    export default isHavePortfolio
