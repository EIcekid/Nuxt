const platformClient = require('purecloud-platform-client-v2')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);
const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"

var all = []

async function rId(cid) {
    await client.loginClientCredentialsGrant(clientId, clientSecret)

    let RecordingApi = new platformClient.RecordingApi();
    let opts = {
        "maxWaitMs": 5000,
        "formatId": "WAV",
        "mediaFormats": ["WAV"]
    }
    do {
        const res = await RecordingApi.getConversationRecordings(cid, opts)
        try {
            all['rid'] = res[0].id
            all['cid'] = res[0].conversationId
        } catch {
            console.log(cid)
        }

    }
    while (all == 'undefined')
    return all
}
module.exports = rId