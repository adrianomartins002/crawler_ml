import winston from 'winston';
import { dateFormat } from './app/utils/date';

class Logger {
  constructor() {
    this.log_data = null
    this.routeName = null
    this.logger = null
    const logger = process.env.NODE_ENV == 'production' ? winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${new Date()}.log`
        })
      ],
      format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message} | `
        message = info.obj ? message + `data:${JSON.stringify(info.obj)} | ` : message
        message = this.routeName ? message + `route:${this.routeName} |` : message
        message = this.log_data ? message + `log_data:${JSON.stringify(this.log_data)} | ` : message
        return message
      })
    }) : { log: (name, message) => console.log(name, message) };
    this.logger = logger
    // }
  }
  setRoute(route) {
    this.routeName = route
  }
  setLogData(log_data) {
    this.log_data = log_data
  }
  async info(message) {
    this.logger.log('info', message);
  }
  async info(message, obj) {
    this.logger.log('info', message, {
      obj
    })
  }
  async debug(message) {
    this.logger.log('debug', message);
  }
  async debug(message, obj) {
    this.logger.log('debug', message, {
      obj
    })
  }
  async error(message) {
    this.logger.log('error', message);
  }
  async error(message, obj) {
    this.logger.log('error', message, {
      obj
    })
  }
}

export default Logger;