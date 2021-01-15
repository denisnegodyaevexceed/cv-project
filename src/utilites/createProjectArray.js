const createProjectsArray = (object) => {
    let arr = []
    for(let obj in object){
        arr.push(object[obj])
    }
    return arr
}

export default createProjectsArray