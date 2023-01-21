
import bcrypt from 'bcrypt';
//import { jwt } from "jsonwebtoken";
const jwt = require("jsonwebtoken");
let HCregister = require('../model/healthCare')
export const HCsignUpRoute = {
    path: '/api/hcsignup',
    method: 'post',
    handler: async (req, res) => {
        const {email, password,role, HCProfessionalID, FullName, OfficeName} = req.body;


        
      
        if(password.length<8){
            res.status(400).send({
                errorMessage:"Passwword length should be greater or equal to 8 "
            })
        }

      
        const HCProfessional = await HCregister.findOne({email});

        if(HCProfessional) {
            res.status(400).send({
                errorMessage:"Email Already Exist!"
            })
        }


        const passwordHash = await bcrypt.hash(password,  10);



        

        const result = await HCregister.create({
           email: email,
           password: passwordHash,
           role:role,
           HCProfessionalID: HCProfessionalID,
           FullName: FullName,
           OfficeName:OfficeName
            //info: startingInfo,
            //isVerified: false,
        });

      
        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email:email,
           // info: startingInfo,
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
            res.status(200).json({HCProfessional:result,accessToken:token});
        } );

    } 
}