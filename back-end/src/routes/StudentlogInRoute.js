import bcrypt from 'bcrypt';
import { Router } from 'express';
const jwt = require("jsonwebtoken")





let Student  = require("../model/student")




export const StudentlogInRoute = {
    path: '/api/studentlogin',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
       
        const user = await Student.findOne({email })
       
        if (!user) return res.sendStatus(401);
       

        const { _id: id, passwordHash} = user;

        console.log(password,passwordHash);
        console.log(user);
        const isCorrect = await bcrypt.compare(password, user.password);

        if (isCorrect) {
            jwt.sign({id, email, }, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {

            if (err) {
               return res.status(500).json(err);
            }

            return res.status(200).json({ token});
            

            });
        }else {
           return res.sendStatus(401);
        }

    }
    
}

