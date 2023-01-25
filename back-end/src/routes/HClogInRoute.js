import bcrypt from 'bcrypt';
const jwt = require("jsonwebtoken")



let HCregister = require('../model/healthCare')




export const PSlogInRoute = {
    path: '/api/hclogin',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        console.log("I am in the Log In controller");
        const HCProfessional = await HCregister.findOne({email })
        console.log("beofre");
        if (!HCProfessional) return res.sendStatus(401);
        console.log("I am afrrt")

        const { _id: id, passwordHash} = HCProfessional;

        console.log(password,passwordHash);
        console.log(HCProfessional);
        const isCorrect = await bcrypt.compare(password, HCProfessional.password);

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