/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs')

shell.exec('webpack-dev-server --env.dev --hot')
