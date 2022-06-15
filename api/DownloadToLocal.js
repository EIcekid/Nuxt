const platformClient = require('purecloud-platform-client-v2')
const dl = require('./Dl')
const url = require('./Url')
const rid = require('./RId')
const cid = require('./CId')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);
const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"
const bucketName = "gc-audio-dev"

// let rid1 = 'd2d21d70-0875-4a75-89ac-c6ef1babba2e'
// let cid1 = '24e5f52d-42a8-4ba4-9c91-62dfd8a5ffd9'
let name = 0
let dir = '/Users/liwenfeng/Desktop/testdl'
var interval = '2022-06-03T15:00:00.000Z/2022-06-10T15:00:00.000Z'

async function downloadToLocal(interval) {
    await client.loginClientCredentialsGrant(clientId, clientSecret)

    let conversationId = await cid(interval)

    for (name in conversationId) {
        let recordingId = await rid(conversationId[name])
        console.log(recordingId)
        await url(recordingId['rid'], recordingId['cid'])
            .then((url) => {
                try {
                    let dl1 = dl(url.mediaUris.S.mediaUri, name + '.wav', dir)
                } catch {
                    console.log(url)
                }
            })
    }
}

module.exports = downloadToLocal