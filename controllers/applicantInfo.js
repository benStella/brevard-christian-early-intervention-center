const router = require('express').Router()
const path = require('path')
const withAuth = require('../utils/auth')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const sequelize = require('../config/connection')
const { applicantInformation, applicantEducation } = require('../models')



router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

router.get('/', withAuth, (req, res) => {
    applicantInformation.findAll({
        attributes: [
            'createdAt',
            'first_name',
            'last_name',
            'middle_initial',
            'address',
            'city',
            'state',
            'zip_code',
            'country',
            'email',
            'phone_number',
            'citizen_US',
            'worked_for_this_company',
            'convicted_of_felony',
            'felony_explanation',
            'felony_if_no',
            'if_authorized_to_work'
        ]

    }).then(applicantInfo => {
        const applicants = applicantInfo.map(info => info.get({ plain: true }))
        res.render('partials/applicants', { applicants } )
    }).catch(err => console.log(err))
})

module.exports = router