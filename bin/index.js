#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import inquirer from 'inquirer';
import express from 'express';

const app = express();
const port = 5000;

const askQuestion = async () => {
  // Displaying Geeks CLI
    figlet('ZKTeco CLI', function (err, data) {
        console.log(data);
    });
  const answers = await inquirer.prompt([
    {
        type: 'String',
        name: 'ip',
        message: 'ZKTeco Device IP Address?',
    },
    {
        type: 'number',
        name: 'port',
        message: 'ZKTeco Device Port?',
    },
    {
        type: 'String',
        name: 'api',
        message: 'what is your POST API?',
    },
    {
        type: 'number',
        name: 'interval',
        message: 'How often do you want to send data to your API?',
    },
  ])
  .then((answers) => {
    if (answers.ip && answers.port && answers.api && answers.interval) {
      interval(answers.interval);
      }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};
figlet('ZKTeco CLI', function (err, data) {
  console.log(data);
});
// askQuestion();

function interval (interval) {
    setInterval(() => {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();
    var currentSecond = now.getSeconds();
    console.log(currentHour + ":" + currentMinute + ":" + currentSecond);
  }, interval);
}
console.log(chalk.green('Server is running'));
interval(1000);