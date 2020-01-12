const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
});

console.log('gerou o schema');

module.exports = mongoose.model('User', UserSchema);