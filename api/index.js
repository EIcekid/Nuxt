const express = require('express')
const { Pool, Client } = require('pg')
const app = express()
const compression = require('./Compression')
const downloadToLocal = require('./DownloadToLocal')
const uploader = require('./Uploader')
const downloadTheCoud = require('./DownloadTheCoud')

let dir = '/Users/liwenfeng/Desktop/testdl'
const bucketName = "gc-audio-dev"

app.get('/', (req, res) => {
  res.json({ message: 'hello, api' })
})
app.get('/test', function (req, res) {
  res.json({ message: 'hello, test' })
});

// pool connection
app.get('/AllStaff', function (req, res) {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
  })
  pool.query('SELECT * FROM accounts', (error, result) => {
    console.log(result)
    res.json({ message: result.rows })
    // end when you want
    //pool.end()
  })
});

// client connection
var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
})

client.connect();

var query = 'SELECT * FROM roles'

app.get('/a', (req, res) => {

  client.query(query, (error, result) => {
    console.log(result);
    res.json({ message: result.rows })
    // end when you want
    //client.end();
  });
});

app.get('/dtl',(req,res)=>{
  downloadToLocal(req.query.interval)
  console.log('DownloadToLocal')
})
app.get('/comp',(req,res)=>{
  compression(dir, '0')
  console.log('Compression')
})

app.get('/ul',(req,res)=>{
  console.log('Uploader')
  uploader()
})

app.get('/dtc',(req,res)=>{
  downloadTheCoud(bucketName, '0.zip', dir + '/1.zip')
  console.log('DownloadTheCoud')
})


module.exports = {
  path: '/api',
  handler: app
}
