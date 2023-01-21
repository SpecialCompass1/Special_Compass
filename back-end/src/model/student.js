let mongoose = require("mongoose")

let studentModel = mongoose.Schema({
    email: String,
    password: String,
    role:String,
    studentID: String,
    fullName: String,
    collegeName: String
},{
    collection:"studentRegister"
})

module.exports = mongoose.model("studentRegister",studentModel)