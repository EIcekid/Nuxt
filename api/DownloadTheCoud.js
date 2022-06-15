var ibm = require('ibm-cos-sdk'), fs = require('fs');

var config = {
    endpoint: 's3.au-syd.cloud-object-storage.appdomain.cloud',
    apiKeyId: 'oNCydoDLjWrAD1U-Emq-w_koNQZfZ4dt374VCXRdGKru',
    ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
    serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/c148b388585a4a22831d72e6be4fae50:63beb06c-9c0a-480d-83bc-6fd2bc5b4132:bucket:gc-audio-dev',
};

var cos = new ibm.S3(config)
const dir = '/Users/liwenfeng/Desktop/testdl/1.wav'

function downloadTheCoud(bucketName,itemName, dir) {
    // const bucketName = "gc-audio-dev"
    console.log(`Retrieving item from bucket: ${bucketName}, key: ${itemName}`);
    return cos.getObject({
        Bucket: bucketName,
        Key: itemName
    }).promise()
        .then((data) => {
            if (data != null) {
                fs.writeFile(dir, data.Body, 'binary', (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
                // console.log('File Contents: ' + Buffer.from(data.Body).toString());
            }
        })
        .catch((e) => {
            console.error(`ERROR: ${e.code} - ${e.message}\n`);
        });
}

module.exports = downloadTheCoud