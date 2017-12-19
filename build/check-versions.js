const chalk = require('chalk')
const checkEngines = require('check-engines')

module.exports = function () {
  checkEngines(err => {
    if (err) {
      console.log(chalk.red(err))
      process.exit(1)
    }
  })
}
