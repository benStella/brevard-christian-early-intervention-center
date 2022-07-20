const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const { AdminAccount } = require('../models')


router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))





router.post('/', (req, res) => {
    AdminAccount.create({
        email: req.body.createUsername,
        password: req.body.createPassword
    })
    .then(dbAdminLoginData => res.json(dbAdminLoginData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})



module.exports = router