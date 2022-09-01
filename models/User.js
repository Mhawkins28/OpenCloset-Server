const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    //will add passport options later 
})

//will add bcrypt and salt rounds 

const User = mongoose.model("User", UserSchema);

module.exports = User;