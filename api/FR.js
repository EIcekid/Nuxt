const fs = require("fs").promises;

/**
 * ファイルの内容を表示
 * @param {string} file ファイルパス
 */
const fr = async (file) => {
    const buff = await fs.readdir(file, function (err, files) {
        if (err) {
            console.log('Error', err)
        } else {
            allfile = files
            return files
        }
    }
    )
    return buff
}

// module.exports = fr
// 异步读取上级目录下的所有文件
// const fr = (file) => {
//     let allfile = []
//     fs.readdir(file, function (err, files) {
//         if (err) {
//             console.log('Error', err)
//         } else {
//             allfile = files
//             console.log('Result', files)
//         }
//     }
//     )
//     return allfile
// }
module.exports = fr