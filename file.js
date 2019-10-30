const fs = require('fs')

module.exports = (opts) => {
    var module = {}

    if(fs.existsSync(opts.path)) {
        module.read = (callback) => {
            if(opts.sync) {
                fs.readFileSync(opts.path, opts.encoding, (err, data) => {
                    callback(JSON.parse(data), err)
                })
            } else {
                fs.readFile(opts.path, opts.encoding, (err, data) => {
                    callback(JSON.parse(data), err)
                })
            }
        }
    
        module.write = (obj = {}, callback = null) => {
            if(opts.sync) {
                fs.writeFileSync(opts.path, JSON.stringify(obj), opts.encoding, (err) => {
                    if(err) callback(err)
                })
            } else {
                fs.writeFile(opts.path, JSON.stringify(obj), opts.encoding, (err) => {
                    if(err) callback(err)
                })
            }
        }
    
        module.add = (obj, callback = null) => {
            if(opts.sync) {
                fs.readFileSync(opts.path, opts.encoding, (err, data) => {
                    if(err) callback(err)
                    var json = JSON.parse(data)
                    Object.keys(obj).forEach((key) => {
                       json[key] = obj[key]
                    })
                    fs.writeFileSync(opts.path, JSON.stringify(json), opts.encoding, (err) => {
                        if(err) callback(err)
                    })
                })
            } else {
                fs.readFile(opts.path, opts.encoding, (err, data) => {
                    if(err) callback(err)
                    var json = JSON.parse(data)
                    Object.keys(obj).forEach((key) => {
                       json[key] = obj[key]
                    })
                    fs.writeFile(opts.path, JSON.stringify(json), opts.encoding, (err) => {
                        if(err) callback(err)
                    })
                })
            }
        }
    
        module.remove = (keys, callback = null) => {
            if(opts.sync) {
                fs.readFileSync(opts.path, opts.encoding, (err, data) => {
                    if(err) callback(err)
                    var json = JSON.parse(data)
                    keys.forEach((key) => {
                        delete json[key]
                    })
                    fs.writeFileSync(opts.path, JSON.stringify(json), opts.encoding, (err) => {
                        if(err) callback(err)
                    })
                })
            } else {
                fs.readFile(opts.path, opts.encoding, (err, data) => {
                    if(err) callback(err)
                    var json = JSON.parse(data)
                    keys.forEach((key) => {
                        delete json[key]
                    })
                    fs.writeFile(opts.path, JSON.stringify(json), opts.encoding, (err) => {
                        if(err) callback(err)
                    })
                })
            }
        }
    
        module.deleteAll = (callback = null) => {
            fs.writeFile(opts.path, '', opts.encoding, (err) => {
                if(err) callback(err)
            })
        }
    } else {
        showError(`The file ${opts.path} does not exist !`)
    }

    return module
}

function showError(msg) {
    console.log('\x1b[31m', 'ERROR', '\x1b[0m', msg)
}