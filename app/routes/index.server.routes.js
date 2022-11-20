let index = require('../controllers/index.server.controller');

module.exports = function(app){
    app.get('/api/get/surveys', index.getSurveys);
    app.get('/api/get/surveys/available', index.getAvailableSurveys);
    app.get('/api/get/surveys/:id', index.getSurvey);
    app.post('/api/post/surveys', index.createSurvey);
    app.post('/api/post/surveys/:id', index.updateSurvey);
    app.delete('/api/get/surveys/:id', index.deleteSurvey);
}