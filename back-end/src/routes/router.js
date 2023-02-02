const express = require("express");
const router = new express.Router();
var bcrypt = require("bcryptjs");
const Student = require("../model/student")
const authenticate = require("../middleware/authenticate")
const nodemailer = require("nodemailer");

const jwt  = require("jsonwebtoken");

//email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kprajapati290603@gmail.com",
        pass:"izjbowgzhavetxyg"


    }
})
/*
router.get("/validuser", authenticate, async(req,res)=>{
    try {
        const validUserOne = await Student.findOne({_id:req.userId})
        res.status(200).json({status:200, validUserOne});
    } catch (error) {
        res.status(401).json({status:401, error});
    }
})
*/
export const ForgotPasswordRoute = {
    path: '/api/sendpasswordlink',
    method: 'post',
 
   
    handler: async (req, res) => {
        
            console.log(req.body)
        
        
            const {email} = req.body;
        
            if(!email){
               return res.status(401).json({status:401, message:"Enter Your Email"})
            }
        
            try {
                const student_ = await Student.findOne({email:email});
        
                console.log("userfind", student_)
                //token generTE FOR RESET PASSS
                const token = jwt.sign({_id: student_._id}, process.env.JWT_SECRET, 
                    {
                        expiresIn:"1d"
                    }
        
                 );
                 console.log("token", token)
        
                 const setUsertoken = await Student.findByIdAndUpdate({_id:student_._id},{verifytoken:token},{new:true});
                 console.log("setUsertoken", setUsertoken);
        
                 if(setUsertoken){
                    const mailOptions = {
                        from: "Special Compass",
                        to: email,
                        subject: "Sending Email for password reset",
                        text: `This Link is valid for 2 minutes http://localhost:3000/forgotpassword/${student_.id}/${setUsertoken.verifytoken}`
                    }
        
                    transporter.sendMail(mailOptions,(error,info)=>{
                        if(error){
                            console.log("error", error);
                            return res.status(401).json({status:401, message:"email not sent"})
                        }else{
                            console.log("Email sent", info.response);
                           return res.status(200).json({status:200, message:"Email sent successfully"})
                        }
                    })
                 }
                
            } catch (error) {
               return  res.status(401).json({status:401, message:"invalid user"})
            }
        
   
    },
  
    
}


/*
//send email link for reset password
router.post("/sendpasswordlink", async(req,res)=> {
    console.log(req.body)


    const {email} = req.body;

    if(!email){
       return res.status(401).json({status:401, message:"Enter Your Email"})
    }

    try {
        const student_ = await Student.findOne({email:email});

        console.log("userfind", student_)
        //token generTE FOR RESET PASSS
        const token = jwt.sign({_id: student_._id}, process.env.JWT_SECRET, 
            {
                expiresIn:"1d"
            }

         );
         console.log("token", token)

         const setUsertoken = await Student.findByIdAndUpdate({_id:student_._id},{verifytoken:token},{new:true});
         console.log("setUsertoken", setUsertoken);

         if(setUsertoken){
            const mailOptions = {
                from: "kprajapati290603@gmail.com",
                to: email,
                subject: "Sending Email for password reset",
                text: `This Link is valid for 2 minutes http://localhost:3000/forgotpassword/${student_.id}/${setUsertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error", error);
                    return res.status(401).json({status:401, message:"email not sent"})
                }else{
                    console.log("Email sent", info.response);
                   return res.status(200).json({status:200, message:"Email sent successfully"})
                }
            })
         }
        
    } catch (error) {
       return  res.status(401).json({status:401, message:"invalid user"})
    }
});
*/

export const validUser = {
    path: '/validuser',
    method: 'get',
    handler: async (req, res) => {
        
        
            try {
                
                const ValidUserOne = await Student.findOne({_id:req.userId});
                res.status(201).json({status:201,ValidUserOne});
            } catch (error) {
                res.status(401).json({status:401,error});
            }
        
    


}  
}
/*
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});
*/

//verify user forgot pass
export const PasswordResetRoute = {
    path: '/api/forgotpassword/:id/:token',
    method: 'get',
    handler: async (req, res) => {
        
          
    const {id, token} = req.params;
   

    try {
       const validuser = await Student.findOne({_id:id, verifytoken:token}) 
      
       const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
   
       if(validuser && verifyToken._id){
       
       
        res.status(200).json({status:200, validuser})
     
       }else{
        res.status(401).json({status:401,message: "user not exist"})
       }
    } catch (error) {
        res.status(401).json({status:401,error})
    }


}  
}

/*
router.get("/forgotpassword/:id/:token", async(req,res)=>{
    const {id, token} = req.params;
    console.log(id,token);

    try {
       const validuser = await Student.findOne({_id:id, verifytoken:token}) 

       const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

       if(validuser && verifyToken._id){
        res.status(200).json({status:200, validuser})

       }else{
        res.status(401).json({status:401,message: "user not exist"})
       }
    } catch (error) {
        res.status(401).json({status:401,error})
    }
});
*/
//change password
export const ChangePasswordRoute = {
    path: `/api/:id/:token`,
    method: 'post',
    handler: async (req, res) => {
        
            const{id, token} = req.params;
        
            const {password} = req.body;
            //const {email} = req.body;
        
            try {
                //const student_ = await Student.findOne({email:email});
               
                const validuser = await Student.findOne({_id:id, verifytoken:token}) 
                console.log(validuser)
                const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
               
                console.log(verifyToken)
               
                if(validuser && verifyToken._id){
                   
                   const newpassword = await bcrypt.hash(password, 10);
                  
                   const setnewuserpass = await Student.findByIdAndUpdate({_id:id, password:newpassword});
        
                   setnewuserpass.save();
                   
                   return res.status(200).json({status:200,setnewuserpass})
                   }else{
                   return res.status(401).json({status:401,message: "user not exist"})
                   }
                
            } catch (error) {
                console.log("k");
             return res.status(401).json({status:401,error})
            
            }
        
          
    }
}

/*
router.post("/:id/:token", async(req, res)=>{
    const{id, token} = req.params;

    const {passwordValue} = req.body;

    try {
        const validuser = await Student.findOne({_id:id, verifytoken:token}) 

        const verifyToken = jwt.verify(token,  process.env.JWT_SECRET);

        if(validuser && verifyToken._id){
           const newpassword = await bcrypt.hash(passwordValue, 10) ;
           const setnewuserpass= await Student.findById({_id:id}, {passwordValue:newpassword});

           setnewuserpass.save();

           res.status(200).json({status:200,setnewuserpass})
           }else{
            res.status(401).json({status:401,message: "user not exist"})
           }
        
    } catch (error) {
        res.status(401).json({status:401,error})
    
    }
})
*/
//module.exports= router;
