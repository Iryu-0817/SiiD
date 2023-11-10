const addAndLog = (array) => {

    for( let i = 0; i < array.length; i++) {
        for( let j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
} 

addAndLog(["A","B","C"]);
addAndLog(["A","B","C", "D"]);
addAndLog(["A","B","C", "D", "E"]);