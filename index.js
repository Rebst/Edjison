const file = require('./file')
const path = require('path')

var settings = {
    path: '',
    encoding: 'utf8',
    sync: false
}

module.exports.import = (options = settings) => {
    var params = Object.assign(settings, options)
    params.path = path.join(arguments[1].main.path, params.path)
    return file(params)
}