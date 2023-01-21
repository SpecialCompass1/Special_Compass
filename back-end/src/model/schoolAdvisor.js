let mongoose = require("mongoose")

let SchoolAdModel = mongoose.Schema({
    email: String,
    password: String,
    role: String,
    PSEmployeeID: String,
    collegeName: String,
    fullName:String
},{
    collection:"schoolAdvisor"
})

module.exports = mongoose.model("SchoolAdvisor",SchoolAdModel)