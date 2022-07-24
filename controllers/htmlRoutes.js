const router = require('express').Router()
const path = require('path')
const withAuth = require('../utils/auth')
// const bodyparser = require('body-parser')
// const urlencodedParses = bodyparser.urlencoded({ extended: false })

// router.use(bodyparser.json())
// router.use(bodyparser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    res.render('partials/landingpage')
})

router.get('/adminLogin', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('applicants')
    }
    
    res.render('partials/adminLogin')
})

router.get('/logout', (req, res) => {
    
    if(req.session.loggedIn) {
        req.session.destroy()
        res.redirect('adminLogin')
    }
})

router.get('/createAdmin', (req, res) => {
    res.render('partials/createAdmin')
})
module.exports = router