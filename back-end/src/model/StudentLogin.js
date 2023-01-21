let mongoose = require("mongoose")

let StudentlogIn = mongoose.Schema({
    email: String,
    password: String,
   
},{
    collection:"Student_Login"
})

module.exports = mongoose.model("Student_Login",StudentlogIn)