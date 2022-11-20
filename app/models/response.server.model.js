const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ResponseSchema = new Schema
(
    {
        surveyId: {
            type: String,
            default: '',
            trim: true
        },
        questions: 
        [
            {
                questionId: {
                    type: String,
                    default: '',
                    trim: true
                },
                response: {
                    type: String,
                    default: '',
                    trim: true
                }
            }
        ]
    },
    {
        collection: 'responses'
    }
)

module.exports = mongoose.model('Response', ResponseSchema);