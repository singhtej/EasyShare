var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var Users = require('./routes/users')
var UserExp = require('./routes/UserExp')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/easyShare'

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("EasyShare connected"))
    .catch(err => console.log(err))



app.use('/user', Users)
app.use('/user',UserExp)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})