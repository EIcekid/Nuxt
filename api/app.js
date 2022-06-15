const http = require('http');
const url = require('url')
const querystring = require('querystring');
const fs = require('fs');
const compression = require('./Compression')
const downloadToLocal = require('./DownloadToLocal')
const uploader = require('./Uploader')
const downloadTheCoud = require('./DownloadTheCoud')

let dir = '/Users/liwenfeng/Desktop/testdl'
const bucketName = "gc-audio-dev"
let users = {}

function server() {
    let server = http.createServer((req, res) => {
        //get
        let { pathname, query } = url.parse(req.url, true);

        //post
        let str = ''
        req.on('data', data => {
            str += data
        })
        req.on('end', () => {
            console.log(str)
            if (str == 'DownloadToLocal') {
                downloadToLocal()
                console.log('DownloadToLocal')
            } else if (str == 'Compression') {
                compression(dir, '0')
                console.log('Compression')
            } else if (str == 'Uploader') {
                uploader()
                console.log('Uploader')
            } else {
                downloadTheCoud(bucketName, '0.zip', dir + '/1.zip')
                console.log('DownloadTheCoud')
            }
        })
    })

    server.listen(8181)
}

module.exports = server