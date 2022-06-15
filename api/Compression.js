const path = require('path')
const JSZIP = require('jszip')
const fs = require('fs')

const zip = new JSZIP()

function compression(dir,fileName){
    pushZip(zip, path.resolve(__dirname, dir))
    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: {
            level: 9
        }
    }).then(function (content) {
        fs.writeFile(path.resolve(__dirname, dir + '/' + fileName + '.zip'), content, err => {
            if (err) throw err
        })
    })
    
    function pushZip(floder, pPath) {
        const files = fs.readdirSync(pPath, { withFileTypes: true });
        files.forEach((dirent, index) => {
            let filePath = `${pPath}/${dirent.name}`
            if (dirent.isDirectory()) {
                let zipFloder = zip.folder(filePath.replace(`${__dirname}\\prod/`, ''))
                pushZip(zipFloder, filePath)
            } else {
                floder.file(dirent.name, fs.readFileSync(filePath))
            }
        })
    }
}

module.exports = compression