let index = require('../controllers/index.server.controller');

module.exports = function(app){
    //Surveys
    app.get('/api/get/surveys', index.getSurveys);
    app.get('/api/get/surveys/:id', index.getSurvey);
    app.post('/api/post/surveys', index.createSurvey);
    app.post('/api/post/surveys/:id', index.updateSurvey);
    app.delete('/api/get/surveys/:id', index.deleteSurvey);
    //Responses
    app.get('/api/get/responses/:surveyId/:questionId/:response', index.getResponsesBySurveyQuestion);
    app.get('/api/get/responses/:surveyId', index.getResponsesBySurvey);
    app.post('/api/post/responses', index.createResponse);

    //Login
    app.post('/api/login', index.postLogin);
}