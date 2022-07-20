const router = require('express').Router()
const {check, validationResult} = require('express-validator')
const path = require('path')
const bodyparser = require('body-parser')
const urlencodedParses = bodyparser.urlencoded({ extended: false })
const { AdminAccount } = require('../models')
const sequelize = require('sequelize')

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))


    // AdminAccount.findAll({
    //     attributes: [
    //         "email"
    //     ],
    //     include: [{
    //         attributes: ['id', 'email']
    //     }
    //     ]
    // })

router.post('/', [
    check('email')
    .isEmail(),
    
    check('password')
    .isLength({ min: 6 })
    
], (req, res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()) {
        // res.send(errors)
        console.log(req.body)
    }
 
    AdminAccount.findOne({
        attributes: {exclude: ['password']},
        where: 
        {
            email: req.body.email
        }
    }).then(dbAdminLoginData => {
        // if(!dbAdminLoginData) {
        //     res.json({ message: 'No user with that email address!'});
        //     return;
        // }
        // console.log(dbAdminLoginData)
    }).catch(err => console.log(err))

    // const validPassword = dbAdminLoginData.checkPassword(req.body.password) 
    
    
    // if (!validPassword) {
    //     res.json({ message: 'Incorrect password!'});
    //     return; 
    // }
    
    // res.json({ user: dbAdminLoginData, message: 'you are logged' })
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