const Router = require('express').Router();
const { equal } = require('assert');
const ResUser = require('../models/responsible.model');

Router.route('/').get((req,res) =>{
    ResUser.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))
})

Router.route('/add').post((req,res) => {
    let newUser = new ResUser({name:req.body.name})
    newUser.save()
    .then(() => res.json('New responsible user added'))
    .catch(err => res.status(400).json(err))
})

module.exports = Router;