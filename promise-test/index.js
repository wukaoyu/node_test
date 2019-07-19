const fs = require("fs");
const path = require("path");

// function getFileContent(fileName, callback) {
//     const fullFileName = path.resolve(__dirname, "files", fileName);
//     fs.readFile(fullFileName, (error, data) => {
//         if (error) {
//             console.error(error);
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }

// getFileContent("a.json",aData => {
//     console.log("aData:", aData);
//     getFileContent(aData.next, bData =>  {
//         console.log("bData:", bData);
//         getFileContent(bData.next, cData => {
//             console.log("cData", cData)
//         })
//     })
// })

function getFileContent(fileName){
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, "files", fileName);
            fs.readFile(fullFileName, (error, data) => {
                if (error) {
                    reject(error);
                    return
                }
                resolve(
                    JSON.parse(data.toString())
                )
            })
    })
    return promise
}

getFileContent("a.json").then(aData => {
    console.log("a data", aData);
    return getFileContent(aData.next);
}).then(bData => {
    console.log("b data", bData);
    return getFileContent(bData.next);
}).then(cData => {
    console.log("c data", cData);
})