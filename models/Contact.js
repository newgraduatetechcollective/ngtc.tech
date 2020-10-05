var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    collection: "contact_submissions"
});

module.exports = mongoose.model('Contact', contactSchema);