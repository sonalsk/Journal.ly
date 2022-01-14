// REQUIRING PACKAGES
const express   = require('express'),
      router    = express.Router();

const Journal   = require('../models/journal');

// ROOT ROUTE
router.get('/', (req, res) => {
    res.redirect('/journal');
});

// INDEX ROUTE
router.get('/journal', (req, res) => {
    // GET ALL JOURNALS
    Journal.find({}, function(err, journals) {
        if (err) {
            console.log(err);
        } else {
            // SEND TO INDEX
            res.render('index', {journals: journals})
        }
    });
});

// NEW ROUTE
router.get('/journal/new', (req, res) => {
    res.render('new');
});

// CREATE ROUTE
router.post('/journal', (req, res) => {
    // CREATE A NEW JOURNAL
    Journal.create(req.body.journal, function(err, newJournal) {
        if (err) {
            console.log(err);
        }
    });
    // SEND TO INDEX PAGE
    res.redirect('/journal');
});

// SHOW ROUTE
router.get('/journal/:id', (req, res) => {
    // FIND THE JOURNAL
    Journal.findById(req.params.id, function(err, foundJournal) {
        if (err) {
            console.log(err);
        } else {
            // SEND TO SHOW PAGE
            res.render('show', {journal: foundJournal});
        }
    });
});

// EDIT ROUTE
router.get('/journal/:id/edit', (req, res) => {
    // FIND THE JOURNAL
    Journal.findById(req.params.id, function(err, foundJournal) {
        if (err) {
            console.log(err);
        } else {
            // SEND TO EDIT PAGE
            res.render('edit', {journal: foundJournal});
        }
    });
});

// UPDATE ROUTE
router.put('/journal/:id', (req, res) => {
    // FIND THE JOURNAL AND UPDATE
    Journal.findByIdAndUpdate(req.params.id, req.body.journal, function(err, updatedJournal) {
        if (err) {
            console.log(err);
        }
    });
    // SEND TO SHOW PAGE
    res.redirect('/journal/' + req.params.id);
});

// DESTROY ROUTE
router.delete('/journal/:id', (req, res) => {
    // FIND THE JOURNAL AND DELETE
    Journal.findByIdAndDelete(req.params.id, function(err) {
        if (err) {
            console.log(err);
        }
    });
    // SEND TO INDEX PAGE
    res.redirect('/journal');
});

module.exports = router;