const fs = require('fs')
const path = require('path')
const json5 = require('json5')
const Mock = require('mockjs')
let json = fs.readFileSync(path.join(__dirname, './gawdatasInfo.json5'), 'utf-8');
// console.log(json)
// console.log(json5.parse(json))
console.log(Mock.mock({'list|10':json}))
