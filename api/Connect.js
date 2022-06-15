const platformClient = require('purecloud-platform-client-v2')
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.ap_northeast_1);
const clientId = "905bb84f-fbc1-49f7-a858-5dc50fc07560"
const clientSecret = "d_2e8FB2Mja5XI1Ce7ee1cWNahlBnKypvHi6X5UTj5g"

function connect() {
    try {
        client.loginClientCredentialsGrant(clientId, clientSecret)
        console.log("認証成功")
        return
    } catch (e) {
        console.log(e)
    }
}
connect()
module.exports = connect