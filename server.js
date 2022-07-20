const express = require('express')
const mysql = require('mysql2')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const db = require('./config/connection')

const controllers = require('./controllers')
// const controllers = require('./controllers/apiRoutes')
const app = express()
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection')
const session = require('express-session')
const { cookie } = require('express-validator')
require('dotenv').config()
const sequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))
app.use(express.static('public'));
app.use(express.json());

app.use(controllers)
// app.use('/employmentApplication', routes)
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening'))
})