const { log } = require("winston")
const User=require("../models/UserModel.js")
const logger=require("../utils/loggingServices.js")

const authLogger=logger.getLoggerModule("AuthModule")

const userControllers={
    register:async(req,res)=>{
        try {
            const {username,email,password}=req.body
            const user=await User.findOne({email})
            if(user){
                logger.logger.error("user is already exists" )
                return res.status(400).json({
                    message:"user is already exists"
                })
            }
            const newUser=new User({
                username:username,
                email:email,
                password:password
            })
            await newUser.save()
            res.status(200).json({
                message:"user register successfully",
                newUser
            })
            logger.logger.info("user register successful")
        } catch (error) {
            logger.logger.error("internal server error",error)
        }
    },

    login:async(req,res)=>{
        try {
            const {email ,password}=req.body
            const user=await User.findOne({email})
            if(!user || !password){       
               (await authLogger).error("provide valid email or password")
               return res.status(400).json({
                message:"provide valid email or password"
               })
            }
            (await authLogger).info("user Login Successful")
            res.status(200).json({
                message:"user Login successful",
                user
            })

        } catch (error) {
            (await authLogger).error("internal server error",error)
        }
    }
}

module.exports=userControllers