let userController = require('../controllers/user.server.controller');

module.exports = function(app){
    const authPath = '/api/auth'

    app.get(`${ authPath }/logout`, userController.logoutUser);
    app.post(`${ authPath }/login`, userController.loginUser);
    app.post(`${ authPath }/register`, userController.registerUser);
}