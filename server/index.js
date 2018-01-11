const express = require('express')
const passport = require('passport')
const GStrat = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GStrat())

const PORT = process.env.PORT || 5000
app.listen(PORT)

