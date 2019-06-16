const express = require("express")
const usersexpense = express.Router()
const cors = require("cors")
const User = require('../models/User')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const UserExp = require("../models/UserExp")
usersexpense.use(cors())

process.env.SECRET_KEY = 'secret'

usersexpense.post('/expense', (req, res) => {
    const today = new Date()
    const expData = {
        createdBy: req.body.createdBy,
        withWhom: req.body.withWhom,
        expName: req.body.expName,
        expAmount: req.body.expAmount,
        expDes: req.body.expDes,
        created: today
    }

    UserExp.create(expData)

    User.findOneAndUpdate({ "email":expData.createdBy},{ $inc: { "youGet":expData.expAmount/2,"expAmount":expData.expAmount}})

    .then((user)=>{
    })
    User.findOneAndUpdate({ "email":expData.withWhom},{ $inc: { "youOwe":expData.expAmount/2}})
    .then((user)=>{

    })
    res.json("Expense Added")

})


usersexpense.get("/expenselist/:email", async (request, response) => {
    try {
        var expenselist = await UserExp.find({createdBy:request.params.email}).exec();
        // response.send(result);
        response.json({expenselist})
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = usersexpense