const platformClient = require('purecloud-platform-client-v2')

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);

const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"

var conversationId=[]

async function cId(interval) {
        await client.loginClientCredentialsGrant(clientId, clientSecret)

        let body = {
            "interval": interval
        }
        let apiInstance = new platformClient.AnalyticsApi();
        const res = await apiInstance.postAnalyticsConversationsDetailsQuery(body)

        let i = 0
        for (i in res.conversations) {
            conversationId[i] = res.conversations[i].conversationId
        }
        console.log(conversationId)
        return conversationId
}

module.exports = cId