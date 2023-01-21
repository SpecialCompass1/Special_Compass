
import bcrypt from 'bcrypt';
//import { jwt } from "jsonwebtoken";

const jwt = require("jsonwebtoken");

let Student = require("../model/student");


export const StudentsignUpRoute = {
    path: '/api/studentsignup',
    method: 'post',
    handler: async (req, res) => {
       // const {email, password, studentID} = req.body;
         
       console.log("I am in the signup API");
        const {email,password,role,studentID,fullName,collegeName} = req.body;

        if(password.length<8){
            res.status(400).send({
                errorMessage:"Passwword length should bee greater or wyak ad "
            })
        }

        const student_ = await Student.findOne({email});

        if(student_) {
            res.status(400).send({
                errorMessage:"Email Already Exist!"
            })
        }

        const passwordHash = await bcrypt.hash(password,  10);

        //
            const result = await Student.create({
                email:email, 
                password:passwordHash,
                role:role,
              studentID: studentID,
              fullName:fullName,
              collegeName:collegeName
            });
        
        const { insertedId } = result;
       
        jwt.sign({
            id: insertedId,
            email: email,
            //info: startingInfo,
            //isVerified:false,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err,  token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({student_:result,accessToken:token});
        } );

    } 
}