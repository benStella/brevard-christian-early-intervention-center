const router = require('express').Router()
const path = require('path')
const withAuth = require('../utils/auth')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const sequelize = require('../config/connection')
const { applicantInformation } = require('../models')



router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

router.get('/', withAuth, (req, res) => {
    applicantInformation.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name'
        ]

    }).then(applicantInfo => {
        const applicants = applicantInfo.map(info => info.get({ plain: true }))
        res.render('partials/applicants', { applicants } )
    }).catch(err => console.log(err))
})

module.exports = router