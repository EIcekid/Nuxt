const fs = require("fs").promises;

/**
 * ファイルの内容を表示
 *
 * @param {string} file ファイルパス
 */ 
const displayFile = async (file) => {
    const buff = await fs.readFile(file, "utf-8");
    // console.log(buff);
    return buff
};

// 実行

module.exports = displayFile