'use strict'

const spacebroClient = require('../')

var actionList = [
  {
    name: 'shoot',
    trigger: function (data) {
      console.log('shoot')
    }
  },
  {
    name: 'stop',
    trigger: function (data) {
      console.log('stop')
    }
  }
]

actionList.push({name: 'new-media'})
spacebroClient.iKnowMyMaster('127.0.0.1', 8888)
spacebroClient.registerToMaster(actionList, 'example-bro')

setInterval(function () {
  spacebroClient.emit('new-media', {data: 'foo'})
}, 2000)
