const logger = require('../logger/logger');

class Listener {

    onTestBegin(test) {
        logger.info("##############################################");
        logger.info(`Starting test ${test.title}`);
    }

    onTestEnd(test, result) {
        logger.info(`Finished test ${test.title}: ${result.status}`);
        logger.info("##############################################");
    }
}

module.exports = Listener;