const app = require('express')();

app.get('/hello', (req, res) => {

res.send('Hello World!')

})
export default function() {
    console.log("阿道夫")
}

module.exports = {

path: 'api',

handler: app

}