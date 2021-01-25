const express = require('express')
const app = express()

const port = 8080;
var cors = require('cors')
app.use(cors('*'))

const db = require('./db/db')
db.connectMongoose(app)

const helmet = require("helmet");
app.use(helmet())

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const cache = require('./middleware/cache')
const limiter = require('./settings/rate-limit')
app.use(limiter);

app.use(express.static(__dirname + '/public'));

app.get('/',cache.route(60), express.static(__dirname + '/public'))

app.listen(port, () => {
    console.log(`Express running on http://127.0.0.1:${port}`)
})
