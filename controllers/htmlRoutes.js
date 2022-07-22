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
    if(req.session.loggedIn) {
        res.redirect('applicantInfo')
    }
    
    res.render('adminLogin')
})

router.get('/logout', (req, res) => {
    
    if(req.session.loggedIn) {
        req.session.destroy()
        res.redirect('adminLogin')
        // res.status(404).end()
    }
})

router.get('/createAdmin', (req, res) => {
    res.render('createAdmin')
})
module.exports = router