const router = require('express').Router()
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const sequelize = require('../config/connection')
const { EmployeeApplicant } = require('../models')


router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    EmployeeApplicant.findAll({
        attributes: [
            'id',
            'first_name'
        ]

    }).then(applicantInfo => {
        const applicants = applicantInfo.map(info => info.get({ plain: true }))
        res.render('applicants', { applicants } )
    }).catch(err => console.log(err))
})


module.exports = router