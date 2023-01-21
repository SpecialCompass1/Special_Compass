import bcrypt from 'bcrypt';
import { jwt } from 'jsonwebtoken';


let Student_Login = require("../model/StudentLogin");


export const StudentlogInRoute = {
    path: '/api/studentlogin',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        const user = await Student_Login.findOne({email })

        if (!user) return res.sendStatus(401);

        const { _id: id, passwordHash} = user;

        const isCorrect = await bcrypt.compare(password, passwordHash);

        if (isCorrect) {
            jwt.sign({id, email, }, process.env.JWT_SECRET, { expiresIn: '2d'}, (err, token) => {

            if (err) {
                res.status(500).json(err);
            }

            res.status(200).json({ token});
            

            });
        }else {
            res.sendStatus(401);
        }
    }
}