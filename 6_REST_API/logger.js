class Logger {
  error(message) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }

  info(message) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  warn(message) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  debug(message) {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }
}

const logger = new Logger();
export { logger };
