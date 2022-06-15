const platformClient = require('purecloud-platform-client-v2')
const fs = require("fs").promises;
const create = require('./Create')
const compression = require('./Compression')
const fr = require('./FR')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);
const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"
const bucketName = "gc-audio-dev"

// let rid1 = 'd2d21d70-0875-4a75-89ac-c6ef1babba2e'
// let cid1 = '24e5f52d-42a8-4ba4-9c91-62dfd8a5ffd9'
let dir = '/Users/liwenfeng/Desktop/testdl'

async function uploader() {
    // let allfile = await fr(dir)
    // let i = 0
    // console.log(allfile)
    // for (i in allfile) {
    //     let buff = await fs.readFile(dir + '/' + allfile[i], "utf-8")
    //         .then((date) => {
    //             let cre = create(bucketName, i + '.wav', date)
    //         })
    // }
    let fileName = 0
    await fs.readFile(dir + '/' + fileName + '.zip', "utf-8")
        .then((date) => {
            create(bucketName, fileName + '.zip', date)
        })
}

module.exports = uploader