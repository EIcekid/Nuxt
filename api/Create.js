var ibm = require('ibm-cos-sdk');
var util = require('util');
var displayFile = require('./fs');


var config = {
    endpoint: 's3.au-syd.cloud-object-storage.appdomain.cloud',
    apiKeyId: 'oNCydoDLjWrAD1U-Emq-w_koNQZfZ4dt374VCXRdGKru',
    ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
    serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/c148b388585a4a22831d72e6be4fae50:63beb06c-9c0a-480d-83bc-6fd2bc5b4132:bucket:gc-audio-dev',
};

var cos = new ibm.S3(config);

async function create(bucketName, itemName, fileText) {
    console.log(`Creating new item: ${itemName}`);
    try {
        await cos.putObject({
            Bucket: bucketName,
            Key: itemName,
            Body: fileText
        }).promise();
        console.log(`Item: ${itemName} created!`);
    } catch (e) {
        console.error(`ERROR: ${e.code} - ${e.message}\n`);
    }
}
// displayFile("/Users/liwenfeng/Downloads/cos-cos-compatibility.json")
//     .then((result) => {
//         // console.log(result)
//         createTextFile(bname,"cos.json",result)
//     });
// console.log(txt)
// console.log(fs_1("/Users/liwenfeng/Downloads/cos-cos-compatibility.json"))

module.exports = create
