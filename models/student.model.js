const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    address: {
        type: String
    },
    age: {
        type: String
    },
    degreeProgram: {
        type: String
    },
    goalInLife: {
        type: String
    }
});

mongoose.model('Student', studentSchema);