#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const boxen = require('boxen')
const yargs = require('yargs');
const axios = require('axios');

// instantiate http client with custom config
const http = axios.create({
   baseURL: 'https://api.macaddress.io',
   timeout: 1000,
   headers: {'X-Authentication-Token': 'at_7Cbi6na69pR8kzMdrleg2bxJGrRbH'}
});

// instaniate command line arguments
const options = yargs
   .usage('Usage: -a <mac address>')
   .option('a', { alias: 'address', describe: 'Mac Address', type: 'string', demandOption: true })
   .argv;

// visual formatting for command line
const boxenOptions = {
   padding: 1,
   margin: 1,
   borderStyle: 'round',
   borderColor: 'yellow',
};

console.log('Searching the MacAddress.io database for a match...');

// Perform lookup with macaddress.io API
http.get(`/v1?output=json&search=${options.address}`)
  .then(function (response) {
      // handle success
      const result = response.data.vendorDetails.companyName;
      // apply visual formatting to result
      const formattedResult = `Mac address ${chalk.white.bold(options.address)} is assigned to company ${chalk.white.bold(result)}`;
      const messageBox = boxen(formattedResult, boxenOptions);
      // output result
      console.log(messageBox);
  })
  .catch(function (error) {
      // handle error
      console.log(error);
  });

