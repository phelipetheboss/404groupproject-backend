let { generatePassword } = require('../../config/passwordAuth');
let passport = require('passport');
let User = require('../models/user.server.model');

exports.logoutUser = (req, res) => {
    req.Logout();
    res.json('Logged out succesfully');
}

exports.loginUser = (req, res) => {
    passport.authenticate('local', { failureMessage: 'Could not Authenticate', successMessage: 'Successfully Authenticated User'})
    console.log(`Username: ${ req.body.username }`)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    })
    return res.status(200).json(user)
}

exports.registerUser = (req, res) => {
    const saltHash = generatePassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.userName,
        email: req.body.email,
        displayName: req.body.displayName,
        hash: hash,
        salt: salt
    })

    newUser.save()
    .then((user) => {
        console.log(`User Saved: ${ user }`);
    })

    res.json('Registered user succesfully');
}