const platformClient = require('purecloud-platform-client-v2')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);
const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"

var all = []
async function url(recordingId,conversationId){

    let i = ''
    await client.loginClientCredentialsGrant(clientId, clientSecret)

    let opts = {
        "formatId": "WAV",
        "emailFormatId": "NONE",
        "chatFormatId": "NONE",
        "messageFormatId": "NONE",
        "download": true,
        "fileName": i,
        "locale": "",
        "mediaFormats": ["WAV"]
    }
    let RecordingApi = new platformClient.RecordingApi();
    let geturl = await  RecordingApi.getConversationRecording(conversationId, recordingId, opts)
    i++
    return geturl
}
module.exports = url