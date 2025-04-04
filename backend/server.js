const express=require("express")
const dbConnect=require("./config/dbConnection.js")
const userRouter=require("./routes/userRoutes.js")

const logger=require("./utils/loggingServices.js")

const app=express()

const PORT=5500

app.use(express.json())

dbConnect()
app.use("/api",userRouter)

app.listen(PORT,()=>{
    logger.logger.info(`server running successfully ${PORT}`);
})
