const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const { AdminAccount } = require('../models')
const sequelize = require('sequelize')

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))


router.post('/', [
    check('email')
    .isEmail(),
    
    check('password')
    .isLength({ min: 6 })
    
], (req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()) {
        // res.send(errors)
    }
 
    AdminAccount.findOne({
        where: 
        {
            email: req.body.email
        }
    }).then(dbAdminLoginData => {

        if(!dbAdminLoginData) {
                res.json({ message: 'No user with that email address'});
                return;
            }
            
                const validPassword = dbAdminLoginData.checkPassword(req.body.password) 
                
                
                if (!validPassword) {
                    res.json({ message: 'Incorrect password!'});
                    return; 
                }

            req.session.save(() => {
                req.session.user_id = dbAdminLoginData.id
                req.session.username = dbAdminLoginData.email
                req.session.loggedIn = true;
    
                res.redirect('applicantInfo')
            })

    }).catch(err => console.log(err))
})




router.put('/adminLogin/:id', (req, res) => {
    AdminAccount.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    }).then(dbAdminData => {
        if(!dbAdminData) {
            res.status(404).json({message: 'no user found with this id'})
            return
        }

        res.json(dbAdminData)
    }).catch(err => {
        console.log(err)
    })
})
            
module.exports = router