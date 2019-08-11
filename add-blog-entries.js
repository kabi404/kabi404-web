/*
------------------------------------------------------
------------------ USEFULL METHODS -------------------
------------------------------------------------------
*/

const createDirectoryIfNotExist = path => {
  const fs = require('fs')
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

const saveJsonData = (path, fileName, object) => {
  const fs = require('fs')
  const dir = path + fileName + '.json'
  const jsonData = JSON.stringify(object)
  fs.writeFile(dir, jsonData, function (err) {
    if (err) {
      console.log(err)
    }
  })
}

const deleteRecursiveSync = function (path) {
  const fs = require('fs')
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteRecursiveSync(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

const copyRecursiveSync = function (src, dest) {
  const fs = require('fs')
  const path = require('path')
  var exists = fs.existsSync(src)
  var stats = exists && fs.statSync(src)
  var isDirectory = exists && stats.isDirectory()
  if (exists && isDirectory) {
    fs.mkdirSync(dest)
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
        path.join(dest, childItemName))
    })
  } else {
    fs.linkSync(src, dest)
  }
}

/*
------------------------------------------------------
---------------------- CONST -------------------------
------------------------------------------------------
*/

const PRODUCTION_PATH = './dist'
const BASE_PATH = PRODUCTION_PATH + '/blog/'
const DATA_PATH = './static/blog/'

/*
------------------------------------------------------
----------------------- MAIN -------------------------
------------------------------------------------------
*/

deleteRecursiveSync(BASE_PATH)
createDirectoryIfNotExist(PRODUCTION_PATH)

copyRecursiveSync(DATA_PATH, BASE_PATH)
