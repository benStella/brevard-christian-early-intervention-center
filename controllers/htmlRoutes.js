const router = require('express').Router()
const path = require('path')
// const bodyparser = require('body-parser')
// const urlencodedParses = bodyparser.urlencoded({ extended: false })

// router.use(bodyparser.json())
// router.use(bodyparser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    res.render('landingpage')
})

router.get('/adminLogin', (req, res) => {
    res.render('adminLogin')
})

router.get('/createAdmin', (req, res) => {
    res.render('createAdmin')
})
module.exports = router