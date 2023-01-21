
import bcrypt from 'bcrypt';
//import { Jwt } from "jsonwebtoken";
const jwt = require("jsonwebtoken");

let schoolAdvisor = require('../model/schoolAdvisor')
export const PSsignUpRoute = {
    path: '/api/pssignup',
    method: 'post',
    handler: async (req, res) => {

        console.log("I am in the signup API");
        const {email, password, role, PSEmployeeID, collegeName, FullName} = req.body;
    
        if(password.length<8){
            res.status(400).send({
                errorMessage:"Passwword length should be greater or equal to 8 "
            })
        }

      
        const Advisor = await schoolAdvisor.findOne({email});
        if(Advisor) {
            res.status(400).send({
                errorMessage:"Email Already Exist!"
            })
        }

        const passwordHash = await bcrypt.hash(password,  10);

       

        const result = await schoolAdvisor.create({
           email: email,
           password: passwordHash,
           role:role,
           PSEmployeeID: PSEmployeeID,
           collegeName: collegeName,
           fullName:FullName
            //info: startingInfo,
           // isVerified: false,
        });

        
        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email: email,
            //info: startingInfo,
           // isVerified:false,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err,  token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({Advisor:result,accessToken:token});
        } );

    } 
}