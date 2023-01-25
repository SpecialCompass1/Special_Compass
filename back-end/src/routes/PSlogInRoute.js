import bcrypt from 'bcrypt';
const jwt = require("jsonwebtoken")



let schoolAdvisor = require('../model/schoolAdvisor');




export const PSlogInRoute = {
    path: '/api/pslogin',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        console.log("I am in the Log In controller");
        const SchoolAdvisor = await schoolAdvisor.findOne({email })
        console.log("beofre");
        if (!SchoolAdvisor) return res.sendStatus(401);
        console.log("I am afrrt")

        const { _id: id, passwordHash} = SchoolAdvisor;

        console.log(password,passwordHash);
        console.log(SchoolAdvisor);
        const isCorrect = await bcrypt.compare(password, SchoolAdvisor.password);

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