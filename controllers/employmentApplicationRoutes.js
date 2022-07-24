const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const sequelize = require('sequelize')
const { applicantInformation } = require('../models')


router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))


router.get('/employmentApplication', (req, res) => {
    res.render('partials/employmentApplication')
})

router.post('/employmentApplication', [
    check(['fName', 'mInitial', 'lName'])
    .isAlpha()
    .toLowerCase()
    
    // check('address')
    // .matches(/^[A-Za-z0-9 .,'!&]+$/)
    // .withMessage('Server rejected home address'),

    // check('city')
    // .isAlpha()
    // .toLowerCase()
    // .withMessage('Server rejected city'),

    // check('state')
    // .isAlpha()
    // .toLowerCase()
    // .withMessage('Server rejected state'),

    // check('zipCode')
    // .isPostalCode('US')
    // .withMessage('Server rejected zip code'),

    // check('country')
    // .isAlpha()
    // .withMessage('Server rejected country'),

    // check('email')
    // .isEmail()
    // .withMessage('Server rejected email'),

    // check('phone')
    // .isMobilePhone()
    // .withMessage('Server rejected phone number'),

    // check('citizenOfUs')
    // .isIn(['Yes', 'No'])
    // .withMessage('Server rejected yes/no if citizen of US'),

    // check('workedForCompany')
    // .isIn(['Yes', 'No'])
    // .withMessage('Server rejected "Have you ever worked for this company?"'),

    // check('convicted-of-felony')
    // .isIn(['Yes', 'No'])
    // .withMessage('Server rejected yes/no if conviced of felony'),

    // check('felony-if-yes')
    // .matches(/^[A-Za-z0-9 .,'!&]+$||^$/)
    // .withMessage('Server rejected "if convicted of felony, explain"'),

    // check('felony-if-no')
    // .isIn(['Yes', 'No'])
    // .withMessage('Server rejected "if no, are you authorized to work in the US"'),

    // check('if-authorized-to-work')
    // .matches(/^[A-Za-z0-9 .,'!&]+$||^$/)
    // .withMessage('Server rejected "If yes, when?"')
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.render('serverRejection')
    }

    applicantInformation.create({
        first_name: req.body.fName,
        last_name: req.body.lName,
        middle_initial: req.body.mInitial,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zipCode,
        country: req.body.country,
        email: req.body.email,
        phone_number: req.body.phone,
        citizen_US: req.body.citizenUS,
        worked_for_this_company: req.body.workedForThisCompany,
        convicted_of_felony: req.body.convictedOfFelony,
        felony_if_yes: req.body.felonyIfYes,
        felony_if_no: req.body.felonyIfNo,
        if_authorized_to_work: req.body.ifAuthorizedToWork

    }).then(res.render('partials/employeeSubmission', { 
        serverErrors: !errors.isEmpty()
    }))
    .catch(err => console.log(err))
})

module.exports = router