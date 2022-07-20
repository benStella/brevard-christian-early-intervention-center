const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
// const landingpageRoutes = require('./landingpageRoutes')
const adminLoginRoutes = require('./adminLoginRoutes')
const childEnrollmentRoutes = require('./childEnrollmentRoute')
const emplolymentApplicationRoutes = require('./employmentApplicationRoutes')
const applicantInfo = require('./applicantInfo')
const createAdmin = require('./createAdminRoutes')

router.use(htmlRoutes)
// router.use('/', landingpageRoutes)
router.use('/adminLogin', adminLoginRoutes)
router.use(childEnrollmentRoutes)
router.use(emplolymentApplicationRoutes)
router.use('/applicantInfo', applicantInfo)
router.use('/createAdmin', createAdmin)

router.use((req, res) => {
    res.render('landingpage')
})

module.exports = router