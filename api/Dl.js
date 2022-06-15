var fs = require("fs");
var path = require("path");
var request = require("request");

/**
 * 
 * @param {*} url  URL
 * @param {*} fileName 	名
 * @param {*} dir パス
 */
function getfileByUrl(url,fileName,dir){
        let stream = fs.createWriteStream(path.join(dir, fileName))
        request(url).pipe(stream).on("close", function (err) {})
}
module.exports = getfileByUrl