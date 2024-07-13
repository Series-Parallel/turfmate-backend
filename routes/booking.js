const express = require('express')
const router = express.Router()

const {getBookingDetails} = require('../controllers/booking')

router.route('/booking').post(getBookingDetails)

module.exports = router