const express = require('express')
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const session = require('express-session')
require("dotenv").config()
const SequalizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequalizeStore({
        db: sequelize
    })
}

const routes = require('./controllers')
const app = express()
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess))


app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening'))
})