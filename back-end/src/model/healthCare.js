let mongoose = require("mongoose")

let HealthCareModel = mongoose.Schema({
    email: String,
    password: String,
role: String,
HCProfessionalID: String,
FullName: String,
OfficeName: String
},{
    collection:"HCregister"
})

module.exports = mongoose.model("HCregister",HealthCareModel)