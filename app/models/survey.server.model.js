const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const SurveySchema = new Schema
(
    {
        surveyName: {
            type: String,
            default: '',
            trim: true
        },
        lastModification: {
            type: String,
            default: '',
            trim: true
        },
        startDate: {
            type: String,
            default: '',
            trim: true
        },
        endDate: {
            type: String,
            default: '',
            trim: true
        },
        owner: {
            type: String,
            default: "",
            trim: true
        },
        questions: 
        [
            {
                description: {
                    type: String,
                    default: '',
                    trim: true
                },
                questionType: {
                    type: String,
                    default: '',
                    trim: true
                },
                optionA: {
                    type: String,
                    default: '',
                    trim: true
                },
                optionB: {
                    type: String,
                    default: '',
                    trim: true
                },
                optionC: {
                    type: String,
                    default: '',
                    trim: true
                },
                optionD: {
                    type: String,
                    default: '',
                    trim: true
                }
            }
        ]
    },
    {
        collection: 'surveys'
    }
)

module.exports = mongoose.model('Survey', SurveySchema);