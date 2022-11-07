const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const sequelize = require('sequelize')
const { applicantInformation } = require('../models')
const { ValidationError, ValidationErrorItem } = require('sequelize')
const { Error } = require('sequelize')


router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))


router.get('/employmentApplication', (req, res) => {
    res.render('partials/employmentApplication')
})

router.post('/employmentApplication', [
    check(['fName', 'mInitial', 'lName'])
    .isAlpha()
    .toLowerCase(),
    
    check('address')
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .toLowerCase(),

    check('city')
    .isAlpha()
    .toLowerCase(),

    check('state')
    .isAlpha()
    .toLowerCase(),

    check('zipCode')
    .isPostalCode('US'),

    check('country')
    .isAlpha()
    .toLowerCase(),

    check('email')
    .isEmail(),

    check('phone')
    .isMobilePhone(),

    check('citizenUS')
    .isIn(['true', 'false']),

    check('workedForThisCompany')
    .isIn(['true', 'false']),

    check('convictedOfFelony')
    .isIn(['true', 'false']),

    check('felony-if-yes')
    .matches(/^[A-Za-z0-9 .,'!&]+$||^$/),

    check('ifAuthorizedToWork')
    .isIn(['true', 'false']),

    check('ifAuthorizedToWorkWhen')
    .matches(/^[A-Za-z0-9 .,'!&]+$||^$/)


], (req, res) => {
    const errors = validationResult(req)
    // if(!errors.isEmpty()) {
    //     res.send(errors)
    // }

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
        felony_explanation: req.body.felonyExplanation,
        felony_if_no: req.body.ifAuthorizedToWork,
        if_authorized_to_work: req.body.ifAuthorizedToWorkWhen

    })
    .then(
        res.send()
    //     res.render('partials/employeeSubmission', { 
    //     // serverErrors: !errors.isEmpty(),
    //     dbErrors: new ValidationError
    // }    
    )
    .catch(err => console.log(err))
})

module.exports = router