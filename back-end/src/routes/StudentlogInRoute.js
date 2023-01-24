import bcrypt from 'bcrypt';
const jwt = require("jsonwebtoken")



let Student  = require("../model/student")




export const StudentlogInRoute = {
    path: '/api/studentlogin',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        console.log("I am in the Log In controller");
        const user = await Student.findOne({email })
        console.log("beofre");
        if (!user) return res.sendStatus(401);
        console.log("I am afrrt")

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