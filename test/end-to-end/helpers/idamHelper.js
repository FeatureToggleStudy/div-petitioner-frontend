'use strict';

const logger = require('log4js').getLogger();
const randomstring = require('randomstring');
const idamExpressTestHarness = require('@hmcts/div-idam-test-harness');

const idamConfigHelper = require('test/end-to-end/helpers/idamConfigHelper');
let args = idamConfigHelper.getArgs();
const CONF = require('config');
const parseBool = require('app/core/utils/parseBool');

let Helper = codecept_helper;

class IdamHelper extends Helper {

  _before() {
    if (parseBool(CONF.features.idam)) {
      const randomString = randomstring.generate({
        length: 16,
        charset: 'numeric'
      });
      const emailName = `hmcts.divorce.reform+pfe-automatedtest-${randomString}`;
      const testEmail = `${emailName}@gmail.com`;
      const testPassword = randomstring.generate(9);

      args.testEmail = testEmail;
      args.testPassword = testPassword;

      idamConfigHelper.setTestEmail(testEmail);
      idamConfigHelper.setTestPassword(testPassword);

      return idamExpressTestHarness.createUser(args, process.env.E2E_IDAM_PROXY)
        .then(() => {
          logger.info('Created IDAM test user: ' + testEmail);
          return;
        }).catch((err) => {
          logger.warn('Unable to create IDAM test user: ' + err);
          return;
        });
    }
  }

  _after() {
    if (parseBool(CONF.features.idam)) {
      return idamExpressTestHarness.removeUser(args, process.env.E2E_IDAM_PROXY)
        .then(() => {
          logger.info('Removed IDAM test user: ' + args.testEmail);
          return;
        }).catch((err) => {
          logger.warn('Unable to remove IDAM test user: ' + err);
          return;
        });
    }
  }
}

module.exports = IdamHelper;