const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/Facebook')

const userSchema = mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    tweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'tweet'
    }]
})

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema)