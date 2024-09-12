const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {type : String , required : true , minlength : 4 , maxlength : 30},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true , minlength : 8 , maxlength:20}
})
const user = mongoose.model('User' , userSchema);
module.exports = user;