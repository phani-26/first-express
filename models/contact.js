// same instance of mongoose is called at multiple files
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true
    }

});

//model name or colletion name when importingit will capitalized first letter
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;