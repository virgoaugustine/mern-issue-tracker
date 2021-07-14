const Issue = require('../models/issue.model');
const Router = require('express').Router();


// Get all Issues
Router.route('/').get((req,res) => {
    Issue.find()
    .then(issues => res.json(issues))
    .catch(err => res.status(400).json(err))
})

//Get an issue by ID
Router.route('/:id').get((req,res) => {
    Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(err => res.status(400).json(err))
})

//Add an issue
Router.route('/add').post((req,res) => {
    let newIssue = new Issue({
        title: req.body.title,
        responsible: req.body.responsible,
        description: req.body.description,
        severity:req.body.severity,
        date_closed:Date.parse(req.body.date_closed)
    })
    newIssue.save()
    .then(() => res.json('Issue added'))
    .catch(err => res.status(400).json(err))
})
//update an issue
Router.route('/update/:id').post((req,res) =>{
    Issue.findById(req.params.id)
    .then(issue => {
        issue.title = req.body.title,
        issue.responsible = req.body.responsible,
        issue.description = req.body.description,
        issue.severity = req.body.severity,
        issue.date_closed = Date.parse(req.body.date_closed)
        issue.status = req.body.status

        issue.save()
        .then(() => res.json('Issue updated'))
        .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

//Delete an Issue
Router.route('/:id').delete((req,res) =>{
    Issue.findByIdAndDelete(req.params.id)
    .then(() => res.json('Issue deleted'))
    .catch(err => res.status(400).json(err))
})

module.exports = Router;