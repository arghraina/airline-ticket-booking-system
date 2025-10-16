// We have installed npm winston, which is used to store the logs of the errors... 

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})  // This will export all the logs into one file.
    ]
});

module.exports = logger;