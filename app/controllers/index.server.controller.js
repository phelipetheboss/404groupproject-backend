let Survey = require('../models/survey.server.model');
let Response = require('../models/response.server.model');

exports.getSurveys = function(req, res, next){
    if(req.session.lastVisit){
        console.log(`Last visited: ${req.session.lastVisit}`);
    }
    req.session.lastVisit = new Date();

    try{
        Survey.find({}, (err, surveys) => {
            if(err){
                res.json(err);
                return next(err);
            }else {
                res.json(surveys);
            }
        })
    }catch(error){
        res.json(error);
        next(error);
    }
}

exports.getSurvey = function(req, res){
    let id = req.params.id;

    Survey.findById(id, (err, survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json(survey);
        }
    });
}

exports.createSurvey = function(req, res){
    Survey.create(req.body, (err, survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.status(200);
        }
    });
}

exports.updateSurvey = function(req, res){
    let id = req.params.id;
    let currentDate = new Date().toISOString().split('T')[0];

    let updatedSurvey = Survey({
        "_id": id,
        "surveyName": req.body.surveyName,
        "lastModification": currentDate,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "link": req.body.link,
        "questions": req.body.questions
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.status(200);
        }
    });
}

exports.deleteSurvey = function(req, res){
    let id = req.params.id;

    Survey.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        }
    });
}

exports.getResponsesBySurvey = function(req, res, next){
    let surveyId = req.params.surveyId;
    try{
        Response.countDocuments({"surveyId": surveyId}, (err, result) => {
            if(err){
                res.json(err);
                return next(err);
            }else {
                res.json(result);
            }
        })
    }catch(error){
        res.json(error);
        next(error);
    }
}

exports.getResponsesBySurveyQuestion = function(req, res, next){
    let surveyId = req.params.surveyId;
    let questionId = req.params.questionId;
    let response = req.params.response;
    
    try{
        Response.countDocuments({"surveyId": surveyId, "questions.questionId": questionId, "questions.response": response}, (err, result) => {
            if(err){
                res.json(err);
                return next(err);
            }else {
                res.json(result);
            }
        })
    }catch(error){
        res.json(error);
        next(error);
    }
}

exports.createResponse = function(req, res){
    Response.create(req.body, (err, response) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.status(200);
        }
    });
}
