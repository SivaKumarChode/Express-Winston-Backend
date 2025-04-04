const winston=require("winston")

const logger=winston.createLogger({
    level:"silly",
    format:winston.format.combine(
        winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        winston.format.json()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"winston/logger.log"})
    ]
})

const getLoggerModule=async(moduleName)=>{
    return {
        error:(message,meta={})=>{
            logger.error(message,{...meta,module:moduleName})
        },
        warn:(message,meta={})=>{
            logger.warn(message,{...meta,module:moduleName})
        },
        info:(message,meta={})=>{
            logger.info(message,{...meta,module:moduleName})
        },
        debug:(message,meta={})=>{
            logger.debug(message,{...meta,module:moduleName})
        }
    }
}


module.exports={logger,getLoggerModule}