let { generatePassword } = require('../../config/passwordAuth');
let passport = require('passport');
let User = require('../models/user.server.model');

exports.logoutUser = (req, res) => {
    req.logout();
    res.json('Logged out successfully');
}

exports.loginUser = (req, res, next) => {
    /*passport.authenticate('local', { failureMessage: 'Could not Authenticate', successMessage: 'Successfully Authenticated User'});
    console.log(`Username: ${ req.body.username }`);
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    })
    return res.status(200).json(user);*/
    /*passport.authenticate('local',(err, user, info) => {
        if(err){
            console.log(err)
            return next(err);
        }
        if(!user){
            console.log('2')
            return res.redirect('/home');
        }
        req.login(user, (err) => {
            console.log('3')
            if(err){
                return next(err);
            }
            return res.redirect('/about');
        })
    })(req, res, next);*/
    passport.authenticate('local', function(err, user, info) {
        if (err){
            return res.status(501).json(err);
        }
        if (!user){
            return res.status(501).json(info);
        }
        req.logIn(user, function(err) {
            if (err) { return res.status(501).json(err); }
            return res.status(200).json({message:'Login Success'});
        });
    })(req, res, next);
}

exports.registerUser = (req, res) => {
    const saltHash = generatePassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName,
        hash: hash,
        salt: salt
    })

    newUser.save()
    .then((user) => {
        console.log(`User Saved: ${ user }`);
    })

    res.json('Registered user successfully');
}