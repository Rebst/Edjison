# Edjison

A simple NodeJs package to modify json files

[![version](https://img.shields.io/npm/v/edjison)](https://www.npmjs.com/package/edjison)
[![license](https://img.shields.io/npm/l/edjison)](https://github.com/Rebst/Edjison/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dt/edjison)](https://www.npmjs.com/package/edjison)


```javascript
const edjison = require('edjison')

const file = edjison.import({
    path: '/dir/file.json',
    encoding: 'utf8'
})

file.write({ test: 'ok' }, (err) => {
    if(err) throw err
})
```

## Installation

    npm i edjison

## API

### edjison.import([options])

This function allows you to import a .json file

```javascript
var file = edjison.import({
    path: '/dir/file.json',
    encoding: 'utf8',
    sync: true
})
```

#### Options
Type : `Object`

##### path
Type : `String`\
Default : ''

The path of your .json file

##### sync
Type : `Boolean`\
Default : `false`

When this option is set to true, the file will be read and written synchronously 

##### encoding
Type : `String`\
Default : `utf8`

The encoding of the file

___

### file.read(callback)

This function allows you to read the contents of the file

```javascript
file.read((data, err) => {
    if(err) throw err
    console.log(data)
})
```

The `callback` is given the two arguments, `(data, err)`

___

### file.write(obj, callback)

This function allows you to write to the file

```javascript
const data = {
    username: 'user',
    email: 'example@gmail.com'
}

file.write(data, (err) => {
    if(err) throw err
})
```

##### obj
Type : `Object`

The data to be written to the file

##### callback
Type : `function`

The `callback` is given the one argument, `(err)`. The `callback` is optional

___

### file.add(obj, callback)

This function allows you to add data to existing data

```javascript
file.add({ country: 'FR' }, (err) => {
    if(err) throw err
})
```

##### obj
Type : `Object`

The data to be added to the file

##### callback
Type : `function`

The `callback` is given the one argument, `(err)`. The `callback` is optional

___

### file.remove(keys, callback)

This function allows you to delete data

```javascript
file.remove(['country', 'email'], (err) => {
    if(err) throw err
})
```

##### keys
Type : `Array`

The keys to be deleted

##### callback
Type : `function`

The `callback` is given the one argument, `(err)`. The `callback` is optional

___

### file.deleteAll(callback)

This function deletes all data from the file

```javascript
file.deleteAll((err) => {
    if(err) throw err
})
```

The `callback` is given the one argument, `(err)`. The `callback` is optional

## License

MIT © [Rebst](https://github.com/Rebst)