global.hl = '.'   // prefix Bayu Botz

global.owner = ['6289525518325','6289525518325']
global.mods = ['6289525518325']
global.APIs = {
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  tobz: 'https://tobz-api.herokuapp.com',
  vinz: 'https://api.zeks.xyz',
  arugaz: 'https://arugaz.herokuapp.com',
  melodic: 'http://api-melodicxt-2.herokuapp.com',
  wpics: 'https://waifu.pics',
  nopal: 'https://naufalhoster.xyz',
  dhyzx: 'https://dhyzx-free-api.herokuapp.com',
  lol: 'http://lolhuman.herokuapp.com',
  h404: 'https://h4ck3rs404-api.herokuapp.com',
  pcode: 'https://pencarikode.xyz',
  vhtear: 'https://api.vhtear.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  apiflash: 'https://api.apiflash.com',
  public_restapi: 'http://public-restapi.herokuapp.com',
  lindow: 'https://lindow-api.herokuapp.com',
  neo: 'http://neoxr-api.herokuapp.com'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'hairullana',
  'https://pencarikode.xyz': 'APIKEY',
  'http://neoxr-api.herokuapp.com': 'yntks'
}

// Sticker WM
global.packname = 'BAYUOFC'
global.author = 'BAYUBOTZ'

global.wait = '_Sedang diproses . . ._'
global.error = '_Fitur Error !_'
global.ltm = '❏ Instagram*\nhttps://youtube.com/channel/UCWiOXqGm9mPfPWlDntbMVdQ'

// global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
