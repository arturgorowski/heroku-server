//require('babel-core/register')
require('@babel/core')({
    presets: [ 'env' ]
})
module.exports = require('./app')