
const jwt = require('jsonwebtoken');
const Student = require("../model/student")
var bcrypt = require("bcryptjs");
const keysecret = process.env.JWT_SECRET;




const authenticate = async(req,res,next) => {
    try {
        const token = req.headers.authotization;
        console.log(token)

        const verifytoken = jwt.verify(token, keysecret);
        console.log(verifytoken);

        const rootUser = await Student.findOne({_id:verifytoken._id})

        console.log(rootUser);

        if(!rootUser) {
            throw new Error("user not found")
        }

        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();
   
    } catch (error) {
        return res.status(401).json({status:401, message:"Unauthorized User"})
    }

}

module.export = authenticate;
