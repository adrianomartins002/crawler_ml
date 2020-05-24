import Logger from '../Logger';

const logger = new Logger();

export function winstonLoggerMiddleware(req, res, next) {
  req.logger = logger;
  next();
}
