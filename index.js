'use strict';

// insert custom modules here
const config = require('./config');
const database = require('./database');
const response = require('./response');

// insert node modules here
const request = require('request');

exports.handler = async (event, context, callback) => {
  try {
    const testFunctionResponse = await testFunction();

    response.success(callback, response.status.SUCCESS, testFunctionResponse);
  } catch (e) {
    console.log(e);
    response.error(callback, response.status.INTERNAL_SERVER_ERROR, e.message);
  }
}

const testFunction = () => {
  return new Promise((resolve, reject) => {
    request({
      url: 'http://www.mocky.io/v2/5baa06313000005c00a681b0',
      method: 'GET',
      json: true
    }, (err, response, body) => {
      if (err) {
        reject(err);
      }

      resolve(body);
    });
  });
}