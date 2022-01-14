// REQUIRING PACKAGES
const mongoose = require('mongoose');

// CREATING SCHEMA
const journalSchema = new mongoose.Schema({
    summary: String,
    remember: String,
    grateful: String,
    image: String,
    mood: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// CREATING MODEL
module.exports = mongoose.model('journal', journalSchema);