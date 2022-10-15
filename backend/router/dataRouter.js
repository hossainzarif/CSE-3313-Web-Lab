const express = require('express')
const { convertCurrency } = require('../controller/currencyController')
const { getData } = require('../controller/dataController')

const router = express.Router()

router.get('/cloth', getData)
router.post('/currency', convertCurrency)

module.exports = router
