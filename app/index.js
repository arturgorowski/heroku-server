//require('babel-core/register')
require('babel-register')({
    presets: [ 'env' ]
})
module.exports = require('./app')