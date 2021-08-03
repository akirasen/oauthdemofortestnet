'use strict'
// edit by llb

const express = require('express')

let route = express.Router()

const apiCtrl = require('../controllers/apiController.js')

// 请求
route.get('/v99/api/hello', apiCtrl.hello)
route.get('/v99/api/getuserstatus', apiCtrl.getuserstatus)

module.exports = route