const platformClient = require('purecloud-platform-client-v2')
const displayFile = require('./fs');
const createTextFile = require('./Create')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);

const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"
let dir = '/Users/liwenfeng/Desktop/testdl'
let fileName = '0.wav'
async function fup(fileName,result) {
    await client.loginClientCredentialsGrant(clientId, clientSecret)

    const bucketName = "gc-audio-dev"
    try {
        await createTextFile(bucketName, fileName + '.wav', result)
    } catch (e) {
        console.log(e)
    }

}
module.exports = fup