const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const mysql = require('mysql2')



router.get('/childEnrollment', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/childEnrollment.html'))
})


module.exports = router