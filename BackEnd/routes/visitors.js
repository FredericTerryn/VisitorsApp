// router.[verb]([path],[function])
var express = require('express');
var router = express.Router();
var repository = require('../data/repository'); 

//REST-routes WITH EXPRESS:
router.get('/', findAll); 
router.get('/:id', findById); 
router.post('/', addVisitor);
router.put('/:id', function(req, res){});
router.delete('/:id', deleteVisitor); 

//implementation of requests
function findAll(req, res){
    let visitors = repository.getAllVisitors(); 

    //if there's a request in request, return visitors based on query. 
    let qstring = req.query.q && req.query.q.toLowerCase(); 
    if(qstring){
        visitors = visitors.filter((v) => {
            return v.name.toLowerCase().search(qstring) > -1 || v.company.toLowerCase().search(qstring) > -1; 
        }); 
    }
    res.json(visitors);     
}

function findById(req, res){
    var visitor = repository.getVisitorById(req.params.id);
    if (visitor === undefined || visitor === null)
        res.status(404).json({ 'error': 'not found: visitor with id ' + req.params.id});
    else 
        res.status(200).json(visitor);
}

function addVisitor(req, res){
    var visitor = req.body; 
    
    //TODO MAKE SURE NO DOUBLE ENTRIES on name
    var duplicateEntry = (repository.getVisitorById(req.params.id))
    if (duplicateEntry)
        res.status(409).json({ 'error': 'duplicate entry' });
    else {
        var insertedVisitor = repository.insertVisitor(visitor); 
        res.location('/visitors/' + insertedVisitor.id); 
        res.status(201).json(insertedVisitor); 
    }
}

function deleteVisitor(req, res) {
    var visitor = repository.getVisitorById(req.params.id);
    if (visitor === undefined || visitor === null)
        res.status(404).json({ 'error': 'not found: visitor with id ' + req.params.id});
    else {
        repository.deleteVisitor(visitor.id);
        res.status(200).json(visitor.id);
    }
}

module.exports = router; 