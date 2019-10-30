const file = require('./file')

var settings = {
    path: '',
    encoding: 'utf8',
    sync: false
}

module.exports.import = (options = settings) => {
    return file(Object.assign(settings, options))
}