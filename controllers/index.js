const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
// const landingpageRoutes = require('./landingpageRoutes')
const adminLoginRoutes = require('./adminLoginRoutes')
const childEnrollmentRoutes = require('./childEnrollmentRoute')
const employmentApplicationRoutes = require('./employmentApplicationRoutes')
const applicantInfo = require('./applicantInfo')
const createAdmin = require('./createAdminRoutes')

router.use(htmlRoutes)
// router.use('/', landingpageRoutes)
router.use('/adminLogin', adminLoginRoutes)
router.use(childEnrollmentRoutes)
router.use(employmentApplicationRoutes)
router.use('/applicants', applicantInfo)
router.use('/createAdmin', createAdmin)

router.use((req, res) => {
    res.render('partials/landingpage')
})

module.exports = router