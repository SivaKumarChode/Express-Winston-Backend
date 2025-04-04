const mongoose =require("mongoose")

const logger=require("../utils/loggingServices.js")

const connect=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Express-WinSton-Backend")
        logger.logger.info("dataBase connected successfully")
    } catch (error) {
        logger.logger.error("error",{error:error.message})
    }
}
module.exports=connect
