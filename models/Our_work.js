var mongoose = require('mongoose');

var ourWorkSchema = new mongoose.Schema({
    project_name: {
        type: String
    },
    description: {
        type: String
    },
    branding: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
}, {
    collection: "our_works"
});

module.exports = mongoose.model('OurWork', ourWorkSchema);